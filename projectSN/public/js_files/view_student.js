$(document).ready(function(){
    
    
    
    // Initialize page
    // Status - friend or none

    //If friend
    //$(".buttons input").val("Remove Friend")
    //$(".buttons input").addClass("remove");
    //$(".buttons input").removeClass("request");

    // else
    //$(".buttons input").val("Send Friend Request")
    //$(".buttons").addClass("request");
    //$(".buttons").removeClass("remove");


    $(".buttons.request input").click(function() {
        $(this).prop("disabled", true);
        $(this).val("Request sent");
        $(this).parent().removeClass("request");
        //Send request
        
        /* $.ajax({
            context:this,
            type: "POST",
            url: base_url + "/ajax-request-send-friend",
            data: {
                option : chosen_option
            },
            dataType : "JSON",
            success: function (response) {
               //window.location.href = response['url'];
               //$(this).parent().parent().remove();

            
            }
        });*/
        
        
    })
    $("#name").text(window.localStorage.getItem("Name"));
    $(".row faculty .info-box .name").text(window.localStorage.getItem("Faculty"));   
    $(".row course .info-box .name").text(window.localStorage.getItem("Course"));
    $(".row id .info-box .name").text(window.localStorage.getItem("Indeks"));
    $(".row country .info-box .name").text(window.localStorage.getItem("Country"));
    $(".row email .info-box .name").text(window.localStorage.getItem("Email"));
    if(window.localStorage.getItem("Friends")===1){
        $(".buttons input").val("Remove Friend")
        $(".buttons input").addClass("remove");
        $(".buttons input").removeClass("request");
    }

});