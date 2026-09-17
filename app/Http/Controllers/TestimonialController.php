<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Testimonial;
use Inertia\Inertia;

class TestimonialController extends Controller
{
    public function create()
    {
        return Inertia::render('LeaveFeedback');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'client_name' => 'required|string|max:255',
            'role' => 'nullable|string|max:255',
            'company_name' => 'nullable|string|max:255',
            'project_name' => 'nullable|string|max:255',
            'feedback' => 'required|string',
            'rating' => 'required|integer|min:1|max:5',
        ]);

        $validated['is_approved'] = false; // Default to unapproved

        Testimonial::create($validated);

        return redirect()->back()->with('success', 'Thank you! Your feedback has been submitted and is pending approval.');
    }
}
