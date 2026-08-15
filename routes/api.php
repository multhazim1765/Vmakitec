<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ServiceController;
use App\Http\Controllers\Api\ProjectController;
use App\Http\Controllers\Api\LeadController;
use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\CaseStudyController;
use App\Http\Controllers\Api\BlogPostController;

// Public Routes
Route::apiResource('services', ServiceController::class)->only(['index', 'show']);
Route::apiResource('projects', ProjectController::class)->only(['index', 'show']);
Route::apiResource('case-studies', CaseStudyController::class)->only(['index', 'show']);
Route::apiResource('blog', BlogPostController::class)->only(['index', 'show']);

Route::post('/contact', [ContactController::class, 'store']);
Route::post('/quote-request', [LeadController::class, 'store']);

// Protected Admin Routes
Route::middleware('auth:sanctum')->prefix('admin')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::apiResource('leads', LeadController::class);
    Route::apiResource('projects', ProjectController::class)->except(['index', 'show']);
    Route::apiResource('services', ServiceController::class)->except(['index', 'show']);
    Route::apiResource('case-studies', CaseStudyController::class)->except(['index', 'show']);
    Route::apiResource('blog', BlogPostController::class)->except(['index', 'show']);
});
