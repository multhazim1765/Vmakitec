<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Lead;
use Inertia\Inertia;

class LeadController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Leads/Index', [
            'leads' => Lead::latest()->get()
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Leads/Create');
    }

    public function store(\Illuminate\Http\Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:50',
            'service' => 'required|string|max:255',
            'budget' => 'nullable|string|max:255',
            'description' => 'required|string',
        ]);

        Lead::create($validated);

        return redirect()->route('admin.leads.index')->with('success', 'Lead created successfully.');
    }

    public function edit(Lead $lead)
    {
        return Inertia::render('Admin/Leads/Edit', [
            'lead' => $lead
        ]);
    }

    public function update(\Illuminate\Http\Request $request, Lead $lead)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:50',
            'service' => 'required|string|max:255',
            'budget' => 'nullable|string|max:255',
            'description' => 'required|string',
        ]);

        $lead->update($validated);

        return redirect()->route('admin.leads.index')->with('success', 'Lead updated successfully.');
    }

    public function destroy(Lead $lead)
    {
        $lead->delete();

        return redirect()->route('admin.leads.index')->with('success', 'Lead deleted successfully.');
    }
}
