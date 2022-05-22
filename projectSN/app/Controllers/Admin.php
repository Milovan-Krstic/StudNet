<?php

namespace App\Controllers;

use App\Models\UniversityModel;

class Admin extends BaseController
{
    public function index()
    {
        $data['controller']='Admin';
        echo view('adminFuncViews/adminview',$data);
    }
    
    public function AddIUni(){
        $data['controller']='Admin';     
        echo view('adminFuncViews/AFUView',$data); 
    }
    
    public function ADDU($data=[]){
          $data['controller']='Admin';     
        echo view('adminFuncViews/AddUniView',$data); 
    }
    public function AdminAddUni(){
        
        $univerzitet= new UniversityModel();
        $data=[
            'Name'=> $this->request->getVar('Fname'),  
            'Username'=> $this->request->getVar('username'), 
            'Date_of_est'=>'2022-05-09',
            'Country'=> $this->request->getVar('country'),  
            'E-mail'=> $this->request->getVar('email'),  
            'Sertifikat'=> '1'
        ];
         $univerzitet->save($data);
        return json_encode(['message'=>'success']);
       
    }
}
    


