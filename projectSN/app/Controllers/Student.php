<?php

namespace App\Controllers;
use App\Models\FriendlistModel;

class Student extends BaseController
{
    public function show($page, $header ) {
        echo view("templates/$header");
        echo view("student/$page");
        echo view("templates/footer_student");
    }
    
    
    
    public function main()
    {
       
        return $this->show('main_student', 'header_student');
        
    }
    
    public function timer()
    {
        
        return $this->show('timer_student', 'header_student_options');
    }
    
    public function profile()
    {
        return $this->show('profile_student', 'header_student_options');
    }
    
    public function view_user()
    {
        return $this->show('view_student', 'header_student_options');
    }
    
    public function plans()
    {
        return $this->show('calendar_student', 'header_student_options');
    }
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
}
