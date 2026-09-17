<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Lead;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:50',
            'service' => 'required|string|max:255',
            'budget' => 'nullable|string|max:255',
            'description' => 'required|string',
        ]);

        $lead = Lead::create($validated);

        // Send email notification
        try {
            \Illuminate\Support\Facades\Mail::to('vmakitec@gmail.com')
                ->send(new \App\Mail\NewLeadNotification($lead));
        } catch (\Exception $e) {
            // Log the error but don't fail the user submission
            \Illuminate\Support\Facades\Log::error('Failed to send lead email: ' . $e->getMessage());
        }

        return redirect()->back()->with('success', 'Thank you! Your message has been sent successfully.');
    }
}
