$(document).ready(function(){
    $(".notifications img").click(function(){
        $(".dropdown-options").removeClass("active");
        $(".dropdown-notifications").toggleClass("active");
        
    });

    $(".options img").click(function(){
        $(".dropdown-notifications").removeClass("active");
        $(".dropdown-options").toggleClass("active");
    });

    $(".logo img").on("click", function(){
        $(".dropdown-options").removeClass("active");
        $(".dropdown-notifications").removeClass("active");
    })

    $(".header-search").on("click", function(){
        $(".dropdown-options").removeClass("active");
        $(".dropdown-notifications").removeClass("active");
    })

    $(".container-fluid").on("click", function(){
        $(".dropdown-options").removeClass("active");
        $(".dropdown-notifications").removeClass("active");
    })
});