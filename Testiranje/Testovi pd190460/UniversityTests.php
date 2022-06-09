<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of UniversityTests
 *
 * @author Djordje Popara
 */

use CodeIgniter\Test\CIUnitTestCase;
use CodeIgniter\Test\ControllerTestTrait;

use CodeIgniter\Test\DatabaseTestTrait;
use CodeIgniter\Test\FeatureTestTrait;

use Config\Services;

use App\Models\UserModel;
use App\Models\UniversityModel;

final class UniversityTests extends CIUnitTestCase{
    //put your code here
    use ControllerTestTrait, FeatureTestTrait {
        ControllerTestTrait::withBody insteadof FeatureTestTrait;
    }
    
    use DatabaseTestTrait;
    
    private static $id;
    private static $idF;
    private static $idS;
    private static $userModel = null;
    private static $universityModel;
    
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
        
        UniversityTests::$userModel = new UserModel();
        UniversityTests::$universityModel = new UniversityModel();

        UniversityTests::$userModel->save([
            "Ime" => "TestUniversity",
            "Prezime" => "-",
            "Country" => "-",
            "Email" => "-",
            "Username" => "testuniversity",
            "Password" => "-"
        ]);

        UniversityTests::$id = UniversityTests::$userModel->getInsertID();

        UniversityTests::$universityModel->insert([
            "IdUni" => UniversityTests::$id
        ]);
    }
    public static function tearDownAfterClass(): void {
        parent::tearDownAfterClass();
        
        UniversityTests::$userModel->delete(UniversityTests::$id);
    }
    
    public function testUniversityControllerIndex() {
        $result = $this->controller(\App\Controllers\Univerzitet::class)
                        ->execute('index');
        
        $this->assertTrue($result->isOK());
        
        $this->assertTrue($result->seeElement("#naslov"));
    }
    
    public function testUniversityAddFacultySuccess() {
        $result = $this->call('post', 'Univerzitet/ajaxRequestAddingFac', [
            "Name" => "TestFaculty",
            "IdUni" => UniversityTests::$id
        ]);
        
        $this->assertTrue(json_decode($result->getJSON()) != "null");
        
        $json = json_decode($result->getJSON());
        $json = rtrim($json, "\n");
        self::$idF = json_decode($json)->IdF;
    }
    
    public function testUniversityAddFacultyFail() {
        $result = $this->call('post', 'Univerzitet/ajaxRequestAddingFac', [
            "Name" => "TestFaculty",
            "IdUni" => UniversityTests::$id
        ]);
        
        $this->assertTrue(json_decode($result->getJSON()) == "null");
       
    }
    
    public function testUniversityAddCourseSuccess() {
        $result = $this->call('post', 'Univerzitet/ajaxRequestAddingCourse', [
            "IdFak" => self::$idF,
            "Name" => "Test Course",
            "Num_of_class" => "8"
        ]);
        
        $json = json_decode($result->getJSON());
        
        $this->assertTrue($json != "null");
        
        $json = rtrim($json, "\n");
        self::$idS = json_decode($json)->IdSmr;
    }
    
     public function testUniversityAddCourseFail() {
        $result = $this->call('post', 'Univerzitet/ajaxRequestAddingCourse', [
            "IdFak" => self::$idF,
            "Name" => "Test Course",
            "Num_of_class" => "8"
        ]);
        
        $json = json_decode($result->getJSON());
        
        $this->assertTrue($json == "null");
    }
    
    public function testUniversityAddSubjectSuccess() {
        $result = $this->call('post', 'Univerzitet/ajaxRequestAddingClass', [
            "IdSmr" => self::$idS,
            "Name" => "Test Subject",
            "semestar" => "1"
        ]);
        
        $json = json_decode($result->getJSON());
        
        $this->assertTrue($json != "null");
    }
    
    public function testUniversityAddSubjectFail() {
        $result = $this->call('post', 'Univerzitet/ajaxRequestAddingClass', [
            "IdSmr" => self::$idS,
            "Name" => "Test Subject",
            "semestar" => "1"
        ]);
        
        $json = json_decode($result->getJSON());
        
        $this->assertTrue($json == "null");
    }
    
    public function testUniversityGetCoursesSuccess() {
        $result = $this->call('post', 'Univerzitet/ajaxGetSmerovi', [
            "IdFak" => self::$idS
        ]);
        
        $json = json_decode($result->getJSON());
        
        $this->assertTrue($json != "null");
    }
    
    public function testUniversityGetCoursesFail() {
        $result = $this->call('post', 'Univerzitet/ajaxGetSmerovi', [
            "IdFak" => 1000
        ]);
        
        $json = json_decode($result->getJSON());
        
        $this->assertTrue($json == "[]");
    }
    
    public function testUniversityGetSubjectsSuccess() {
        $result = $this->call('post', 'Univerzitet/ajaxGetPredmeti', [
            "IdSmr" => self::$idS
        ]);
        
        $json = json_decode($result->getJSON());
        
        $this->assertTrue($json != "null");
    }
    
    public function testUniversityGetSubjectsFail() {
        $result = $this->call('post', 'Univerzitet/ajaxGetPredmeti', [
            "IdSmr" => 1000
        ]);
        
        $json = json_decode($result->getJSON());
        
        $this->assertTrue($json == "[]");
    }
    
//    public function testGetUniversity() {
////        $session = Services::session();
////        
////        $session->set('logedinUniverzitet', [
////            "Ime" => "TestUniversity"
////        ]);
//        
//        $_SESSION['logedinUniverzitet'] = ([
//            "Ime" => "TestUniversity"
//        ]);
//        
//        $result = $this->withSession()->call('post', 'Univerzitet/ajaxGetUni');
//        
//        $this->assertSame("TestUniversity", $result);
//    }
}
