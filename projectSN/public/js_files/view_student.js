$(document).ready(function(){
    
    // Initialize page
    // Status - friend or none

    //If friend
    // $(".buttons input").val("Remove Friend")
    // $(".buttons input").addClass("remove");
    // $(".buttons input").removeClass("request");

    // else
    $(".buttons input").val("Send Friend Request")
    $(".buttons").addClass("request");
    $(".buttons").removeClass("remove");


    $(".buttons.request input").click(function() {
        $(this).prop("disabled", true);
        $(this).val("Request sent");
        $(this).parent().removeClass("request");
        //Send request
    })
    
});