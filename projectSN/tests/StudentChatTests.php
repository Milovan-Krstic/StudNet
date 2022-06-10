<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of StudentTests
 *
 * @author Mladen Lulic
 */

use CodeIgniter\Test\CIUnitTestCase;
use CodeIgniter\Test\ControllerTestTrait;

use CodeIgniter\Test\DatabaseTestTrait;
use CodeIgniter\Test\FeatureTestTrait;

use Config\Services;

use App\Models\UserModel;
use App\Models\StudentModel;

final class StudentChatTests extends CIUnitTestCase{
    //put your code here
    use ControllerTestTrait, FeatureTestTrait {
        ControllerTestTrait::withBody insteadof FeatureTestTrait;
    }
    
    use DatabaseTestTrait;
    
    private static $id;
    
    private static $userModel = null;
    private static $studentModel;
    
    protected function setUp(): void
    {
        parent::setUp();
    }

    protected function tearDown(): void
    {
        parent::tearDown();
        
    }
    
    public static function setUpBeforeClass(): void {
        parent::setUpBeforeClass();
        
        StudentChatTests::$userModel = new UserModel();
        StudentChatTests::$studentModel = new StudentModel();

        StudentChatTests::$userModel->save([
            "Ime" => "TestIme",
            "Prezime" => "-",
            "Country" => "-",
            "Email" => "-",
            "Username" => "teststudent",
            "Password" => "-"
        ]);

        StudentChatTests::$id = StudentChatTests::$userModel->getInsertID();

        StudentChatTests::$studentModel->insert([
            "IdStud" => StudentChatTests::$id
        ]);
    }
    public static function tearDownAfterClass(): void {
        parent::tearDownAfterClass();
        
        StudentChatTests::$userModel->delete(StudentChatTests::$id);
    }
    
    public function testStudentControllerMain() {
        $result = $this->controller(\App\Controllers\Student::class)
                        ->execute('main');
        
        $this->assertTrue($result->isOK());
        
        $this->assertTrue($result->seeElement(".main"));
    }
    
    public function testStudentControllerTimer() {
        $result = $this->controller(\App\Controllers\Student::class)
                        ->execute('timer');
        
        $this->assertTrue($result->isOK());
        
        $this->assertTrue($result->seeElement(".timer-box"));
    }
    
    public function testStudentControllerProfile() {
        $result = $this->controller(\App\Controllers\Student::class)
                        ->execute('profile');
        
        $this->assertTrue($result->isOK());
        
        $this->assertTrue($result->seeElement(".main"));
    }
    
    public function testStudentControllerPlans() {
        $result = $this->controller(\App\Controllers\Student::class)
                        ->execute('plans');
        
        $this->assertTrue($result->isOK());
        
        $this->assertTrue($result->seeElement(".calendar"));
    }
    
    public function testGetStudentInfo() {
        $session = Services::session();

        $session->set('logedinUsers', [
                "IdKor" => StudentChatTests::$id
           ]);

        $_SESSION['logedinUsers'] = ([
              "IdKor" => StudentChatTests::$id
        ]);

        $result = $this->withSession()->call('post', 'Student/ajaxGetStudentInfo');

        $this->assertTrue(json_decode($result->getJSON())!=null);
        }
    
        public function testStudentSearchSuccsess() {
        

        $result = $this->call('post', 'Student/ajax_request_search_user',[
            "search"=>"M"
        ]);

        $this->assertTrue(json_decode($result->getJSON())!=null);
        }
        
        public function testStudentSearchFail() {
        

        $result = $this->call('post', 'Student/ajax_request_search_user',[
            "search"=>"MM"
        ]);

        $this->assertTrue(json_decode($result->getJSON())==null);
        }
    
}
