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


final class LoginTests extends CIUnitTestCase
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

        $session->set('logedinUsers', 1);
        $session->set('logedinModerator', 2);
        $session->set('logedinUniverzitet', 3);
        $session->set('logedinReklamer', 4);
        $session->set('logedinAdmin', 5);
        
        $this->assertSame(1, $session->get('logedinUsers'));
        $this->assertSame(2, $session->get('logedinModerator'));
        $this->assertSame(3, $session->get('logedinUniverzitet'));
        $this->assertSame(4, $session->get('logedinReklamer'));
        $this->assertSame(5, $session->get('logedinAdmin'));
    }
    
    public function testLogInControllerIndex() {
        $result = $this->controller(\App\Controllers\LogIn::class)
                        ->execute('index');
        
        $this->assertTrue($result->isOK());
        
        $this->assertTrue($result->seeElement(".title"));
        $this->assertTrue($result->see("Log Into StudNet"));
    }
    
    public function testLogInControllerSubmitStudent() { 
        $result = $this->call('post', '/loginSubmit', [
            "username" => "nikola",
            "password" => "123"
        ]);
        
        $this->assertTrue(json_decode($result->getJSON()) == "1");
    }
    
    public function testLogInControllerSubmitUniversity() { 
        $result = $this->call('post', '/loginSubmit', [
            "username" => "UniBg",
            "password" => "123"
        ]);
        
        $this->assertTrue(json_decode($result->getJSON()) == "3");
        
    }
    
    public function testLogInControllerSubmitModerator() { 
        $result = $this->call('post', '/loginSubmit', [
            "username" => "mod",
            "password" => "123"
        ]);
        
        $this->assertTrue(json_decode($result->getJSON()) == "4");
        
    }
    
    public function testLogInControllerSubmitAdvertiser() { 
        $result = $this->call('post', '/loginSubmit', [
            "username" => "rekl",
            "password" => "123"
        ]);
        
        $this->assertTrue(json_decode($result->getJSON()) == "5");
        
    }
    
    public function testLogInControllerSubmitAdmin() { 
        $result = $this->call('post', '/loginSubmit', [
            "username" => "root",
            "password" => "123"
        ]);
        
        $this->assertTrue(json_decode($result->getJSON()) == "2");
        
    }
    
     public function testLogInControllerSubmitNonExistingUser() { 
        $result = $this->call('post', '/loginSubmit', [
            "username" => "NonExistingUser",
            "password" => "NonExistingUsersPassword"
        ]);
        
        $this->assertTrue(json_decode($result->getJSON()) == "0");
        
    }
}
