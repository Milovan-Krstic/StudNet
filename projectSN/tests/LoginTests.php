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
    use ControllerTestTrait;

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
    
    public function testLogInControllerSubmit() {
        
        $requestBody = json_encode([
            "username" => "nikola",
            "password" => "123"
        ]);
        
        $result = $this->withBody($requestBody)
                       ->controller(\App\Controllers\LogIn::class)
                       ->execute('loginSubmit');
        
        $json = json_decode($result->getJSON());
        
        $this->assertTrue($result->getJSON() !== false);
    }
}
