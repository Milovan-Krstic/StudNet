<?php

/**
 * @category Guest
 * @author   Djordje Popara 2019/0460
 */

namespace App\Controllers;

use App\Models\UserModel;
use App\Models\StudentModel;
use App\Models\ModeratorModel;
use App\Models\FacultyModel;
use App\Models\UniversityModel;
use App\Models\SmeroviModel;

class Guest extends BaseController
{
    /**
     * Shows guest page header, body, footer
     */
    public function show($page) {
        echo view("templates/header_guest");
        echo view("guest/$page");
        echo view("templates/footer_guest");
    }

    /**
     * Student register page
     * @return view
     */
    public function index()
    {
        return $this->show('register_student');
    }
    
    /**
     * Moderator register page
     * @return view
     */
    public function register_moderator()
    {
        return $this->show('register_moderator');
    }
    
    /**
     * Shows registration options: University, Advertiser
     * @return view
     */
    public function register_others()
    {
        return $this->show('register_others');
    }
    
    /**
     * University register page
     * @return view
     */
    public function register_university()
    {
        return $this->show('register_university');
    }
    
    /**
     * Advertiser register page
     * @return view
     */
    public function register_advertiser()
    {
        return $this->show('register_advertiser');
    }
    
    /**
     * Gets page name through request and sends back page url
     * @return page-url
     */
    public function ajaxRequestRedirect(){
       $data = $this->request->getVar();
       
        if($data['page']==""){
           $this->session->destroy();
            echo json_encode([
                "url" => base_url()
            ]);
        }
        else {
            echo json_encode([
                "url" => base_url($data['page'])
            ]);
        }
    }
    
    /**
     * Gets student data through request
     * Checks if username/email already exist, if so returns error message/messages
     * Else checks if there exists a student with same index on same faculty, if so returns error message
     * Else saves user to user table and inserts student data in student table
     * @return string
     */
    public function ajaxRequestRegisterStudent() {
        $data = $this->request->getVar();
        
        $userModel = new UserModel();
        
        $username = $userModel->where("Username", ($data['username']))->find();
        $email = $userModel->where("Email", ($data['email']))->find();

        //$file = new \CodeIgniter\Files\File("../public/images/StudNet-Profile-Default.png");
        
        if($username == null && $email == null) {
            $studentModel = new StudentModel();
            $student = $studentModel->where("Faculty", ($data['faculty']))
                                    ->where("IdGod", ($data['id_year']))
                                    ->where("IdNum", ($data['id_num']))
                                    ->find();
            if($student == null) {
                echo json_encode([
                    "message" => "success"
                ]);

                $userModel->save([
                    "Ime" => $data['name'],
                    "Prezime" => $data['surname'],
                    "Date_of_birth" => $data['date_of_birth'],
                    "Country" => $data['country'],
                    "Email" => $data['email'],
                    "Username" => $data['username'],
                    "Password" => $data['password']
                    //"img" => $file
                ]);
                
                $id = $userModel->getInsertID();
                
                $studentModel->insert([
                    "IdStud" => $id,
                    "Faculty" => $data['faculty'],
                    "Course" => $data['course'],
                    "IdGod" => $data['id_year'],
                    "IdNum" => $data['id_num']
                ]);
            }
            else {
                echo json_encode([
                    "message" => "fail_index_exist"
                ]);
            }
        }
        else if($email == null){
            echo json_encode([
                "message" => "fail_username_exist"
            ]);
        }
        else if($username == null){
            echo json_encode([
                "message" => "fail_email_exist"
            ]);
        }
        else if($username == null){
            echo json_encode([
                "message" => "fail_username&email_exist"
            ]);
        }
        
    }
    
     /**
     * Gets moderator data through request
     * Checks if username/email already exist, if so returns error message/messages
     * Else saves user to user table and inserts moderator data in moderator table
     * @return string
     */
    public function ajaxRequestRegisterModerator() {
        $data = $this->request->getVar();
        
        $userModel = new UserModel();
        
        $username = $userModel->where("Username", ($data['username']))->find();
        $email = $userModel->where("Email", ($data['email']))->find();

        $file = new \CodeIgniter\Files\File("../public/images/StudNet-Profile-Default.png");
        
        if($username == null && $email == null) {
            $moderatorModel = new ModeratorModel();
            
            echo json_encode([
                "message" => "success"
            ]);
            
            $userModel->save([
                "Ime" => $data['name'],
                "Prezime" => $data['surname'],
                "Date_of_birth" => $data['date_of_birth'],
                "Country" => $data['country'],
                "Email" => $data['email'],
                "Username" => $data['username'],
                "Password" => $data['password'],
                "img" => $file
            ]);
                
            $id = $userModel->getInsertID();
            $facultyModel = new FacultyModel();
            
            $facultyId = $facultyModel->where("Name", "ETF")->find();
                
            $moderatorModel->insert([
                "IdMod" => $id,
                "IdFacM" => $facultyId[0]->IdF
            ]);
            
        }
        else if($email == null){
            echo json_encode([
                "message" => "fail_username_exist"
            ]);
        }
        else if($username == null){
            echo json_encode([
                "message" => "fail_email_exist"
            ]);
        }
        else if($username == null){
            echo json_encode([
                "message" => "fail_username&email_exist"
            ]);
        }
        
    }
    
