
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="<?php echo base_url('bootstrap/css/bootstrap.css');?>" type="text/css">
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script type="text/javascript" src="<?php echo base_url('bootstrap/js/bootstrap.js');?>"><</script>
        
        
    <link rel="stylesheet" href="<?php echo base_url('css_files/header.css');?>">
    <link rel="stylesheet" href="<?php echo base_url('css_files/style_register.css');?>">

    <script type="text/javascript" src="<?php echo base_url('jquery/jquery-3.6.0.min.js');?>"></script>

    

  
    <title>Document</title>
</head>
<body>
    <div class="header">
        <img src="<?php echo base_url('images/StudNetLogo.svg')?>" alt="StudNet" class="logo">
       
    </div>
    
    <div class="content">
        <div class="container">
            <div class="title">Sign Up as a Student</div>
            <hr style="border-top:2px solid #e6e6e6">
            <form action="#">
                <div class="user-details">

                    <div class="section">
                        <div class="row">
                            <div class="input-box col-6">
                                <input type="text" class="username" id="username" placeholder="Username">
                            </div>
                            <div class="input-box col-6">
                                <input type="date" class="date_of_birth" id="date_of_birth" placeholder="Date of birth">
                            </div>
                        </div>

                        <div class="row">
                            <div class="input-box col-6">
                                <input type="text" class="name" id="name" placeholder="Name">
                            </div>
                            <div class="input-box col-6">
                                
                                <div class="dropdown-select" tabindex="-1">
                                    <div class="select-btn">
                                            <span id="s1">Country</span>
                                            <img src="<?php echo base_url('icons/caret-down-solid.svg')?>" alt="+">
                                    </div>
                                    <div class="dropdown-content">
                                        <ul class="options" name ="s1">
                                            <li>Serbia</li>
                                            <li>Montenegro</li>
                                            <li>Serbia</li>
                                            <li>Montenegro</li>
                                        </ul>
                                    </div>
                                </div>
                                 
                            </div>
                        </div>

                        <div class="row">
                            <div class="input-box col-6">
                                <input type="text" class="surname" id="surname" placeholder="Surname">
                            </div>
                            <div class="input-box col-6">
                                <input type="email" class="email" id="email" placeholder="E-mail">
                            </div>
                        </div>
                    </div>

                    <div class="section">
                        <div class="row">
                            <div class="input-box col-12">
                                <!--<input type="text" class="faculty" id="faculty" placeholder="Faculty" required>-->

                                <div class="dropdown-select" tabindex="-1">
                                    <div class="select-btn">
                                            <span id="s2">Faculty</span>
                                            <img src="<?php echo base_url('icons/caret-down-solid.svg')?>" alt="+">
                                    </div>
                                    <div class="dropdown-content wide">
                                        <ul class="options" name="s2">
                                            <li>ETF</li>
                                            <li>FTN</li>
                                            <li>MATF</li>
                                            <li>EKOF</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="input-box col-12">
                                <!--<input type="text" class="course" id="course" placeholder="Course" required>-->

                                <div class="dropdown-select" tabindex="-1">
                                    <div class="select-btn">
                                            <span id="s3">Course</span>
                                            <img src="<?php echo base_url('icons/caret-down-solid.svg')?>" alt="+">
                                    </div>
                                    <div class="dropdown-content wide">
                                        <ul class="options" name="s3">
                                            
                                            
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="input-box col-6">
                                <!--<input type="text" class="id_year" id="id_year" placeholder="ID Year" required>-->

                                <div class="dropdown-select" tabindex="-1">
                                    <div class="select-btn">
                                            <span id="s4">ID Year</span>
                                            <img src="<?php echo base_url('icons/caret-down-solid.svg')?>" alt="+">
                                    </div>
                                    <div class="dropdown-content">
                                        <ul class="options" name="s4">
                                            <li>ETF</li>
                                            <li>FTN</li>
                                            <li>MATF</li>
                                            <li>EKOF</li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                            <div class="input-box col-6">
                                <!--<input type="text" class="id_number" id="id_number" placeholder="ID Number" required>-->

                                <div class="dropdown-select" tabindex="-1">
                                    <div class="select-btn">
                                            <span id="s5">ID Number</span>
                                            <img src="<?php echo base_url('icons/caret-down-solid.svg')?>" alt="+">
                                    </div>
                                    <div class="dropdown-content">
                                        <ul class="options" name="s5">
                                            <li>ETF</li>
                                            <li>FTN</li>
                                            <li>MATF</li>
                                            <li>EKOF</li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="section">
                        <div class="row">
                            <div class="input-box col-6">
                                <input type="password" class="password" id="password" placeholder="Password">
                            </div>
                            <div class="input-box col-6">
                                <input type="password" class="password_confirm" id="password_confirm" placeholder="Confirm your password">
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div class="button">
                    <input type="submit" value="Sign Up">
                </div>
                <div class="redirect">
                    <label>Not a student?</label>
                    <a href="#">Sign up as...</a>
                </div>

                <div class="popup-background">
                    <div class="popup-container">
                        <div class="popup-top">
                            <div class="top-image">
                                <img src="<?php echo base_url('icons/StudNet Exclamation.svg')?>">
                            </div>
    
                            <div class="top-message">
                                <span>Sorry you can't sign up...</span>
                            </div>
                        </div>
                        <div class="popup-bottom">
                            <div class="bottom-message">
                                <span>You must enter first</span>
                            </div>
                            <div class="bottom-next">
                                <span>Redirect</span>
                            </div>
                        </div>
                    </div>
                </div>

            </form>
            
        </div>
    </div>

    <script src="/js_files/register_student_script.js"></script>
</body>
</html>