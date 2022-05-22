<?php

namespace App\Controllers;

class SingUpStudent extends BaseController
{
    public function index()
    {
        echo view('singups/register_studnet');
        
    }
}