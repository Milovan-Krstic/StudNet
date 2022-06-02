$(document).ready(function(){


    

   
          
               $.ajax({
                   url:"http://localhost:8080/LogIn/ajaxGetAdmin",
                   type:"POST",
                   dataType:"JSON",
                   success: function (response){
                       let tex= response['admin'].name;
                       let prezime =response['admin'].surname;
                       
                       let input =tex+" "+prezime;
                       $("#header-name").text(input);
                       
                    },
                    error :function (){
                        alert("greska");
                    }
                    
                   
               })
       






    //Header animations
    $(".notifications img").click(function(){
        $(".dropdown-search").removeClass("active");
        $(".dropdown-options").removeClass("active");
        $(".dropdown-notifications").toggleClass("active");
        
    });

    $(".options img").click(function(){
        $(".dropdown-search").removeClass("active");
        $(".dropdown-notifications").removeClass("active");
        $(".dropdown-options").toggleClass("active");
    });

    $(".logo img").on("click", function(){
        $(".dropdown-options").removeClass("active");
        $(".dropdown-notifications").removeClass("active");
        $(".dropdown-search").removeClass("active");
    });

    $(".header-search").on("click", function(){
        $(".dropdown-options").removeClass("active");
        $(".dropdown-notifications").removeClass("active");
    });

    $(".container-fluid").on("click", function(){
        $(".dropdown-options").removeClass("active");
        $(".dropdown-notifications").removeClass("active");
        $(".dropdown-search").removeClass("active");
    });


    
     $(".header-mainAdmin svg").click(function(){
       $.ajax({
            type: "POST",
            url: base_url + "/ajax-request-AdminHome",
            data: {
                page : "Admin"
            },
            dataType : "JSON",
            success: function (response) {
               window.location.href = response['url'];
            }
        });
    })
    
    

    $("#header-search").on("input", function(){
        if($(this).val().length == 0) {
            $(".dropdown-search").removeClass("active");

            $(".search-scroll").empty();
        }
        else {
            $(".dropdown-search").addClass("active");

          
        }
    });

    $("#header-search").on("click", function(){
        if($(this).val().length != 0) {
            $(".dropdown-search").addClass("active");
        }
    });



    //Notifications refresh

    function checkFriendRequests() {
        //Get username in PHP from session
        $.ajax({
            type: "POST",
            url: base_url + "/ajax-request-check-requests",
            success: function (response) {
                //No requests
               if(response.length == 0) {
                    $(".request-container").empty();
               }
               else{
                    //for each element do
                    let request = $("<div></div>").addClass("request");
                    let request_user = $("<div></div>").addClass("request-user");
                    let request_image = $("<img/>").attr("src", response['image']);
                    let request_name = $("<span></span>").text(response['name']);

                    request_user.append(request_image).append(request_name);

                    let request_buttons = $("<div></div>").addClass("request-buttons");
                    let accept = $("<input/>").attr({
                        type : 'button',
                        value : 'Accept'
                    }).addClass("request-accept");

                    let decline = $("<input/>").attr({
                        type : 'button',
                        value : 'Decline'
                    }).addClass("request-decline");

                    request_buttons.append(accept).append(decline);

                    request.append(request_user).append(request_buttons);

                    $(".request-container").append(request);
               }
            }
        });
    }

    setInterval(function(){
        //To implement:
        //checkFriendRequests();
    }, 5000);

    //Notification request accept/decline

    $(".request-accept").click(function() {
        //Write code here

        //Delete request from dropdown
        $(this).parent().parent().remove();
    });

    $(".request-decline").click(function() {
        //Write code here
        $(this).parent().parent().remove();
    });

    

    //Header initialization

    /*User initialization
        Profile picture: .user img
        Name: #header-name
        Index: #header-index
    */


    // Go to option

    $(".option").click(function(){
        
        let option = $(this).find("span").text().toLowerCase();
        if(option!="log out")
          option = "student-" + option;
         else option = "";
        $.ajax({
            type: "POST",
            url: base_url + "/ajax-request-redirect",
            data: {
                page : option
            },
            dataType : "JSON",
            success: function (response) {
                  window.location.href = response['url'];
                       
            },
            error: function (){
                alert("greska");
            }
        });
    })

    $(".header-info .user").click(function(){

        option = "student-profile";
        
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