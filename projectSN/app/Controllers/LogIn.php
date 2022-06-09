<?php

namespace App\Controllers;
use App\Models\UserModel;
use App\Models\AdminModel;
use App\Models\ModeratorModel;
use App\Models\UniversityModel;
use App\Models\ReklamerModel;
use App\Models\StudentModel;
class LogIn extends BaseController
{
    public function index()
    {
        
        $data['controller']='register-student';
        echo view("templates/header_guest");
        echo view('login/login',$data);
        echo view("templates/footer_guest");
    }
    
    
    public function loginSubmit(){
        
        
        
        $data=$this->request->getVar();

        $adminLogInModel=new AdminModel();
        $korisnik=$adminLogInModel->where("username",($data['username']))->where("PASSWORD",($data['password']))->find();
        
        if($korisnik==null){
            
            $logInModel=new UserModel();
            $korisnik=$logInModel->where("Username",($data['username']))->where("Password",($data['password']))->find();
            
           
            if($korisnik==null)
                echo json_encode(0);
            else {
                $moderatorLogInModel=new ModeratorModel();
                $IdKor=$korisnik[0]->IdKor;
                $moderator=$moderatorLogInModel->where("IdMod",$IdKor)->find();
                if($moderator!=null){
                    
                    
                    
                    $this->session->set('logedinModerator',$korisnik[0]);
                    
                    echo json_encode(4);
                    
                }
                else{
                    $universityLogInModel=new UniversityModel();
                    $IdKor=$korisnik[0]->IdKor;
                    $university=$universityLogInModel->where("IdUni",$IdKor)->find();
                    if($university!=null){
                        if($university[0]->Sertifikat==null || $university[0]->Sertifikat==0)
                            echo json_encode(6);
                        else{ 
                         
                            $this->session->set('logedinUniverzitet',$korisnik[0]);
                             echo json_encode(3);
                        }
                    }
                    else{
                        $reklamerLogInModel=new ReklamerModel();
                        $IdKor=$korisnik[0]->IdKor;
                        $reklamer=$reklamerLogInModel->where("IdRek",$IdKor)->find();
                        if($reklamer!=null){
                            
                            $this->session->set('logedinReklamer',$korisnik[0]);
                            echo json_encode(5);
                        }
                        else{
                            $IdKor=$korisnik[0]->IdKor;
                              $this->session->set('logedinUsers',$korisnik[0]);
                                $db= \Config\Database::connect();
                                 $query = $db->query("UPDATE korisnik SET Active=1 where IdKor={$IdKor}");
                             echo json_encode(1);
                        }
                    
                    }
                }
            }
        }
        else {
          
            echo json_encode(2);
            $this->session->set('logedinAdmin',$korisnik[0]);
            
        }
         
         
    }
    
    public  function ajaxGetKorInfo(){
       
        $kor = $_SESSION['logedinUsers'];
       
        return json_encode(['idkor'=>$kor->IdKor]);
       

    }
    
    
    public function ajaxGetStud() {
        
        $kor = $_SESSION['logedinUsers'];
        $usermodel = new StudentModel();
        $user= $usermodel->where("IdStud",$kor->IdKor)->find();
         return json_encode(['kor'=>$kor,'student'=>$user[0]]);
    }
    public function ajaxGetAdmin() {
        $kor = $_SESSION['logedinAdmin'];
        $usermodel = new AdminModel();
        $user= $usermodel->where("idAdmin",$kor->idAdmin)->find();
         return json_encode(['admin'=>$user[0]]);
    }
}