<?= link_tag('css_files/main_univerzitet.css') ?>

<div class="container-fluid main">
    <div class="row">
        
        <div class="left-part col">
            
        </div>
        <div class="right-part col">
            <span id="naslov"> </span>
            <hr>
            <div class="friends-list">
                <div class="friends-scroll">
                    
                    <div class="facinput">
                        <textarea name="" id="input-message" cols="10" rows="1" placeholder="Faculty name" maxlength="250"></textarea>
                    </div>
                    
                   
                    <label for="task"></label>
            
                </div>
                
            </div>
            <div class="dugme">
                <button type="button" class="btnaddfac" onclick="" > Add Faculty</button>
            </div>
        </div>
        <div class="left-part col">
           
        </div>
        
    </div>
    
</div>
<div class="popup-background">
                    <div class="popup-container">
                        <div class="popup-top">
                            <div class="top-image">
                                <img src="<?php echo base_url('icons/StudNet Exclamation.svg')?>">
                            </div>
    
                            <div class="top-message">
                                <span>Sorry you can't add faculty.</span>
                            </div>
                        </div>
                        <div class="popup-bottom">
                            <div class="bottom-message">
                                <pre><span>You must enter first</span></pre>
                            </div>
                            <div class="bottom-next">
                                <span>Redirect</span>
                            </div>
                        </div>
                    </div>
</div>
<div class="AddSmer-background">
    <div class="AddSmer-container">
        <div class="left-part col">
            <span id="NazivFakulteta"></span>
            <span>    </span>
            
            <span ><img class="levo" src="<?php echo base_url('icons/levo.svg')?>"></span>
            <span class="hehe">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span class="moderator"> Add Moderator </span>
            <hr>
            
                
            <div class="subjects">
                <li><textarea name="" id="input-smer" cols="10" rows="1" placeholder="Course name" maxlength="250"></textarea></li>
                <li><textarea name="" id="input-numberof" cols="10" rows="1" placeholder="Number of classes" maxlength="250"></textarea></li>
                
            </div>
            
            <div class="dugme">
                <button type="button" class="btnaddSmer" onclick="" > Add </button>
            </div>
        </div>
    </div>
    <div class="popup-background1">
                    <div class="popup-container">
                        <div class="popup-top">
                            <div class="top-image">
                                <img src="<?php echo base_url('icons/StudNet Exclamation.svg')?>">
                            </div>
    
                            <div class="top-message">
                                <span>Sorry you can't add faculty.</span>
                            </div>
                        </div>
                        <div class="popup-bottom">
                            <div class="bottom-message">
                                <pre><span>You must enter first</span></pre>
                            </div>
                            <div class="bottom-next">
                                <span>Redirect</span>
                            </div>
                        </div>
                    </div>
</div>
</div>
<div class="popup-background1">
                    <div class="popup-container">
                        <div class="popup-top">
                            <div class="top-image">
                                <img src="<?php echo base_url('icons/StudNet Exclamation.svg')?>">
                            </div>
    
                            <div class="top-message">
                                <span>Sorry you can't add faculty.</span>
                            </div>
                        </div>
                        <div class="popup-bottom">
                            <div class="bottom-message">
                                <pre><span>You must enter first</span></pre>
                            </div>
                            <div class="bottom-next">
                                <span>Redirect</span>
                            </div>
                        </div>
                    </div>
</div>

<?= script_tag('js_files/main_univerzitet.js') ?>
