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
    <meta charset="UTF-8">
</head>
<body>
    <div class="header">
        <div class="logo">
            <img src="<?= base_url("images/StudNet Logo.svg") ?>" alt="StudNet">
        </div>

        <div class="header-search">
            <div class="search-bar">
                <img src="icons/StudNet Search.svg" class="search-image">
                <input type="text" name="input-search" id="header-search" placeholder="Search" maxlength="33">
            </div>
            <div class="dropdown-search">
                <div class="search-scroll">
                    <div class="search-user">
                        <div>
                        <img src="images/StudNet Profile Picture Default.svg" alt="">
                        <span>John Doe, 4th year, Elektrotehnicki fakultet Univerziteta u Beogradu, Serbia</span>
                        </div>

                        <span class="status-friend">Friend</span>

                    </div>
                    <hr>
                    <div class="search-user">
                        <div>
                        <img src="images/StudNet Profile Picture Default.svg" alt="">
                        <span>John Doe, 4th year, Elektrotehnicki fakultet Univerziteta u Beogradu, Serbia</span>
                        </div>

                        <span class="status-none">None</span>

                    </div>
                    <hr><div class="search-user">
                        <div>
                        <img src="images/StudNet Profile Picture Default.svg" alt="">
                        <span>John Doe, 4th year, Elektrotehnicki fakultet Univerziteta u Beogradu, Serbia</span>
                        </div>

                        <span class="status-none">None</span>

                    </div>

                    <hr><div class="search-user">
                        <div>
                        <img src="images/StudNet Profile Picture Default.svg" alt="">
                        <span>John Doe, 4th year, Elektrotehnicki fakultet Univerziteta u Beogradu, Serbia</span>
                        </div>

                        <span class="status-friend">Friend</span>

                    </div>

                    <hr><div class="search-user">
                        <div>
                        <img src="images/StudNet Profile Picture Default.svg" alt="">
                        <span>John Doe, 4th year, Elektrotehnicki fakultet Univerziteta u Beogradu, Serbia</span>
                        </div>

                        <span class="status-friend">Friend</span>

                    </div>

                    <hr><div class="search-user">
                        <div>
                        <img src="images/StudNet Profile Picture Default.svg" alt="">
                        <span>John Doe, 4th year, Elektrotehnicki fakultet Univerziteta u Beogradu, Serbia</span>
                        </div>

                        <span class="status">Friend</span>

                    </div>
                </div>

            </div>
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
