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
    
    <title>StudNet Main</title>
</head>
<body>
    <div class="header">
        <div class="logo">
            <img src="<?= base_url("images/StudNet Logo.svg") ?>" alt="StudNet">
        </div>

        <div class="header-search">
            <div class="search-bar">
                <img src="icons/StudNet Search.svg">
                <input type="text" name="input-search" id="header-search">
            </div>
        </div>

        <div class="header-info">
            <div class="user">
                <img src="images/StudNet Profile Picture Red.svg" alt="Profile picture">
                <div class="user-info">
                    <span id="header-name">Djordje Popara</span><br>
                    <span id="header-index">2019/0460</span>
                </div>
            </div>
            <div class="notifications">
                <img src="icons/StudNet Notification Bell.svg" alt="Notifications">
            </div>
            
            <div class="options">
                <img src="icons/StudNet Options Caret.svg" alt="Options">
            </div>
            

            <div class="dropdown-notifications">
                <span>Friend requests</span>
                <hr>
                <div class="request-container">
                    <div class="request">
                        <div class="request-user">
                            <img src="images/StudNet Profile Picture Default.svg" alt="">
                            <span>John Doe</span>
                        </div>
                        <div class="request-buttons">
                            <input type="button" value="Accept" class="request-accept">
                            <input type="button" value="Decline" class="request-decline">
                        </div>
                    </div>
                    <div class="request">
                        <div class="request-user">
                            <img src="images/StudNet Profile Picture Default.svg" alt="">
                            <span>John Doe</span>
                        </div>
                        <div class="request-buttons">
                            <input type="button" value="Accept" class="request-accept">
                            <input type="button" value="Decline" class="request-decline">
                        </div>
                    </div>
                </div>
            </div>

            <div class="dropdown-options">
                <div class="option-top">
                    <div class="option">
                        <img src="icons/StudNet Ads.svg">
                        <span>Advertisements</span>
                    </div>
                    <div class="option">
                        <img src="icons/StudNet Timer.svg">
                        <span>Timer</span>
                    </div>
                    <div class="option">
                        <img src="icons/StudNet Calendar.svg">
                        <span>Plans</span>
                    </div>
                </div>
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
    