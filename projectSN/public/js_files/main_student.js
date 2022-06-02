

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
                
           
            //ovde treba da se loaduje friend lista
            //--------------------------------------
            
               function getAllFriends() {
        //Get username in PHP from session
        $.ajax({
            type: "POST",
            url: base_url + "/ajax-request-get-all-friends",
            success: function (response) {
                //No requests
               if(response.length == 0) {
                    $(".request-container").empty();
               }
               else{
                    //for each element do
                    let len = response.length;
                    for(var i=0;i<len;i++){
                    let friend = $("<div></div>").addClass("friend").attr("id",response[i].id);
                    //let request_user = $("<div></div>").addClass("request-user");
                    let friend_image = $("<img/>").attr("src", response[i].image);//response[i].image response['image']
                    let friend_name = $("<span></span>").text(response[i].name);//response[i].name response['name']
                    
                    friend.append(friend_image).append(friend_name);

                    $(".friend-scroll").append(friend);
               }}
            }
        });
    }

    setInterval(function(){
        //To implement:
        getAllFriends();
    }, 5000);
            //-------------------------------------- 
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
        let id = $(this).attr('id');
        $.ajax({
            type: "POST",
            url: base_url + "/ajax-friend-view",
            data: {
                page : "student-view",
                id:id
            },
            dataType : "JSON",
            success: function (response) {
               window.location.href = response['url'];
               //mora id da se prosledi
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