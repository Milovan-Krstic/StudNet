/**
 * @author Djordje Popara 2019-0460
 * @author Milovan Krstic 2019-0709
 * @category Student
 */


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
                                            if (myId === value.IdKor) {
                                                let message_span = $("<span></span>").text(value.Text);
                                                let message_box = $("<div></div>").addClass("message-box");

                                                let img = $("<img>").attr("src", "images/StudNet Profile Picture Default.svg");
                                                message_box.append(message_span);
                                                let message = $("<div></div>").addClass("message").addClass("right");

                                                message.append(img);
                                                message.append(message_box);
                                                $(".message-scroll").prepend(message);

                                            } else {
                                                let message_span = $("<span></span>").text(value.Text);
                                                let message_box = $("<div></div>").addClass("message-box");
                                                let img = $("<img>").attr("src", "images/StudNet Profile Picture Default.svg");
                                                message_box.append(message_span);
                                                let message = $("<div></div>").addClass("message").addClass("left");
                                                message.append(img);
                                                message.append(message_box);
                                                $(".message-scroll").prepend(message);

                                            }
                                        })
                                    }
                                })
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

                            if (myId === value.IdKor) {
                                let message_span = $("<span></span>").text(value.Text);
                                let message_box = $("<div></div>").addClass("message-box");

                                let img = $("<img>").attr("src", "images/StudNet Profile Picture Default.svg");
                                message_box.append(message_span);
                                let message = $("<div></div>").addClass("message").addClass("right");

                                message.append(img);
                                message.append(message_box);
                                $(".message-scroll").prepend(message);

                            } else {
                                let message_span = $("<span></span>").text(value.Text);
                                let message_box = $("<div></div>").addClass("message-box");
                                let img = $("<img>").attr("src", "images/StudNet Profile Picture Default.svg");
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
                                        
                                            $.each(response['message'], function (index, value) {
                                               newCurrentLoadedMessagesFriend ++;
                                            if (myId === value.IdKor) {
                                                let message_span = $("<span></span>").text(value.Text);
                                                let message_box = $("<div></div>").addClass("message-box");

                                                let img = $("<img>").attr("src", "images/StudNet Profile Picture Default.svg");
                                                message_box.append(message_span);
                                                let message = $("<div></div>").addClass("message").addClass("right");

                                                message.append(img);
                                                message.append(message_box);
                                                $(".message-scroll").prepend(message);

                                            } else {
                                                let message_span = $("<span></span>").text(value.Text);
                                                let message_box = $("<div></div>").addClass("message-box");
                                                let img = $("<img>").attr("src", "images/StudNet Profile Picture Default.svg");
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


    $("#input-message").keypress(function (e) {
      
        if (e.which == 13) {
            
               if($("#input-message").hasClass("friend")==true){
                   e.preventDefault();
            let text = $("#input-message").val();
            if (text.length <= 0) {
                $("#input-message").val("");
                return;
            }
            let message_span = $("<span></span>").text(text);
            let message_box = $("<div></div>").addClass("message-box");
            let img = $("<img>").attr("src", "images/StudNet Profile Picture Default.svg");
            message_box.append(message_span);
            let message = $("<div></div>").addClass("message").addClass("right");
            message.append(img);
            message.append(message_box);

            let today = new Date();

            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            
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
                
                },
                error: function () {

                    alert("greska");
                }

            });
            $(".message-scroll").prepend(message);
            $("#input-message").val("");
            
            
            
            
            
            }else{
            e.preventDefault();
            let text = $("#input-message").val();
            if (text.length <= 0) {
                $("#input-message").val("");
                return;
            }
            let message_span = $("<span></span>").text(text);
            let message_box = $("<div></div>").addClass("message-box");
            let img = $("<img>").attr("src", "images/StudNet Profile Picture Default.svg");
            message_box.append(message_span);
            let message = $("<div></div>").addClass("message").addClass("right");
            message.append(img);
            message.append(message_box);



            let clas = $("ul.active.subject li.clicked").text();

            let today = new Date();

            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

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

                },
                error: function () {

                    alert("greska");
                }

            });
            $(".message-scroll").prepend(message);
            $("#input-message").val("");
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

    //     $("textarea").keypress(function(e){
    //         if(e.which == 13) {
    //             //Submit text to the base
    //         }
    //     });


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
                                          divA.css({"color":"lightgreen"});
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

                    let friend_image = $("<img/>").attr("src", "images/StudNet Profile Picture Default.svg")//response[i].image)
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
                             friend_name = $("<span></span>").addClass("active").css({"color":"lightgreen"}).text(response[i].name+" "+response[i].prezime);
                        }else{
                         friend_name = $("<span></span>").addClass("unactive").text(response[i].name+" "+response[i].prezime);
                        }
                        friend_name.on("click",function (){
                            
                             if($(this).parent().hasClass("active"))return;
                            
                              $(".message-scroll").empty();
                             setTimeout(() => {
                              $(".tags").addClass("hidden");
                                $(".center-part .header-search").addClass("hidden");

                                $(".friend-chat").addClass("active");
                                $(".friend-chat .friend span").text($(this).text());
                                 
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
                                            if (myId === value.IdKor) {
                                                let message_span = $("<span></span>").text(value.Text);
                                                let message_box = $("<div></div>").addClass("message-box");

                                                let img = $("<img>").attr("src", "images/StudNet Profile Picture Default.svg");
                                                message_box.append(message_span);
                                                let message = $("<div></div>").addClass("message").addClass("right");

                                                message.append(img);
                                                message.append(message_box);
                                                $(".message-scroll").prepend(message);

                                            } else {
                                                let message_span = $("<span></span>").text(value.Text);
                                                let message_box = $("<div></div>").addClass("message-box");
                                                let img = $("<img>").attr("src", "images/StudNet Profile Picture Default.svg");
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
    
});