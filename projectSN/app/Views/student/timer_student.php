<?= link_tag('css_files/timer_student.css') ?>

<div class="main">
    <div class="box">
        <div class="info">
            <span id="text">Welcome to the Timer</span>
            <br>
            <span id="message">Please set up the time</span>
        </div>
        <div class="timer-box">
            <div class="up">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="left" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 384 384" style="enable-background:new 0 0 384 384;" xml:space="preserve">
                <style type="text/css">
                    .st0{fill:#E5E5E5;}
                </style>
                <path class="st0" d="M352,303.9c-8.2,0-16.4-3.1-22.6-9.4L192,157.2L54.6,294.6c-12.5,12.5-32.8,12.5-45.2,0s-12.5-32.8,0-45.2  l160-160c12.5-12.5,32.8-12.5,45.2,0l160,160c12.5,12.5,12.5,32.8,0,45.2C368.4,300.8,360.2,303.9,352,303.9z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="right" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 384 384" style="enable-background:new 0 0 384 384;" xml:space="preserve">
                <style type="text/css">
                    .st0{fill:#E5E5E5;}
                </style>
                <path class="st0" d="M352,303.9c-8.2,0-16.4-3.1-22.6-9.4L192,157.2L54.6,294.6c-12.5,12.5-32.8,12.5-45.2,0s-12.5-32.8,0-45.2  l160-160c12.5-12.5,32.8-12.5,45.2,0l160,160c12.5,12.5,12.5,32.8,0,45.2C368.4,300.8,360.2,303.9,352,303.9z"/>
                </svg>
            </div>
            <div class="time">
                <span id="hours">00</span>
                <span>:</span>
                <span id="minutes">00</span>
            </div>
            <div class="down">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="left" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 384 384" style="enable-background:new 0 0 384 384;" xml:space="preserve">
                <style type="text/css">
                    .st0{fill:#E5E5E5;}
                </style>
                <path class="st0" d="M352,80.1c-8.2,0-16.4,3.1-22.6,9.4L192,226.8L54.6,89.4c-12.5-12.5-32.8-12.5-45.2,0s-12.5,32.8,0,45.2  l160,160c12.5,12.5,32.8,12.5,45.2,0l160-160c12.5-12.5,12.5-32.8,0-45.2C368.4,83.2,360.2,80.1,352,80.1z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="right" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 384 384" style="enable-background:new 0 0 384 384;" xml:space="preserve">
                <style type="text/css">
                    .st0{fill:#E5E5E5;}
                </style>
                <path class="st0" d="M352,80.1c-8.2,0-16.4,3.1-22.6,9.4L192,226.8L54.6,89.4c-12.5-12.5-32.8-12.5-45.2,0s-12.5,32.8,0,45.2  l160,160c12.5,12.5,32.8,12.5,45.2,0l160-160c12.5-12.5,12.5-32.8,0-45.2C368.4,83.2,360.2,80.1,352,80.1z"/>
                </svg>
            </div>
        </div>
        <div class="buttons">
            <input type="button" id="start" value="Start" disabled="true">
            <input type="button" id="reset" value="Reset" disabled="true">
            <input type="button" id="stop" value="Stop" disabled="true">
        </div>
    </div>
</div>

<script src="/js_files/timer_student.js"></script>