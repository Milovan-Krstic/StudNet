<?php

namespace App\Models;

use CodeIgniter\Model;

class AdminModel extends Model
{
    protected $table      = 'admin';
    protected $primaryKey = 'idAdmin';

    //protected $useAutoIncrement = true;
    protected $returnType     = 'object';
    //protected $useSoftDeletes = true;

    protected $allowedFields = ['name','surname','username','PASSWORD'];

   // protected $useTimestamps = false;
   // protected $createdField  = 'created_at';
   // protected $updatedField  = 'updated_at';
    //protected $deletedField  = 'deleted_at';

    //protected $validationRules    = [];
    //protected $validationMessages = [];
    //protected $skipValidation     = false;
}