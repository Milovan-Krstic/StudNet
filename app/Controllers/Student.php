<?php

namespace App\Controllers;

class Student extends BaseController
{
    public function show($page) {
        echo view("templates/header_student");
        echo view("student/$page");
        echo view("templates/footer_student");
    }
    
    
    public function main()
    {
        return $this->show('main_student');
    }
}
