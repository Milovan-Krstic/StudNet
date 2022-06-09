<?= link_tag('css_files/register_student_moderator_university.css') ?>

<div class="content">
        <div class="sign-up-form">
            <div class="title">Sign Up as an University</div>
            
            <form action="#">
                <div class="user-details container">
                    <hr style="border-top:2px solid #e6e6e6">
                    <div class="section">
                        
                        <div class="row">
                            <div class="input-box col-12">
                                <input type="text" class="username" id="username" placeholder="Username">
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-box col-12">
                                <input type="text" class="name" id="name" placeholder="Name">
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-box col-12">
                                <input type="date" class="date_of_establishment" id="date_of_establishment" placeholder="Date of establishment">
                            </div>
                        </div>
                        <div class="row">
                            
                            <div class="input-box col-12">
                                <div class="dropdown-select" tabindex="-1">
                                    <div class="select-btn">
                                            <span id="s1">Country</span>
                                            <img src="<?= base_url("icons/StudNet Caret.svg") ?>" alt="+">
                                    </div>
                                    <div class="dropdown-content wide">
                                        <ul class="options" name ="s1">

                                        </ul>
                                    </div>
                                </div>
                            </div>  
                            
                        </div>
                        <div class="row">
                            <div class="input-box col-12">
                                <input type="text" class="email" id="email" placeholder="E-mail">
                            </div>
                        </div>
                        
                    </div>

                    <div class="section">
                        <div class="row">
                            <div class="input-box col-12">
                                <input type="password" class="password" id="password" placeholder="Password">
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-box col-12">
                                <input type="password" class="password_confirm" id="password_confirm" placeholder="Confirm your password">
                            </div>
                        </div>
                        <div class="row">
                            <div class="help col-12">
                                <span>Need a help? Click here!</span>
                            </div>
                        </div> 
                    </div>
                    <hr style="border-top:2px solid #e6e6e6">
                    <div class="button">
                    <input type="button" value="Sign Up">
                    </div>
                    <div class="redirect">
                        <a href="">Choose another option</a>
                    </div>
                    
                </div>
                

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
                                <span>-Username must contain a letter as a first character and letters, numbers or underscores.</span><br>
                                <br><span>-Name must have a capital letter, followed by 1-15 lowercase letters.</span><br>
                                <br><span>-Surname must have a capital letter, followed by 1-15 lowercase letters.</span><br>
                                <br><span>-E-mail must be in an e-mail form (abc@def.com).</span><br>
                                <br><span>-Date of birth can't a date in the future.</span><br>
                                <br><span>-Student ID must be unique for each faculty.</span><br>
                                <br><span>-Password must contain at least one uppercase letter, lowercase letter, number, symbols: !@#$%^&*</span><br>
                                <span>-Minimal password length is 6 characters!</span>
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

<?= script_tag('js_files/register_university.js') ?>