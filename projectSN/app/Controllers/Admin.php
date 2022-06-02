<?php

namespace App\Controllers;

use App\Models\UniversityModel;
use App\Models\UserModel;
use App\Models\FacultyModel;
use App\Models\SmeroviModel;
use App\Models\ClassModel;
use App\Models\StudentModel;
use App\Models\AdvertiserModel;
class Admin extends BaseController
{
    public function index()
    {
        $data['controller']='Admin';
        echo view('templates/header_admin');
        echo view('adminFuncViews/adminview',$data);
    }
    
    public function AddIUni(){
        $data['controller']='Admin'; 
        echo view('templates/header_admin');
        echo view('adminFuncViews/AFUView',$data); 
    }
    
    
    //------add Uni------------
    public function ADDU($data=[]){
          $data['controller']='Admin'; 
       echo view('templates/header_admin');
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
            'Password'=> $this->request->getVar('password')
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
    
    //-------add class-----------
    public function ADDC(){
          $data['controller']='Admin';    
          $fac= new FacultyModel();
          $par=$fac->getAllFaculty();
          $data['names']=$par;
          echo view('templates/header_admin');
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
    
    //-----add Faculty------
   public function ADDF() {
         $data['controller']='Admin'; 
         
         $uni = new UniversityModel();
         $names = $uni->getAllUniNames();
         if($names !=null){
         $data['names']=$names;
         }
       echo view('templates/header_admin');
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
    
    
    
    
    //--------add subject-----------
       public function ADDS($data=[]){
          $data['controller']='Admin';    
          $fac= new FacultyModel();
          $par=$fac->getAllFaculty();
          $data['namesFac']=$par;
          
          $cour= new SmeroviModel();
          $smr=$cour->findAll();
          $data['namesCla']=$smr;
         echo view('templates/header_admin');
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
    //--------------delete uni----
    
    public function DeleFU() {
         $data['controller']='Admin'; 
         $uni = new UniversityModel();
         $names = $uni->getAllUniNames();
         if($names !=null){
         $data['names']=$names;
         }
        echo view('templates/header_admin');
        echo view('adminFuncViews/DeleteUniView',$data); 
    }
    public function AdminDeleteUni() {
        
        $uniName= $this->request->getVar("uni");
        $korModel = new UserModel();
        $uni= new UniversityModel();
        $pom= $korModel->where('Ime',$uniName)->find();
        $id=$pom[0]->IdKor;
        $uni->delete($id);
        $korModel->delete($id);
        return json_encode(['message'=>'success']); 
    }
    
    
    //--------delete Student---------
    public function DeleStud() {
         $data['controller']='Admin'; 
       echo view('templates/header_admin');
        echo view('adminFuncViews/DeleteStudentView',$data); 
    }
    
    public function AdminDeleteStud() {
        
        $kor= new UserModel();
        $stud = new StudentModel();
        
        $Stoken = $this->request->getVar('stud');
        
        if(strpos($Stoken, "/")!==false){
            //found
            $ids= explode("/", $Stoken);
            $st= $stud->where("IdGod",$ids[0])->where("IdNum",$ids[1])->find();
            $ids=$st[0]->IdStud;
            $stud->delete($ids);
            $kor->delete($ids);
            return json_encode(['message'=>'success']); 
        }
        return json_encode(['message'=>'unsuccess']); 
        
    }
    //--------delete Advert---------
    public function DeleAdv() {
         $data['controller']='Admin'; 
         echo view('templates/header_admin'); 
        echo view('adminFuncViews/DeleteAdvertiserView',$data); 
    }
    
    public function AdminDeleteAtvr() {
     
        $userModel = new UserModel();
        $advModel = new AdvertiserModel();
        
        $UsernameToken = $this->request->getVar('user');
        $entyAd = $userModel->where('Username',$UsernameToken)->find();
        $idAd = $entyAd[0]->IdKor;
        
        if($advModel->delete($idAd)==true){
            if($userModel->delete($idAd)==true){
                return json_encode(['message'=>'success']); 

             }  else{
                 return json_encode(['message'=>'unsuccess']); 
             }      
        }else{
            return json_encode(['message'=>'unsuccess']); 
        }
    }
    
}
    


