<?php

namespace App\Models;

use CodeIgniter\Model;

class StudentModel extends Model
{
    protected $table      = 'student';
    protected $primaryKey = 'IdStu';

    //protected $useAutoIncrement = true;

    protected $returnType     = 'object';

    protected $allowedFields = ['IdStu', 'Faculty', 'Course', 'IdGod', 'IdNum', 'Penalty_points'];

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