<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TasksModel;
class DataController extends Controller
{

    private object $model;

    public function newTask(Request $r)
    {
        $data = $r->all();
        $this->model = new TasksModel($data);
        return $this->model->save();
    }

    public function getTasks() : object
    {
        $this->model = new TasksModel();
        return $this->model::all();
    }
}
