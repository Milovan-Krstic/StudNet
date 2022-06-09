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
}