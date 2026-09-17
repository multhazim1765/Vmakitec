<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'client_name',
        'industry',
        'challenge',
        'solution',
        'outcome',
        'tech_stack',
        'link',
        'image_path',
    ];

    protected $casts = [
        'tech_stack' => 'array',
    ];
}
