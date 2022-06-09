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

    <?= script_tag('js_files/header_univerzitet.js') ?>
    
    <title>StudNet Main</title>
</head>
<body>
    <div class="header">
        <div class="logo">
            <img src="<?= base_url("images/StudNet Logo.svg") ?>" alt="StudNet">
        </div>

        <div class="header-info-Admin">
            <div class="userAdmin">
                <img src="<?= base_url("images/StudNet Profile Picture Red.svg")?>" alt="">
                <div class="user-info-Admin">
                    <span id="header-name">University name</span><br>
                </div>
            </div>      
            <div class="options">
              <img src="<?= base_url("icons/StudNet Options Caret.svg")?>" alt="">
            </div>
            
            <div class="dropdown-options" style="height: 190px">
                <div class="option-bottom">
                    <hr>
                    <div class="option">
                      <img src="<?= base_url("icons/StudNet LogOut.svg")?>" alt="">
                        <span id="logout">Log Out</span>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    