<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TasksModel extends Model
{
    use HasFactory;

    protected $table = 'tasks';

    protected $fillable = [
        'desc',
        'deadLine',
        'priority_id',
        'title'
    ];

    public function updateTask(array $data) : array
    {
        $task = $this::find($data['id']);

        if (!$task) {
            return ['status' => false, 'message' => 'Could not update task!'];
        }

        $task->update(['desc' => $data['desc'], 'title' => $data['title'], 'deadLine' => $data['deadLine'], 'priority_id' => $data['priority_id']]);

        return ['status' => true, 'message' => 'Success!'];
    }
}
