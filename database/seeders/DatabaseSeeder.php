<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'ADMIN',
            'email' => 'vmakitec@gmail.com',
            'password' => '$argon2id$v=19$m=65536,t=4,p=1$T2w4cDlUNmJuQkgyZ25lMg$AMozLBS6LeMii7hSdTCI4OVaClwTOC7fdBVX4+LqtJw',
        ]);
    }
}
