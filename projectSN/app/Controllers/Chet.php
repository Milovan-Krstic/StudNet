<?php
namespace App\Controllers;
use App\Models\Chat_RoomModel;
use App\Models\UniversityModel;
use App\Models\StudentModel;


class Chet extends BaseController{
    
    public function ajaxSendMyTextToGroup() {
        $idkor = $this->request->getVar("korID");
        $text = $this->request->getVar("text");
        
        $chetModel = new Chat_RoomModel();
        
        $chetModel->insert([
         
             "IdKor_OD"=>$idkor,
            
                "Text"=>$text,      
             
        ]);
        
       return json_encode(['message'=>$idkor]) ;
        
    }
    
    
}
