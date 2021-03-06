<?php
namespace App\Controllers;
use App\Models\Chat_RoomModel;
use App\Models\UniversityModel;
use App\Models\StudentModel;
use App\Models\FacultyModel;
use App\Models\SmeroviModel;
use App\Models\ClassModel;

class Chet extends BaseController{
    
    
    //put my message in the db 
    public function ajaxSendMyTextToGroup() {
        $kor = $_SESSION['logedinUsers'];
        $idkor=$kor->IdKor;
        $text = $this->request->getVar("text");
        $class= $this->request->getVar("class");
        $time= $this->request->getVar("time");
        $chetModel = new Chat_RoomModel();
        
        $IdFac = $_SESSION['IdFaculty'];
        $IdSmr = $_SESSION['IdCourse'];
        
        $smrModel = new SmeroviModel();
        $mysm = $smrModel->where("IdFak",$IdFac)->where("IdSmr",$IdSmr)->find();
        $mysm=$mysm[0];
        $clsModel = new ClassModel();
        $mycl = $clsModel->where('IdSmr',$mysm->IdSmr)->where("Name",$class)->find();
        $mycl=$mycl[0];
        
        $chetModel->insert([
         
             "IdKor_OD"=>$idkor,
            
                "Text"=>$text,     
                "IdCl"=>$mycl->idC,
                "time_send"=>$time
             
        ]);
      
       return json_encode(['message'=>'success']) ;
        
    }
    
    //put message for friend chat
    
       public function ajaxSendMyTextToFriend() {
        $kor = $_SESSION['logedinUsers'];
        $idkor=$kor->IdKor;
        $text = $this->request->getVar("text");
        $time= $this->request->getVar("time");
        $friendid= $this->request->getVar("friend");
        $chetModel = new Chat_RoomModel();
        
        $chetModel->insert([
         
             "IdKor_OD"=>$idkor,
             "IdKor_KA"=>$friendid,
              "Text"=>$text,     
               "time_send"=>$time
             
        ]);
      
       return json_encode(['message'=>'success']) ;
        
    }
    //get friend chat when opening it
        public function ajaxGetChatFriend() {
        
        $me = $_SESSION['logedinUsers'];
        $myIdkor = $me->IdKor;
        $friend = $this->request->getVar("friend");
        $chatModel = new Chat_RoomModel();
        $db= \Config\Database::connect();
        $query = $db->query("SELECT * FROM chet_rooms 
	JOIN korisnik ON korisnik.IdKor= chet_rooms.IdKor_OD
            WHERE (chet_rooms.IdKor_KA ={$friend} AND chet_rooms.IdKor_OD ={$myIdkor})||(chet_rooms.IdKor_KA ={$myIdkor} AND chet_rooms.IdKor_OD ={$friend})
            ORDER BY chet_rooms.time_send ASC")->getResultArray();
        
        return json_encode(['message'=>$query,'myID'=>$myIdkor]);
    }
    
    
    //get all other chat messages in the class
    public function ajaxGetChats() {
        
        $me = $_SESSION['logedinUsers'];
        $myIdkor = $me->IdKor;
        $chatModel = new Chat_RoomModel();
    
        $class = $this->request->getVar('name');
         $IdFac = $_SESSION['IdFaculty'];
        $IdSmr = $_SESSION['IdCourse'];
        
        $smrModel = new SmeroviModel();
        $mysm = $smrModel->where("IdFak",$IdFac)->where("IdSmr",$IdSmr)->find();
        $mysm=$mysm[0];
        $clsModel = new ClassModel();
        $mycl = $clsModel->where('IdSmr',$mysm->IdSmr)->where("Name",$class)->find();
        $idC=$mycl[0]->idC;
   
        $db= \Config\Database::connect();
        $query = $db->query("SELECT * FROM chet_rooms 
	JOIN korisnik ON korisnik.IdKor= chet_rooms.IdKor_OD
            WHERE chet_rooms.IdCl ={$idC}
            ORDER BY chet_rooms.time_send ASC")->getResultArray();
        
        return json_encode(['message'=>$query,'myID'=>$myIdkor]);
    }
    
    //for displaying student subjects in the left side of the main view
    public function ajaxGetStudentSubjects() {
                $me = $_SESSION['logedinUsers'];
                $myIdkor = $me->IdKor;
                
                $faksModel = new FacultyModel();
                $studModel = new StudentModel();
                $smerModel= new SmeroviModel();
                $classModel = new ClassModel();
                
                $meStud = $studModel->where("IdStud",$myIdkor)->find();
                $meStud=$meStud[0];
                
                $myFack = $faksModel->where("Name",$meStud->Faculty)->find();
                $myFack = $myFack[0];
                $this->session->set("IdFaculty",$myFack->IdF);
                $myCuours = $smerModel->where("Name",$meStud->Course)->where("IdFak",$myFack->IdF)->find();
                $myCuours= $myCuours[0];
                $this->session->set("IdCourse",$myCuours->IdSmr);
                $myClasses= $classModel->where("IdSmr",$myCuours->IdSmr)->findAll();         
                
                return json_encode(['faculty'=>$myFack,'course'=>$myCuours,'classes'=>$myClasses]);
                
    }
    
    
  
    
    
}
