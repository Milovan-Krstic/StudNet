/*const wrapper = document.querySelector(".wrapper");
const selectBtn = document.querySelector(".select-btn");

//const optionsList = document.querySelectorAll(".option");

selectBtn.addEventListener("click", () =>{
    wrapper.classList.toggle("active");
});
*/

$(document).ready(function() {
            
    $(".dropdown-select").click(function(){
        let span = $(this).find(".select-btn span");
        if(span.attr("id") == "s3") {
            if($("#s2").text() == "Faculty") return;
        }
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
            $(".bottom-next").text("Return to the form")
            $(".popup-background").addClass("popup-active");
            
        }
    })

    $(".bottom-next").click(function(){
        $(".popup-background").removeClass("popup-active");
    })
    

});