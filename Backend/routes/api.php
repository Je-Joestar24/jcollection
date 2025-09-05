<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterUserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/', function (Request $request) {
    return response()->json(["Laravel" => app()->version()]);
});

Route::post('/auth/login', [LoginController::class, 'login']);
Route::post('/auth/signup', [RegisterUserController::class, 'store']);


Route::middleware('auth:sanctum')->group(function () {
    Route::post('/auth/logout', [LoginController::class, 'logout']);
});