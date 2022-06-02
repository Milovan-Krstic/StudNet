
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="<?php echo base_url('bootstrap/css/bootstrap.css');?>" type="text/css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script type="text/javascript" src="<?php echo base_url('bootstrap/js/bootstrap.js');?>"></script>
        
        
    <link rel="stylesheet" href="<?php echo base_url('css_files/header_guest.css');?>">
    <link rel="stylesheet" href="<?php echo base_url('css_files/login.css');?>">

    <script type="text/javascript" src="<?php echo base_url('jquery/jquery-3.6.0.min.js');?>"></script>

    

  
    <title>StudNet</title>
</head>
<body>
    
    
    <div class="content">
        <div class="container">
            <div class="title">Log Into StudNet</div>
            <hr style="border-top:2px solid #e6e6e6">
           
                <div class="user-details">

                    <div class="section">
                        <div class="row">
                            <div class="input-box col-12">
                                <input type="text" class="username" id="username" placeholder="Username" >
                            </div>
                            
                        </div>
                    

                    
                        <div class="row">
                            <div class="input-box col-12">
                                <input type="password" class="password" id="password" placeholder="Password" >
                            </div>
                        </div>
                    </div>
                </div>
                <div class="button">
                    <input type="submit" #id="inp" value="Log in">
                </div>
                <div class="redirect">
                    Don't have an account?
                    <?= anchor("$controller/Index","SignUp for StudNet")?> 
          
                    
                </div>

                <div class="popup-background">
                    <div class="popup-container">
                        <div class="popup-top">
                            <div class="top-image">
                                <img src="<?php echo base_url('icons/StudNet Exclamation.svg')?>">
                            </div>
    
                            <div class="top-message">
                                <span>Sorry you can't log in...</span>
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
    </div>
       

    <script src="js_files/login_script.js"></script>
</body>
</html>