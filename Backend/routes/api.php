<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterUserController;
use App\Http\Controllers\Products\FavoriteController;
use App\Http\Controllers\Products\ProductController;
use Illuminate\Support\Facades\Route;

Route::post('/test', function () {
    return response()->json(["Laravel" => app()->version()]);
});

Route::post('/auth/login', [LoginController::class, 'login']);
Route::post('/auth/signup', [RegisterUserController::class, 'store']);


Route::middleware('auth:sanctum')->group(function () {
    Route::post('/auth/logout', [LoginController::class, 'logout']);

    // Product API Routes
    Route::prefix('products')->group(function () {
        Route::get('/', [ProductController::class, 'index']);       // list products
        Route::get('/{id}', [ProductController::class, 'show']);    // get single product
        // Route::post('/', [ProductController::class, 'store']);      // create product
        // Route::put('/{id}', [ProductController::class, 'update']);  // update product
        // Route::delete('/{id}', [ProductController::class, 'destroy']); // delete product

        // // Extra endpoint to sync from FakeStoreAPI
        // Route::post('/sync', [ProductController::class, 'syncProducts']);
    });

    Route::prefix('favorites')->group(function () {
        Route::get('/', [FavoriteController::class, 'index']);      // List favorites (with pagination + search)
        Route::post('/', [FavoriteController::class, 'store']);     // Add product to favorites
        Route::delete('/{product}', [FavoriteController::class, 'destroy']); // Remove product from favorites
    });
});
