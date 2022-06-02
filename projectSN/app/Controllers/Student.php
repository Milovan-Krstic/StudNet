<?php

/**
 * @category Guest
 * @author   Djordje Popara 2019/0460
 */

namespace App\Controllers;

class Student extends BaseController
{

    /**
     * Shows student page header, body, footer
     */
    public function show($page, $header) {
        echo view("templates/$header");
        echo view("student/$page");
        echo view("templates/footer_student");
    }
    
    /**
     * Student main page
     * @return view
     */
    public function main()
    {
        return $this->show('main_student', 'header_student');
    }
    
    /**
     * Student timer page
     * @return view
     */
    public function timer()
    {
        return $this->show('timer_student', 'header_student_options');
    }
    
    /**
     * Student profile
     * @return view
     */
    public function profile()
    {
        return $this->show('profile_student', 'header_student_options');
    }
    
    /**
     * View of another user profile
     * @return view
     */
    public function view_user()
    {
        return $this->show('view_student', 'header_student_options');
    }
}
