<?php

header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
header('Pragma: no-cache');

define('LARAVEL_START', microtime(true));

// Prepare writable /tmp storage structure for Vercel Serverless
$tmpStorage = '/tmp/storage';
$tmpDirs = [
    $tmpStorage . '/logs',
    $tmpStorage . '/framework/views',
    $tmpStorage . '/framework/sessions',
    $tmpStorage . '/framework/cache/data',
    '/tmp/bootstrap/cache',
];

foreach ($tmpDirs as $dir) {
    if (!is_dir($dir)) {
        @mkdir($dir, 0777, true);
    }
}

// Remove dev hot file if present so production built assets in public/build are served
@unlink(__DIR__ . '/../public/hot');

$protocol = (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] === 'https') || (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on') ? 'https' : 'http';
$host = $_SERVER['HTTP_HOST'] ?? 'www.vmakitec.tech';
$appUrl = $protocol . '://' . $host;

// Choose the database.
// With a hosted MySQL configured (DB_HOST env var in Vercel), ALWAYS use it.
// We deliberately do not fall back to SQLite when MySQL is unreachable: on
// Vercel the SQLite copy lives in /tmp and is wiped on every cold start, so a
// silent fallback makes admin edits "reset". A loud error is better.
// Without DB_HOST (e.g. preview deploys) the read-only bundled SQLite is used,
// and admin edits there are NOT permanent.
$dbHost = $_ENV['DB_HOST'] ?? (getenv('DB_HOST') ?: '');
$dbConnection = (!empty($dbHost) && $dbHost !== '127.0.0.1' && $dbHost !== 'localhost') ? 'mysql' : 'sqlite';

// Hosted MySQL providers require TLS. If no CA file was configured, use the
// bundled provider CA (Aiven signs with a private per-project CA that is not
// in system bundles), otherwise the first system CA bundle that exists.
if ($dbConnection === 'mysql' && !($_ENV['MYSQL_ATTR_SSL_CA'] ?? getenv('MYSQL_ATTR_SSL_CA'))) {
    foreach ([__DIR__ . '/../database/certs/mysql-ca.pem', '/etc/pki/tls/certs/ca-bundle.crt', '/etc/ssl/certs/ca-certificates.crt', '/etc/ssl/cert.pem', '/etc/pki/ca-trust/extracted/pem/tls-ca-bundle.pem'] as $caFile) {
        if (@is_file($caFile)) {
            putenv('MYSQL_ATTR_SSL_CA=' . $caFile);
            $_ENV['MYSQL_ATTR_SSL_CA'] = $caFile;
            break;
        }
    }
}

$bundledDb = __DIR__ . '/../database/database.sqlite';
$sqliteDbPath = '/tmp/database.sqlite';

if ($dbConnection === 'sqlite') {
    if (!file_exists($sqliteDbPath) || filesize($sqliteDbPath) < 1000) {
        if (file_exists($bundledDb) && filesize($bundledDb) > 1000) {
            @copy($bundledDb, $sqliteDbPath);
        } else {
            @touch($sqliteDbPath);
        }
    }
}

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
putenv('APP_URL=' . $appUrl);
putenv('APP_NAME=Vmakitec');
putenv('SESSION_COOKIE=vmakitec_session');
putenv('SESSION_LIFETIME=120');
putenv('SESSION_EXPIRE_ON_CLOSE=false');
// HASH_DRIVER is no longer forced to argon2id: the admin password hash in the
// database is bcrypt (Laravel's default), and argon2id cannot verify it.
// BCRYPT_ROUNDS must be an integer 4-31. The value configured in Vercel was
// invalid, which made every login crash with "Bcrypt hashing not supported."
// (Laravel re-hashes on login and password_hash() rejects the bad cost).
// Use 12 (matches the stored hash) whenever the configured value is invalid.
$bcryptRounds = $_SERVER['BCRYPT_ROUNDS'] ?? $_ENV['BCRYPT_ROUNDS'] ?? getenv('BCRYPT_ROUNDS');
if (!is_numeric($bcryptRounds) || (int) $bcryptRounds < 4 || (int) $bcryptRounds > 31) {
    putenv('BCRYPT_ROUNDS=12');
    $_ENV['BCRYPT_ROUNDS'] = '12';
    $_SERVER['BCRYPT_ROUNDS'] = '12';
}
putenv('DB_CONNECTION=' . $dbConnection);
if ($dbConnection === 'sqlite') {
    putenv('DB_DATABASE=' . $sqliteDbPath);
}

$_SERVER['HTTPS'] = 'on';
$_SERVER['SERVER_PORT'] = '443';
$_SERVER['HTTP_X_FORWARDED_PROTO'] = 'https';
$_SERVER['VERCEL'] = '1';
$_ENV['VERCEL'] = '1';
$_ENV['APP_URL'] = $appUrl;
$_ENV['APP_NAME'] = 'Vmakitec';
$_ENV['SESSION_COOKIE'] = 'vmakitec_session';
$_ENV['SESSION_LIFETIME'] = '120';
$_ENV['SESSION_EXPIRE_ON_CLOSE'] = 'false';
$_ENV['APP_STORAGE'] = $tmpStorage;
$_ENV['VIEW_COMPILED_PATH'] = $tmpStorage . '/framework/views';
$_ENV['LOG_CHANNEL'] = 'stderr';
$_ENV['SESSION_DRIVER'] = 'cookie';
$_ENV['SESSION_SECURE_COOKIE'] = 'true';
$_ENV['CACHE_STORE'] = 'array';
$_ENV['APP_MAINTENANCE_DRIVER'] = 'cache';
$_ENV['APP_MAINTENANCE_STORE'] = 'array';
$_ENV['DB_CONNECTION'] = $dbConnection;
if ($dbConnection === 'sqlite') {
    $_ENV['DB_DATABASE'] = $sqliteDbPath;
}

if (empty($_ENV['APP_KEY'])) {
    putenv('APP_KEY=base64:D56GheIkB5XEUwOa/tIghlgHQpcHb2dUmXszpGooAvI=');
    $_ENV['APP_KEY'] = 'base64:D56GheIkB5XEUwOa/tIghlgHQpcHb2dUmXszpGooAvI=';
}

require __DIR__ . '/../vendor/autoload.php';

/** @var \Illuminate\Foundation\Application $app */
$app = require __DIR__ . '/../bootstrap/app.php';

// Handle SQLite auto-migration fallback if SQLite is active
if ($dbConnection === 'sqlite') {
    try {
        if (!\Illuminate\Support\Facades\Schema::hasTable('users')) {
            if (file_exists($bundledDb) && filesize($bundledDb) > 1000) {
                @copy($bundledDb, $sqliteDbPath);
            }
            if (!\Illuminate\Support\Facades\Schema::hasTable('users')) {
                \Illuminate\Support\Facades\Artisan::call('migrate', ['--force' => true]);
                \Illuminate\Support\Facades\Artisan::call('db:seed', ['--force' => true]);
            }
        }
    } catch (\Throwable $e) {
        // Silently continue if tables exist
    }
}

use Illuminate\Http\Request;

$kernel = $app->make(Illuminate\Contracts\Http\Kernel::class);
$request = Request::capture();
$response = $kernel->handle($request);
$kernel->terminate($request, $response);
$response->send();
