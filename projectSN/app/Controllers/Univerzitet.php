<?php

namespace App\Controllers;

use App\Models\FacultyModel;
use App\Models\UniversityModel;
use App\Models\StudentModel;
use App\Models\SmeroviModel;
use App\Models\ClassModel;

class Univerzitet extends BaseController
{
    public function index()
    {
        //$data['controller']='Univerzitet';
        echo view('templates/header_univerzitet');
        echo view('univerzitet/main_univerzitet');
        
        
    }
    
    public function ajaxRequestUni(){
        
        $data = $this->request->getVar();
        
        $kor = $_SESSION['logedinUniverzitet'];
        $usermodel = new UniversityModel();
        $user= $usermodel->where("IdUni",$kor->IdKor)->find();
        
        
        $FaculModel=new FacultyModel();
        $fakulteti=$FaculModel->where("IdUni",$kor->IdKor)->find();
        if($fakulteti!=null){
            //return json_encode(['kor'=>$kor,'student'=>$user[0]]);
            $encoded=json_encode(['kor'=>$kor,'fakulteti'=>$fakulteti]);
            echo $encoded."\n";
             /*echo json_encode([
                "message" => $fakulteti
            ]);*/
        }
        else{
             echo json_encode([
                "message" => "not success"
            ]);
        }
       
    }
    
    public function ajaxRequestAddingFac(){
        $data = $this->request->getVar();
        
        $FaculModel=new FacultyModel();
        $fakultet=$FaculModel->where("IdUni",($data['IdUni']))->where("Name",($data['Name']))->find();
        if($fakultet==null){
            
            $FaculModel->save([
                "Name"=>$data['Name'],
                "IdUni"=>$data['IdUni']
            ]);
            
            $fakultet=$FaculModel->where("IdUni",($data['IdUni']))->where("Name",($data['Name']))->find();
            $encoded=json_encode($fakultet[0]);
            echo $encoded."\n";
             /*echo json_encode([
                "message" => $fakulteti
            ]);*/
        }
        else{
             echo json_encode(null);
        }
    }
    
    public function ajaxRequestAddingCourse(){
        $data = $this->request->getVar();
        
        $SmerModel=new SmeroviModel();
        $smer=$SmerModel->where("IdFak",($data['IdFak']))->where("Name",($data['Name']))->find();
        if($smer==null){
            
            $SmerModel->save([
                "Name"=>$data['Name'],
                "IdFak"=>$data['IdFak'],
                "Num_of_class"=>$data['Num_of_class'],
            ]);
            
            $smer=$SmerModel->where("IdFak",($data['IdFak']))->where("Name",($data['Name']))->find();
            $encoded=json_encode($smer[0]);
            echo $encoded."\n";
             /*echo json_encode([
                "message" => $fakulteti
            ]);*/
        }
        else{
             echo json_encode(null);
        }
    }
    
    public function ajaxRequestAddingClass(){
        $data = $this->request->getVar();
        
        $classModel=new ClassModel();
        $class=$classModel->where("IdSmr",($data['IdSmr']))->where("Name",($data['Name']))->find();
        if($class==null){
            
            $classModel->save([
                "Name"=>$data['Name'],
                "IdSmr"=>$data['IdSmr'],
                "semestar"=>$data['semestar'],
            ]);
            
            $class=$classModel->where("IdSmr",($data['IdSmr']))->where("Name",($data['Name']))->find();
            $encoded=json_encode($class[0]);
            echo $encoded."\n";
             /*echo json_encode([
                "message" => $fakulteti
            ]);*/
        }
        else{
             echo json_encode(null);
        }
    }
    
    public function ajaxGetUni() {
        
        $kor = $_SESSION['logedinUniverzitet'];
        //$usermodel = new UniversityModel();
        //$user= $usermodel->where("IdUni",$kor->IdKor)->find();
        return json_encode($kor->Ime);
    }
    
    public function ajaxGetSmerovi(){
        //return json_encode(1);
        $data = $this->request->getVar();
        $smerMod=new SmeroviModel();
        $smerovi=$smerMod->where("IdFak",$data['IdFak'])->find();
        echo json_encode($smerovi);
    }
    
    public function ajaxGetPredmeti(){
        //return json_encode(1);
        $data = $this->request->getVar();
        $classMod=new ClassModel();
        $predmeti=$classMod->where("IdSmr",$data['IdSmr'])->find();
        echo json_encode($predmeti);
    }
    
    public function ajaxRequestRedirect(){
        
        echo json_encode([
            "url" =>"http://localhost:8080/Guest/register_moderator"
        ]);
       }
    
}
