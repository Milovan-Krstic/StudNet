<?php

namespace App\Models;
use CodeIgniter\Model;
class SmeroviModel extends Model {

  
    protected $table      = 'smerovi';
    protected $primaryKey = 'IdSmr';

    protected $useAutoIncrement = true;

    protected $returnType     = 'object';

    protected $allowedFields = ['IdSmr','Name', 'Num_of_class','IdFak'];
    
    
}
