    <?= link_tag('css_files/AdminStyles.css')?>
    <?= link_tag('css_files/buttons.css')?>
    <?= link_tag('css_files/AdminPosCenter.css')?>

    <div class="content">
        <div class="container">
        
          <div class="title">Add Faculty</div>
            <hr style="border-top:2px solid #e6e6e6">
            <?php if(!empty($errors)) echo "<span style='color:red'>$errors</span>";?>
            <form action="#" >
                <div class="user-details">

                    <div class="section">

                            <div class="input-box posCentr col-6">
                                
                                <div class="dropdown-select " tabindex="-1">
                                    <div class="select-btn">
                                            <span name ="s1AFac" id="s1AFac">Search University</span>
                                            <img src="<?php echo base_url('icons/caret-down-solid.svg')?>" alt="+">
                                    </div>
                                    <div class="dropdown-content">
                                        <ul class="options" name ="s1AFac">
                                         <?php
                                            
                                                foreach ($names as $name){
                                                echo "<li>{$name[0]->Ime}</li>";
                                                }
                                           
                                            ?>
                                        </ul>
                                    </div>
                                </div>
                                 
                            </div>
                        
                            <div class="input-box posCentr col-6">
                                <input type="text" class="faculty" id="faculty" name="faculty" placeholder="Faculty name">
                            </div>
                   
                        
                    </div>
                    
                      
                    <input class="buttonAAF" id="addAU" name="Add" type="button" value="Add">         
                    <?= anchor("$controller/AddIUni","<input class='buttonCAU' id='addCU' name='Cancle' type='button' value='Cancel'>")?>
         
                    
                    <div class="popup-background">
                    <div class="popup-container">
                        <div class="popup-top">
                            <div class="top-image">
                                <img>
                            </div>
    
                            <div class="top-message">
                                <span></span>
                            </div>
                        </div>
                        <div class="popup-bottom">
                            <div class="bottom-message">
                                <pre class="preclass"><span></span></pre>
                            </div>
                            <div class="bottom-next">
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
                     <div class="help-background">
                    <div class="help-container">
                        <div class="help-c">
                            <div class="help-message">
       
                                <span>-Course  must have  1-15 lowercase letters.</span><br>
                       
                                
                            </div>
                            <div class="help-next">
                                <span>Fill the form</span>
                     
                            </div>
                        </div>
                    </div>
                </div>
                    
                    
        </form> 
        
        </div>
        
    </div>
         <script src="/js_files/AdminScript.js"></script>
    </body>
</html>


