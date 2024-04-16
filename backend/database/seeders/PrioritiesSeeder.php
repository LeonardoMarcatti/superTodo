<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\PrioritiesModel;

class PrioritiesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        PrioritiesModel::create([
            'priority' => 'Low'
        ]);
        PrioritiesModel::create([
            'priority' => 'Normal'
        ]);
        PrioritiesModel::create([
            'priority' => 'Urgent'
        ]);
    }
}
