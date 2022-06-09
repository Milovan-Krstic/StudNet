/**
 * @author Djordje Popara 2019-0460
 * @category Student
 */

 $(document).ready(function(){
    $.ajax({
           context:this,
           type: "POST",
           url: base_url + "/ajax-request-friend-data",
           data: {

               id:window.localStorage.getItem("IdKor")
           },
           dataType : "JSON",
           success: function (response) {
              //window.location.href = response['url'];
              //$(this).parent().parent().remove();
              let name = response['Ime']+" "+response['Prezime'];
               $("#name").text(name);
               $(".faculty .info-box .name").text(response['Faculty']);   
               $(".course .info-box .name").text(response['Course']);

               let indeks = response['IdGod']+"/"+response['IdNum'];
               $(".id .info-box .name").html(indeks);
               $(".country .info-box .name").text(response['Country']);
               $(".email .info-box .name").text(response['Email']);
               $("#user-picture").attr("src","localFiles/"+response['img']);
               if(parseInt(response['Friends'])===1){
                   $("#status").text("Friend");
                   $(".buttons input").val("Remove Friend");
                   $(".buttons input").addClass("remove");
                   $(".buttons input").removeClass("request");
               }
               else{
                   $("#status").text("None");
                   $(".buttons input").val("Send Friend Request")
                   $(".buttons").addClass("request");
                   $(".buttons").removeClass("remove");
               }


           }
       });


   $(".buttons input").val("Send Friend Request")
   $(".buttons").addClass("request");
   $(".buttons").removeClass("remove");


   $(".buttons.request input").click(function() {
       $(this).prop("disabled", true);
       $(this).val("Request sent");
       $(this).parent().removeClass("request");
       //Send request
   })
     
});