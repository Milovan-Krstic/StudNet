<?php

namespace App\Models;
use CodeIgniter\Model;
class ReklamerModel extends Model {
   

    protected $table      = 'reklamer';
    protected $primaryKey = 'IdRek';

   // protected $useAutoIncrement = true;

    protected $returnType     = 'object';
    //protected $useSoftDeletes = true;

    protected $allowedFields = ['IdRek','num_of_ads'];

 
    
}
