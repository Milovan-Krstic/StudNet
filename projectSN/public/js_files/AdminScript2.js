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
    
    
    
    $(".buttonADU").click(function(){
  
        let flag=0;
        let error_message ="";
        let selector = "#s1ADuni";
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
  
                $.ajax({
                    url : "http://localhost:8080/Admin/AdminDeleteUni",
                    
                    type : "POST",
                    data : {
                     
                        uni : $("#s1ADuni").text(),     
                        
                    },
                    dataType : "JSON",
                    success: function(response) {
                        if(response['message'] == "success") {
                            $(".popup-top").addClass("success");
                            $(".top-image img").attr("src", "../icons/StudNet CheckMark.svg");
                            $(".top-message span").text("You have deleted a University!");
                            $(".bottom-message span").text("");
                            $(".bottom-next span").text("");
                            
                            $(".popup-background").addClass("popup-active");
                            setTimeout(() => {
                                location.href = "http://localhost:8080/Admin/index";
                            }, 4000);
                        }
                        else{
                           
                                             
                            if(response['message'] == "unsuccess") error_message = "University faild to delete";
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
        
        
    })
    
     $(".buttonADS").click(function(){
  
        let flag=0;
        let error_message ="";
        let selector = "#DStud";
            if($(selector).text()=="Student name or ID"){
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
  
                $.ajax({
                    url : "http://localhost:8080/Admin/AdminDeleteStud",
                    
                    type : "POST",
                    data : {
                     
                        stud : $("#DStud").val(),     
                        
                    },
                    dataType : "JSON",
                    success: function(response) {
                        if(response['message'] == "success") {
                            $(".popup-top").addClass("success");
                            $(".top-image img").attr("src", "../icons/StudNet CheckMark.svg");
                            $(".top-message span").text("You have deleted a Student!");
                            $(".bottom-message span").text("");
                            $(".bottom-next span").text("");
                            
                            $(".popup-background").addClass("popup-active");
                            setTimeout(() => {
                                location.href = "http://localhost:8080/Admin/index";
                            }, 4000);
                        }
                        else{
                           
                                             
                            if(response['message'] == "unsuccess") error_message = "Student faild to delete";
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
        
        
    })
     $(".buttonADAD").click(function(){
  
        let flag=0;
        let error_message ="";
        let selector = "#DAdv";
            if($(selector).text()=="Advertiser's username"){
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
  
                $.ajax({
                    url : "http://localhost:8080/Admin/AdminDeleteAtvr",
                    
                    type : "POST",
                    data : {
                     
                        user : $("#DAdv").val(),     
                        
                    },
                    dataType : "JSON",
                    success: function(response) {
                        if(response['message'] == "success") {
                            $(".popup-top").addClass("success");
                            $(".top-image img").attr("src", "../icons/StudNet CheckMark.svg");
                            $(".top-message span").text("You have deleted a Advertiser!");
                            $(".bottom-message span").text("");
                            $(".bottom-next span").text("");
                            
                            $(".popup-background").addClass("popup-active");
                            setTimeout(() => {
                                location.href = "http://localhost:8080/Admin/index";
                            }, 4000);
                        }
                        else{
                           
                                             
                            if(response['message'] == "unsuccess") error_message = "Advertiser faild to delete";
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
        
        
    })
    
    
    
    
    
    
})