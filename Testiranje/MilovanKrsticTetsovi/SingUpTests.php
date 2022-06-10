<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of LoginTests
 *
 * @author Djordje Popara
 */

use CodeIgniter\Test\CIUnitTestCase;
use CodeIgniter\Test\ControllerTestTrait;

use CodeIgniter\Test\DatabaseTestTrait;
use CodeIgniter\Test\FeatureTestTrait;

use Config\Services;


final class SingUpTests extends CIUnitTestCase
{
    use ControllerTestTrait, FeatureTestTrait {
        ControllerTestTrait::withBody insteadof FeatureTestTrait;
    }
    
    use DatabaseTestTrait;

    protected function setUp(): void
    {
        parent::setUp();
    }

    protected function tearDown(): void
    {
        parent::tearDown();
    }
    
    public function testLogInSession()
    {
        $session = Services::session();

        $session->set('singupUsers');
       
        
        $this->assertSame($session->get('singupUsers'));
 
    }
    
    public function testSingUpControllerIndex() {
        $result = $this->controller(\App\Controllers\Guest::class)
                        ->execute('index');
        
        $this->assertTrue($result->isOK());
        
        $this->assertTrue($result->seeElement(".title"));
        $this->assertTrue($result->see("Sign Up as a Student"));
    }
    
    public function testSingUPControllerSubmitStudentSuccess() { 
        $result = $this->call('post', '/register-student', [
            "username" => "ljuba",
            "name" => "Ljubisa",
               "surname" => "Solic",
               "email" => "Solke@gmail.com",
               "date_of_birth" => "06/01/2022",
               "password" => "Sifra@123",
              "country" => "Serbia",
               "faculty" => "Elektrotehnicki fakultet",
               "course" => "SI",
               "id_year" => "2000",
              "id_num" => "633",
          
            
        ]);
        
        $this->assertTrue(json_decode($result->getJSON()) !=null);
    }
        
    public function testSingUPControllerSubmitStudentNameError() { 
        $result = $this->call('post', '/register-student', [
            "username" => "ljuba",
            "name" => "ljubisa",
               "surname" => "Solic",
               "email" => "Solke@gmail.com",
               "date_of_birth" => "06/01/2022",
               "password" => "Sifra@123",
              "country" => "Serbia",
               "faculty" => "Elektrotehnicki fakultet",
               "course" => "SI",
               "id_year" => "2000",
              "id_num" => "633",
          
            
        ]);
        
        $this->assertTrue(json_decode($result->getJSON()) ==null);
    }
       public function testSingUPControllerSubmitStudentPasswordErrorLen() { 
        $result = $this->call('post', '/register-student', [
            "username" => "ljuba",
            "name" => "Ljubisa",
               "surname" => "Solic",
               "email" => "Solke@gmail.com",
               "date_of_birth" => "06/01/2022",
               "password" => "Si@12",
              "country" => "Serbia",
               "faculty" => "Elektrotehnicki fakultet",
               "course" => "SI",
               "id_year" => "2000",
              "id_num" => "633",
          
            
        ]);
        
        $this->assertTrue(json_decode($result->getJSON()) ==null);
    }
    public function testSingUPControllerSubmitStudentPasswordError() { 
        $result = $this->call('post', '/register-student', [
            "username" => "ljuba",
            "name" => "Ljubisa",
               "surname" => "Solic",
               "email" => "Solke@gmail.com",
               "date_of_birth" => "06/01/2022",
               "password" => "Sif",
              "country" => "Serbia",
               "faculty" => "Elektrotehnicki fakultet",
               "course" => "SI",
               "id_year" => "2000",
              "id_num" => "633",
          
            
        ]);
        
        $this->assertTrue(json_decode($result->getJSON()) ==null);
    }
        public function testSingUPControllerSubmitStudentEmailError() { 
        $result = $this->call('post', '/register-student', [
            "username" => "ljuba",
            "name" => "Ljubisa",
               "surname" => "Solic",
               "email" => "Solkegmail.com",
               "date_of_birth" => "06/01/2022",
               "password" => "Sifra@123",
              "country" => "Serbia",
               "faculty" => "Elektrotehnicki fakultet",
               "course" => "SI",
               "id_year" => "2000",
              "id_num" => "633",
          
            
        ]);
        
        $this->assertTrue(json_decode($result->getJSON()) ==null);
    }
   
            public function testSingUPControllerSubmitStudentDateFutureError() { 
        $result = $this->call('post', '/register-student', [
            "username" => "ljuba",
            "name" => "Ljubisa",
               "surname" => "Solic",
               "email" => "Solke@gmail.com",
               "date_of_birth" => "06/01/2025",
               "password" => "Sifra@123",
              "country" => "Serbia",
               "faculty" => "Elektrotehnicki fakultet",
               "course" => "SI",
               "id_year" => "2000",
              "id_num" => "633",
          
            
        ]);
        
        $this->assertTrue(json_decode($result->getJSON()) ==null);
    }
              public function testSingUPControllerSubmitStudentUserNameError() { 
        $result = $this->call('post', '/register-student', [
            "username" => "123ljuba",
            "name" => "Ljubisa",
               "surname" => "Solic",
               "email" => "Solke@gmail.com",
               "date_of_birth" => "06/01/2000",
               "password" => "Sifra@123",
              "country" => "Serbia",
               "faculty" => "Elektrotehnicki fakultet",
               "course" => "SI",
               "id_year" => "2000",
              "id_num" => "633",
          
            
        ]);
        
        $this->assertTrue(json_decode($result->getJSON()) ==null);
    }
                  public function testSingUPControllerSubmitStudentFoumNotFillFileds() { 
        $result = $this->call('post', '/register-student', [
            "username" => "",
            "name" => "",
               "surname" => "",
               "email" => "",
               "date_of_birth" => "",
               "password" => "",
              "country" => "",
               "faculty" => "",
               "course" => "",
               "id_year" => "",
              "id_num" => "",
          
            
        ]);
        
        $this->assertTrue(json_decode($result->getJSON()) ==null);
    }
}