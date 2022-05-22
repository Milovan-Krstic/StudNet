<?php

namespace App\Models;
use CodeIgniter\Model;
class UniversityModel extends Model {
   

    protected $table      = 'univerzitet';
    protected $primaryKey = 'IdUni';

    protected $useAutoIncrement = true;

    protected $returnType     = 'Objcet';
    protected $useSoftDeletes = true;

    protected $allowedFields = ['Name', 'Username','Date_of_est','Country','E-mail' ,'Sertifikat'];

 
    
}
