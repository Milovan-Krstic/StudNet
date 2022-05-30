
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
      <link rel="stylesheet" href="<?php echo base_url('css_files/AdminStyles.css');?>">
    <link rel="stylesheet" href="<?php echo base_url('css_files/buttons.css');?>">
    <script type="text/javascript" src="<?php echo base_url('jquery/jquery-3.6.0.min.js');?>"></script>

    

  
    <title>Document</title>
</head>
<body>
    <div class="header">
        <img src="<?php echo base_url('images/StudNetLogo.svg')?>" alt="StudNet" class="logo">  
        <a class="logoCenter" href="<?= base_url("$controller/index")?>"> <img src="<?php echo base_url('icons/house-solid.svg')?>" alt="StudNet" class="logoCenter">  </a>
    </div>

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


