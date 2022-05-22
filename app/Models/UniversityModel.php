<?php

namespace App\Models;

use CodeIgniter\Model;

class UniversityModel extends Model
{
    protected $table      = 'univerzitet';
    protected $primaryKey = 'IdUni';

    //protected $useAutoIncrement = true;

    protected $returnType     = 'object';

    protected $allowedFields = ['IdUni', 'Name', 'Date_of_est', 'Country', 'E-mail', 'Sertifikat'];

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