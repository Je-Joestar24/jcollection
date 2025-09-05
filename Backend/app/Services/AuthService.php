<?php

namespace App\Services;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AuthService
{
    public function authenticate(array $credentials)
    {
        $user = User::where('email', $credentials['email'])->first();

        if (! $user || ! Hash::check($credentials['password'], $user->password)) {
            return [null, null];
        }

        $token = $user->createToken('auth_token')->plainTextToken;
        return [$user, $token];
    }

    public function logout(User $user)
    {
        $user->currentAccessToken()->delete();
    }
}