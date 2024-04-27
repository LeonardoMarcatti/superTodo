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

    public function getTask(Request $r)
    {
        $this->model = new TasksModel();
        return $this->model::find($r->id);
    }

    public function updateTask(Request $r)
    {
        $data = $r->all();
        $this->model = new TasksModel();
        return \json_encode($this->model->updateTask($data));
    }

    public function deleteTask(Request $r)
    {
        $data = $r->id;
        $this->model = new TasksModel();
        return $this->model::find($data)->delete();

    }
}
