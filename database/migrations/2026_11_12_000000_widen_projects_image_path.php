<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Project images are stored inline as base64 data URIs, which are far longer
 * than VARCHAR(255). SQLite ignores the length, but MySQL enforces it, so
 * widen the column to LONGTEXT.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::table('projects', function (Blueprint $table) {
            $table->longText('image_path')->nullable()->change();
        });
    }

    public function down(): void
    {
        Schema::table('projects', function (Blueprint $table) {
            $table->string('image_path')->nullable()->change();
        });
    }
};
