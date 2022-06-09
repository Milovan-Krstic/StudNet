<?php

namespace App\Models;


use CodeIgniter\Model;

class InBoxModel extends Model {

    protected $table      = 'inbox';
    protected $primaryKey = 'IdKor_OD,IdKor_KA';

    protected $useAutoIncrement = true;

    protected $returnType     = 'object';


    /*
    
    protected $useTimestamps = false;
    protected $createdField  = 'created_at';
    protected $updatedField  = 'updated_at';
    protected $deletedField  = 'deleted_at';

    protected $validationRules    = [];
    protected $validationMessages = [];
    protected $skipValidation     = false;
    
    */


    protected $allowedFields = ['IdKor_OD','IdKor_KA', 'notify'];

}

