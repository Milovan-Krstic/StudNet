$(document).ready(function(){


    

   
          
               $.ajax({
                   url:"http://localhost:8080/Univerzitet/ajaxGetUni",
                   type:"POST",
                   dataType:"JSON",
                   success: function (response){
                       
  
                       
                       let tex= response;
                       
                       
                        let input =tex;
                                  //let id=(response['univerzitet'].IdUni);
                       $("#header-name").text(input); 
                       
                    },
                    error:function(){
                        alert("MRS");
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

    
    

    //Options navigation

    $(".option").click(function(){
        let chosen_option = $(".option span").text();
         chosen_option = "log in";
 
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

    

    setInterval(function(){
        //To implement:
        //checkFriendRequests();
    }, 5000);

    //Notification request accept/decline

   

    

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