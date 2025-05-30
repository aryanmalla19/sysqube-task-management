<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    /** @use HasFactory<\Database\Factories\TaskFactory> */
    use HasFactory;
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

    public function scopeSortByDeadline($query, $bool)
    {
        return $query->orderBy('deadline', $bool ? 'asc' : 'desc');
    }

    public function scopeOverdue($query)
    {
        return $query->where('deadline', '<', now());
    }

}
