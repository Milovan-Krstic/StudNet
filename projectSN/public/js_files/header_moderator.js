/**
 * @author Djordje Popara 2019-0460
 * @category Moderator
 */
$(document).ready(function(){

    //Header animations
    /**
     * Drops down options menu, logout displayed
     */
    $(".options img").click(function(){
        $(".dropdown-options").toggleClass("active");
    });

    /**
     * Hides dropdown menu on click of a logo
     */
    $(".logo img").on("click", function(){
        $(".dropdown-options").removeClass("active");
    });

    /**
     * Hides dropdown menu on click of a white space
     */
    $(".container-fluid").on("click", function(){
        $(".dropdown-options").removeClass("active");
    });

    /**
     * Redirects to moderator main page if house icon is clicked (header_moderator_options.php)
     */
    $(".header-main svg").click(function(){
        $.ajax({
            type: "POST",
            url: base_url + "/ajax-request-redirect",
            data: {
                page : "moderator-main"
            },
            dataType : "JSON",
            success: function (response) {
               window.location.href = response['url'];
            }
        });
    })


    /**
     * Sends moderator to login page as it is only option available (log out click)
     */
    $(".option").click(function(){

        option = "";
        
        $.ajax({
            type: "POST",
            url: base_url + "/ajax-request-redirect",
            data: {
                page : option
            },
            dataType : "JSON",
            success: function (response) {
               window.location.href = response['url'];
            }
        });
    })

    /**
     * Sends moderator to profile page
     */
    $(".header-info .user").click(function(){

        option = "moderator-profile";
        
        $.ajax({
            type: "POST",
            url: base_url + "/ajax-request-redirect",
            data: {
                page : option
            },
            dataType : "JSON",
            success: function (response) {
               window.location.href = response['url'];
            }
        });
    })

    
});