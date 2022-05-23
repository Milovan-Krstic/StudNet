<?php

namespace App\Models;

use CodeIgniter\Model;

class StudentModel extends Model
{
    protected $table      = 'student';
    protected $primaryKey = 'IdStu';


    protected $returnType     = 'object';

    protected $allowedFields = ['IdStu', 'Faculty', 'Course', 'IdGod', 'IdNum', 'Penalty_points'];

}