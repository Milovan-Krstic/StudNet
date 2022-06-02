<?php

namespace App\Models;


use CodeIgniter\Model;

class FacultyModel extends Model {

    protected $table      = 'fakultet';
    protected $primaryKey = 'IdF';

    protected $useAutoIncrement = true;

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


    protected $allowedFields = ['IdF','Name', 'IdUni'];
    
    public function getAllFaculty() {
        
        return $this->findAll();
       
    }
    
    public function getId() {
        return $this->IdF;
    }
}

