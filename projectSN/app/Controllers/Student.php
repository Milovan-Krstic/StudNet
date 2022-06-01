<?php

namespace App\Controllers;


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
        
        $allFriends = $friendsModel->findAllFriendRequests($id);
        
        $result = array();
        $userModel = new UserModel();

        foreach(allFriends as $friend){
            $my_Friend_Id = $friend->IdF;
            $userFriend = $userModel->where('IdKor',$my_Friend_Id)->find();
            $userFriendName = $userFriend->Ime;
            $userFriendImg = $userFriend->Img;
            
            $result[] = array("name" => $userFriendName,"image"=>$userFriendImg);
        }
        
        
        echo json_encode($result);
    }
}
