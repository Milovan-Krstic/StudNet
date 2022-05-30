$(document).ready(function(){
    let changed = false;
    
    $("#edit").click(function() {
        $(this).toggleClass("hidden");
        $(".buttons").toggleClass("active");
        $("#change").toggleClass("active");

        $(".info").toggleClass("hidden");
        $(".bio").toggleClass("active");

        $(".bio textarea").prop("disabled", false);
    })

    function changeForm() {
        $("#edit").toggleClass("hidden");
        $(".buttons").toggleClass("active");
        $("#change").toggleClass("active");

        $(".info").toggleClass("hidden");
        $(".bio").toggleClass("active");

        $(".bio textarea").prop("disabled", true);

        changed = false;
    }

    $("#discard").click(function() {
        if($(".bio textarea").val().length != 0)  {
            $(".bio textarea").val("");
        }
        changeForm();
    })

    $("#save").click(function() {
        changeForm();
    })

    $(".bio textarea").on("keydown keyup", function(){
        if($(".bio textarea").val().length != 0)  {
            $("#save").prop("disabled", false);
        }
        else if(!changed) {
            $("#save").prop("disabled", true);
        }
    })

    $("#change").click(function(){
        $("#save").prop("disabled", false);
        changed = true;

        // Ajax request for file explorer
    })
    
});