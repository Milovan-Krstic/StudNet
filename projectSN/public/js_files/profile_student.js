/**
 * @author Djordje Popara 2019-0460
 * @category Student
 */

$(document).ready(function(){
    let changed = false;
    
    /**
     * Opens edit mode, upload image and change bio available
     */
    
    
    //input student info when entering your profile
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
            $("#user-picture").attr("src","localFiles/"+user.img);
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
    
    
    $("img#change").on('click',function(){     
            $("#imgUpload").click();
            
    
    })
    
    
    $("input#save").on("click",function (){
      
        var form_data = new FormData();
        var oFReader = new FileReader();
        oFReader.readAsDataURL(document.getElementById("imgUpload").files[0]);
        form_data.append('file',document.getElementById("imgUpload").files[0]);
  
        $.ajax({
            url:"http://localhost:8080/ajax-setUser-Img",
            method:"POST",
            data:form_data,
            contentType: false,
            cache: false,
            processData: false,
            dataType: "JSON",
            success:function (response){
                alert("localFiles/"+response['message']);
               $("#user-picture").attr("src","localFiles/"+response['message']); 
            },
            error:function (){
                alert("error");
            }
        })
        
    })
    
     $("input#discard").on("click",function (){
       $("#imgUpload").val("");
    })
    
});