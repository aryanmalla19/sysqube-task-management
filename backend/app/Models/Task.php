<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    /** @use HasFactory<\Database\Factories\TaskFactory> */
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'title',
        'description',
        'deadline',
        'priority',
        'status',
    ];

    public function scopeWithPriority($query, $value)
    {
        return $query->where('priority', $value);
    }

    public function scopeWithStatus($query, $value)
    {
        return $query->where('status', $value);
    }

    public function scopeSort($query, $value)
    {
        if ($value === 'priority') {
            return $query->orderByRaw("
            CASE priority
                WHEN 'high' THEN 1
                WHEN 'medium' THEN 2
                WHEN 'low' THEN 3
                ELSE 4
            END
        ");
        }

        return $query->orderBy($value, 'asc');
    }

    public function scopeSearch($query, $value)
    {
        return $query->where('title', 'like', '%' . $value . '%');
    }

    public function scopeOverdue($query)
    {
        return $query->where('deadline', '<', now());
    }

}
