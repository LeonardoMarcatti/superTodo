<?php

namespace App\Http\Controllers;

use App\Models\PrioritiesModel;
// use Illuminate\Http\Request;

class PrioritiesController extends Controller
{
    private object $model;

    public function getPriorities()
    {
        $this->model = new PrioritiesModel();
        $data = $this->model::all();
        return \json_encode($data);
    }
}
