<?php

namespace App\Controllers;

use App\Models\UniversityModel;
use App\Models\UserModel;
use App\Models\FacultyModel;
use App\Models\SmeroviModel;
use App\Models\ClassModel;
use App\Models\StudentModel;
use App\Models\AdvertiserModel;

class Student extends BaseController
{
    public function show($page, $header ) {
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
    
    public function ajax_request_search_user() {
        
        $data = $this->request->getVar("search");
        
     
        
         $db= \Config\Database::connect();
        $query = $db->query("SELECT * FROM student
                LEFT JOIN korisnik ON korisnik.IdKor = student.IdStud
                WHERE korisnik.Username LIKE '{$data}%' OR korisnik.Ime LIKE '{$data}%' OR korisnik.Prezime LIKE  '{$data}%'  LIMIT 10 ")->getResultArray();
        
        
        return json_encode(["message"=>$query]);
    }
    
    
    
}
