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
                                $(".message-scroll").empty();
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

    setInterval(() => {

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
                    let messArr = response['message'].slice(newCurrentLoadedMessages + 1);

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

            e.preventDefault();
            let text = $("#input-message").val();
            if (text.length <= 1) {
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
});