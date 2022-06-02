
$(document).ready(function() {
    
    

    //Remove red border
    $(".input-box input").click(function(){
        $(this).parent().removeClass("input-box-empty");
    })


    //login
    $(".button input").click(function(){
        
      
        let username1 = $("#username").val();
        let password1 = $("#password").val();
       

        //document.getElementById("username").value="";
       // document.getElementById("password").value="";
       $("#username").val("");
        $("#password").val("");
       
        $.ajax({
                    url : "http://localhost:8080/loginSubmit",
                    
                    type : "POST",
                    data : {
                        username : username1,
                        password : password1,
                                         
                    },
                    dataType : "JSON",
                    success: function(response) {
                         
                         
                        if(response==1) { // 1 ordinary user
                        
                          
                          location.href = "http://localhost:8080/student-main"; ////PROMENITI NA OBICAN HOME PAGE
                         
                            
                        }
                        else if(response==2){// 2 admin
                           
                           
                          location.href = "http://localhost:8080/admin-main";
                            
                            
                        }
                        else if(response==3){ // 3 univerzitet

                            location.href = "http://localhost:8080/university-main"; ////PROMENITI NA OBICAN HOME PAGE

                        }
                        else if(response==4){ // 4 moderator
                            
                            
                            location.href = "http://localhost:8080/moderator-main"; ////PROMENITI NA OBICAN HOME PAGE
                           
                        }
                        
                        else if(response==5){ // 5 reklamer
                            
                            location.href = "http://localhost:8080/advertiser-main"; ////PROMENITI NA OBICAN HOME PAGE
                        }
                        else if(response==6){ // 6 UNIVERZITET NEMA SERTIFIKAT
                             error_message = "University still waiting for certificate";
                            
                            $(".popup-top").removeClass("success");
                            $(".top-image img").attr("src", "../icons/StudNet Exclamation.svg");
                            $(".top-message span").text("Sorry you can't log in...");
                            $(".bottom-message span").text(error_message);
                            $(".bottom-next span").text("Return to the form");
                            $(".popup-background").addClass("popup-active");
                        }
                        else if(response==0){ // 0 bad login
                           
                             error_message = "Wrong username or password";
                            
                            $(".popup-top").removeClass("success");
                            $(".top-image img").attr("src", "../icons/StudNet Exclamation.svg");
                            $(".top-message span").text("Sorry you can't sign in...");
                            $(".bottom-message span").text(error_message);
                            $(".bottom-next span").text("Return to the form");
                            $(".popup-background").addClass("popup-active");
                            
                        }
                        
                            //alert(response["Username"]);
                        
                    },
                    error:function(){
                        alert("hello");
                    }
                });
            
           
            return false;
        
    })

    //Display the popup
    $(".bottom-next").click(function(){
        $(".popup-background").removeClass("popup-active");

    })
    

});