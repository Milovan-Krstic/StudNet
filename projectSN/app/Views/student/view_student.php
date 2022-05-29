<?= link_tag('css_files/view_student.css') ?>

<div class="main">
    <div class="profile-box">
        <div class="profile-picture">
            <img src="images/StudNet Profile Picture Default.svg" alt="" id="user-picture">
        </div>
        <span id="name">Name Surname</span>
        <span id="status">None</span>
        <hr>
        <div class="info">
            <div class="row faculty">
                <img src="icons/StudNet Faculty.svg" alt="">
                <div class="info-box">
                    <span class="text">Faculty:</span>
                    <span class="name">Elektrotehnicki fakultet Univerziteta u Beogradu</span>
                </div>
            </div>

            <div class="row course">
                <img src="icons/StudNet Course.svg" alt="">
                <div class="info-box">
                    <span class="text">Course:</span>
                    <span class="name">Singals and Systems</span>
                </div>
            </div>

            <div class="row id">
                <img src="icons/StudNet Index.svg" alt="">
                <div class="info-box">
                    <span class="text">Student ID: </span>
                    <span class="name">2019/0123</span>
                </div>
            </div>

            <div class="row country">
                <img src="icons/StudNet Location.svg" alt="">
                <div class="info-box">
                    <span class="text">Country:</span>
                    <span class="name">Serbia</span>
                </div>
            </div>

            <div class="row email">
                <img src="icons/StudNet Email.svg" alt="">
                <div class="info-box">
                    <span class="text">E-mail:</span>
                    <span class="name">sn190123@student.etf.bg.ac.rs</span>
                </div>
            </div>

        </div>

        <div class="bio">
            <textarea id="biography" cols="3" rows="3" placeholder="Add your bio..." max-rows="3" maxlength="120" disabled="true"></textarea>
        </div>

        <div class="profile-options">
            <div class="buttons">
                <input type="button" value="">
            </div>
        </div>
    </div>
</div>

<script src="/js_files/view_student.js"></script>