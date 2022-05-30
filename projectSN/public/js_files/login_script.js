/*const wrapper = document.querySelector(".wrapper");
const selectBtn = document.querySelector(".select-btn");

//const optionsList = document.querySelectorAll(".option");

selectBtn.addEventListener("click", () =>{
    wrapper.classList.toggle("active");
});
*/
$(document).ready(function() {
    
    //Click on the dropdown menu
    // $(".dropdown-select").click(function(){
    //     //If faculty is not chosen courses can't be displayed
    //     let span = $(this).find(".select-btn span");
    //     if(span.attr("id") == "s3") {
    //         if($("#s2").text() == "Faculty") return;
    //     }
    //     $(this).find(".select-btn").toggleClass("select-btn-clicked");
    //     $(this).find(".select-btn").removeClass("select-btn-empty");
    //     $(this).toggleClass("active");
    // })

    //Click away from the dropdown menu
    // $(".dropdown-select").on("focusout", function(){
    //     $(this).find(".select-btn").removeClass("select-btn-clicked");
    //     $(this).removeClass("active");
    // })

    //Choose element from the dropdown
    // $("li").click(function(){
    //     let text = $(this).text();
        
    //     let id = $(this).parent().attr("name");
    //     let selector = "#" + id;
        
    //     let span = $(selector);
    //     span.text(text);

    //     span.parent().css({"color" : "#444444"});
    // })



   /* let nizKorisnika=[
        {
            username: "_",
            password:"_"
        }
    ];

    //localStorage.setItem("users",JSON.stringify(nizKorisnika));

    if(localStorage.getItem("users")!=null){
        nizKorisnika=JSON.parse(localStorage.getItem("users"));
    }
    else{
        nizKorisnika=[
            {
                username: "_",
                password:"_"
            }
        ];
        nizKorisnika.push(
            {
                username: "uze",
                password: "123"
            }
        );
        nizKorisnika.push(
            {
                username: "uze1",
                password: "1233"
            }
        );
        localStorage.setItem("users",JSON.stringify(nizKorisnika));
    }*/

    //Remove red border
    $(".input-box input").click(function(){
        $(this).parent().removeClass("input-box-empty");
    })


    //login
    $(".button input").click(function(){
        
        
        let username1 = $("#username").val();
        let password1 = $("#password").val();
       // let username1="uze";
        //let password1="123";

        document.getElementById("username").value="";
        document.getElementById("password").value="";
        //$("#username").val()="";
        //let username = $("#username").val();
        //let password = $("#password").val();

        //for(let i=0;i<nizKorisnika.length;i++){
         //   if(username==nizKorisnika[i].username){
         //          flag=1;
          //          window.location.href="index.html";
           //         return false;
           //     }
          //  }
       // }
        
        
        $.ajax({
                    url : "http://localhost:8080/LogIn/loginSubmit",
                    
                    type : "POST",
                    data : {
                        username : username1,
                        password : password1,
                                         
                    },
                    dataType : "JSON",
                    success: function(response) {
                         
                         
                        if(response==1) { // 1 ordinary user
                            
                          //echo($_SESSION['logedinUser'][0]);  
                          location.href = "http://localhost:8080/student-main"; ////PROMENITI NA OBICAN HOME PAGE
                          $.ajax({
                              url: "https//localhost:8080/Student/main",
                              type: "POST"
                          })
                            
                            
                        }
                        else if(response==2){// 2 admin
                           
                           
                          location.href = "http://localhost:8080/Admin";
                            
                            
                        }
                        else if(response==3){ // 3 univerzitet
                            //alert("uni");
                            location.href = "http://localhost:8080/student-main"; ////PROMENITI NA OBICAN HOME PAGE
                        }
                        else if(response==4){ // 4 moderator
                            //alert("moderator");
                            
                            location.href = "http://localhost:8080/student-main"; ////PROMENITI NA OBICAN HOME PAGE
                           /* $.ajax({
                              url: "https//localhost:8080/Student/main",
                              type: "POST"
                          })*/
                        }
                        
                        else if(response==5){ // 5 reklamer
                            //alert("rekl");
                            location.href = "http://localhost:8080/student-main"; ////PROMENITI NA OBICAN HOME PAGE
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
                        
                    }
                });
            //let error_message = "Wrong username or password";
            //$(".top-image img").attr("src", "icons/StudNet Exclamation.svg");
            //$(".bottom-message span").text(error_message);
            //$(".bottom-next span").text("Return to the form")
            //$(".popup-background").addClass("popup-active");
           
            return false;
        
    })

    //Display the popup
    $(".bottom-next").click(function(){
        $(".popup-background").removeClass("popup-active");

    })
    

});