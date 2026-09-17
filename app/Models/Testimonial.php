<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Testimonial extends Model
{
    protected $fillable = [
        'client_name',
        'role',
        'company_name',
        'project_name',
        'feedback',
        'rating',
        'is_approved',
    ];
}
