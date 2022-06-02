<?php


namespace App\Models;
use CodeIgniter\Model;

class ClassModel extends Model {
     protected $table      = 'classes';
    protected $primaryKey = 'idC';

    protected $useAutoIncrement = true;

    protected $returnType     = 'object';

    protected $allowedFields = ['idC','Name', 'IdSmr','semestar'];
}
