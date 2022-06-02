<?= link_tag('css_files/register_others.css') ?>

<div class="content">
    <div class="sign-up-form" style="margin-top: -5%">
        <div class="title">You are not a Student?</div><br>
        <div class="subtitle">Try signing up as:</div>
            <form action="#">
                <div class="user-details container">
                    <hr style="border-top:2px solid #e6e6e6; margin-top: 5%">
                    <div class="section">
                        <div class="row">
                            <div class="input-box col-12">
                                <input type="button" class="button-university"value="University">
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-box col-12">
                                <input type="button" class="button-advertiser"value="Advertiser">
                            </div>
                        </div>
                    </div>
                    
                    <div class="redirect">
                        <a href="">Back to the last page...</a>
                    </div>
                </div>  
            </form>
            
        </div>
    </div>
<?= script_tag('js_files/register_others.js') ?>