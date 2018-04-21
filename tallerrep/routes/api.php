<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => 'jwt.auth'], function(){
  Route::resource('phones', 'PhoneController');
  Route::resource('boletas', 'BoletaController');
  Route::resource('users', 'UserController');
  Route::resource('repuestos', 'RepuestoController');
  Route::resource('clientes', 'ClienteController');
  Route::post('auth/logout', 'AuthController@logout');
});

Route::post('signup', 'AuthController@register');
Route::post('login', 'AuthController@login');
