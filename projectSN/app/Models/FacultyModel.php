<?php

namespace App\Models;
use CodeIgniter\Model;

class FacultyModel extends Model {
    
    protected $table      = 'fakultet';
    protected $primaryKey = 'IdF';

    protected $useAutoIncrement = true;

    protected $returnType     = 'object';

    protected $allowedFields = ['IdF','Name', 'IdUni'];
    
    public function getAllFaculty() {
        
        return $this->findAll();
       
    }
    
    public function getId() {
        return $this->IdF;
    }
}
