$(document).ready(function() {

    $(".button-university").click(function(){

        $.ajax({
            type: "POST",
            url: base_url + "/ajax-request-redirect",
            data: {
                page : "register_university"
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
                page : "register_advertiser"
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
                page : "/"
            },
            dataType : "JSON",
            success: function (response) {
                window.location.href = response['url'];
            }
        });
    });
    


    



});
