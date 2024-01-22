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

        $credentials = compact('name', 'password');

        if (Auth::attempt($credentials)) {
            $token = Auth::user()->createToken('auth-token')->plainTextToken;
            return response()->json(['token' => $token]);
        }

        return response()->json(['message' => 'Invalid credentials']);
    }
    public function register(Request $request)
    {
        $password = Hash::make($request->input('password'));

        $newUser = [
            'name' => $request->input('username'),
            'password' => $password,
        ];

        User::create($newUser);

        return response()->json(['message' => 'User registered successfully']);
    }
}
