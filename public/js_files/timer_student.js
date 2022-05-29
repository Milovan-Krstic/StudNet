$(document).ready(function(){

    // Set timer

    function increment(obj) {
        if(obj.hasClass("left")) {
            let hours = parseInt($("#hours").text());
            
            hours = (hours + 1) % 24;

            if(hours < 10) hours = "0" + hours;
            $("#hours").text(hours);
        }
        else if(obj.hasClass("right")) {
            let minutes = parseInt($("#minutes").text());
            
            minutes = (minutes + 1) % 60;

            if(minutes < 10) minutes = "0" + minutes;
            $("#minutes").text(minutes);
        }
    }

    function decrement(obj) {
        if(obj.hasClass("left")) {
            let hours = parseInt($("#hours").text());
            
            if(hours == 0) hours = 23;
            else hours = (hours - 1);

            if(hours < 10) hours = "0" + hours;
            $("#hours").text(hours);
        }
        else if(obj.hasClass("right")) {
            let minutes = parseInt($("#minutes").text());
            
            if(minutes == 0) minutes = 59;
            else minutes = (minutes - 1);

            if(minutes < 10) minutes = "0" + minutes;
            $("#minutes").text(minutes);
        }
    }

    $(".up svg")
    .on("mousedown", function(){
        timeoutID = setInterval(increment, 75, $(this));
        $(this).find(".st0").css("fill", "#67DBB8");
    })
    .on("mouseup", function(){
        clearInterval(timeoutID);
        $(this).find(".st0").css("fill", "#E6E6E6");
        if(($("#hours").text() != "00") || ($("#minutes").text() != "00")) {
            $("#start").prop("disabled", false);
            $("#reset").prop("disabled", false);
        }
        else {
            $("#start").prop("disabled", true);
            $("#reset").prop("disabled", true);
        }
    })

    $(".down svg")
    .on("mousedown", function(){
        timeoutID = setInterval(decrement, 75, $(this));
        $(this).find(".st0").css("fill", "#67DBB8");
    })
    .on("mouseup", function(){
        clearInterval(timeoutID);
        $(this).find(".st0").css("fill", "#E6E6E6");
        if(($("#hours").text() != "00") || ($("#minutes").text() != "00")) {
            $("#start").prop("disabled", false);
            $("#reset").prop("disabled", false);
        }
        else {
            $("#start").prop("disabled", true);
            $("#reset").prop("disabled", true);
        }
    })

    // Start timer

    function timer(time) {
        time.t--;

        let minutes = parseInt($("#minutes").text());
        let hours = parseInt($("#hours").text());
    
        if(minutes == 0) {
            minutes = 59;
            if(hours > 0) { 
                hours--;
                if(hours < 10) hours = "0" + hours;
            }
        }
        else {
            minutes = (minutes - 1);

            if(hours < 10) hours = "0" + hours;
        }
        if(minutes < 10) minutes = "0" + minutes;
        $("#minutes").text(minutes);
        $("#hours").text(hours);

        if(time.t <= 0) {
            clearInterval(timeout);
            $("#text").text("Timer finished");
            $("#message").text("Please set up a new time");

            $(".up").removeClass("disabled");
            $(".down").removeClass("disabled");

            $("#reset").prop("disabled", true);
            $("#start").prop("disabled", true);
            $("#stop").prop("disabled", true);
        }
    }

    $("#start").click(function() {
        let minutes = parseInt($("#minutes").text());
        let hours = parseInt($("#hours").text());

        let time = hours * 60 + minutes;

        time = {t: time};

        timeout = setInterval(timer, 5000, time);

        $(this).prop("disabled", true);
        $("#reset").prop("disabled", true);
        $("#stop").prop("disabled", false);

        $(".up").addClass("disabled");
        $(".down").addClass("disabled");

        $("#text").text("Timer is counting");
        $("#message").text("Focus on studying...");
    })

    // Reset timer

    $("#reset").click(function(){
        $("#minutes").text("00");
        $("#hours").text("00");

        $(this).prop("disabled", true);
        $("#start").prop("disabled", true);
        $("#stop").prop("disabled", true);

        $("#text").text("Welcome to the timer");
        $("#message").text("Please set up the time");
    })

    // Stop timer

    $("#stop").click(function(){
        clearInterval(timeout);

        $(this).prop("disabled", true);
        $("#reset").prop("disabled", false);
        $("#start").prop("disabled", false);

        $(".up").removeClass("disabled");
        $(".down").removeClass("disabled");

        $("#text").text("Timer stopped");
        $("#message").text("Continue studying");
    })
})