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
                <img src="" alt="">
                <span></span>
            </div>
            <div class="notifications">
                <img src="" alt="">
            </div>
            <div class="options">
                <img src="" alt="">
            </div>

            <div class="dropdown-notifications">
                <span>Friend requests</span>
                <hr>
                <div class="request">
                    <div class="request-user">
                        <img src="" alt="">
                        <span></span>
                    </div>
                    <div class="request-buttons">
                        <input type="button" value="Accept" class="request-accept">
                        <input type="button" value="Decline" class="request-decline">
                    </div>
                </div>
            </div>

            <div class="dropdown-options">
                <div class="option-top">
                    <div class="option">
                        <img src="" alt="">
                        <span></span>
                    </div>
                </div>
                <hr>
                <div class="option-bottom">
                <div class="option">
                        <img src="" alt="">
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    