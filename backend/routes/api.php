<?php

use App\Http\Controllers\DataController;
use App\Http\Controllers\PrioritiesController;
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;


Route::controller(DataController::class)->group(function(){
    Route::post('/newTask', 'newTask')->name('newTask');
    Route::post('/updateTask', 'updateTask')->name('updateTask');
    Route::get('/tasks', 'getTasks')->name('getTasks');
    Route::get('/getTask/{id}', 'getTask')->name('getTask');

    Route::delete('/deleteTask/{id}', 'deleteTask')->name('deleteTask');
});

Route::controller(PrioritiesController::class)->group(function(){
    Route::get('/newTask', 'getPriorities')->name('getPriorities');
});

Route::controller(AuthController::class)->group(function(){
    Route::post('/logup', 'logup')->name('logup');
    Route::post('/login', 'login')->name('login');
    Route::get('/logout', 'logout')->name('logout')->middleware('auth:sanctum');
    Route::get('/verifyUser', 'verifyUser')->name('verifyUser')->middleware('auth:sanctum');
});

