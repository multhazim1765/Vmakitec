<?php

require 'vendor/autoload.php';
$app = require_once 'bootstrap/app.php';
$app->make(Illuminate\Contracts\Console\Kernel::class)->bootstrap();

$user = App\Models\User::where('email', 'vmakitec@gmail.com')->first();
if ($user) {
    $user->password = Illuminate\Support\Facades\Hash::make('am9790@@');
    $user->save();
    echo "Password updated successfully using default bcrypt hasher.\n";
} else {
    echo "User not found.\n";
}
