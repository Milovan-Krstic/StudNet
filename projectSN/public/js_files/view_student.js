/**
 * @author Mladen Lulic
 * @category Register
 */

$(document).ready(function(){
     $.ajax({
            context:this,
            type: "POST",
            url: base_url + "/ajax-request-friend-data",
            data: {

                id:window.localStorage.getItem("IdKor")
            },
            dataType : "JSON",
            success: function (response) {
               //window.location.href = response['url'];
               //$(this).parent().parent().remove();
               let name = response['Ime']+" "+response['Prezime'];
                $("#name").text(name);
                $(".faculty .info-box .name").text(response['Faculty']);   
                $(".course .info-box .name").text(response['Course']);

                let indeks = response['IdGod']+"/"+response['IdNum'];
                $(".id .info-box .name").html(indeks);
                $(".country .info-box .name").text(response['Country']);
                $(".email .info-box .name").text(response['Email']);
                $("#user-picture").attr("src","localFiles/"+response['img']);
                if(parseInt(response['Friends'])===1){
                    $("#status").text("Friend");
                    $(".buttons input").val("Remove Friend");
                    $(".buttons").addClass("remove");
                    $(".buttons").removeClass("request");
                    $(".buttons input").on("click",function(){
                        $.ajax({
                            type: "POST",
                            url: base_url + "/ajax-request-remove-friend",
                            data: {

                                id:window.localStorage.getItem("IdKor")
                            },
                            dataType : "JSON",
                            success: function (response) {

                            }
                        });
                        $(this).prop("disabled", true);
                        $(this).val("Friend Removed");
                        //$(this).parent().addClass("request");
                        $(this).parent().removeClass("remove");

        
                        //Send request
                        });
                    
                }
                else if(parseInt(response['Friends'])===2){
                    $("#status").text("None");
                    $(".buttons input").val("Send Friend Request")
                    $(".buttons").addClass("request");
                    $(".buttons").removeClass("remove");
                    $(".buttons input").on("click",function(){
                         $.ajax({
                                type: "POST",
                                url: base_url + "/ajax-request-send-friend",
                                data: {

                                    id:window.localStorage.getItem("IdKor")
                                },
                                dataType : "JSON",
                                success: function (response) {

                                }
                            });
                            $(this).prop("disabled", true);
                            $(this).val("Request sent");
                            $(this).parent().removeClass("request");
                            //$(this).parent().addClass("remove");
                            //$(this).valid();
                            //Send request
                    });
                }
                else if(parseInt(response['Friends'])===0){
                    $("#status").text("Requested");
                    $(".buttons input").val("Request Sent");
                    $(".buttons input").prop("disabled", true);
                    
                    
                }


            }
        });

 
    //$(".buttons input").val("Send Friend Request")
    //$(".buttons").addClass("request");
    //$(".buttons").removeClass("remove");
    
    function AddFriends(){
        $.ajax({
            type: "POST",
            url: base_url + "/ajax-request-send-friend",
            data: {

                id:window.localStorage.getItem("IdKor")
            },
            dataType : "JSON",
            success: function (response) {
                
            }
        });
         $(this).prop("disabled", true);
        $(this).val("Request sent");
        $(this).parent().removeClass("request");
        $(this).parent().addClass("remove");
        //Send request
    
    }


    $(".buttons.request input").on("click",function() {
       
        $.ajax({
            type: "POST",
            url: base_url + "/ajax-request-send-friend",
            data: {

                id:window.localStorage.getItem("IdKor")
            },
            dataType : "JSON",
            success: function (response) {
                
            }
        });
         $(this).prop("disabled", true);
        $(this).val("Request sent");
        $(this).parent().removeClass("request");
        $(this).parent().addClass("remove");
        //Send request
    })
      $(".buttons.remove input").on("click",function() {
       
        $.ajax({
            type: "POST",
            url: base_url + "/ajax-request-remove-friend",
            data: {

                id:window.localStorage.getItem("IdKor")
            },
            dataType : "JSON",
            success: function (response) {
                
            }
        });
        $(this).val("Send Friend Request");
        $(this).parent().addClass("request");
        $(this).parent().removeClass("remove");
        
        
        //Send request
    })
});