<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class Login extends Controller
{
    public function login(Request $request)
    {
        $password =   Hash::make($request->input('password'));
        $credentials = request(['username', $password]);

        // Attempt to authenticate the user
        if (Auth::attempt($credentials)) {
            $user = Auth::user();

            if ($user->role === 'admin') {
                $token = $user->createToken('AdminToken')->accessToken;

                return response()->json(['token' => $token]);
            }

            return response()->json($user);
        }

        return response()->json(['error' => 'Unauthorized'], 401);
    }

    public function register(Request $request)
    {
        $password = Hash::make($request->input('password'));
        $newuser = request(['username', $password]);
    }
}
