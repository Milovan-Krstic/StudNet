<?php

namespace App\Models;

use CodeIgniter\Model;


use App\Models\UserModel;

class UniversityModel extends Model {
   
    protected $table      = 'univerzitet';
    protected $primaryKey = 'IdUni';


    protected $returnType     = 'object';

    protected $allowedFields = ['IdUni', 'Sertifikat'];

    /*
    
    protected $useTimestamps = false;
    protected $createdField  = 'created_at';
    protected $updatedField  = 'updated_at';
    protected $deletedField  = 'deleted_at';

    protected $validationRules    = [];
    protected $validationMessages = [];
    protected $skipValidation     = false;
    
    */

    protected $useAutoIncrement = false;

  
    protected $useSoftDeletes = false;
    
 

    public function getAllUniNames(){
        
        $unis=$this->findAll();
        $kor= new UserModel();
        $kor->findAll();
      
           
        $names=[];
        for( $i=0;$i<count($unis);$i++){
              $names[$i]=$kor->dohvatiImeIDa($unis[$i]->IdUni);
        }
       
        return $names;
        
    }
   
}
   

