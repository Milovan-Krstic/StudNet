<html lang="en">
<head>
    
    <?= link_tag('bootstrap/css/bootstrap.min.css') ?>
    <?= link_tag('bootstrap/js/bootstrap.min.js') ?>
    <?= link_tag('css_files/header_moderator.css') ?>
    <?= link_tag('bootstrap/css/bootstrap.min.css') ?>
    
    <?= script_tag('jquery/jquery-3.6.0.min.js') ?>
    
    <script>
        var base_url = "<?= base_url() ?>";
    </script>

    <?= script_tag('js_files/header_student.js') ?>
    
    <title>StudNet Main</title>
</head>
<body>
    <div class="header">
        <div class="logo">
            <img src="<?= base_url("images/StudNet Logo.svg") ?>" alt="StudNet">
        </div>

        <div class="header-info">
            <div class="user">
                <img src="images/StudNet Profile Picture Red.svg" alt="Profile picture">
                <div class="user-info">
                    <span id="header-name">Djordje Popara</span><br>
                    <span id="header-role">Moderator</span>
                </div>
            </div>
            
            <div class="options">
                <img src="icons/StudNet Options Caret.svg" alt="Options">
            </div>
           
            <div class="dropdown-options">
                <hr>
                <div class="option-bottom">
                    <div class="option">
                    <img src="icons/StudNet LogOut.svg">
                        <span id="logout">Log Out</span>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    