<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    private object $model;

    private function checkData(object $data)
    {
        $isValid = $data->validate(['name' => 'required', 'username' => 'required', 'email' => 'required', 'password' => 'required|confirmed']);
        return $isValid? true : false;
    }

    public function checkUser(string $email) : object|bool
    {
        $this->model = new User();
        $user = $this->model->getUser($email);
        return $user ?? false;
    }

    public function logup(Request $r)
    {

        if ($this->checkData($r)) {
            $data = $r->all();
            if ($this->checkUser($data['email'])) {
                $this->model = new User($data);
                $result = $this->model->save();
                if ($result) {
                    return ['message' => 'User created!', 'status' => true];
                }
            }

            return ['message' => 'Email in use', 'status' => false];

        }

        return ['message' => 'Please check you data input', 'status' => false];
    }

    public function login(Request $r)
    {
        $data = $r->all();
        $user = $this->checkUser($data['email']);

        if (!$user || !Hash::check($data['password'], $user->password)) {
            return ['status' => false];
        }

        $token = $user->createToken($data['device_name'])->plainTextToken;

        return ['status' => true, 'token' => $token];

    }

    public function verifyUser(Request $r)
    {
        return $r->user();
    }
}
