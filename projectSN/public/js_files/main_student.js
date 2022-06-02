

$(document).ready(function(){
    
    
    $.ajax({
        url:"http://localhost:8080/Chet/ajaxGetStudentSubjects",
        type:'POST',
        dataType:"JSON",
        success: function (response){
            
              let facName = response['faculty'].Name;
               
             let span = $("<span></span>").text(facName);
             $(".subjects").prepend(span);
         
            let course = $("<li></li>").attr("id","course").text("#"+response['course'].Name)
                    .on("click",function(){
                    $(this).toggleClass("clicked");
                    $(".semester").toggleClass("active")
            });
            $(".course").prepend(course);
            let li;
            let semestarc = $(".semester");
           for(let i =0;i<8;i++){
               if(i==0){
                li = $("<li></li>").addClass("semester-name")
                        .on("click",function(){
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
    }).text("#First semester");
                }else if(i==1){
                     li = $("<li></li>").addClass("semester-name") .on("click",function(){
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
    }).text("#Second semester");
                }else if(i==2){
                     li = $("<li></li>").addClass("semester-name") .on("click",function(){
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
    }).text("#Third semester");
                }else if(i==3){
                     li = $("<li></li>").addClass("semester-name") .on("click",function(){
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
    }).text("#Fourth  semester");
                 }else if(i==4){
                     li = $("<li></li>").addClass("semester-name") .on("click",function(){
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
    }).text("#Fifth semester");
                }else if(i==5){
                     li = $("<li></li>").addClass("semester-name") .on("click",function(){
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
    }).text("#Sixth semester");
                }else if(i==6){
                     li = $("<li></li>").addClass("semester-name") .on("click",function(){
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
    }).text("#Seventh semester");
                }else if(i==7){
                     li = $("<li></li>").addClass("semester-name") .on("click",function(){
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
    }).text("#Eight semester");
                }
            let ul =$("<ul></ul>").addClass("subject");
            $.each(response['classes'],function (index,value){
                
                   if(i+1==value.semestar){
                       let l = $("<li></li>").text(value.Name).on(
                              "click",function(){
                                $(".subject li").removeClass("clicked");
                                $(this).toggleClass("clicked");
                                
                                $.ajax({
                                    
                                    url:"http://localhost:8080/Chet/ajaxGetChats",
                                    data:{
                                        name:$(this).text()
                                    },
                                    type:"POST",
                                    dataType:"JSON",
                                    
                                    success: function (response){
                                      $.each(response['message'],function(index,value){
                                          
                                          alert(value.Text);
                                          
                                          
                                          
                                      })
                                   }
                                    
                                    
                                    
                                })
                                
                                
                                
                                
                                });
                       ul.prepend(l);
                }
                


               })
            
                semestarc.prepend(ul);
                 semestarc.prepend(li);
                
            }
            
        },
        error:function (){
            alert("greska");
        }
    })
    
    
    
    
    
    
    
       
       
       
       
       
    
    $("#input-message").keypress(function(e){
        
        if(e.which ==13){
           
            e.preventDefault();
           
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
                
           
            
            
                let clas = $("ul.active.subject li.clicked").text();
                  
                let today = new Date();
                
                var time =today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                
                $.ajax({
                    url:"http://localhost:8080/Chet/ajaxSendMyTextToGroup",
                    type:"POST",
                     data : {
                         korID:idkor,
                         text: text,
                         class:clas,
                         time:time
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
    
    
    $("#course").on("click",function(){
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