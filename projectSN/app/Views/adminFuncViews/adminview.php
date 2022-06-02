    <?= link_tag('css_files/AdminStyles.css')?>
    <?= link_tag('css_files/buttons.css')?>
    <?= link_tag('css_files/AdminPosCenter.css')?>

    <div class="content">
        <div class="container">
            <div class="button spaces">
               <?= anchor("$controller/AddIUni", "<button  class ='buttonGreen' type='submit' value='aiU'>Add into universitys</button>")?>
                </div>
            <div class="button spaces">
               <?= anchor("$controller/AprUnis", "<button  class ='buttonGreen' type='submit' value='apU'>Approve Univ</button>")?>
                </div>
            
            
            <div class="button spaces">
              <?= anchor("$controller/DeleFU", "<button class='buttonRed' type='submit' value='dfU'>Delete from Univesity</button>")?>
            </div>
            <hr>
             <div class="button spaces">
             <?= anchor("$controller/DeleStud", "<button class='buttonRed' type='submit' value='dS'>Delete Student</button>")?>
            </div>
            <hr>
             <div class="button spaces">
             <?= anchor("$controller/DeleAdv", "<button class='buttonRed' type='submit' value='dA'>Delete Advertiser</button>")?>
            </div>
            
             <div class="button spaces">
              <?= anchor("$controller/DeleAdvmnt", "<button class='buttonRed' type='submit' value='dAdv'>Delete Advertisement</button>")?>
            </div>
            
           
        </div>
        
    </div>
    
    
    
    
    </body>
</html>


