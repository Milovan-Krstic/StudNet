

$(document).ready(function() {
        
    $(".dropdown-select").click(function(){
        let span = $(this).find(".select-btn span");
        $(this).find(".select-btn").toggleClass("select-btn-clicked");
        $(this).find(".select-btn").removeClass("select-btn-empty");
        $(this).toggleClass("active");
    })

    $(".dropdown-select").on("focusout", function(){
        $(this).find(".select-btn").removeClass("select-btn-clicked");
        $(this).removeClass("active");
    })

    $("li").click(function(){
        let text = $(this).text();
        
        let id = $(this).parent().attr("name");
        let selector = "#" + id;
        
        let span = $(selector);
        span.text(text);

        span.parent().css({"color" : "#444444"});
    })

    $(".input-box input").click(function(){
        $(this).parent().removeClass("input-box-empty");
    })

    $(".input-box input").click(function(){
           $(this).parent().removeClass("input-box-empty");
       })

    $(".button input").click(function(){

        let flag = 0;
        for(let i = 1; i < 6; i++) {
            let selector = "#s" + i;

            if($(selector).text() == "Country" || $(selector).text() == "Faculty" || $(selector).text() == "Course" ||
            $(selector).text() == "ID Year" || $(selector).text() == "ID Number") {
                $(selector).parent().addClass("select-btn-empty");
                flag++;
            }
        }

        
        //$(".username").parent().addClass("input-box-empty");
        let inputs = $(".input-box input");
        inputs.each(function(){
            if(! $(this).val()){
                $(this).parent().addClass("input-box-empty");
                flag++;
            }
        });

        if(flag) {
            $(".bottom-message").text("You must fill marked fields first!");
            $(".bottom-next").text("Return to the form");
            $(".popup-background").addClass("popup-active");
            
        }
    });

    $(".bottom-next").click(function(){
        $(".popup-background").removeClass("popup-active");
    });
    
    
    
    
    
    
    $(".buttonAAU").click(function(){
  
        let flag=0;
        let error_message ="";
        let selector = "#s1AUni";
            if($(selector).text()=="Country"){
                 $(selector).parent().addClass("select-btn-empty");
                flag++;
            }
            
        
             let inputs = $(".input-box input");
        inputs.each(function(){
            if(! $(this).val()){
                $(this).parent().addClass("input-box-empty");
                flag++;
            }
        });
       
        if(flag) {
          
            $(".popup-top").removeClass("success");
            $(".top-image img").attr("src", "../icons/StudNet Exclamation.svg");
            $(".top-message span").text("You can't add/delete unitile!");
            $(".bottom-message span").text("You must fill marked fields first!");
            $(".bottom-next span").text("Return to the form");
            $(".popup-background").addClass("popup-active"); 
        }
        else {
           
            //Check if input types are correct
            let regex_username = /^[a-zA-Z]\w*$/;
            let regex_name = /^[A-Z][a-z]{1,15}/;
            let regex_surname = /^[A-Z][a-z]{1, 15}/;
            let regex_password_length = /^.{6,}/;
            let regex_password_lowercase = /[a-z]/;
            let regex_password_uppercase = /[A-Z]/;
            let regex_password_number = /[0-9]/;
            let regex_password_special = /[!@#$%^&*]/;
            let regex_email = /^\w+@[a-z]+\.[a-z]{2,3}$/;

            let currentDate = new Date();
            let inputDate = new Date($("#a3").val());

            let username = $("#a1").val();
            let name = $("#a2").val();
            let email = $("#a4").val();
         ;

            
            
            if(regex_username.test(username) == false) {
                error_message += "Username does not have the correct form\n";
                $("#username").parent().addClass("input-box-empty");
            }
            

            if(regex_name.test(name) == false ) {
                error_message += "Name does not have the correct form\n";
                $("#name").parent().addClass("input-box-empty");
            }
            

            if(regex_email.test(email) == false ) {
                error_message += "Email does not have the correct form\n";
                $("#email").parent().addClass("input-box-empty");
            }
            

            if(currentDate <= inputDate) {
                error_message += "Date of birth can't be in the future\n";
                $("#date_of_birth").parent().addClass("input-box-empty");
            }
           
            
            if(error_message.length != 0) {
             
                $(".popup-top").removeClass("success");
                $(".top-image img").attr("src", "../icons/StudNet Exclamation.svg");
                $(".top-message span").text("Sorry you can't sign up...");
                $(".bottom-message span").text(error_message);
                $(".bottom-next span").text("Return to the form");
                $(".popup-background").addClass("popup-active");
                  
            }
            else { 
                    
                    
                    
                $.ajax({
                    url : "http://localhost:8080/Admin/AdminAddUni",
                    
                    type : "POST",
                    data : {
                        username : $("#a1").val(),
                        Fname : $("#a2").val(),
                        email : $("#a4").val(),
                        date_of_est : $("#a3").val(),
                        country : $("#s1AUni").text(),     
                         password : $("#a5").val(),
                    },
                    dataType : "JSON",
                    success: function(response) {
                        if(response['message'] == "success") {
                            $(".popup-top").addClass("success");
                            $(".top-image img").attr("src", "../icons/StudNet CheckMark.svg");
                            $(".top-message span").text("You have added a University!");
                            $(".bottom-message span").text("");
                            $(".bottom-next span").text("");
                            
                            $(".popup-background").addClass("popup-active");
                            setTimeout(() => {
                                location.href = "http://localhost:8080/Admin/AddIUni";
                            }, 4000);
                        }
                        else{
                           
                            if(response['message'] == "fail_index_exist") error_message = "Index already exists";
                            else if(response['message'] == "fail_username_exist") error_message = "Username already exists";
                            else if(response['message'] == "fail_FullName_exist") error_message = "Name already exists";
                            else if(response['message'] == "unsuccess") error_message = "University faild to add";
                            else  error_message = response['message'];
                            $(".popup-top").removeClass("success");
                            $(".top-image img").attr("src", "../icons/StudNet Exclamation.svg");
                            $(".top-message span").text("Sorry you can't add/delete...");
                            $(".bottom-message span").text(error_message);
                            $(".bottom-next span").text("Return to the form");
                            $(".popup-background").addClass("popup-active");
                        }
                    }
                });
               
            }
        }
        
        
    })
       $(".bottom-next").click(function(){
        $(".popup-background").removeClass("popup-active");
    })
    $(".buttonAAC").click(function(){
  
        let flag=0;
        let error_message ="";
        let selector = "#s1AUni";
            if($(selector).text()=="Search Faculty"){
                 $(selector).parent().addClass("select-btn-empty");
                flag++;
            }
            
        
             let inputs = $(".input-box input");
        inputs.each(function(){
            if(! $(this).val()){
                $(this).parent().addClass("input-box-empty");
                flag++;
            }
        });
       
        if(flag) {
          
            $(".popup-top").removeClass("success");
            $(".top-image img").attr("src", "../icons/StudNet Exclamation.svg");
            $(".top-message span").text("You can't add/delete!");
            $(".bottom-message span").text("You must fill marked fields first!");
            $(".bottom-next span").text("Return to the form");
            $(".popup-background").addClass("popup-active"); 
        }
        else {
           
            //Check if input types are correct
            let regex_username = /^[a-zA-Z]\w*$/;
            let regex_name = /^[A-Z][a-z]{1,15}/;
            let regex_surname = /^[A-Z][a-z]{1, 15}/;
            let regex_password_length = /^.{6,}/;
            let regex_password_lowercase = /[a-z]/;
            let regex_password_uppercase = /[A-Z]/;
            let regex_password_number = /[0-9]/;
            let regex_password_special = /[!@#$%^&*]/;
            let regex_email = /^\w+@[a-z]+\.[a-z]{2,3}$/;

       
            
            let name = $("#cours1").val();
            let num = $("#coursNumCl").val();
             
            if(regex_username.test(name) == false ) {
                error_message += "Name does not have the correct form\n";
                $("#name").parent().addClass("input-box-empty");
            }
            

            
           
            
            if(error_message.length != 0) {
             
                $(".popup-top").removeClass("success");
                $(".top-image img").attr("src", "../icons/StudNet Exclamation.svg");
                $(".top-message span").text("Sorry you can't sign up...");
                $(".bottom-message span").text(error_message);
                $(".bottom-next span").text("Return to the form");
                $(".popup-background").addClass("popup-active");
                  
            }
            else { 
                    
                    
                   
                $.ajax({
                    url : "http://localhost:8080/Admin/AdminAddCourse",
                    
                    type : "POST",
                    data : {
                        course : $("#cours1").val(),
                        faculty : $("#s1AUni").text(),     
                        number: $("#coursNumCl").val()
                    },
                    dataType : "JSON",
                    success: function(response) {
                        if(response['message'] == "success") {
                            $(".popup-top").addClass("success");
                            $(".top-image img").attr("src", "../icons/StudNet CheckMark.svg");
                            $(".top-message span").text("You have added a Course!");
                            $(".bottom-message span").text("");
                            $(".bottom-next span").text("");
                            
                            $(".popup-background").addClass("popup-active");
                            setTimeout(() => {
                                location.href = "http://localhost:8080/Admin/AddIUni";
                            }, 4000);
                        }
                        else{
                           
                            if(response['message'] == "fail_course_exist") error_message = "Course already exist"                   
                            else if(response['message'] == "unsuccess") error_message = "Course faild to add";
                            else  error_message = response['message'];
                            $(".popup-top").removeClass("success");
                            $(".top-image img").attr("src", "../icons/StudNet Exclamation.svg");
                            $(".top-message span").text("Sorry you can't add/delete...");
                            $(".bottom-message span").text(error_message);
                            $(".bottom-next span").text("Return to the form");
                            $(".popup-background").addClass("popup-active");
                        }
                    }
                });
               
            }
        }
        
        
    })
    
       $(".buttonAAS").click(function(){
  
        let flag=0;
        let error_message ="";
        let selector = "#s1AUni";
            if($(selector).text()=="Search Faculty"){
                 $(selector).parent().addClass("select-btn-empty");
                flag++;
            }
            
        
             let inputs = $(".input-box input");
          let selector2 = "#s1AUni2";
            if($(selector2).text()=="Search Course"){
                 $(selector2).parent().addClass("select-btn-empty");
                flag++;
            }
           
        inputs.each(function(){
            if(! $(this).val()){
                $(this).parent().addClass("input-box-empty");
                flag++;
            }
        });
       
        if(flag) {
          
            $(".popup-top").removeClass("success");
            $(".top-image img").attr("src", "../icons/StudNet Exclamation.svg");
            $(".top-message span").text("You can't add/delete!");
            $(".bottom-message span").text("You must fill marked fields first!");
            $(".bottom-next span").text("Return to the form");
            $(".popup-background").addClass("popup-active"); 
        }
        else {
           
            //Check if input types are correct
            let regex_username = /^[a-zA-Z]\w*$/;
            let regex_name = /^[A-Z][a-z]{1,15}/;
            let regex_surname = /^[A-Z][a-z]{1, 15}/;
            let regex_password_length = /^.{6,}/;
            let regex_password_lowercase = /[a-z]/;
            let regex_password_uppercase = /[A-Z]/;
            let regex_password_number = /[0-9]/;
            let regex_password_special = /[!@#$%^&*]/;
            let regex_email = /^\w+@[a-z]+\.[a-z]{2,3}$/;

       
            
            let name = $("#classname").val();
 
             
            if(regex_username.test(name) == false ) {
                error_message += "Name does not have the correct form\n";
                $("#name").parent().addClass("input-box-empty");
            }
            

            
           
            
            if(error_message.length != 0) {
             
                $(".popup-top").removeClass("success");
                $(".top-image img").attr("src", "../icons/StudNet Exclamation.svg");
                $(".top-message span").text("Sorry you can't add/delete...");
                $(".bottom-message span").text(error_message);
                $(".bottom-next span").text("Return to the form");
                $(".popup-background").addClass("popup-active");
                  
            }
            else { 
                    
               
                   
                $.ajax({
                    url : "http://localhost:8080/Admin/AdminAddClass",
                    
                    type : "POST",
                    data : {
                        faculty : $("#s1AUni").text(),
                        course : $("#s1AUni2").text(),     
                        subj: $("#classname").val()
                    },
                    dataType : "JSON",
                    success: function(response) {
                        if(response['message'] == "success") {
                            $(".popup-top").addClass("success");
                            $(".top-image img").attr("src", "../icons/StudNet CheckMark.svg");
                            $(".top-message span").text("You have added a Course!");
                            $(".bottom-message span").text("");
                            $(".bottom-next span").text("");
                            
                            $(".popup-background").addClass("popup-active");
                            setTimeout(() => {
                                location.href = "http://localhost:8080/Admin/AddIUni";
                            }, 4000);
                        }
                        else{
                           
                            if(response['message'] == "fail_subject_exist") error_message = "Subject already exist"                   
                            else if(response['message'] == "unsuccess") error_message = "Subject faild to add";
                            else  error_message = response['message'];
                            $(".popup-top").removeClass("success");
                            $(".top-image img").attr("src", "../icons/StudNet Exclamation.svg");
                            $(".top-message span").text("Sorry you can't add/delete...");
                            $(".bottom-message span").text(error_message);
                            $(".bottom-next span").text("Return to the form");
                            $(".popup-background").addClass("popup-active");
                        }
                    }
                });
               
            }
        }
        
        
    })
    
    
     $(".buttonAAF").click(function(){
  
        let flag=0;
        let error_message ="";
        let selector = "#s1AFac";
            if($(selector).text()=="Search University"){
                 $(selector).parent().addClass("select-btn-empty");
                flag++;
            }
            
        
             let inputs = $(".input-box input");
        
           
        inputs.each(function(){
            if(! $(this).val()){
                $(this).parent().addClass("input-box-empty");
                flag++;
            }
        });
       
        if(flag) {
          
            $(".popup-top").removeClass("success");
            $(".top-image img").attr("src", "../icons/StudNet Exclamation.svg");
            $(".top-message span").text("You can't add/delete!");
            $(".bottom-message span").text("You must fill marked fields first!");
            $(".bottom-next span").text("Return to the form");
            $(".popup-background").addClass("popup-active"); 
        }
        else {
           
            //Check if input types are correct
            let regex_username = /^[a-zA-Z]\w*$/;
            let regex_name = /^[A-Z][a-z]{1,15}/;
            let regex_surname = /^[A-Z][a-z]{1, 15}/;
            let regex_password_length = /^.{6,}/;
            let regex_password_lowercase = /[a-z]/;
            let regex_password_uppercase = /[A-Z]/;
            let regex_password_number = /[0-9]/;
            let regex_password_special = /[!@#$%^&*]/;
            let regex_email = /^\w+@[a-z]+\.[a-z]{2,3}$/;

       
            
            let name = $("#faculty").val();
 
             
            if(regex_username.test(name) == false ) {
                error_message += "Name does not have the correct form\n";
                $("#name").parent().addClass("input-box-empty");
            }
            

            
           
            
            if(error_message.length != 0) {
             
                $(".popup-top").removeClass("success");
                $(".top-image img").attr("src", "../icons/StudNet Exclamation.svg");
                $(".top-message span").text("Sorry you can't add/delete...");
                $(".bottom-message span").text(error_message);
                $(".bottom-next span").text("Return to the form");
                $(".popup-background").addClass("popup-active");
                  
            }
            else { 
                    
               
                $.ajax({
                    url : "http://localhost:8080/Admin/AdminAddFaculty",
                    
                    type : "POST",
                    data : {
                        uni : $("#s1AFac").text(),
                        name:$("#faculty").val()
                       
                    },
                    dataType : "JSON",
                    success: function(response) {
                        if(response['message'] == "success") {
                            $(".popup-top").addClass("success");
                            $(".top-image img").attr("src", "../icons/StudNet CheckMark.svg");
                            $(".top-message span").text("You have added a Course!");
                            $(".bottom-message span").text("");
                            $(".bottom-next span").text("");
                            
                            $(".popup-background").addClass("popup-active");
                            setTimeout(() => {
                                location.href = "http://localhost:8080/Admin/AddIUni";
                            }, 4000);
                        }
                        else{
                           
                            if(response['message'] == "fail_fac_exist") error_message = "Faculty already exist"                   
                            else if(response['message'] == "unsuccess") error_message = "Faculty faild to add";
                            else  error_message = response['message'];
                            $(".popup-top").removeClass("success");
                            $(".top-image img").attr("src", "../icons/StudNet Exclamation.svg");
                            $(".top-message span").text("Sorry you can't add/delete...");
                            $(".bottom-message span").text(error_message);
                            $(".bottom-next span").text("Return to the form");
                            $(".popup-background").addClass("popup-active");
                        }
                    }
                });
               
            }
        }
        
        
    })
    
    
    
    
});
    
    
 
 
    
    
    
    
    
    
    
    
    
    
    
    
    
 