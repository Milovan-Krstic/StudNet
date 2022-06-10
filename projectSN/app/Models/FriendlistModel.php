<?php


namespace App\Models;
use CodeIgniter\Model;

class FriendlistModel extends Model {
     protected $table      = 'frindlist';
    protected $primaryKey = 'idFL';

    protected $useAutoIncrement = true;

    protected $returnType     = 'object';

    protected $allowedFields = ['idFL','IdM', 'IdF','status'];

    public function findAllFriends(){
        $kor = $_SESSION['logedinUsers'];
        $idkor=$kor->IdKor;
        return $this->groupStart()->where('IdM',$idkor)->orWhere('IdF',$idkor)->groupEnd()->where('status',1)->findAll();
    }
    public function findAllFriendRequests(){
        $kor = $_SESSION['logedinUsers'];
        $idkor=$kor->IdKor;
        return $this->where('IdF',$idkor)->where('status',0)->findAll();
    }
    
    public function checkIfFriends($id_stud,$id_friend){
        $data = $this->where('IdM',$id_stud)->where('IdF',$id_friend)->where('status',1)->find();
        if($data!=null){
            return true;
        }
        else{
            $data = $this->where('IdF',$id_stud)->where('IdM',$id_friend)->where('status',1)->find();
        }
        if($data!=null){
            return true;
        }
        else {return false;}
    }
    
    public function checkIfFriendsRequested($id_stud,$id_friend){
        $data = $this->where('IdM',$id_stud)->where('IdF',$id_friend)->where('status',0)->find();
        if($data!=null){
            return true;
        }
        else{
            $data = $this->where('IdF',$id_stud)->where('IdM',$id_friend)->where('status',0)->find();
        }
        if($data!=null){
            return true;
        }
        else {return false;}
    }
}