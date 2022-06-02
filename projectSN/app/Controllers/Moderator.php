<?php

/**
 * @category Guest
 * @author   Djordje Popara 2019/0460
 */

namespace App\Controllers;

class Moderator extends BaseController
{

    /**
     * Shows moderator page header, body, footer
     */
    public function show($page, $header) {
        echo view("templates/$header");
        echo view("moderator/$page");
        echo view("templates/footer_moderator");
    }
    
    /**
     * Moderator main page
     * @return view
     */
    public function main()
    {
        return $this->show('main_moderator', 'header_moderator');
    }
    
    /**
     * Moderator profile page
     * @return view
     */
    public function profile()
    {
        return $this->show('profile_moderator', 'header_moderator_options');
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
