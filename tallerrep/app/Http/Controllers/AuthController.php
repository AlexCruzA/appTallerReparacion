<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\RegisterFormRequest;
use App\User;
use JWTAuth;
use Auth;

class AuthController extends Controller
{
    public function register(Request $request)
    {
      $user = new User;
      $user->email = $request->email;
      $user->name = $request->name;
      $user->rol = $request->rol;
      $user->password = bcrypt($request->password);
      $user->save();
      return response([
          'status' => 'success',
          'data' => $user
         ], 200);
    }

    public function login(Request $request)
    {
      $credentials = $request->only('email', 'password');
      if ( ! $token = JWTAuth::attempt($credentials)) {
            return response([
                'status' => 'error',
                'error' => 'invalid.credentials',
                'msg' => 'Invalid Credentials.'
            ], 400);
      }
      return response([
            'status' => 'success',
            'token' => $token
        ]);
    }

    public function logout()
    {
        JWTAuth::invalidate();
        return response([
                'status' => 'success',
                'msg' => 'Logged out Successfully.'
            ], 200);
    }
}
