<?php

namespace App\Models;

use CodeIgniter\Model;

class UserModel extends Model
{
    protected $table      = 'korisnik';
    protected $primaryKey = 'IdKor';

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

    protected $allowedFields = ['IdKor','Ime', 'Prezime', 'Date_of_birth', 'Country', 'Email', 'Username','Last_login', 'Password', 'img'];
    
    public function chechUserForUsername($tekst) {
        return $this->where('Username',$tekst)->findAll();
    }
   
     public function chechUserForName($tekst) {
        return $this->where('Ime',$tekst)->findAll();
    }
    
        public function getId() {
            return $this->IdKor;
        }
        public function getIme() {
           return $this->Ime;
        }
    public function dohvatiImeIDa($Id){
        return $this->where('IdKor',$Id)->find();
        
    }

}