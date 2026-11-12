<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;

/**
 * One-time move of the site's content from the bundled SQLite file into the
 * hosted MySQL database used in production.
 *
 *   php artisan app:copy-sqlite-to-mysql            (asks before overwriting)
 *   php artisan app:copy-sqlite-to-mysql --force
 */
class CopySqliteToMysql extends Command
{
    protected $signature = 'app:copy-sqlite-to-mysql
                            {--sqlite= : Path to the SQLite file (default: database/database.sqlite)}
                            {--force : Replace rows in MySQL without asking}';

    protected $description = 'Copy users, services, projects, leads and testimonials from SQLite into the MySQL connection';

    private const TABLES = ['users', 'services', 'projects', 'leads', 'testimonials'];

    public function handle(): int
    {
        $sqlitePath = $this->option('sqlite') ?: database_path('database.sqlite');
        if (! is_file($sqlitePath)) {
            $this->error("SQLite file not found: {$sqlitePath}");
            return self::FAILURE;
        }

        config(['database.connections.sqlite_source' => [
            'driver' => 'sqlite',
            'database' => $sqlitePath,
            'prefix' => '',
            'foreign_key_constraints' => false,
        ]]);

        $source = DB::connection('sqlite_source');
        $target = DB::connection('mysql');

        $this->info('Target MySQL: '.config('database.connections.mysql.host').' / '.config('database.connections.mysql.database'));
        $target->getPdo(); // fail fast with a clear error if credentials are wrong

        foreach (self::TABLES as $table) {
            if (! $target->getSchemaBuilder()->hasTable($table)) {
                $this->error("Table '{$table}' is missing in MySQL. Run: php artisan migrate --force --database=mysql");
                return self::FAILURE;
            }
        }

        $existing = collect(self::TABLES)->mapWithKeys(fn ($t) => [$t => $target->table($t)->count()]);
        if ($existing->sum() > 0 && ! $this->option('force')
            && ! $this->confirm('MySQL already has data ('.$existing->filter()->map(fn ($n, $t) => "{$t}: {$n}")->implode(', ').'). Replace it with the SQLite data?')) {
            $this->warn('Nothing copied.');
            return self::SUCCESS;
        }

        $target->statement('SET FOREIGN_KEY_CHECKS=0');
        try {
            foreach (self::TABLES as $table) {
                $columns = $target->getSchemaBuilder()->getColumnListing($table);
                $rows = $source->table($table)->get()->map(
                    fn ($row) => $this->normalizeRow(array_intersect_key((array) $row, array_flip($columns)))
                );

                $target->table($table)->truncate();
                foreach ($rows->chunk(50) as $chunk) {
                    $target->table($table)->insert($chunk->values()->all());
                }
                $this->line(sprintf('  %-13s %d rows', $table, $rows->count()));
            }
        } finally {
            $target->statement('SET FOREIGN_KEY_CHECKS=1');
        }

        $this->info('Done. The live site will now read and write this MySQL database.');
        return self::SUCCESS;
    }

    /**
     * Some SQLite rows were written by a Node script with ISO-8601 timestamps
     * ("2026-10-20T20:06:10.163Z"), which MySQL DATETIME columns reject.
     */
    private function normalizeRow(array $row): array
    {
        foreach ($row as $column => $value) {
            if (str_ends_with($column, '_at') && is_string($value) && $value !== '') {
                try {
                    $row[$column] = Carbon::parse($value)->utc()->format('Y-m-d H:i:s');
                } catch (\Throwable) {
                    $row[$column] = null;
                }
            }
        }

        return $row;
    }
}
