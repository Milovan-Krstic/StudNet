<html lang="en">
<head>
    
    <?= link_tag('bootstrap/css/bootstrap.min.css') ?>
    <?= link_tag('bootstrap/js/bootstrap.min.js') ?>
    <?= link_tag('css_files/header_student.css') ?>
    <?= link_tag('bootstrap/css/bootstrap.min.css') ?>
    
    <?= script_tag('jquery/jquery-3.6.0.min.js') ?>
    
    <script>
        var base_url = "<?= base_url() ?>";
    </script>

    <?= script_tag('js_files/header_admin.js') ?>
    
    <title>StudNet Main</title>
</head>
<body>
    <div class="header">
        <div class="logo">
            <img src="<?= base_url("images/StudNet Logo.svg") ?>" alt="StudNet">
        </div>

        <div class="header-mainAdmin">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 576 512" style="enable-background:new 0 0 576 512;" xml:space="preserve">
        <style type="text/css">
            .st0{fill:#F0F5F5;}
        </style>
        <g>
            <path class="st0" d="M575.8,255.5c0,18-15,32.1-32,32.1h-32l0.7,160.1c0,2.8-0.2,5.4-0.5,8.1V472c0,22.1-17.9,40-40,40h-16   c-1.1,0-2.2-0.9-3.3-0.1c-1.4-0.8-2.8,0.1-4.2,0.1H392c-22.1,0-40-17.9-40-40v-88c0-17.7-14.3-32-32-32h-64c-17.7,0-32,14.3-32,32   v88c0,22.1-17.9,40-40,40h-55.9c-1.5,0-3-0.1-4.5-0.2c-1.2,0.1-2.4,0.2-3.6,0.2h-16c-22.1,0-40-17.9-40-40V360c0-0.9,0-1.9,0.1-2.8   v-69.6H32c-18,0-32-14.1-32-32.1c0-9,3-17,10-24L266.4,8c7-7,15-8,22-8s15,2,21.1,7l255.3,224.5   C572.8,238.5,576.9,246.5,575.8,255.5L575.8,255.5z"/>
        </g>
        </svg>
        </div>
        
        
        
        <div class="header-info-Admin">
            <div class="userAdmin">
                <img src="<?= base_url("images/StudNet Profile Picture Red.svg")?>" alt="">
                <div class="user-info-Admin">
                    <span id="header-name">Admin name</span><br>
                </div>
            </div>      
            <div class="options">
              <img src="<?= base_url("icons/StudNet Options Caret.svg")?>" alt="">
            </div>
            
            <div class="dropdown-options" >
                <div class="option-bottom">
                    <div class="option">
                      <img src="<?= base_url("icons/StudNet LogOut.svg")?>" alt="">
                        <span id="logout">Log Out</span>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    