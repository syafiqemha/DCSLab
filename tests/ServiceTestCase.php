<?php

namespace Tests;

use Illuminate\Support\Facades\File;
use Tests\TestCase;

class ServiceTestCase extends TestCase
{
    protected function setUp(): void
    {
        Parent::setUp();
        
        if (!file_exists(database_path('database.sqlite'))) {
            File::put(database_path('database.sqlite'), null);

            $this->artisan('migrate', [
                '--env' => 'testing',
                '--seed' => true
            ]);
        }        
    }
} 