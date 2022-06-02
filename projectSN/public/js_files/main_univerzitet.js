
$(document).ready(function(){
    let dodajeSeU;  
    
 
    let nizFakulteta=[];
    var IdUniii=0;
    
    let nizSmerova=[];
    let nizSmerovaUci=[];
    
    let nizPredmeta=[];
    
    
    let dodajeSeUSmer;
    let dodajeSeUSemestar;
    
    let semSel=0;
    
    
   
    
    $.ajax({
        url : "http://localhost:8080/Univerzitet/ajaxRequestUni",
        type : "POST",
        data:{
            IdUni:IdUniii,
            
        },
        dataType : "JSON",
        success: function(response){
            //alert(response[0].Name);
            
            let tex= response['kor'].Ime;
                       
                       
            let input =tex;

            $("#naslov").text(input); 
            IdUniii=response['kor'].IdKor;
              
                       
            nizFakulteta=response['fakulteti'];
            for(let i=0;i<nizFakulteta.length;i++){
                $('.friends-scroll').append(
                    $('<div>').prop({
                        className: 'friend',
                        }).append($('<span>').prop({
                            innerHTML: nizFakulteta[i].Name
                            
                        }).append(`<img  class='addFac' id=${i} alt='+' src='icons/StudNet Plus.svg'/>`))
                                );
            }
        },
        error:function(){
            alert("error");     
        }   
    });
    
    
   
    
    
    
   
    $("textarea").each(function () {
        this.setAttribute("style", "height:" + (this.scrollHeight) + "px;overflow-y:hidden;");
    }).on("input", function () {
        this.style.height = "37px";
        this.style.height = (this.scrollHeight) + "px";

        if($(this).val().length == 250) {
            $(this).addClass("max");
        }
        else {
            $(this).removeClass("max");
        }

    });

    

    
    
    $(".btnaddfac").click(function(){
        
        
        let text = $("#input-message").val()
        
        if(text!="" ){
           
            
            $.ajax({
            type: "POST",
            url: "http://localhost:8080/Univerzitet/ajaxRequestAddingFac",
            data: {
                IdUni : IdUniii,
                Name : text,
            },
            dataType : "JSON",
            success: function (response) {
                if(response!=null){
                    nizFakulteta.push(response);
                    $('.friends-scroll').append(
                    $('<div>').prop({
                        className: 'friend',
                        }).append($('<span>').prop({
                            innerHTML: text
                        }).append(`<img  class='addFac' id=${nizFakulteta.length-1} alt='+' src='icons/StudNet Plus.svg'/>`))
                                );
                }
                else {
                    //alert("vec ima");
                    error_message = "Faculty with that name already exists";
                            
                            $(".popup-top").removeClass("success");
                            $(".top-image img").attr("src", "../icons/StudNet Exclamation.svg");
                            $(".top-message span").text("Sorry you can't add faculty...");
                            $(".bottom-message span").text(error_message);
                            $(".bottom-next span").text("Return to the form");
                            $(".popup-background").addClass("popup-active");
                }
            },
            error: function(){
                alert("error");
            }
            
        });
            
            
        }
    });
    
    
    
    
    $(".btnaddSmer").click(function(){
      
      
      if($("#input-smer").hasClass("hidden") || $("#input-numberof").hasClass("hidden")) {
         
          let name=$("#input-smer").val();
          //alert(name);
          if(name!="" && semSel!=0){
           semSel=1;
            
            $.ajax({
            type: "POST",
            url: "http://localhost:8080/Univerzitet/ajaxRequestAddingClass",
            data: {
                IdSmr : nizSmerova[dodajeSeUSmer].IdSmr,
                Name : name,
                semestar: dodajeSeUSemestar,
            },
            dataType : "JSON",
            success: function (response) {
                //alert("sta");
                if(response!=null){
                    //nizPredmeta.push(response);
                    /*$('.friends-scroll').append(
                    $('<div>').prop({
                        className: 'friend',
                        }).append($('<span>').prop({
                            innerHTML: text
                        }).append(`<img  class='addFac' id=${nizFakulteta.length-1} alt='+' src='icons/StudNet Plus.svg'/>`))
                                );*/
                    //alert(response.Name);
                    
                    $(`#sem${dodajeSeUSemestar}n${(dodajeSeUSmer+1)*100}`).append(
                            $('<li>').prop({
                              innerHTML: " &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp #"+response.Name,
                              id: 'predKa'+((dodajeSeUSmer+1)*100),
                            })
                            );
                    
                    
                }
                else {
                    //alert("vec ima");
                    error_message = "Class with that name already exists in selected course";
                            
                            $(".popup-top").removeClass("success");
                            $(".top-image img").attr("src", "../icons/StudNet Exclamation.svg");
                            $(".top-message span").text("Sorry you can't add class...");
                            $(".bottom-message span").text(error_message);
                            $(".bottom-next span").text("Return to the form");
                            $(".popup-background1").addClass("popup-active");
                            //alert("AAAAaDASDASDASD");
                }
            },
            error: function(){
                alert("error");
            }
            
        });
            
            
        }
            if(semSel==0){
                    error_message = "You have to select a semester";
                            
                    $(".popup-top").removeClass("success");
                    $(".top-image img").attr("src", "../icons/StudNet Exclamation.svg");
                    $(".top-message span").text("Sorry you can't add class...");
                    $(".bottom-message span").text(error_message);
                    $(".bottom-next span").text("Return to the form");
                    $(".popup-background1").addClass("popup-active");
                            //alert("AAAAaDASDASDASD");
                    }
            else if(name==""){
                error_message = "You have to enter class name";
                            
                    $(".popup-top").removeClass("success");
                    $(".top-image img").attr("src", "../icons/StudNet Exclamation.svg");
                    $(".top-message span").text("Sorry you can't add class...");
                    $(".bottom-message span").text(error_message);
                    $(".bottom-next span").text("Return to the form");
                    $(".popup-background1").addClass("popup-active");
            }
          
      }
      else{
        
        
        let name=$("#input-smer").val();
        let numof=$("#input-numberof").val();
        
        
        if(numof!="" && name!=""){
            numof=parseInt(numof);
            let u=nizFakulteta[dodajeSeU].IdF;
            $.ajax({
            type: "POST",
            url: "http://localhost:8080/Univerzitet/ajaxRequestAddingCourse",
            data: {
                IdFak : u,
                Num_of_class :numof ,
                Name:name,
            },
            dataType : "JSON",
            success: function (response) {
                
                if(response!=null){
                    nizSmerova.push(response);
                   $('.course').append(
                            $('<li>').prop({
                              className:'course1',
                              innerHTML: "#"+name,
                              id: (nizSmerova.length)*100,
                            })
                            );
                }
                else {
                    //alert("vec ima");
                    error_message = "Course with that name already exists";
                            
                            $(".popup-top").removeClass("success");
                            $(".top-image img").attr("src", "../icons/StudNet Exclamation.svg");
                            $(".top-message span").text("Sorry you can't add course...");
                            $(".bottom-message span").text(error_message);
                            $(".bottom-next span").text("Return to the form");
                            $(".popup-background1").addClass("popup-active");
                }
            },
            error: function(){
                alert("error");
            }
            
            });
        }
        
    }
    $("#input-smer").val('');
    $("#input-numberof").val('');
    
    
});
    
    
    
    $(".bottom-next").click(function(){
        $(".popup-background").removeClass("popup-active");
        $(".popup-background1").removeClass("popup-active");

    })
    
    
   
   
   
   
   
    
    $(".friends-scroll").on('click','.addFac',function(){
                $('.subjects').append(`<ul class="course" id="glavni">`);
           
          $(".AddSmer-background").addClass("AddSmer-active");
          
          document.getElementById("NazivFakulteta").innerHTML=nizFakulteta[$(this).attr('id')].Name;
          dodajeSeU=$(this).attr('id');
          let u=nizFakulteta[dodajeSeU].IdF;
          
          
          
          $.ajax({
                type: "POST",
                url: "http://localhost:8080/Univerzitet/ajaxGetSmerovi",
                data: {
                IdFak : u
            },
            dataType : "JSON",
            success: function(response){
                nizSmerova=response;
                
                for(let i=0;i<response.length;i++){
                    
                    nizSmerovaUci[i]=0;
                    
                
                    
                    $('.subjects').append($('.course').append(
                            $('<li>').prop({
                              className:'course1',
                              innerHTML: "#"+response[i].Name,
                              id: (i+1)*100,
                            })
                            ));
                }
               
            },
            error : function(){
                alert("error");
            }
          });
          
          
          
         
    });
    
    
    
    
    $(".subjects").on('click','.course1',function(){
        let he=$(this).attr('id');
 
        dodajeSeUSmer=($(this).attr('id'))/100-1;
        
        let u=nizSmerova[dodajeSeUSmer].IdSmr;
        if(nizSmerovaUci[dodajeSeUSmer]==1){
            if($(this).next().hasClass("active")) {
            $(this).removeClass("clicked");
            $(`#${he*100}`).removeClass("active");
            //$("#input-smer").removeClass("hidden");
            $("#input-numberof").removeClass("hidden");
            document.getElementById('input-smer').placeholder="Course name" ;
        }
        else {
            //$("#input-smer").addClass("hidden");
            $("#input-numberof").addClass("hidden");
            document.getElementById('input-smer').placeholder="Add subject to :  "+nizSmerova[dodajeSeUSmer].Name+" ,  " ;
            $(".semester").removeClass("active");
            $(".course1").removeClass("clicked");
            $(this).next().toggleClass("active");
            $(this).toggleClass("clicked");
        }
            return;
        }
        
        
        
        nizSmerovaUci[dodajeSeUSmer]=1;
        let lmao=$(this).attr("id");
        
        $.ajax({
                type: "POST",
                url: "http://localhost:8080/Univerzitet/ajaxGetPredmeti",
                data: {
                IdSmr : u
            },
            dataType : "JSON",
            success: function(response){
                nizPredmeta=response;
                
                $(`#${he}`).after(
                            $('<ul>').prop({
                              className:'semester',
                              id: he*100,
                            })
                            );
                  //  <li><textarea name="" id="input-smer" cols="10" rows="1" placeholder="Course name" maxlength="250"></textarea></li>
                //<li><textarea name="" id="input-numberof" cols="10" rows="1" placeholder="Number of classes" maxlength="250"></textarea></li>
                //$("#input-smer").addClass("hidden");
                $("#input-numberof").addClass("hidden");
                
                
                //$(`#${he*100}`).append(`<li><textarea name="" id="input-sem" cols="10" rows="1" placeholder="Number of classes" maxlength="250"></textarea></li>`);
                
                for(let i=1;i<=8;i++){
                    $(`#${he*100}`).append(
                            $('<li>').prop({
                              className:'semester-name',
                              innerHTML: " &nbsp &nbsp#Semester"+i,
                              id: 'semn'+i+"n"+he,
                            })
                            );
                            $(`#semn${i}n${he}`).after(
                            $('<ul>').prop({
                              className:'subject',
                              id: 'sem'+i+"n"+he,
                            })
                            );
                   
              
                }
                for(let i=0;i<response.length;i++){
                    if(response[i].semestar>8)return;
                        $(`#sem${response[i].semestar}n${he}`).append(
                            $('<li>').prop({
                              innerHTML: " &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp"+response[i].Name,
                              id: 'pred'+i,
                            })
                            );
                }
            $(".semester").removeClass("active");
            $(".course1").removeClass("clicked");
            $(`#${lmao}`).next().toggleClass("active");
            $(`#${lmao}`).toggleClass("clicked");

            },
            error : function(){
                alert("error");
            }
          });
        
        
        
    });
    
   
    $(".subjects").on('click','.semester-name',function(){
        if($(this).next().hasClass("active")) {
            $(this).removeClass("clicked");
            $(".subject").removeClass("active");
            document.getElementById('input-smer').placeholder="Add subject to :  "+nizSmerova[dodajeSeUSmer].Name+" ,  " ;
            semSel=0;
        }
        else {
            dodajeSeUSemestar=$(this).attr("id");
            semSel=1;
            dodajeSeUSemestar=dodajeSeUSemestar.substr(4,1);
           
            //alert(dodajeSeUSemestar+"..."+dodajeSeUSmer);
            document.getElementById('input-smer').placeholder="Add subject to :  "+nizSmerova[dodajeSeUSmer].Name+" ,  Semester  "+dodajeSeUSemestar;
            $(".subject").removeClass("active");
            $(".semester-name").removeClass("clicked");
            $(this).next().toggleClass("active");
            $(this).toggleClass("clicked");
        }
    });

    $(".subjects").on('click','.subject li',function()   {
        $(".subject li").removeClass("clicked");
        $(this).toggleClass("clicked");
    });
    
    
    
    
    $(".levo").click(function(){
        //if($("#input-smer").hasClass("hidden")) $("#input-smer").toggleClass("hidden");
        if($("#input-numberof").hasClass("hidden"))$("#input-numberof").toggleClass("hidden");
        document.getElementById('input-smer').placeholder="Course name" ;
        $(".AddSmer-background").removeClass("AddSmer-active");
        var elem=document.getElementById("glavni");
        elem.parentNode.removeChild(elem);
    })
    
    
    $(".moderator").click(function(){
        
        $.ajax({
            type: "POST",
            url: "http://localhost:8080/Univerzitet/ajaxRequestRedirect",
            data: {
                
            },
            dataType : "JSON",
            success: function (response) {
               
                  window.location.href = response['url'];
                       
            },
            error: function (){
                alert("greska");
            }
        });
    })
    
});