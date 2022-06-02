<?php

namespace App\Models;

use CodeIgniter\Model;

class StudentModel extends Model
{
    protected $table      = 'student';
    protected $primaryKey = 'IdStud';

    //protected $useAutoIncrement = true;


    protected $returnType     = 'object';

    protected $allowedFields = ['IdStud', 'Faculty', 'Course', 'IdGod', 'IdNum', 'Penalty_points'];

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