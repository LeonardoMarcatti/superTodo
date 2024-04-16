<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DataController extends Controller
{
    public function test()
    {
        $data = ["status" => true, "id" => "a1", "message" => "This is the message"];

        return \json_encode($data);
    }

    public function newTask(Request $r)
    {
        $data = $r->all();
        return \json_encode($data);
    }
}
