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

final class UniversityTests extends CIUnitTestCase{
    //put your code here
    use ControllerTestTrait;

    protected function setUp(): void
    {
        parent::setUp();
    }

    protected function tearDown(): void
    {
        parent::tearDown();
    }
    
    public function testUniversityControllerIndex() {
        $result = $this->controller(\App\Controllers\Univerzitet::class)
                        ->execute('index');
        
        $this->assertTrue($result->isOK());
        
        $this->assertTrue($result->seeElement("#naslov"));
    }
    
    public function testUniversityAddFaculty() {
        
        $requestBody = json_encode([
            "Name" => "Fakultet 1",
            "IdUni" => "15"
        ]);
        
        $result = $this->withBody($requestBody)
                       ->controller(\App\Controllers\Univerzitet::class)
                       ->execute('ajaxRequestAddingFac');
        
        $this->assertTrue($result->getJSON() !== false);
    }
    
    public function testUniversityAddCourse() {
        
        $requestBody = json_encode([
            "IdFak" => "2",
            "Name" => "Course 1",
            "Num_of_class" => "8"
        ]);
        
        $result = $this->withBody($requestBody)
                       ->controller(\App\Controllers\Univerzitet::class)
                       ->execute('ajaxRequestAddingCourse');
        
        $this->assertTrue($result->getJSON() !== false);
    }
}
