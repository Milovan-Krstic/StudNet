<?php

namespace App\Models;
use CodeIgniter\Model;
use App\Models\UserModel;

class UniversityModel extends Model {
   

    protected $table      = 'univerzitet';
    protected $primaryKey = 'IdUni';

    protected $useAutoIncrement = false;

    protected $returnType     = 'object';
    protected $useSoftDeletes = false;
    
    protected $allowedFields = ['IdUni','Sertifikat'];

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
   
