<?php

namespace App\Models;

use CodeIgniter\Model;

class FacultyModel extends Model
{
    protected $table      = 'fakultet';
    protected $primaryKey = 'IdF';

    protected $useAutoIncrement = true;

    protected $returnType     = 'object';

    protected $allowedFields = ['IdF', 'Name', 'IdUni'];

    /*
    
    protected $useTimestamps = false;
    protected $createdField  = 'created_at';
    protected $updatedField  = 'updated_at';
    protected $deletedField  = 'deleted_at';

    protected $validationRules    = [];
    protected $validationMessages = [];
    protected $skipValidation     = false;
    
    */
}