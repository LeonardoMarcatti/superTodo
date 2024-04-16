<?php

use App\Http\Controllers\DataController;
use App\Http\Controllers\PrioritiesController;
use Illuminate\Support\Facades\Route;

Route::controller(DataController::class)->group(function(){
    Route::get('/', 'test')->name('test');
    Route::post('/newTask', 'newTask')->name('newTask');
});


Route::controller(PrioritiesController::class)->group(function(){
    Route::get('/newTask', 'getPriorities')->name('getPriorities');
});
