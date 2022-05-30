<?php

namespace App\Models;

use CodeIgniter\Model;

class AdvertiserModel extends Model
{
    protected $table      = 'reklamer';
    protected $primaryKey = 'IdRek';

  
    protected $returnType     = 'object';

    protected $allowedFields = ['IdRek', 'num_of_ads'];

}