<?php

/**
 * @category Guest
 * @author   Djordje Popara 2019/0460
 */

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
     
    public function ajaxGetStudentInfo() {
        
       $Kor= $_SESSION['logedinUsers'];
       $idkor = $Kor->IdKor;
         $db= \Config\Database::connect();
           $query=$db->query("SELECT * FROM korisnik  JOIN student ON korisnik.IdKor=student.IdStud WHERE korisnik.IdKor={$idkor}")->getResultArray();
        
           return json_encode(['message'=>$query]);
           
        
    }
    public function setUserImg() {
        
            $Kor= $_SESSION['logedinUsers'];
            $idkor = $Kor->IdKor;

            $file = $_FILES['file'];
           
            $fileName= $_FILES['file']['name'];
            $fileTmpName= $_FILES['file']['tmp_name'];
            $fileSize= $_FILES['file']['size'];
            $fileError= $_FILES['file']['error'];
            $fileType= $_FILES['file']['type'];
            
            $fileExt = explode('.',$fileName);
            $fileActualExt = strtolower(end($fileExt));
            
            $allowed = array('jpg','jpeg','png','pdf','svg.png');
            if(in_array($fileActualExt,$allowed)){
                if($fileError===0){
                    if($fileSize<500000){
                        
                        $fileNameNew = $idkor."_user.".$fileActualExt;
                        $fileDest = 'localFiles/'.$fileNameNew;
                        move_uploaded_file($fileTmpName,$fileDest);
                        
                        
                          $db= \Config\Database::connect();
                  
                         $db->query("UPDATE korisnik SET img = ? WHERE IdKor = ?", [$fileNameNew, $idkor]);
                         return json_encode(['message'=>$fileNameNew]);
                        
                    }else{
                         return json_encode(['errormessage'=>'error file is to big']);
                    }
                    
                }else{
                     return json_encode(['errormessage'=>'error while uploading']);
                }
            }else{
                return json_encode(['errormessage'=>'cannot upload this file']);
                
            }
 
    }
    
}
