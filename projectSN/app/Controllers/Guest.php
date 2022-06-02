<?php

namespace App\Controllers;

use App\Models\UserModel;
use App\Models\StudentModel;
use App\Models\ModeratorModel;
use App\Models\FacultyModel;
use App\Models\UniversityModel;

class Guest extends BaseController
{
    public function show($page) {
        echo view("templates/header_guest");
        echo view("guest/$page");
        echo view("templates/footer_guest");
    }
    public function index()
    {
        return $this->show('register_student');
    }
    
    public function register_moderator()
    {
        return $this->show('register_moderator');
    }
    
    public function register_others()
    {
        return $this->show('register_others');
    }
    
    public function register_university()
    {
        return $this->show('register_university');
    }
    
    public function register_advertiser()
    {
        return $this->show('register_advertiser');
    }
    
    public function ajaxRequestRedirect(){
       $data = $this->request->getVar();
       if($data['page']=='log out'){
           $this->session->destroy();
        echo json_encode([
            "url" => base_url("/")
        ]);
       }
     
    }
    
    public function ajaxRequestRegisterStudent() {
        $data = $this->request->getVar();
        
        $userModel = new UserModel();
        
        $username = $userModel->where("Username", ($data['username']))->find();
        $email = $userModel->where("E-mail", ($data['email']))->find();
        
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
                    "City" => $data['country'],
                    "E-mail" => $data['email'],
                    "Username" => $data['username'],
                    "Password" => $data['password']
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
    
    public function ajaxRequestRegisterModerator() {
        $data = $this->request->getVar();
        
        $userModel = new UserModel();
        
        $username = $userModel->where("Username", ($data['username']))->find();
        $email = $userModel->where("E-mail", ($data['email']))->find();
        
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
                "E-mail" => $data['email'],
                "Username" => $data['username'],
                "Password" => $data['password']
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
    
    public function ajaxRequestRegisterUniversity() {
        $data = $this->request->getVar();
        
        $userModel = new UserModel();
        
        $username = $userModel->where("Username", ($data['username']))->find();
        $email = $userModel->where("E-mail", ($data['email']))->find();
        
        if($username == null && $email == null) {
            $universityModel = new UniversityModel();
            $university = $universityModel->where("Name", ($data['fullname']))->find();
            
            if($university == null) {
                echo json_encode([
                    "message" => "success"
                ]);
                $userModel->save([
                    "Ime" => $data['fullname'],
                    "Prezime" => "-",
                    "Date_of_birth" => $data['date_of_establishment'],
                    "City" => $data['country'],
                    "E-mail" => $data['email'],
                    "Username" => $data['username'],
                    "Password" => $data['password']
                ]);
                
                $id = $userModel->getInsertID();
                
                $universityModel->insert([
                    "IdUni" => $id,
                    "Name" => $data['fullname'],
                    "Date_of_est" => $data['date_of_establishment'],
                    "Country" => $data['country'],
                    "E-mail" => $data['email']
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
    
    public function ajaxRequestRegisterAdvertiser() {
        $data = $this->request->getVar();
        
        $userModel = new UserModel();
        
        $username = $userModel->where("Username", ($data['username']))->find();
        $email = $userModel->where("E-mail", ($data['email']))->find();
        
        if($username == null && $email == null) {
            $advertiserModel = new AdvertiserModel();
            
            echo json_encode([
                "message" => "success"
            ]);
            $userModel->save([
                "Ime" => $data['name'],
                "Prezime" => $data['surname'],
                "Date_of_birth" => $data['date_of_birth'],
                "City" => $data['country'],
                "E-mail" => $data['email'],
                "Username" => $data['username'],
                "Password" => $data['password']
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
}
