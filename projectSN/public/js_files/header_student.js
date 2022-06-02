$(document).ready(function(){


    

   
          
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
        if($(this).val().length == 0) {
            $(".dropdown-search").removeClass("active");

            $(".search-scroll").empty();
        }
        else {
            $(".dropdown-search").addClass("active");

            //Show 
            /*
            $.ajax({
                type: "POST",
                url: base_url + "/ajax-request-search-user",
                data : {
                    search : $("#header-search").val()
                },
                dataType : "JSON",
                success: function (response) {
                    //Get array of objects, every object has 'image', 'name', 'surname', 'current_year', 'faculty', 'country', 'status'
                    //'status' = friend if users are friends, 'status' = none otherwise

                    //for each element in response do

                    
                    let search_user = $("<div></div>").addClass("search-user");
                    let info = $("<div></div>");
                    let user_image = $("<img>").attr("src", response['image']);
                    
                    let user_text = response['name'] + " " + response['surname'] + ", " + response['current_year'] + ", " + response['faculty'] + ", " + response['country'];
                    let user_info = $("<span></span>").text(user_text);

                    let user_status = $("<span></span>").text(response['status']);

                    if(response['status'] == "friend") user_status.addClass("status-friend");
                    else user_status.addClass("status-none");

                    info.append(user_image).append(user_info).append(user_status);

                    search_user.append(info);

                    $(".search-scroll").append(search_user);
                    
                }
            });
            */
        }
    });

    $("#header-search").on("click", function(){
        if($(this).val().length != 0) {
            $(".dropdown-search").addClass("active");
        }
    });

    //Options navigation

    $(".option").click(function(){
        let chosen_option = $(".option span").text();
        if(chosen_option == "Advertisement") chosen_option = "advertiser";
        else if(chosen_option == "Timer") chosen_option = "student_timer";
        else if(chosen_option == "Plans") chosen_option = "student_plans";
        else chosen_option = "log in";
 
        $.ajax({
            type: "POST",
            url: base_url + "/ajax-request-redirect",
            data: {
                option : chosen_option
            },
            dataType : "JSON",
            success: function (response) {
               window.location.href = response['url'];
            
            
            }
        });
    })

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
                    let len = response.length;
                    for(var i=0;i<len;i++){
                    let request = $("<div></div>").addClass("request").attr("id",response[i].id);
                    let request_user = $("<div></div>").addClass("request-user");
                    let request_image = $("<img/>").attr("src", response[i].image);//response[i].image response['image']
                    let request_name = $("<span></span>").text(response[i].name);//response[i].name response['name']
                    
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
               }}
            }
        });
    }

    setInterval(function(){
        //To implement:
        checkFriendRequests();
    }, 5000);

    //Notification request accept/decline

    $(".request-accept").click(function() {
        //Write code here
        let chosen_option = $(this).parent().parent().attr('id'); 
        
        $.ajax({
            context:this,
            type: "POST",
            url: base_url + "/ajax-request-accept",
            data: {
                option : chosen_option
            },
            dataType : "JSON",
            success: function (response) {
               //window.location.href = response['url'];
               $(this).parent().parent().remove();

            
            }
        });
        //Delete request from dropdown
        //$(this).parent().parent().remove();
    });

    $(".request-decline").click(function() {
        let chosen_option = $(this).parent().parent().attr('id'); 
        $.ajax({
            context:this,
            type: "POST",
            url: base_url + "/ajax-request-decline",
            data: {
                option : chosen_option
            },
            dataType : "JSON",
            success: function (response) {
               //window.location.href = response['url'];
               $(this).parent().parent().remove();

            
            }
        });
        //Write code here
        //$(this).parent().parent().remove();
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