

  <?= link_tag('css_files/AdminStyles.css')?>
   <?= link_tag('css_files/buttons.css')?>
   <?= link_tag('css_files/AdminPosCenter.css')?>


    <div class="content">
        <div class="container">
            <div class="button spaces">
               <?= anchor("$controller/ADDU", "<button  class ='buttonGreen' type='submit' value='aiU'>Add University</button>")?>
                </div>
               <div class="button spaces">
               <?= anchor("$controller/ADDF", "<button  class ='buttonGreen' type='submit' value='aiU'>Add Faculty</button>")?>
                </div>
            
          <div class="button spaces">
               <?= anchor("$controller/ADDC", "<button  class ='buttonGreen' type='submit' value='aiU'>Add Course</button>")?>
                </div>
          <div class="button spaces">
               <?= anchor("$controller/ADDS", "<button  class ='buttonGreen' type='submit' value='aiU'>Add Subject</button>")?>
                </div>
         
            
            
        </div>
        
    </div>
    
    
    
    
    </body>
</html>