     /**
     * Gets university data through request
     * Checks if username/email already exist, if so returns error message/messages
     * Else checks if there exists an uiversity with same name, if so returns error message
     * Else saves user to user table and inserts university data in university table
     * @return string
     */
    public function ajaxRequestRegisterUniversity() {
        $data = $this->request->getVar();
        
        $userModel = new UserModel();
        
        $username = $userModel->where("Username", ($data['username']))->find();
        $email = $userModel->where("Email", ($data['email']))->find();
        
        $file = new \CodeIgniter\Files\File("../public/images/StudNet-Profile-Default.png");

        if($username == null && $email == null) {
            $universityModel = new UniversityModel();
            $university = $userModel->where("Ime", ($data['fullname']))->find();
            
            if($university == null) {
                echo json_encode([
                    "message" => "success"
                ]);
                $userModel->save([
                    "Ime" => $data['fullname'],
                    "Prezime" => "-",
                    "Date_of_birth" => $data['date_of_establishment'],
                    "Country" => $data['country'],
                    "Email" => $data['email'],
                    "Username" => $data['username'],
                    "Password" => $data['password'],
                    "img" => $file
                ]);
                
                $id = $userModel->getInsertID();
                
                $universityModel->insert([
                    "IdUni" => $id
                ]);
            }
            else {
                echo json_encode([
                    "message" => "fail_university_exist"
                ]);
            }
        }
        else if($email == null){
            echo json_encode([
                "message" => "fail_username_exist"
            ]);
        }
        else if($username == null){
            echo json_encode([
                "message" => "fail_email_exist"
            ]);
        }
        else if($username == null){
            echo json_encode([
                "message" => "fail_username&email_exist"
            ]);
        }
        
    }
    
     /**
     * Gets advertiser data through request
     * Checks if username/email already exist, if so returns error message/messages
     * Else saves user to user table and inserts student data in student table
     * @return string
     */
    public function ajaxRequestRegisterAdvertiser() {
        $data = $this->request->getVar();
        
        $userModel = new UserModel();
        
        $username = $userModel->where("Username", ($data['username']))->find();
        $email = $userModel->where("Email", ($data['email']))->find();
        
        $file = new \CodeIgniter\Files\File("../public/images/StudNet-Profile-Default.png");

        if($username == null && $email == null) {
            $advertiserModel = new AdvertiserModel();
            
            echo json_encode([
                "message" => "success"
            ]);
            $userModel->save([
                "Ime" => $data['name'],
                "Prezime" => $data['surname'],
                "Date_of_birth" => $data['date_of_birth'],
                "Country" => $data['country'],
                "Email" => $data['email'],
                "Username" => $data['username'],
                "Password" => $data['password'],
                "img" => $file
            ]);
            
            $id = $userModel->getInsertID();
                
            $advertiserModel->insert([
                "IdRek" => $id,
                "num_of_ads" => 0
            ]);
        }
        else if($email == null){
            echo json_encode([
                "message" => "fail_username_exist"
            ]);
        }
        else if($username == null){
            echo json_encode([
                "message" => "fail_email_exist"
            ]);
        }
        else if($username == null){
            echo json_encode([
                "message" => "fail_username&email_exist"
            ]);
        }
        
    }
    
    public function ajaxRequestFacultyNames() {
        
        $facultyModel = new facultyModel();
        $facultyNames = $facultyModel->findAll();
        
        echo json_encode([
            "facultyNames" => $facultyNames
        ]);
    }
    
    public function ajaxRequestCourseNames() {
        $data = $this->request->getVar();
        
        $facultyModel = new FacultyModel();
        $facultyID = $facultyModel->where("Name", $data['facultyName'])->first()->IdF;
        
        $courseModel = new SmeroviModel();
        $courses = $courseModel->where("IdFak", $facultyID)->findAll();
        
        echo json_encode([
            "courseNames" => $courses
        ]);
        
    }
}
