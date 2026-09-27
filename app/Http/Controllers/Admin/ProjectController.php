<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Project;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class ProjectController extends Controller
{
    public function index()
    {
        $projects = Project::latest()->get()->map(function($project) {
            if ($project->image_path) {
            if (str_starts_with($project->image_path, 'data:')) {
                $project->image_path = '/images/projects/' . $project->id;
            } elseif (!str_starts_with($project->image_path, 'http') && !str_starts_with($project->image_path, '/')) {
                $project->image_path = '/storage/' . $project->image_path;
            }
        }
            return $project;
        });

        return Inertia::render('Admin/Projects/Index', [
            'projects' => $projects
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Projects/Form');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'client_name' => 'required|string|max:255',
            'industry' => 'nullable|string|max:255',
            'challenge' => 'nullable|string',
            'solution' => 'nullable|string',
            'outcome' => 'nullable|string',
            'tech_stack' => 'nullable|array',
            'link' => 'nullable|url',
            'image' => 'nullable|image|max:2048'
        ]);

        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $mime = $file->getClientMimeType();
            $base64 = base64_encode(file_get_contents($file->getRealPath()));
            $validated['image_path'] = 'data:' . $mime . ';base64,' . $base64;
        }

        Project::create($validated);

        return redirect()->route('admin.projects.index')->with('success', 'Project created successfully.');
    }

    public function edit(Project $project)
    {
        if ($project->image_path) {
            if (str_starts_with($project->image_path, 'data:')) {
                $project->image_path = '/images/projects/' . $project->id;
            } elseif (!str_starts_with($project->image_path, 'http') && !str_starts_with($project->image_path, '/')) {
                $project->image_path = '/storage/' . $project->image_path;
            }
        }

        return Inertia::render('Admin/Projects/Form', [
            'project' => $project
        ]);
    }

    public function showImage($id)
    {
        $project = Project::find($id);
        if (!$project || !$project->image_path) abort(404);
        
        if (str_starts_with($project->image_path, 'data:')) {
            list($type, $data) = explode(';', $project->image_path);
            list(, $data)      = explode(',', $data);
            $mime = str_replace('data:', '', $type);
            $data = base64_decode($data);
            return response($data)->header('Content-Type', $mime)->header('Cache-Control', 'public, max-age=31536000');
        }
        
        abort(404);
    }

    public function update(Request $request, Project $project)
    {
        $validated = $request->validate([
            'client_name' => 'required|string|max:255',
            'industry' => 'nullable|string|max:255',
            'challenge' => 'nullable|string',
            'solution' => 'nullable|string',
            'outcome' => 'nullable|string',
            'tech_stack' => 'nullable|array',
            'link' => 'nullable|url',
            'image' => 'nullable|image|max:2048'
        ]);

        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $mime = $file->getClientMimeType();
            $base64 = base64_encode(file_get_contents($file->getRealPath()));
            $validated['image_path'] = 'data:' . $mime . ';base64,' . $base64;
        }

        $project->update($validated);

        return redirect()->route('admin.projects.index')->with('success', 'Project updated successfully.');
    }

    public function destroy(Project $project)
    {
        if ($project->image_path) {
            Storage::disk('public')->delete($project->image_path);
        }
        $project->delete();

        return redirect()->route('admin.projects.index')->with('success', 'Project deleted successfully.');
    }
}


