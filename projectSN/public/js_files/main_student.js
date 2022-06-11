/**
 * @author Djordje Popara 2019-0460
 * @author Milovan Krstic 2019-0709
 * @category Student
 */
let emojis = [0x1F600, 0x1F603,0x1F604,0x1F606, 0x1F605,0x1F923, 0x1F602,0x1F34A,0x1F643,0x1F970,0x1F60D, 
        0x1F60B,0x1F61B,0x1F910,0x1F634,	
                0x1F344, 0x1F37F, 0x1F363, 0x1F370, 0x1F355,
              0x1F354, 0x1F35F, 0x1F6C0, 0x1F48E, 0x1F5FA, 0x23F0, 0x1F579, 0x1F4DA,
              0x1F431, 0x1F42A, 0x1F439, 0x1F424,];
          
let emm=[1,2,3,4,5,6,7];
let emInd=0;
let lastSelectedClass = [
    {
        class_name: "_",
    }
];

let newCurrentLoadedMessages = 0;
let newCurrentLoadedMessagesFriend = 0;
$(document).ready(function () {

    /**
     * Dinamic chat implemented by Milovan Krstic
     * lines: 21-364
     */
    $(".message-scroll").empty();
    let ul=$("<ul></ul>").css({"text-align":"left","padding-left":"0px"});
    $.each(emojis,function(index,values){
        let li= $("<li></li>").css({
            "display":"inline-block",
            "cursor":"pointer"
        });
       li.text(String.fromCodePoint(values));
       li.on("click",function (){
           let textpr=  $("#input-message").val()+$(this).text();
           $("#input-message").val(textpr);
           $("#emojis").hide();
       })
       ul.append(li);
    })
    $("#emojis").append(ul);




    $.ajax({
        url: "http://localhost:8080/Chet/ajaxGetStudentSubjects",
        type: 'POST',
        dataType: "JSON",
        success: function (response) {

            let facName = response['faculty'].Name;

            let span = $("<span></span>").text(facName);
            $(".subjects").prepend(span);

            let course = $("<li></li>").attr("id", "course").text("#" + response['course'].Name)
                .on("click", function () {
                    $(this).toggleClass("clicked");
                    $(".semester").toggleClass("active")
                });
            $(".course").prepend(course);
            let li;
            let semestarc = $(".semester");
            for (let i = 0; i < 8; i++) {
                if (i == 0) {
                    li = $("<li></li>").addClass("semester-name")
                        .on("click", function () {
                            if ($(this).next().hasClass("active")) {
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
                } else if (i == 1) {
                    li = $("<li></li>").addClass("semester-name").on("click", function () {
                        if ($(this).next().hasClass("active")) {
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
                } else if (i == 2) {
                    li = $("<li></li>").addClass("semester-name").on("click", function () {
                        if ($(this).next().hasClass("active")) {
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
                } else if (i == 3) {
                    li = $("<li></li>").addClass("semester-name").on("click", function () {
                        if ($(this).next().hasClass("active")) {
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
                } else if (i == 4) {
                    li = $("<li></li>").addClass("semester-name").on("click", function () {
                        if ($(this).next().hasClass("active")) {
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
                } else if (i == 5) {
                    li = $("<li></li>").addClass("semester-name").on("click", function () {
                        if ($(this).next().hasClass("active")) {
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
                } else if (i == 6) {
                    li = $("<li></li>").addClass("semester-name").on("click", function () {
                        if ($(this).next().hasClass("active")) {
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
                } else if (i == 7) {
                    li = $("<li></li>").addClass("semester-name").on("click", function () {
                        if ($(this).next().hasClass("active")) {
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
                let ul = $("<ul></ul>").addClass("subject");

                $.each(response['classes'], function (index, value) {

                    if (i + 1 == value.semestar) {
                        let l = $("<li></li>").text(value.Name).on(
                            "click", function () {
                                   if($(this).hasClass("clicked"))return;
                                
                                    clearInterval(interval2);
                                $(".message-scroll").empty();
                                $("#input-message").removeClass("friend");
                                $(".friends-scroll .friend.active").removeClass("active");
                                  $(".tags").removeClass("hidden");
                                $(".center-part .header-search").removeClass("hidden");
                                $(".friend-chat").removeClass("active");
                                $(".subject li").removeClass("clicked");
                                $(this).toggleClass("clicked");
                                lastSelectedClass.pop();
                                lastSelectedClass.push({
                                    class_name: $(this).text(),

                                })
                                localStorage.setItem('lastSelCls', JSON.stringify(lastSelectedClass));

                                $.ajax({

                                    url: "http://localhost:8080/Chet/ajaxGetChats",
                                    data: {
                                        name: $(this).text()
                                    },
                                    type: "POST",
                                    dataType: "JSON",

                                    success: function (response) {
                                        let myId = response['myID'];
                                        $.each(response['message'], function (index, value) {
                                            newCurrentLoadedMessages = index;
                                            let message_span;
                                            if (myId === value.IdKor) {
                                                        if(value.LinkTag){

                                                         let link =$("<a>").attr("href",value.LinkTag).text(value.LinkTag);

                                                         message_span = $("<span></span>").append(link);

                                                     }
                                                         if(!value.LinkTag){
                                                           message_span = $("<span></span>").text(value.Text);
                                                     }
                                                let message_box = $("<div></div>").addClass("message-box");

                                                let img = $("<img>").attr("src", "localFiles/"+value.img);
                                                message_box.append(message_span);
                                                let message = $("<div></div>").addClass("message").addClass("right");

                                                message.append(img);
                                                message.append(message_box);
                                                $(".message-scroll").prepend(message);

                                            } else {
                                                                if(value.LinkTag !== null){

                                                            let link =$("<a>").attr("href",value.LinkTag).text(value.LinkTag);

                                                           message_span = $("<span></span>").append(link);

                                                        }else{
                                                              message_span = $("<span></span>").text(value.Text);
                                                        }
                                                let message_box = $("<div></div>").addClass("message-box");
                                                 let img = $("<img>").attr("src", "localFiles/"+value.img);
                                                message_box.append(message_span);
                                                let message = $("<div></div>").addClass("message").addClass("left");
                                                message.append(img);
                                                message.append(message_box);
                                                $(".message-scroll").prepend(message);

                                            }
                                        })
                                    }
                                })
                                
                                
    interval=setInterval(() => {
        if($(".friends-scroll .friend.active")[0]!=null){
         
            return ;
        }
        let test = $("ul .subject li .clicked");
        if (test !== null) {

            let get = $(".subject.active li.clicked");


            if (get.length < 1) return;
            $.ajax({
                url: "http://localhost:8080/Chet/ajaxGetChats",
                data: {
                    name: get.text()
                },
                type: "POST",
                dataType: "JSON",

                success: function (response) {

                    let myId = response['myID'];
                    let messages = $(".message-box span").first();
                    let messArr = response['message'].slice(newCurrentLoadedMessages+1);

                    if (messArr.length > 0) {
                        $.each(messArr, function (index, value) {
                            newCurrentLoadedMessages++;
                                 let message_span;
                            if (myId === value.IdKor) {
                                      let message_span;
                                      
                                        if(value.LinkTag ){
                                            
                                            let link =$("<a>").attr("href",value.LinkTag).text(value.LinkTag);

                                           message_span = $("<span></span>").append(link);

                                        }else{
                                              message_span = $("<span></span>").text(value.Text);
                                        }
                                let message_box = $("<div></div>").addClass("message-box");

                                let img = $("<img>").attr("src", "localFIles/"+value.img);
                                message_box.append(message_span);
                                let message = $("<div></div>").addClass("message").addClass("right");

                                message.append(img);
                                message.append(message_box);
                                $(".message-scroll").prepend(message);

                            } else {
                               if(value.LinkTag !== null){
                                            
                                            let link =$("<a>").attr("href",value.LinkTag).text(value.LinkTag);

                                           message_span = $("<span></span>").append(link);

                                        }else{
                                              message_span = $("<span></span>").text(value.Text);
                                        }
                                let message_box = $("<div></div>").addClass("message-box");
                                let img = $("<img>").attr("src", "localFIles/"+value.img);
                                message_box.append(message_span);
                                let message = $("<div></div>").addClass("message").addClass("left");
                                message.append(img);
                                message.append(message_box);
                                $(".message-scroll").prepend(message);

                            }
                        })
                    }
                }
            })
        }

    }, 700);


                                
                                
                                
                                
                            });
                        ul.prepend(l);
                    }
                })
                if (ul.children().length > 0) {
                    semestarc.prepend(ul);
                }
                semestarc.prepend(li);
            }
        },
        error: function () {
            alert("greska");
        }
    })

















    let locSto = localStorage.getItem("lastSelCls");
    if (locSto != null) {
        setTimeout(function () {

            lastSelectedClass = JSON.parse(locSto);
            let name = lastSelectedClass[0].class_name;
            $("#course").click();
            let li = $(".subject li");
            li.each(function () {
                if ($(this).text() === name) {
                    $(this).click();
                    $(this).parent().prev().click();

                }
            })

        }, 500)
    } else {
        setTimeout(function () {
            let text = $(".subject").first().find("li").first().text();

            lastSelectedClass.pop();
            lastSelectedClass.push({
                class_name: text

            })
            $("#course").click();
            $(".subject").first().find("li").first().parent().prev().click();
            $(".subject").first().find("li").first().click();
            localStorage.setItem("lastSelCls", JSON.stringify(lastSelectedClass));
        }, 1000)

    }





    $("#input-message").on("click",()=>{$("#emojis").hide()})
    $("#input-message").keypress(function (e) {
        if(e.which == 13 &&e.shiftKey){
            var content = this.value; 
            e.stopPropagation();
        }else
        if (e.which == 13) {
           
               if($("#input-message").hasClass("friend")==true){
                   e.preventDefault();
            let text = $("#input-message").val();
            if (text.length <= 0) {
                $("#input-message").val("");
                return;
            }
           

            let today = new Date();

          var time = today.getFullYear() + "-" + (today.getMonth()+1) + "-" + today.getDate()+" "+today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            
             $.ajax({
                url: "http://localhost:8080/ajax-chta-friend",
                type: "POST",
                data: {

                    text: text,
                    time: time,
                    friend: $(".friends-scroll .friend.active").attr("id")
                },
                dataType: "JSON",
                success: function (response) {
                          
                newCurrentLoadedMessagesFriend++;
                   let message_span;
                    if(response['message']=="success1"){
                        let link =$("<a>").attr("href",text).text(text);
                           
                       message_span = $("<span></span>").append(link);
                        
                    }else{
                          message_span = $("<span></span>").text(text);
                    }
               let message_box = $("<div></div>").addClass("message-box");
               let img = $("<img>").attr("src", $(".header-info .user img").attr("src"));
               message_box.append(message_span);
               let message = $("<div></div>").addClass("message").addClass("right");
               message.append(img);
               message.append(message_box);
                $(".message-scroll").prepend(message);
            $("#input-message").val("");
                },
                error: function () {

                    alert("greska");
                }

            });
            
            
            
            
            
            
            }else{
            e.preventDefault();
            let text = $("#input-message").val();
            if (text.length <= 0) {
                $("#input-message").val("");
                return;
            }
   



            let clas = $("ul.active.subject li.clicked").text();

            let today = new Date();

            var time = today.getFullYear() + "-" + (today.getMonth()+1) + "-" + today.getDate()+" "+today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

            $.ajax({
                url: "http://localhost:8080/Chet/ajaxSendMyTextToGroup",
                type: "POST",
                data: {

                    text: text,
                    class: clas,
                    time: time
                },
                dataType: "JSON",
                success: function (response) {

                    newCurrentLoadedMessages++;
                     let message_span;
                    if(response['message']=="success1"){
                        let link =$("<a>").attr("href",text).text(text);
                           
                       message_span = $("<span></span>").append(link);
                        
                    }else{
                          message_span = $("<span></span>").text(text);
                    }
               
                 let message_box = $("<div></div>").addClass("message-box");
                 let img = $("<img>").attr("src", $(".header-info .user img").attr("src"));
                 message_box.append(message_span);
                 let message = $("<div></div>").addClass("message").addClass("right");
                 message.append(img);
                 message.append(message_box);
                     $(".message-scroll").prepend(message);
                    $("#input-message").val("");
                },
                error: function () {

                    alert("greska");
                }

            });
        
        }
    }
   });


    $(".subject li").click(function () {
        $(".subject li").removeClass("clicked");
        $(this).toggleClass("clicked");
    });

    $("textarea").each(function () {
        this.setAttribute("style", "height:" + (this.scrollHeight) + "px;overflow-y:hidden;");
    }).on("input", function () {
        this.style.height = "37px";
        this.style.height = (this.scrollHeight) + "px";

        if ($(this).val().length == 250) {
            $(this).addClass("max");
        }
        else {
            $(this).removeClass("max");
        }

    });

   ;


    // Add these dynamically
    $(".right-part .friend img").click(function () {
        $.ajax({
            type: "POST",
            url: base_url + "/ajax-request-redirect",
            data: {
                page: "student-view"
            },
            dataType: "JSON",
            success: function (response) {
                window.location.href = response['url'];
            }
        });
    })

    $(".friend-chat .friend").click(function () {
        $.ajax({
            type: "POST",
            url: base_url + "/ajax-request-redirect",
            data: {
                page: "student-view"
            },
            dataType: "JSON",
            success: function (response) {
                window.location.href = response['url'];
            }
        });
    })

    $(".request-user").click(function () {
        $.ajax({
            type: "POST",
            url: base_url + "/ajax-request-redirect",
            data: {
                page: "student-view"
            },
            dataType: "JSON",
            success: function (response) {
                window.location.href = response['url'];
            }
        });
    })

    $(".search-user").click(function () {
        $.ajax({
            type: "POST",
            url: base_url + "/ajax-request-redirect",
            data: {
                page: "student-view"
            },
            dataType: "JSON",
            success: function (response) {
                window.location.href = response['url'];
            }
        });
    })

    $(".tag").click(function () {
        $(".tag").removeClass("active");
        $(this).addClass("active");
    })

    $(".friend span").click(function () {
        setTimeout(() => {
            $(".tags").addClass("hidden");
            $(".center-part .header-search").addClass("hidden");

            $(".friend-chat").addClass("active");
        }, 350);

    })

    $("#close").click(function () {
        setTimeout(() => {
            $(".tags").removeClass("hidden");
            $(".center-part .header-search").removeClass("hidden");

            $(".friend-chat").removeClass("active");
        }, 350);

    })

    // Penalty points popup

    //     $("textarea").click(function(){
    //         If student has penalty points do:

    //         $(".top-image img").attr("src", "../icons/StudNet Exclamation.svg");
    //         $(".top-message span").text("Sorry you can't write...");
    //         $(".bottom-message span").text("You must wait for penalty points to expire!");
    //         $(".bottom-next span").text("Return");
    //         $(".popup-background").addClass("popup-active"); 
    //     })


    // Hide the popup
    $(".bottom-next").click(function () {
        $(".popup-background").removeClass("popup-active");
    })
    
    function getAllFriends(){
        $.ajax({
            type: "POST",
            url: base_url + "/ajax-request-get-all-friends",
            dataType: "JSON",
            success: function (response) {

                    if(numf==response.length){
                            for(var i = 0;i<response.length;i++){
                                let divA= $("div#"+response[i].id+" span");
                                 if(divA.hasClass("active")==true && response[i].status==0){
                                     divA.css({"color":"#444444"});
                                     divA.removeClass("active");
                                     divA.addClass("unactive");
                                 }else
                                     if(divA.hasClass("unactive")==true && response[i].status==1){
                                          divA.css({"color":"#67DBB8"});
                                           divA.removeClass("unactive");
                                             divA.addClass("active");
                                     }
                            }
                            return;
                    }
            $(".friends-scroll").empty();
                //No requests
               if(response.length == 0) {

                    $(".friends-scroll").empty();
               }
               else{
                 
                   
                    for(var i = 0;i<response.length;i++){
                        
                        numf=response.length;
                       
                    let friend = $("<div></div>").addClass("friend").attr("id",response[i].id);

                    let friend_image = $("<img/>").attr("src", "localFiles/"+response[i].image)
                            .on("click",function(){

                                 $.ajax({
                                 type: "POST",
                                 url: base_url + "/ajax-friend-view",
                                 data: {
                                        id: $(this).parent().attr("id"),
                                        page:"student-view"
                                 },
                                 dataType: "JSON",
                                 success: function (response) {
                                 //window.location.href = response['url'];

                                 window.localStorage.setItem("IdKor",response['IdKor']);
                                window.location.href = response['url'];

                            }
                        });

                    });
                        let friend_name; 
                        if(response[i].status==1){
                             friend_name = $("<span></span>").addClass("active").css({"color":"#67DBB8"}).text(response[i].name+" "+response[i].prezime);
                        }else{
                         friend_name = $("<span></span>").addClass("unactive").text(response[i].name+" "+response[i].prezime);
                        }
                        friend_name.on("click",function (){
                            
                             if($(this).parent().hasClass("active"))return;
                            
                              $(".message-scroll").empty();
                              clearInterval(interval);
                             setTimeout(() => {
                              $(".tags").addClass("hidden");
                                $(".center-part .header-search").addClass("hidden");

                                $(".friend-chat").addClass("active");
                                $(".friend-chat .friend span").text($(this).text());
                                        
                                 $(".friend-chat .friend img").attr("src",$(this).parent().children("img").attr("src"));
                                $("#input-message").addClass("friend");
                                  $(".subject.active .clicked").removeClass("clicked");
                                    $(".subject.active").removeClass("active");
                                  
                                    $.ajax({
                                        
                                        url: base_url+"/ajax-chta-friend-get-all",
                                          type: "POST",
                                         data: {
                                             friend: $(".friends-scroll .friend.active").attr("id"),
                                         },
                                          dataType: "JSON",
                                        success: function (response) {
                                              let myId = response['myID'];
                                            $.each(response['message'], function (index, value) {
                                               newCurrentLoadedMessagesFriend = index;
                                               let message_span;
                                            if (myId === value.IdKor) {
                                                if(value.LinkTag){

                                                         let link =$("<a>").attr("href",value.LinkTag).text(value.LinkTag);

                                                         message_span = $("<span></span>").append(link);

                                                     }
                                                         if(!value.LinkTag){
                                                           message_span = $("<span></span>").text(value.Text);
                                                     }
                                                let message_box = $("<div></div>").addClass("message-box");

                                                let img = $("<img>").attr("src", "localFiles/"+value.img);
                                                message_box.append(message_span);
                                                let message = $("<div></div>").addClass("message").addClass("right");

                                                message.append(img);
                                                message.append(message_box);
                                                $(".message-scroll").prepend(message);

                                            } else {
                                                if(value.LinkTag){

                                                         let link =$("<a>").attr("href",value.LinkTag).text(value.LinkTag);

                                                         message_span = $("<span></span>").append(link);

                                                     }
                                                         if(!value.LinkTag){
                                                           message_span = $("<span></span>").text(value.Text);
                                                     }
                                                let message_box = $("<div></div>").addClass("message-box");
                                                let img = $("<img>").attr("src", "localFiles/"+value.img);
                                                message_box.append(message_span);
                                                let message = $("<div></div>").addClass("message").addClass("left");
                                                message.append(img);
                                                message.append(message_box);
                                                $(".message-scroll").prepend(message);

                                            }
                                            })
                                        }
                                        
                                    })
                                    
                                    
                                    
                                    
                                    
                                    
                               }, 300);
                                interval2=setInterval(() => {
                                    if($(".friends-scroll .friend.active")[0]==null){

                                        return ;
                                    }

        
                                    $.ajax({
                                        
                                        url: base_url+"/ajax-chta-friend-get-all",
                                          type: "POST",
                                         data: {
                                             friend: $(".friends-scroll .friend.active").attr("id"),
                                         },
                                          dataType: "JSON",
                                        success: function (response) {
                                       let myId = response['myID'];              
                                    let messages = $(".message-box span").first();
                                    let messArr = response['message'].slice(newCurrentLoadedMessagesFriend+1);

                                    if (messArr.length > 0) {
                                        
                                            $.each(messArr, function (index, value) {
                                               newCurrentLoadedMessagesFriend ++;
                                               let message_span;
                                            if (myId === value.IdKor) {
                                                if(value.LinkTag){

                                                         let link =$("<a>").attr("href",value.LinkTag).text(value.LinkTag);

                                                         message_span = $("<span></span>").append(link);

                                                     }
                                                         if(!value.LinkTag){
                                                           message_span = $("<span></span>").text(value.Text);
                                                     }
                                                let message_box = $("<div></div>").addClass("message-box");

                                                let img = $("<img>").attr("src", "localFIles/"+value.img);
                                                message_box.append(message_span);
                                                let message = $("<div></div>").addClass("message").addClass("right");

                                                message.append(img);
                                                message.append(message_box);
                                                $(".message-scroll").prepend(message);

                                            } else {
                                                if(value.LinkTag){

                                                         let link =$("<a>").attr("href",value.LinkTag).text(value.LinkTag);

                                                         message_span = $("<span></span>").append(link);

                                                     }
                                                         if(!value.LinkTag){
                                                           message_span = $("<span></span>").text(value.Text);
                                                     }
                                                let message_box = $("<div></div>").addClass("message-box");
                                                let img = $("<img>").attr("src", "localFIles/"+value.img);
                                                message_box.append(message_span);
                                                let message = $("<div></div>").addClass("message").addClass("left");
                                                message.append(img);
                                                message.append(message_box);
                                                $(".message-scroll").prepend(message);

                                            }
                                            })
                                        }
                                    }
                                                                })
                                   }, 700);
                               
                               
                               
                               
                               
                               
                               
                               
                               
                             $(".friends-scroll .friend.active").removeClass("active");
                             $(this).parent().addClass("active");
                         });
                        
                        friend.append(friend_image).append(friend_name);

                        $(".friends-scroll").append(friend);
                        }
                    }
            }
        });
    }

    setInterval(function(){
        //To implement:
       getAllFriends();
    }, 500);
   
    $(".type-box #plus").on("click",function (){
        $("#fileUploader").click();
    })
    $(".message-scroll").on("click",()=>{
         $("#emojis").hide();
    })
    $(".circle").on("click",function (){
           $(".message-scroll").empty();
           clearInterval(interval2);
           $("#course").click();
           lastSelectedClass = JSON.parse(locSto);
            let name = lastSelectedClass[0].class_name;
            $("#course").click();
            let li = $(".subject li");
            li.each(function () {
                if ($(this).text() === name) {
                    $(this).click();
                    $(this).parent().prev().click();

                }
            })
    })
    
    $(".slideEmoj").mouseenter(function (){
       
       if(emInd==7)emInd=0;
       $(this).attr("src","emojis/em"+emm[emInd]+".svg");
       emInd++;
       
    })
     $(".slideEmoj").on("click",()=>{
         $("#emojis").toggle();
     })
    
});