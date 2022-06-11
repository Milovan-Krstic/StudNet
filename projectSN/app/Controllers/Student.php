<?php

/**

 * author Milovan Krstic 709/19
 */

namespace App\Controllers;

use App\Models\UniversityModel;
use App\Models\UserModel;
use App\Models\FacultyModel;
use App\Models\SmeroviModel;
use App\Models\ClassModel;
use App\Models\StudentModel;
use App\Models\AdvertiserModel;
use App\Models\FriendlistModel;
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
    
    public function ajax_request_search_user() {
        
        $data = $this->request->getVar("search");
        
     
        
         $db= \Config\Database::connect();
        $query = $db->query("SELECT * FROM student
                LEFT JOIN korisnik ON korisnik.IdKor = student.IdStud
                WHERE korisnik.Username LIKE '{$data}%' OR korisnik.Ime LIKE '{$data}%' OR korisnik.Prezime LIKE  '{$data}%'  LIMIT 10 ")->getResultArray();
        
        
        return json_encode(["message"=>$query]);
    }
     
    public function ajaxGetStudentInfo() {
        
       $Kor= $_SESSION['logedinUsers'];
       $idkor = $Kor->IdKor;
         $db= \Config\Database::connect();
           $query=$db->query("SELECT * FROM korisnik  JOIN student ON korisnik.IdKor=student.IdStud WHERE korisnik.IdKor={$idkor}")->getResultArray();
        
           return json_encode(['message'=>$query]);
           
        
    }
    public function setUserImg() {
        
            $Kor= $_SESSION['logedinUsers'];
            $idkor = $Kor->IdKor;

            $file = $_FILES['file'];
           
            $fileName= $_FILES['file']['name'];
            $fileTmpName= $_FILES['file']['tmp_name'];
            $fileSize= $_FILES['file']['size'];
            $fileError= $_FILES['file']['error'];
            $fileType= $_FILES['file']['type'];
            
            $fileExt = explode('.',$fileName);
            $fileActualExt = strtolower(end($fileExt));
            
            $allowed = array('jpg','jpeg','png','svg.png');
            if(in_array($fileActualExt,$allowed)){
                if($fileError===0){
                        if($fileSize<800000){

                            $fileNameNew = $idkor."_user.".$fileActualExt;
                            $fileDest = 'localFiles/'.$fileNameNew;
                              $s=1;
                             move_uploaded_file($fileTmpName,$fileDest);


                              $db= \Config\Database::connect();

                             $db->query("UPDATE korisnik SET img = ? WHERE IdKor = ?", [$fileNameNew, $idkor]);
                             return json_encode(['message'=>$fileNameNew,'nesto'=>$s]);

                        }else{
                             return json_encode(['errormessage'=>'error file is to big']);
                        }

                }else{
                     return json_encode(['errormessage'=>'error while uploading']);
                }
            }else{
                return json_encode(['errormessage'=>'cannot upload this file']);
                
            }
 
    }
    public function ajaxRequestCheckRequests(){


        $friendsModel = new FriendlistModel();

        //$user = $this->session->get('logedinUser');


        $allFriends = $friendsModel->findAllFriendRequests();

        $result = array();
        $userModel = new UserModel();




        foreach($allFriends as $friend){

           $my_Friend_Id = $friend->IdM;

            $userFriend = $userModel->where('IdKor',$my_Friend_Id)->find();
            $userFriendName = $userFriend[0]->Ime;

            $userFriendImg = $userFriend[0]->img;


           $result[] = array("name" => $userFriendName,"image"=>$userFriendImg,"id"=>$my_Friend_Id);


        }


       echo json_encode($result);
    }
    public function ajaxRequestAccept(){
      $data = $this->request->getVar();

      $student  = $_SESSION['logedinUsers'];
      $student_id= $student->IdKor;



      $friendlist = new FriendlistModel();

      $friend = $friendlist->where('IdM',$data['option'])->where('IdF',$student_id)->where('status',0)->find();
      $friend_id = $friend[0]->IdFL;
      $updated = [
          "IdM"=>$data['option'],
          "IdF"=>$student_id,
          "status"=>1
      ];

      $friendlist->update($friend_id, $updated);

      /*$friendlist->insert([
          "IdM"=>$student_id,
          "IdF"=>$data['option'],
          "status"=>1
      ]);*/








    }

    public function ajaxRequestDecline(){
       $data = $this->request->getVar();

      $student  = $_SESSION['logedinUsers'];
      $student_id= $student->IdKor;



      $friendlist = new FriendlistModel();

      $friendlist_id = $friendlist->where('IdM',$data['option'])->where('IdF',$student_id)->where('status',0)->find();

      $friendlist->delete($friendlist_id[0]->IdFL);

    }

    public function ajaxRequestGetAllFriends(){


        $student  = $_SESSION['logedinUsers'];
        $student_id= $student->IdKor;



        $friendlist = new FriendlistModel();


        $allFriends = $friendlist->findAllFriends();

        $result = array();
        $userModel = new UserModel();


        foreach($allFriends as $friend){

            if($student_id!=$friend->IdF){
            $my_Friend_Id = $friend->IdF;}
            else{
            $my_Friend_Id = $friend->IdM;}

            $userFriend = $userModel->where('IdKor',$my_Friend_Id)->find();
            $userFriendName = $userFriend[0]->Ime;
            $userFriendSurname=$userFriend[0]->Prezime;
            $userFriendImg = $userFriend[0]->img;
            $status = $userFriend[0]->Active;
            $result[] = array("name" => $userFriendName,"image"=>$userFriendImg,"id"=>$my_Friend_Id,"prezime"=>$userFriendSurname,"status"=>$status);
        }

        array_multisort(array_column($result, 'name'), SORT_ASC, $result);
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
        ]);
    }
    public function ajaxRequestFriendData(){
         $data = $this->request->getVar();
        
        $student  = $_SESSION['logedinUsers'];
        $student_id= $student->IdKor;
        $friend_id = $data['id'];
        $userModel = new UserModel();
        $studentModel = new StudentModel();
        
        $friendlistModel=new FriendlistModel();
        $friend=$userModel->where('IdKor',$friend_id)->find();
        $student_friend = $studentModel->where('IdStud',$friend_id)->find();

      
        $status=2;
        $friends_row = $friendlistModel->checkIfFriends($student_id,$friend_id);
        if($friends_row){
            $status=1;
        }

        else{
        $friends_row = $friendlistModel->checkIfFriendsRequested($student_id,$friend_id);
        if($friends_row){
            $status=0;
        }}
        
         echo json_encode([
            "IdKor"=>$friend[0]->IdKor,
            "Ime"=>$friend[0]->Ime,
            "Prezime"=>$friend[0]->Prezime,
            "Country"=>$friend[0]->Country,
            "Email"=>$friend[0]->Email,
            "Faculty"=>$student_friend[0]->Faculty,
            "Course"=>$student_friend[0]->Course,
            "IdNum"=>$student_friend[0]->IdNum,
            "IdGod"=>$student_friend[0]->IdGod,
            "img"=>$friend[0]->img,
            "Friends"=>$status
        ]);
        
    }
     public function ajaxRequestSendFriend(){
        $data = $this->request->getVar();
         $student  = $_SESSION['logedinUsers'];
        $student_id= $student->IdKor;

        $friendModel = new FriendlistModel();

        $friendModel->insert([
           "IdM"=> $student_id,
            "IdF"=>$data['id'],
            'status'=>0
        ]);
        return;


    }
    public function ajaxRequestRemoveFriend(){
        $data = $this->request->getVar();
         $student  = $_SESSION['logedinUsers'];
        $student_id= $student->IdKor;

        $friendModel = new FriendlistModel();

        $friend_row = $friendModel->where('IdM',$student_id)->where('IdF',$data['id'])->where('status',1)->find();
        if($friend_row!=null){
            $friendModel->delete($friend_row[0]->IdFL);
        }
       else{
            $friend_row = $friendModel->where('IdF',$student_id)->where('IdM',$data['id'])->where('status',1)->find();
        if($friend_row!=null){
            $friendModel->delete($friend_row[0]->IdFL);
        }
       }
       return;

    }
    
}
