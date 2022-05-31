<?php

namespace App\Controllers;
use App\Models\UserModel;
use App\Models\AdminModel;
use App\Models\ModeratorModel;
use App\Models\UniversityModel;
use App\Models\ReklamerModel;

class LogIn extends BaseController
{
    public function index()
    {
        
        $data['controller']='Guest';
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
                            echo json_encode(3);
                            $this->session->set('logedinReklamer',$korisnik[0]);
                        }
                    }
                    else{
                        $reklamerLogInModel=new ReklamerModel();
                        $IdKor=$korisnik[0]->IdKor;
                        $reklamer=$reklamerLogInModel->where("IdRek",$IdKor)->find();
                        if($reklamer!=null){
                            echo json_encode(5);
                            $this->session->set('logedinReklamer',$korisnik[0]);
                        }
                        else{
                            echo json_encode(1);
                            $this->session->set('logedinUser',$korisnik[0]);
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
    
    
    
}