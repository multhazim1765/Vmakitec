<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

Route::get('/services', function () {
    return Inertia::render('Services', [
        'services' => \App\Models\Service::all()
    ]);
})->name('services');

Route::get('/why-us', function () {
    $projects = \App\Models\Project::all()->map(function($project) {
        if ($project->image_path && str_starts_with($project->image_path, 'data:')) {
            $project->image_path = '/images/projects/' . $project->id;
        } elseif ($project->image_path && !str_starts_with($project->image_path, 'http')) {
            $project->image_path = '/storage/' . $project->image_path;
        }
        return $project;
    });

    return Inertia::render('WhyUs', [
        'projects' => $projects,
        'testimonials' => \App\Models\Testimonial::where('is_approved', true)->latest()->take(6)->get()
    ]);
})->name('why-us');

Route::get('/tech-stack', function () {
    return Inertia::render('TechStack');
})->name('tech-stack');

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');
Route::post('/contact', [\App\Http\Controllers\ContactController::class, 'store'])->name('contact.store');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // Admin CRUD Routes
    Route::resource('admin/projects', \App\Http\Controllers\Admin\ProjectController::class)->names([
        'index' => 'admin.projects.index',
        'create' => 'admin.projects.create',
        'store' => 'admin.projects.store',
        'edit' => 'admin.projects.edit',
        'update' => 'admin.projects.update',
        'destroy' => 'admin.projects.destroy',
    ]);

    Route::resource('admin/services', \App\Http\Controllers\Admin\ServiceController::class)->names([
        'index' => 'admin.services.index',
        'create' => 'admin.services.create',
        'store' => 'admin.services.store',
        'edit' => 'admin.services.edit',
        'update' => 'admin.services.update',
        'destroy' => 'admin.services.destroy',
    ]);

    Route::resource('admin/leads', \App\Http\Controllers\Admin\LeadController::class)->names([
        'index' => 'admin.leads.index',
        'create' => 'admin.leads.create',
        'store' => 'admin.leads.store',
        'edit' => 'admin.leads.edit',
        'update' => 'admin.leads.update',
        'destroy' => 'admin.leads.destroy',
    ]);

    Route::resource('admin/testimonials', \App\Http\Controllers\Admin\TestimonialController::class)->names([
        'index' => 'admin.testimonials.index',
        'create' => 'admin.testimonials.create',
        'store' => 'admin.testimonials.store',
        'edit' => 'admin.testimonials.edit',
        'update' => 'admin.testimonials.update',
        'destroy' => 'admin.testimonials.destroy',
    ]);
    Route::patch('admin/testimonials/{testimonial}/toggle-approval', [\App\Http\Controllers\Admin\TestimonialController::class, 'toggleApproval'])->name('admin.testimonials.toggle-approval');
});

Route::get('/leave-feedback', [\App\Http\Controllers\TestimonialController::class, 'create'])->name('leave-feedback');
Route::post('/leave-feedback', [\App\Http\Controllers\TestimonialController::class, 'store'])->name('leave-feedback.store');
Route::get('/images/projects/{id}', [\App\Http\Controllers\Admin\ProjectController::class, 'showImage'])->name('project.image');

require __DIR__.'/auth.php';

Route::get('/fix-hash', function() { $user = \App\Models\User::where('email', 'vmakitec@gmail.com')->first(); if($user) { $user->password = \Illuminate\Support\Facades\Hash::make('am9790@@'); $user->save(); return 'Hash fixed for Vercel!'; } return 'User not found'; });
Route::get('/debug-session', function() { return response()->json([ 'config' => config('session'), 'time' => \Carbon\Carbon::now()->toDateTimeString(), 'app_name' => config('app.name') ]); });
Route::get('/fix-db', function () {
    \Illuminate\Support\Facades\DB::statement('ALTER TABLE projects MODIFY image_path LONGTEXT');
    return 'Database fixed! You can now upload images in the Admin Panel without them breaking.';
});

