<?= link_tag('css_files/main_student.css') ?>

<div class="container-fluid main">
    <div class="row">
        <div class="left-part col">
            <span>Subjects</span>
            <hr>
            <div class="subjects">
                
                
                <ul class="course">
                  
                    <ul class="semester">
                        
                    </ul>
                <ul>
            </div>
        </div>

        <div class="center-part col-7">
            <div class="row center-search">
                <div class="tags">
                    <div class="tag">
                        <span>#math</span>
                    </div>
                    <div class="tag">
                        <span>#science</span>
                    </div>
                    <div class="tag">
                        <span>#computer science</span>
                    </div>
                    <div class="tag">
                        <span>#science</span>
                    </div>
                    <div class="tag">
                        <span>#science</span>
                    </div>
                    <div class="tag">
                        <span>#science</span>
                    </div>
                    
                </div>
                <div class="header-search">
                    <div class="search-bar">
                        <img src="icons/StudNet Search.svg" alt="-" class="search-image">
                        <input type="text" name="input-search" id="header-search" placeholder="Search" maxlength="12">

                    </div>
                </div>

                <div class="row friend-chat">
                    <div class="friend">
                        <img src="images/StudNet Profile Picture Red.svg" alt="">
                        <span>John Doe</span>
                    </div>

                    <div class="chat-options">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="call" x="0px" y="0px" viewBox="0 0 511.3 512" style="enable-background:new 0 0 511.3 512;" xml:space="preserve">
                        <style type="text/css">
                            .circle{fill:#F0F5F5;}
                            .phone{fill:#67DBB8;}
                        </style>
                        <circle class="circle" cx="255.7" cy="256" r="251"/>
                        <path class="phone" d="M372.3,315.9l-10.6,46.1c-1.5,6.5-7.2,11.1-13.9,11.1c-115.3,0-209.1-93.8-209.1-209.1  c0-6.7,4.6-12.4,11.1-13.9l46.1-10.6c6.7-1.6,13.6,1.9,16.4,8.3l21.3,49.6c2.5,5.8,0.8,12.6-4.1,16.7l-24.6,19.8  c15.5,31.6,41.2,57.4,72.9,72.9l20.1-24.6c4-4.9,10.8-6.6,16.7-4.1l49.6,21.3C370,302.2,373.8,309.2,372.3,315.9z"/>
                        </svg>


                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="close" x="0px" y="0px" viewBox="0 0 511.3 512" style="enable-background:new 0 0 511.3 512;" xml:space="preserve">
                        <style type="text/css">
                            .circle{fill:#F0F5F5;}
                            .close{fill:#444444;}
                        </style>
                        <circle class="circle" cx="255.7" cy="256" r="251"/>
                        <path class="close" d="M338.1,332.6c5,6.1,4.2,15.1-1.8,20.1c-2.7,2.2-5.9,3.3-9.1,3.3c-4.1,0-8.2-1.8-11-5.1l-60.5-72.9l-60.4,72.5  c-2.8,3.4-6.9,5.1-11,5.1c-3.2,0-6.5-1.1-9.1-3.3c-6.1-5-6.9-14.1-1.8-20.1l63.8-76.6l-63.8-76.2c-5.1-6.1-4.2-15.1,1.8-20.1  c6.1-5.1,15.1-4.2,20.1,1.8l60.5,72.5l60.4-72.5c5-6.1,14.1-6.9,20.1-1.8c6.1,5,6.9,14.1,1.8,20.1L274.2,256L338.1,332.6z"/>
                        </svg>
                    </div>
                </div>
            </div>


            <div class="row center-chat">
                <div class="message-scroll col-12">
                    
                </div>

            </div>

            <div class="row center-type">
                <div class="type-box col-12">
                    <textarea name="" id="input-message" cols="10" rows="1" placeholder="Type..." maxlength="250"></textarea>
                    
                    <img src="icons/StudNet Plus.svg" alt="+">
                </div>
            </div>

        </div>

        <div class="right-part col">
            <span>Friends</span>
            <hr>
            <div class="friends-list">
                <div class="friends-scroll">
                  
                    
                </div>
            </div>
        </div>
    </div>
</div>

<div class="popup-background">
    <div class="popup-container">
        <div class="popup-top">
            <div class="top-image">
                <img>
            </div>

            <div class="top-message">
                <span></span>
            </div>
        </div>
        <div class="popup-bottom">
            <div class="bottom-message">
                <pre class="preclass"><span></span></pre>
            </div>
            <div class="bottom-next">
                <span></span>
            </div>
        </div>
    </div>
</div>

<?= script_tag('js_files/main_student.js') ?>

