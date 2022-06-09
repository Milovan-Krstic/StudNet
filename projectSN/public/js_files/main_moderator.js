/**
 * @author Djordje Popara 2019-0460
 * @category Moderator
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


    // Add these dynamically
    $(".right-part .report").click(function(){
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

    $(".report-chat .friend").click(function(){
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

    // Context menu
    var lastTarget;

    $(".main")
    .on("contextmenu", function(event){

         lastTarget = $(event.target);

        if($(event.target).hasClass("message-box")) {
            event.preventDefault();

            $("#context-menu").css("top", event.pageY + "px");
            $("#context-menu").css("left", event.pageX + "px");

            $("#context-menu").addClass("active");
        }
        else {
            $("#context-menu").removeClass("active");
        }
    });

    $(".main").click(function(){
        $("#context-menu").removeClass("active");
    })

    // Context menu - delete

    $("#delete").click(function(){
        $("#context-menu").removeClass("active");
        lastTarget.parent().remove();
        //Remove message from database
    })

    // Context menu - penalty

    $("#penalty").click(function(){
        $("#context-menu").removeClass("active");
        $(".popup-background").addClass("popup-active");
    })

    $("#discard").click(function() {
        $(".popup-background").removeClass("popup-active");
    })

    $("#reason").on("keydown keyup", function(){
        if($(this).val().length != 0 && $("#penalty-points").val().length != 0) {
            $("#confirm").prop("disabled", "");
        }
        else {
            $("#confirm").prop("disabled", "disabled");
        }
    })

    $("#penalty-points")
    .on("change", function(){
        if($(this).val().length != 0 && $("#reason").val().length != 0) {
            $("#confirm").prop("disabled", "");
        }
        else {
            $("#confirm").prop("disabled", "disabled");
        }
    })
    .on("keypress click", function(event){
        event.preventDefault();
    })
    
});