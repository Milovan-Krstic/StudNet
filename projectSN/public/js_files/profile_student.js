/**
 * @author Djordje Popara 2019-0460
 * @category Student
 */

$(document).ready(function(){
    let changed = false;
    
    /**
     * Opens edit mode, upload image and change bio available
     */
    
    $.ajax({
        
        url:"http://localhost:8080/ajax-request-get-user-info",     
        type: 'POST',
        dataType: "JSON",
         success: function (response) {
            let user =response['message'][0];
            $("#name").text(user.Ime+" "+user.Prezime)
            $("div.faculty span.name").text(user.Faculty);
            $("div.course span.name").text(user.Course);
            $("div.row.id span.name").text(user.IdGod+"/"+user.IdNum);
            $("div.row.country span.name").text(user.Country);
            $("div.row.email span.name").text(user.Email);
        }
        
    })
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    $("#edit").click(function() {
        $(this).toggleClass("hidden");
        $(".buttons").toggleClass("active");
        $("#change").toggleClass("active");

        $(".info").toggleClass("hidden");
        $(".bio").toggleClass("active");

        $(".bio textarea").prop("disabled", false);
    })

    /**
     * Save changes and return to view mode
     */
    function changeForm() {
        $("#edit").toggleClass("hidden");
        $(".buttons").toggleClass("active");
        $("#change").toggleClass("active");

        $(".info").toggleClass("hidden");
        $(".bio").toggleClass("active");

        $(".bio textarea").prop("disabled", true);

        $("#save").prop("disabled", true);

        changed = false;
    }

    /**
     * Discard changes
     */
    $("#discard").click(function() {
        if($(".bio textarea").val().length != 0)  {
            $(".bio textarea").val("");
        }
        changeForm();
    })

    /**
     * Save changes
     */
    $("#save").click(function() {
        changeForm();
    })

    /**
     * Enables/disables save button
     */
    $(".bio textarea").on("keydown keyup", function(){
        if($(".bio textarea").val().length != 0)  {
            $("#save").prop("disabled", false);
        }
        else if(!changed) {
            $("#save").prop("disabled", true);
        }
    })

    /**
     * Enables/disables save button
     */
    $("#change").click(function(){
        $("#save").prop("disabled", false);
        changed = true;

        // Ajax request for file explorer
    })
    
});