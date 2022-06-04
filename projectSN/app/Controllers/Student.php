<?php

/**
 * @category Guest
 * @author   Djordje Popara 2019/0460
 */

namespace App\Controllers;

<<<<<<< HEAD
use App\Models\FriendlistModel;
use App\Models\UserModel;
use App\Models\StudentModel;



=======
use App\Models\UniversityModel;
use App\Models\UserModel;
use App\Models\FacultyModel;
use App\Models\SmeroviModel;
use App\Models\ClassModel;
use App\Models\StudentModel;
use App\Models\AdvertiserModel;
>>>>>>> a96dbe8d5c0c21793c69427db89f6d1cc0a6a0d0

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
<<<<<<< HEAD

    public function ajaxRequestCheckRequests(){
        $friendsModel = new FriendlistModel();
        
        //$user = $this->session->get('logedinUser');
        $user = $_SESSION['logedinUsers'];
        $id = $user->idKor;
        
        $allFriends = $friendsModel->getAllFriendRequests($id);
        
        $result = array();
        $userModel = new UserModel();

        foreach($allFriends as $friend){
            $my_Friend_Id = $friend->IdF;
            $userFriend = $userModel->where('IdKor',$my_Friend_Id)->find();
            $userFriendName = $userFriend->getIme();
            $userFriendImg = $userFriend->getImg();
            
            $result[] = array("name" => $userFriendName,"image"=>$userFriendImg,"id"=>$my_Friend_Id);
        }
        
        
        echo json_encode($result);
    }
    public function ajaxRequestAccept(){
      $data = $this->request->getVar();
      
      $student  = $_SESSION['logedinUsers'];
      $student_id= $student->idKor;
      
      
      
      $friendlist = new FriendlistModel();
      
      $friendlist_id = $friendlist->where('IdM',$data['option'])->where('IdF',$student_id)->where('status',0)->find();
      
      $friendlist->save([
          "IdFL"=>$friendlist_id[0]->IdFL,
          "IdM"=>$data['option'],
          "IdF"=>$student_id,
          "status"=>1
      ]);
      
      $friendlist->insert([
          "IdM"=>$student_id,
          "IdF"=>$data['option'],
          "status"=>1
      ]);
      
      
      
      
      
      
      
    }
    
    public function ajaxRequestDecline(){
       $data = $this->request->getVar();
      
      $student  = $_SESSION['logedinUsers'];
      $student_id= $student->idKor;
      
      
      
      $friendlist = new FriendlistModel();
      
      $friendlist_id = $friendlist->where('IdM',$data['option'])->where('IdF',$student_id)->where('status',0)->find();
      
      $friendlist->delete($friendlist_id[0]->IdFL);

    }
    
    public function ajaxRequestGetAllFriends(){
        $student  = $_SESSION['logedinUsers'];
        $student_id= $student->idKor;
      
      
      
        $friendsModel = new FriendlistModel();
        
        $allFriends = $friendsModel->getAllFriends($student_id);
        
        $result = array();
        $userModel = new UserModel();

        foreach($allFriends as $friend){
            $my_Friend_Id = $friend->IdF;
            $userFriend = $userModel->where('IdKor',$my_Friend_Id)->find();
            $userFriendName = $userFriend->getIme();
            $userFriendImg = $userFriend->getImg();
            
            $result[] = array("name" => $userFriendName,"image"=>$userFriendImg,"id"=>$my_Friend_Id);
        }
        
        
        echo json_encode($result);
    }
    
    public function ajaxFriendView(){
        $data = $this->request->getVar();
        
        $friend_id = $data['id'];
        
        $userModel = new UserModel();
        $studentModel = new StudentModel();
        
        $friend=$userModel->where('IdKor',$friend_id)->find();
        $student_friend = $studentModel->where('IdStud',$friend_id)->find();
        
        
        
        
        
        echo json_encode([
            "url"=>base_url($data['page']),
            "IdKor"=>$friend[0]->IdKor,
            "Ime"=>$friend[0]->Ime,
            "Prezime"=>$friend[0]->Prezime,
            "Country"=>$friend[0]->Country,
            "Email"=>$friend[0]->Email,
            "Faculty"=>$student_friend[0]->Faculty,
            "Course"=>$$student_friend[0]->Course,
            "IdNum"=>$student_friend[0]->IdNum,
            "IdGod"=>$student_friend[0]->IdGod,
            "Friends"=>1
        ]);
    }
    
    public function ajaxRequestSendFriend(){
        $data = $this->request->getVar();
         $student  = $_SESSION['logedinUsers'];
        $student_id= $student->idKor;
        
        $friendModel = new FriendlistModel();
        
        $friendModel->insert([
           "IdM"=> $student_id,
            "IdF"=>$data['id'],
            'status'=>0
        ]);
        
        
    }

=======
    
    public function ajax_request_search_user() {
        
        $data = $this->request->getVar("search");
        
     
        
         $db= \Config\Database::connect();
        $query = $db->query("SELECT * FROM student
                LEFT JOIN korisnik ON korisnik.IdKor = student.IdStud
                WHERE korisnik.Username LIKE '{$data}%' OR korisnik.Ime LIKE '{$data}%' OR korisnik.Prezime LIKE  '{$data}%'  LIMIT 10 ")->getResultArray();
        
        
        return json_encode(["message"=>$query]);
    }
    
    
    
>>>>>>> a96dbe8d5c0c21793c69427db89f6d1cc0a6a0d0
}
