<?php

use App\Http\Controllers\DataController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::controller(DataController::class)->group(function(){
    Route::get('/', 'test')->name('test');
});
