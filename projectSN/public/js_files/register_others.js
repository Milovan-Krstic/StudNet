/**
 * @author Djordje Popara 2019-0460
 * @category Register
 */

$(document).ready(function() {

    $(".button-university").click(function(){

        $.ajax({
            type: "POST",
            url: base_url + "/ajax-request-redirect",
            data: {
                page : "register-university"
            },
            dataType : "JSON",
            success: function (response) {
                window.location.href = response['url'];
            }
        });
    });

    $(".button-advertiser").click(function(){
        
        $.ajax({
            type: "POST",
            url: base_url + "/ajax-request-redirect",
            data: {
                page : "register-advertiser"
            },
            dataType : "JSON",
            success: function (response) {
                window.location.href = response['url'];
            }
        });
    });

    $(".redirect").click(function(){
        
        $.ajax({
            type: "POST",
            url: base_url + "/ajax-request-redirect",
            data: {
              page : "/register-student"

            },
            dataType : "JSON",
            success: function (response) {
                window.location.href = response['url'];
            }
        });
    });
    
    $(".header img").click(function(){
        $.ajax({
            type: "POST",
            url: base_url + "/ajax-request-redirect",
            data: {
                page : "/"
            },
            dataType : "JSON",
            success: function (response) {
                window.location.href = response['url'];
            }
        });
    })
    

});
