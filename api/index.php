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

// Ensure SQLite database file exists in /tmp if used
$tmpSqlite = '/tmp/database.sqlite';
if (!file_exists($tmpSqlite)) {
    $sourceSqlite = __DIR__ . '/../database/database.sqlite';
    if (file_exists($sourceSqlite)) {
        @copy($sourceSqlite, $tmpSqlite);
    } else {
        @touch($tmpSqlite);
    }
}

// Set VERCEL environment variables before bootstrapping
putenv('VERCEL=1');
putenv('APP_STORAGE=' . $tmpStorage);
putenv('VIEW_COMPILED_PATH=' . $tmpStorage . '/framework/views');
putenv('LOG_CHANNEL=stderr');
putenv('SESSION_DRIVER=cookie');
putenv('CACHE_STORE=array');
putenv('APP_MAINTENANCE_DRIVER=array');
putenv('APP_MAINTENANCE_STORE=array');
putenv('DB_CONNECTION=sqlite');
putenv('DB_DATABASE=' . $tmpSqlite);

$_SERVER['VERCEL'] = '1';
$_ENV['VERCEL'] = '1';
$_ENV['APP_STORAGE'] = $tmpStorage;
$_ENV['VIEW_COMPILED_PATH'] = $tmpStorage . '/framework/views';
$_ENV['LOG_CHANNEL'] = 'stderr';
$_ENV['SESSION_DRIVER'] = 'cookie';
$_ENV['CACHE_STORE'] = 'array';
$_ENV['APP_MAINTENANCE_DRIVER'] = 'array';
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
$app->handleRequest(Request::capture());
