<?php

namespace App\Controllers;

use App\Models\UniversityModel;
use App\Models\UserModel;
use App\Models\FacultyModel;
use App\Models\SmeroviModel;
use App\Models\ClassModel;
class Admin extends BaseController
{
    public function index()
    {
        $data['controller']='Admin';
        echo view('adminFuncViews/adminview',$data);
    }
    
    public function AddIUni(){
        $data['controller']='Admin';     
        echo view('adminFuncViews/AFUView',$data); 
    }
    
    public function ADDU($data=[]){
          $data['controller']='Admin';     
        echo view('adminFuncViews/AddUniView',$data); 
    }
    public function AdminAddUni(){
        
      
        $univerzitet= new UniversityModel();
        $user = new UserModel();
       
         
        
        
        $data=[
            'Ime'=> $this->request->getVar('Fname'),  
            'Username'=> $this->request->getVar('username'), 
            'Date_of_birth'=>$this->request->getVar('date_of_birthAUni'),
            'Country'=> $this->request->getVar('country'),  
            'E-mail'=> $this->request->getVar('email'),  
            'password'=> $this->request->getVar('password')
        ];
         
        $name=$this->request->getVar('Fname');
        $username=$this->request->getVar('username');
        
        $userCheck=$user->chechUserForUsername($username);
        if($userCheck!=null){
            return json_encode(['message'=>'fail_username_exist']);        
        }
        $userCheck=$user->chechUserForName($name);
        if($userCheck!=null){
             return json_encode(['message'=>'fail_FullName_exist']);   
        }

            $user->save($data);
            $id=$user->getInsertID();
        
            $univerzitet->insert([
                'IdUni'=>$id,
                'Sertifikat'=>'1'
            ]);
            
            return json_encode(['message'=>'success']);   
           
    
    }
    public function ADDC(){
          $data['controller']='Admin';    
          $fac= new FacultyModel();
          $par=$fac->getAllFaculty();
          $data['names']=$par;
        echo view('adminFuncViews/AddCourseView',$data); 
    }

           
    
    public function AdminAddCourse() {
    
          $smer = new SmeroviModel();
        $facultyModel = new FacultyModel();
        $nameOfFac=$this->request->getVar('faculty');
       $faculty=$facultyModel->where('Name',$nameOfFac)->find();
        $id=$faculty[0]->IdF;
       $status = $smer->where("IdFak",$id)->findAll();
        if($status!=null){
            return json_encode(['message'=>'fail_course_exist']); 
        }
    

       $smer->save([
           'Name'=>$this->request->getVar('course'),
           'Num_of_class'=>$this->request->getVar('number'),
           'IdFak'=>$id
           
       ]);
         
         
       return json_encode(['message'=>'success']); 

    }
   public function ADDF() {
         $data['controller']='Admin'; 
         
         $uni = new UniversityModel();
         $names = $uni->getAllUniNames();
         if($names !=null){
         $data['names']=$names;
         }
        echo view('adminFuncViews/AddFacultyView',$data); 
    }

    
    public function AdminAddFaculty() {
        
        $user= new UserModel();
        $fac= new FacultyModel();
        
        $fname= $this->request->getVar('name');
        $uniName= $this->request->getVar('uni');
         
        $u = $user->where("Ime",$uniName)->find();    
        
        $idUni=$u[0]->IdKor;
        
        $f= $fac->where("IdUni",$idUni)->where("Name",$fname)->findAll();
        
        if($f!=null){
            
            return json_encode(['message'=>'fail_fac_exist']);
        }
        
        $fac->save([
            'Name'=>$fname,
            'IdUni'=>$idUni
        ]);
        
         
       return json_encode(['message'=>'success']);
        //return json_encode(['message'=>$f]);
    }
    
    
    
    
    
       public function ADDS($data=[]){
          $data['controller']='Admin';    
          $fac= new FacultyModel();
          $par=$fac->getAllFaculty();
          $data['namesFac']=$par;
          
          $cour= new SmeroviModel();
          $smr=$cour->findAll();
          $data['namesCla']=$smr;
        echo view('adminFuncViews/AddClassView',$data); 
        }
    
    
    public function AdminAddClass() {
        
        $fack= new FacultyModel();
        $smer = new SmeroviModel();
        $subj = new ClassModel();
        
        $ftoken= $this->request->getVar('faculty');
        $stoken= $this->request->getVar('course');
        $ctoken=  $this->request->getVar('subj');
       
        $pom=$fack->where('Name',$ftoken)->find();
        $idF=$pom[0]->IdF;
       $pom2= $smer->where('Name',$stoken)->find();
       if($pom2[0]!=null){
       $IdSmr=$pom2[0]->IdSmr;
       }else {return json_encode(['message'=>'unsuccess']); }
       
        
  
        $stat= $subj->where('IdSmr',$IdSmr)->where('Name',$ctoken)->find();
        
        $stat2= $smer->where('IdSmr',$IdSmr)->where('IdFak',$idF)->find();
         
        $idSmr=$stat2[0]->IdSmr;
        if($stat!=null && $stat2!=null){
             return json_encode(['message'=>'fail_subject_exist']); 
        }
        
        $subj->save([
           'Name'=>$ctoken,
           'IdSmr'=>$idSmr
        ]);
              
          return json_encode(['message'=>'success']); 
        
        
        
    }
    
    
    
}
    


