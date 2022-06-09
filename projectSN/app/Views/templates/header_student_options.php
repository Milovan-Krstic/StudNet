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

    <?= script_tag('js_files/header_student.js') ?>
    
    <title>StudNet Main</title>
</head>
<body>
    <div class="header">
        <div class="logo">
            <img src="<?= base_url("images/StudNet Logo.svg") ?>" alt="StudNet">
        </div>

        <div class="header-main">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 576 512" style="enable-background:new 0 0 576 512;" xml:space="preserve">
        <style type="text/css">
            .st0{fill:#F0F5F5;}
        </style>
        <g>
            <path class="st0" d="M575.8,255.5c0,18-15,32.1-32,32.1h-32l0.7,160.1c0,2.8-0.2,5.4-0.5,8.1V472c0,22.1-17.9,40-40,40h-16   c-1.1,0-2.2-0.9-3.3-0.1c-1.4-0.8-2.8,0.1-4.2,0.1H392c-22.1,0-40-17.9-40-40v-88c0-17.7-14.3-32-32-32h-64c-17.7,0-32,14.3-32,32   v88c0,22.1-17.9,40-40,40h-55.9c-1.5,0-3-0.1-4.5-0.2c-1.2,0.1-2.4,0.2-3.6,0.2h-16c-22.1,0-40-17.9-40-40V360c0-0.9,0-1.9,0.1-2.8   v-69.6H32c-18,0-32-14.1-32-32.1c0-9,3-17,10-24L266.4,8c7-7,15-8,22-8s15,2,21.1,7l255.3,224.5   C572.8,238.5,576.9,246.5,575.8,255.5L575.8,255.5z"/>
        </g>
        </svg>
        </div>

        <div class="header-info">
            <div class="user">
                <img src="" alt="Profile picture">
                <div class="user-info">
                    <span id="header-name"></span><br>
                    <span id="header-index"></span>
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
    