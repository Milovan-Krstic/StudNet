/**
 * @author Djordje Popara 2019-0460
 * @category Student
 */

$(document).ready(function(){
    
    $("#course").click(function(){
        $(this).toggleClass("clicked");
        $(".semester").toggleClass("active");
    });

    $(".semester-name").click(function(){
        if($(this).next().hasClass("active")) {
            $(this).removeClass("clicked");
            $(".subject").removeClass("active");
        }
        else {
            $(".subject").removeClass("active");
            $(".semester-name").removeClass("clicked");
            $(this).next().toggleClass("active");
            $(this).toggleClass("clicked");
        }
    });

    $(".subject li").click(function(){
        $(".subject li").removeClass("clicked");
        $(this).toggleClass("clicked");
    });

    $("textarea").each(function () {
        this.setAttribute("style", "height:" + (this.scrollHeight) + "px;overflow-y:hidden;");
    }).on("input", function () {
        this.style.height = "37px";
        this.style.height = (this.scrollHeight) + "px";

        if($(this).val().length == 250) {
            $(this).addClass("max");
        }
        else {
            $(this).removeClass("max");
        }

    });

    $("textarea").keypress(function(e){
        if(e.which == 13) {
            //Submit text to the base
        }
    });


    // Add these dynamically
    $(".right-part .friend img").click(function(){
        $.ajax({
            type: "POST",
            url: base_url + "/ajax-request-redirect",
            data: {
                page : "student-view"
            },
            dataType : "JSON",
            success: function (response) {
               window.location.href = response['url'];
            }
        });
    })

    $(".friend-chat .friend").click(function(){
        $.ajax({
            type: "POST",
            url: base_url + "/ajax-request-redirect",
            data: {
                page : "student-view"
            },
            dataType : "JSON",
            success: function (response) {
               window.location.href = response['url'];
            }
        });
    })

    $(".request-user").click(function(){
        $.ajax({
            type: "POST",
            url: base_url + "/ajax-request-redirect",
            data: {
                page : "student-view"
            },
            dataType : "JSON",
            success: function (response) {
               window.location.href = response['url'];
            }
        });
    })

    $(".search-user").click(function(){
        $.ajax({
            type: "POST",
            url: base_url + "/ajax-request-redirect",
            data: {
                page : "student-view"
            },
            dataType : "JSON",
            success: function (response) {
               window.location.href = response['url'];
            }
        });
    })

    $(".tag").click(function(){
        $(".tag").removeClass("active");
        $(this).addClass("active");
    })

    $(".friend span").click(function(){
        setTimeout(() => {
            $(".tags").addClass("hidden");
            $(".center-part .header-search").addClass("hidden");

            $(".friend-chat").addClass("active");
        }, 350);
        
    })

    $("#close").click(function(){
        setTimeout(() => {
            $(".tags").removeClass("hidden");
            $(".center-part .header-search").removeClass("hidden");

            $(".friend-chat").removeClass("active");
        }, 350);
        
    })

    // Penalty points popup

    $("textarea").click(function(){
        // If student has penalty points do:

        // $(".top-image img").attr("src", "../icons/StudNet Exclamation.svg");
        // $(".top-message span").text("Sorry you can't write...");
        // $(".bottom-message span").text("You must wait for penalty points to expire!");
        // $(".bottom-next span").text("Return");
        // $(".popup-background").addClass("popup-active"); 
    })
    

    // Hide the popup
    $(".bottom-next").click(function(){
        $(".popup-background").removeClass("popup-active");
    })
});