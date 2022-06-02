/**
 * @author Djordje Popara 2019-0460
 * @category Student
 */

$(document).ready(function(){
    
    /**
     * ajax request - backend team (Milovan & Mladen)
     * lines 12-26
     */
    $.ajax({
        url:"http://localhost:8080/LogIn/ajaxGetStud",
        type:"POST",
        dataType:"JSON",
        success: function (response){
            let tex= response['kor'].Ime;
            let prezime =response['kor'].Prezime;

            let input =tex+" "+prezime;
            $("#header-name").text(input);
            let index=response['student'].IdGod+"/0"+response['student'].IdNum;

            $("#header-index").text(index);
         }
    });

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

    $(".header-main svg").click(function(){
        $.ajax({
            type: "POST",
            url: base_url + "/ajax-request-redirect", 
             data: {
                page : "student-main"
            },
            dataType : "JSON",
            success: function (response) {
               window.location.href = response['url'];
            }
        });
    })
    
 
    $("#header-search").on("input", function(){
        $(".search-scroll").empty();
        if($(this).val().length == 0) {
            $(".dropdown-search").removeClass("active");

            $(".search-scroll").empty();
        }
        else {
            $(".dropdown-search").addClass("active");

           
            $.ajax({
                type: "POST",
                url: base_url + "/ajax-request-search-user",
                data : {
                    search : $("#header-search").val()
                },
                dataType : "JSON",
                success: function (response) {
                   

                    $.each(response['message'],function(index,val){
                    let search_user = $("<div></div>").addClass("search-user");
                    let info = $("<div></div>");
                    let user_image = $("<img>").attr("src", "../images/StudNet Profile Picture Default.svg");
                    
                    let user_text = val.Ime + " " + val.Prezime + ", " + val.Faculty + ", " + val.Country;
                    let user_info = $("<span></span>").text(user_text);

                    let user_status = $("<span></span>").text("None");

                     user_status.addClass("status-none");

                    info.append(user_image).append(user_info).append(user_status);

                    search_user.append(info);
                        search_user.on("click",function(){
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
                                })
                        })
                        $(".search-scroll").append("<hr>");
                    $(".search-scroll").append(search_user);
                
                    })
                }
            });
            
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

        if(option == "log out") option = "";
        else option = "student-" + option;

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