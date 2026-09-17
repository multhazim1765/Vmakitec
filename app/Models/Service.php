<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'icon_svg',
        'features',
        'starting_price',
    ];

    protected $casts = [
        'features' => 'array',
    ];
}
