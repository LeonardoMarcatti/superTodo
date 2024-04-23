<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PrioritiesModel extends Model
{
    use HasFactory;
    protected $table = 'priorities';
    protected $fillable = ['priority'];

}
