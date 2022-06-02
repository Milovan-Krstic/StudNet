
/**
 * @author Djordje Popara 2019-0460
 * @category Student
 */


$(document).ready(function(){
    
       
    
    $("#input-message").keypress(function(e){
        
        if(e.which ==13){
           
            $.ajax({
                url:"http://localhost:8080/LogIn/ajaxGetKorInfo",
                type:"POST",
                dataType:"JSON",
                success: function (response){
                   idkor= response['idkor'];
                }
            })
            
            
            let text = $("#input-message").val();     
           if(text.length<=1){
                $("#input-message").val("");
                return;}
          let message_span = $("<span></span>").text(text);
            let message_box = $("<div></div>").addClass("message-box");
               let img = $("<img>").attr("src","images/StudNet Profile Picture Default.svg");
            message_box.append(message_span);
            let message = $("<div></div>").addClass("message").addClass("right");  
               message.append(img);
            message.append(message_box);
                
           
            
            
            
               
                
                $.ajax({
                    url:"http://localhost:8080/Chet/ajaxSendMyTextToGroup",
                    type:"POST",
                     data : {
                         korID:idkor,
                         text: text
                     },                   
                    dataType:"JSON",
                    success: function (response){
                      
                          
                        
                    },
                    error:function (){
                        
                        alert("greska");
                    }
                    
                });
            
           
            $(".message-scroll").prepend(message);     
            $("#input-message").val("");
            
                
                
            
        }
    })
    
    
    $("#course").click(function(){
        $(this).toggleClass("clicked");
        $(".semester").toggleClass("active");
    });

    $(".semester-name").click(function(){
        if($(this).next().hasClass("active")) {
            $(this).removeClass("clicked");
            $(".subject").removeClass("active");
        }
        else {
            $(".subject").removeClass("active");
            $(".semester-name").removeClass("clicked");
            $(this).next().toggleClass("active");
            $(this).toggleClass("clicked");
        }
    });

    $(".subject li").click(function(){
        $(".subject li").removeClass("clicked");
        $(this).toggleClass("clicked");
    });

    $("textarea").each(function () {
        this.setAttribute("style", "height:" + (this.scrollHeight) + "px;overflow-y:hidden;");
    }).on("input", function () {
        this.style.height = "37px";
        this.style.height = (this.scrollHeight) + "px";

        if($(this).val().length == 250) {
            $(this).addClass("max");
        }
        else {
            $(this).removeClass("max");
        }

    });

    $("textarea").keypress(function(e){
        if(e.which == 13) {
            //Submit text to the base
        }
    });


    // Add these dynamically
    $(".friend").click(function(){
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
        });
    })

    $(".request-user").click(function(){
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
        });
    })

    $(".search-user").click(function(){
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
        });
    })
});