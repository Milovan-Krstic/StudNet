<?php

namespace App\Models;

use CodeIgniter\Model;

class UserModel extends Model
{
    protected $table      = 'korisnik';
    protected $primaryKey = 'IdKor';

    protected $useAutoIncrement = true;

    protected $returnType     = 'object';

    protected $allowedFields = ['IdKor', 'Ime', 'Prezime', 'Date_of_birth', 'City', 'E-mail', 'Username', 'Last_login', 'Password'];

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