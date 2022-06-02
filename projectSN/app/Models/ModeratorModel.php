<?php

namespace App\Models;

use CodeIgniter\Model;

class ModeratorModel extends Model
{
    protected $table      = 'moderator';
    protected $primaryKey = 'IdMod';

    //protected $useAutoIncrement = true;

    protected $returnType     = 'object';

    protected $allowedFields = ['IdMod', 'IdFacM'];

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