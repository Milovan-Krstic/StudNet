<?php

namespace App\Models;

use CodeIgniter\Model;

class AdvertiserModel extends Model
{
    protected $table      = 'reklamer';
    protected $primaryKey = 'IdRek';

    //protected $useAutoIncrement = true;

    protected $returnType     = 'object';

    protected $allowedFields = ['IdRek', 'num_of_ads'];

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