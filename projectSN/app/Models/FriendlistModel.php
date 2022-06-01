<?php

namespace App\Models;


use CodeIgniter\Model;

class FriendlistModel extends Model {

    protected $table      = 'frindlist';
    protected $primaryKey = 'IdFL';

    protected $useAutoIncrement = false;

    protected $returnType     = 'object';


    /*
    
    protected $useTimestamps = false;
    protected $createdField  = 'created_at';
    protected $updatedField  = 'updated_at';
    protected $deletedField  = 'deleted_at';

    protected $validationRules    = [];
    protected $validationMessages = [];
    protected $skipValidation     = false;
    
    */


    protected $allowedFields = ['IdFL','IdM', 'IdF', 'status'];
    
    public function getAllFriends($id) {
        
        return $this->where('IdM',$id)->where('status',1)->findAll();
       
    }
    public function getAllFriendRequests($id) {
        
        return $this->where('IdM',$id)->where('status',0)->findAll();
       
    }
    
    
}

