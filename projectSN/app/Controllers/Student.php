<?php

namespace App\Controllers;

class Student extends BaseController
{
    public function show($page, $header) {
        echo view("templates/$header");
        echo view("student/$page");
        echo view("templates/footer_student");
    }
    
    
    public function main()
    {
        return $this->show('main_student', 'header_student');
    }
    
    public function timer()
    {
        return $this->show('timer_student', 'header_student_options');
    }
    
    public function profile()
    {
        return $this->show('profile_student', 'header_student_options');
    }
    
    public function view_user()
    {
        return $this->show('view_student', 'header_student_options');
    }
    
    public function plans()
    {
        return $this->show('calendar_student', 'header_student_options');
    }
}
