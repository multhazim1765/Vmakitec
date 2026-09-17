<?php

define('LARAVEL_START', microtime(true));

// Prepare writable /tmp storage structure for Vercel Serverless
$tmpStorage = '/tmp/storage';
$tmpDirs = [
    $tmpStorage . '/logs',
    $tmpStorage . '/framework/views',
    $tmpStorage . '/framework/sessions',
    $tmpStorage . '/framework/cache/data',
    $tmpStorage . '/bootstrap/cache',
];

foreach ($tmpDirs as $dir) {
    if (!is_dir($dir)) {
        @mkdir($dir, 0777, true);
    }
}

// Remove dev hot file if present so production built assets in public/build are served
@unlink(__DIR__ . '/../public/hot');

// Ensure SQLite database file exists in /tmp if used
$tmpSqlite = '/tmp/database.sqlite';
if (!file_exists($tmpSqlite)) {
    $sourceSqlite = __DIR__ . '/../database/database.sqlite';
    if (file_exists($sourceSqlite) && filesize($sourceSqlite) > 0) {
        @copy($sourceSqlite, $tmpSqlite);
    } else {
        @touch($tmpSqlite);
    }
}

$protocol = (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] === 'https') || (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on') ? 'https' : 'http';
$host = $_SERVER['HTTP_HOST'] ?? 'vmakitec.vercel.app';
$appUrl = $protocol . '://' . $host;

// Set VERCEL environment variables before bootstrapping
putenv('VERCEL=1');
putenv('APP_STORAGE=' . $tmpStorage);
putenv('VIEW_COMPILED_PATH=' . $tmpStorage . '/framework/views');
putenv('LOG_CHANNEL=stderr');
putenv('SESSION_DRIVER=cookie');
putenv('SESSION_SECURE_COOKIE=true');
putenv('CACHE_STORE=array');
putenv('APP_MAINTENANCE_DRIVER=cache');
putenv('APP_MAINTENANCE_STORE=array');
putenv('DB_CONNECTION=sqlite');
putenv('DB_DATABASE=' . $tmpSqlite);
putenv('APP_URL=' . $appUrl);

$_SERVER['HTTPS'] = 'on';
$_SERVER['SERVER_PORT'] = '443';
$_SERVER['HTTP_X_FORWARDED_PROTO'] = 'https';
$_SERVER['VERCEL'] = '1';
$_ENV['VERCEL'] = '1';
$_ENV['APP_URL'] = $appUrl;
$_ENV['APP_STORAGE'] = $tmpStorage;
$_ENV['VIEW_COMPILED_PATH'] = $tmpStorage . '/framework/views';
$_ENV['LOG_CHANNEL'] = 'stderr';
$_ENV['SESSION_DRIVER'] = 'cookie';
$_ENV['SESSION_SECURE_COOKIE'] = 'true';
$_ENV['CACHE_STORE'] = 'array';
$_ENV['APP_MAINTENANCE_DRIVER'] = 'cache';
$_ENV['APP_MAINTENANCE_STORE'] = 'array';
$_ENV['DB_CONNECTION'] = 'sqlite';
$_ENV['DB_DATABASE'] = $tmpSqlite;

if (empty($_ENV['APP_KEY'])) {
    putenv('APP_KEY=base64:D56GheIkB5XEUwOa/tIghlgHQpcHb2dUmXszpGooAvI=');
    $_ENV['APP_KEY'] = 'base64:D56GheIkB5XEUwOa/tIghlgHQpcHb2dUmXszpGooAvI=';
}

require __DIR__ . '/../vendor/autoload.php';

/** @var \Illuminate\Foundation\Application $app */
$app = require __DIR__ . '/../bootstrap/app.php';

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Schema;

try {
    if (!Schema::hasTable('users')) {
        Artisan::call('migrate', ['--force' => true]);
        Artisan::call('db:seed', ['--force' => true]);
    }
} catch (\Throwable $e) {
    // Suppress error if database is already migrated
}

$app->handleRequest(Request::capture());

