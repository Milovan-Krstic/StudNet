<?php

namespace App\Controllers;

class Moderator extends BaseController
{
    public function show($page, $header) {
        echo view("templates/$header");
        echo view("moderator/$page");
        echo view("templates/footer_moderator");
    }
    
    
    public function main()
    {
        return $this->show('main_moderator', 'header_moderator');
    }
    
    public function profile()
    {
        return $this->show('profile_student', 'header_student_options');
    }
    
    public function view_user()
    {
        return $this->show('view_student', 'header_student_options');
    }
}
