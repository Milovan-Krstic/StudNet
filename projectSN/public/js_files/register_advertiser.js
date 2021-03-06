/**
 * @author Djordje Popara 2019-0460
 * @category Register
 */

var country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
var educational_field_list = ["Computer science", "Software Engineering", "Biology", "Philosophy", "Mathematics", "Physics", "Web design", "Pharmacy", "Medicine"];

$(document).ready(function() {

    
    let country_dropdown = $("[name='s1']");
    let educational_field_dropdown = $("[name='s2']");

    country_list.forEach(element => {
        country_dropdown.append("<li>"+element+"</li>");
    });

    educational_field_list.sort();
    educational_field_list.forEach(element => {
        educational_field_dropdown.append("<li>"+element+"</li>");
    });

    $(".options [name='s3']").prop("overflow-y", "hidden");

    //Click on the dropdown menu
    $(".dropdown-select").click(function(){
        $(this).find(".select-btn").toggleClass("select-btn-clicked");
        $(this).find(".select-btn").removeClass("select-btn-empty");
        $(this).toggleClass("active");
    })

    //Click away from the dropdown menu
    $(".dropdown-select").on("focusout", function(){
        $(this).find(".select-btn").removeClass("select-btn-clicked");
        $(this).removeClass("active");
    })

    //Choose element from the dropdown
    $("li").click(function(){
        let text = $(this).text();
        
        let id = $(this).parent().attr("name");
        let selector = "#" + id;
        
        let span = $(selector);
        span.text(text);

        span.parent().css({"color" : "#444444"});
    })

    $(".help span").click(function(){
        $(".help-background").addClass("help-active");
    })

    $(".help-next span").click(function(){
        $(".help-background").removeClass("help-active");
    })

    //Remove red border
    $(".input-box input").click(function(){
        $(this).parent().removeClass("input-box-empty");
    })


    //Check the form
    $(".button input").click(function(){
        
        let flag = 0;
        let error_message = "";

        //Check dropdown menus
        for(let i = 1; i < 6; i++) {
            let selector = "#s" + i;

            if($(selector).text() == "Country" || $(selector).text() == "Educational field") {
                $(selector).parent().addClass("select-btn-empty");
                flag++;
            }
        }

        //Check if input types are empty
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
            $(".top-message span").text("Sorry you can't sign up...");
            $(".bottom-message span").text("You must fill marked fields first!");
            $(".bottom-next span").text("Return to the form");
            $(".popup-background").addClass("popup-active"); 
        }
        else {
            //Check if input types are correct
            let regex_username = /^[a-zA-Z]\w*$/;
            let regex_name = /^[A-Z][a-z]{1,15}/;
            let regex_surname = /^[A-Z][a-z]{1, 15}/;
            let regex_password_length = /^.{6,}/;
            let regex_password_lowercase = /[a-z]/;
            let regex_password_uppercase = /[A-Z]/;
            let regex_password_number = /[0-9]/;
            let regex_password_special = /[!@#$%^&*]/;
            let regex_email = /^\w+@[a-z]+\.[a-z]{2,3}$/;

            let currentDate = new Date();
            let inputDate = new Date($("#date_of_birth").val());

            let username = $("#username").val();
            let name = $("#name").val();
            let surname = $("#surname").val();
            let email = $("#email").val();
            let password = $("#password").val();
            let password_confirm = $("#password_confirm").val();

            let incorrect_password = false;

            if(regex_username.test(username) == false) {
                error_message += "Username does not have the correct form\n";
                $("#username").parent().addClass("input-box-empty");
            }
            if(regex_name.test(name) == false ) {
                error_message += "Name does not have the correct form\n";
                $("#name").parent().addClass("input-box-empty");
            }
            if(regex_name.test(surname) == false ) {
                error_message += "Surname does not have the correct form\n";
                $("#surname").parent().addClass("input-box-empty");
            }
            if(regex_email.test(email) == false ) {
                error_message += "Email does not have the correct form\n";
                $("#email").parent().addClass("input-box-empty");
            }
            if(currentDate <= inputDate) {
                error_message += "Date of birth can't be in the future\n";
                $("#date_of_birth").parent().addClass("input-box-empty");
            }
            if(regex_password_length.test(password) == false) {
                error_message += "Password does not have the correct length\n";
                incorrect_password = true;
            }
            if(regex_password_lowercase.test(password) == false) {
                error_message += "Password must contain at least one lowercase character\n";
                incorrect_password = true;
            }
            if(regex_password_uppercase.test(password) == false) {
                error_message += "Password must contain at least one uppercase character\n";
                incorrect_password = true;
            }
            if(regex_password_number.test(password) == false) {
                error_message += "Password must contain at least one number\n";
                incorrect_password = true;
            }
            if(regex_password_special.test(password) == false) {
                error_message += "Password must contain at least one special character\n";
                incorrect_password = true;
            }
            for(i = 0; i < password.length - 1; i++) {
                if(password[i] == password[i+1]) {
                    error_message += "Password can't have two of the same successive characters\n";
                    incorrect_password = true;
                    break;
                }
            }

            if(incorrect_password) {
                $("#password").parent().addClass("input-box-empty");
            }
            else {
                if(password != password_confirm) {
                    $("#password").parent().addClass("input-box-empty");
                    $("#password_confirm").parent().addClass("input-box-empty");
                    error_message += "Passwords do not match\n";
                }
            }
            
            
            if(error_message.length != 0) {
                $(".popup-top").removeClass("success");
                $(".top-image img").attr("src", "../icons/StudNet Exclamation.svg");
                $(".top-message span").text("Sorry you can't sign up...");
                $(".bottom-message span").text(error_message);
                $(".bottom-next span").text("Return to the form");
                $(".popup-background").addClass("popup-active");
            }
            else {
                
                $.ajax({
                    url : base_url + "/ajax-request-register-advertiser",
                    type : "POST",
                    data : {
                        username : $("#username").val(),
                        name : $("#name").val(),
                        surname : $("#surname").val(),
                        email : $("#email").val(),
                        date_of_birth : $("#date_of_birth").val(),
                        password : $("#password").val(),
                        country : $("#s1").text(),
                        educational_field : $("#s2").text(),
                        degree : $("#s3").text()
                    },
                    dataType : "JSON",
                    success: function(response) {
                        if(response['message'] == "success") {
                            $(".popup-top").addClass("success");
                            $(".top-image img").attr("src", "../icons/StudNet CheckMark.svg");
                            $(".top-message span").text("You have signed up successfully!");
                            $(".bottom-message span").text("Thank you for choosing the StudNet");
                            $(".bottom-next span").text("You will be redirected to Log In page");
                            
                            $(".popup-background").addClass("popup-active");
                            setTimeout(() => {
                                location.href = "http://localhost:8080";
                            }, 4000);
                        }
                        else{
                            if(response['message'] == "fail_username_exist") error_message = "Username already exists";
                            else if(response['message'] == "fail_email_exist") error_message = "E-mail already exists";
                            else if(response['message'] == "fail_username&email_exist") error_message = "Username and e-mail already exists";
                            $(".popup-top").removeClass("success");
                            $(".top-image img").attr("src", "../icons/StudNet Exclamation.svg");
                            $(".top-message span").text("Sorry you can't sign up...");
                            $(".bottom-message span").text(error_message);
                            $(".bottom-next span").text("Return to the form");
                            $(".popup-background").addClass("popup-active");
                        }
                    }
                });
            }
        }
        
        //Ajax

        
    })

    //Display the popup
    $(".bottom-next").click(function(){
        $(".popup-background").removeClass("popup-active");
    })

    $(".redirect").click(function(){
        
        $.ajax({
            type: "POST",
            url: base_url + "/ajax-request-redirect",
            data: {
                page : "register-others"
            },
            dataType : "JSON",
            success: function (response) {
                window.location.href = response['url'];
            }
        });
    });
        $(".header img").click(function(){
        $.ajax({
            type: "POST",
            url: base_url + "/ajax-request-redirect",
            data: {
                page : "/"
            },
            dataType : "JSON",
            success: function (response) {
                window.location.href = response['url'];
            }
        });
    })
});
