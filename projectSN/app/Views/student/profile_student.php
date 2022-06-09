<?= link_tag('css_files/profile_student.css') ?>

<div class="main">
    <div class="profile-box">
        <div class="profile-picture">
            <img src="images/StudNet Profile Picture Default.svg" alt="" id="user-picture">
            <img src="icons/StudNet Camera.svg" alt="" id="change">
        
            <input type="file" id="imgUpload" name="file"  />
           
        </div>
        <span id="name">Djordje Popara</span>
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
                    <span class="name">Software Engineering</span>
                </div>
            </div>

            <div class="row id">
                <img src="icons/StudNet Index.svg" alt="">
                <div class="info-box">
                    <span class="text">Student ID: </span>
                    <span class="name">2019/0460</span>
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
                    <span class="name">pd190460d@student.etf.bg.ac.rs</span>
                </div>
            </div>

        </div>

        <div class="bio">
            <textarea id="biography" cols="3" rows="3" placeholder="Add your bio..." max-rows="3" maxlength="120" disabled="true"></textarea>
        </div>

        <div class="profile-options">
            <span id="edit">Edit profile</span>
            <div class="buttons">
                <input type="button" id="save" value="Save changes" disabled = "true">
                <input type="button" id="discard" value="Discard changes">
            </div>
        </div>
    </div>
</div>

<script src="/js_files/profile_student.js"></script>