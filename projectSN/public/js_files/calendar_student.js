


const date = new Date();

function renderCalendar(){
date.setDate(1);

  const monthDays = document.querySelector(".days2");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

const nextDays = 7 - lastDayIndex - 1;

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

document.querySelector("#monthID").innerHTML = months[date.getMonth()];
let godine=date.getFullYear();
//godine=godine%100;
godine=godine*10000;
let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<li class="prev-date" id="${godine+(date.getMonth()-1)*100+prevLastDay - x + 1}">${prevLastDay - x + 1}<span></span></li>`;
  }
  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<li class="today" id="${godine+date.getMonth()*100+i}">${i}<span></span></li>`;
    } else {
      days += `<li id="${godine+date.getMonth()*100+i}">${i}<span></span></li>`;
    }
  }
  for (let j = 1; j <= nextDays; j++) {
    days += `<li class="next-date" id="${godine+(date.getMonth()+1)*100+j}">${j}<span></span></li>`;
    monthDays.innerHTML = days;
  }

  

  $(".days2 li").click(function() {
    //Info(this);
    /*$(this).addClass("clicked");*/
    
    //alert("lmaooo");
    openForm(this.id);

});


};

renderCalendar();

document.querySelector(".levo").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
  checkStorage();
  
});

document.querySelector(".desno").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
  checkStorage();
});
//document.querySelector(".date p").innerHTML = new Date().toDateString();


let nizTaskova=[
  {
      id: "_",
      tasks:"_"
  }
];

if(localStorage.getItem("tasks")!=null){
  nizTaskova=JSON.parse(localStorage.getItem("tasks"));
}
else{
  let nizTaskova=[
    {
        id: "_",
        tasks:"_"
    }
  ];
  
  localStorage.setItem("tasks",JSON.stringify(nizTaskova));
}


$(function() {
  checkStorage();
    
  });
 
  $(".days2 li").click(function() {
    //Info(this);
    /*$(this).addClass("clicked");*/
    
    
    //openForm(this.id);
    
});

  function openForm(id) {
    document.getElementById("task1").value="";
    document.getElementById("task2").value="";
    document.getElementById("task2").style.visibility="hidden";
    document.getElementById("task3").value="";
    document.getElementById("task3").style.visibility="hidden";

    
    document.getElementById("task4").value="";
    document.getElementById("task4").style.visibility="hidden";


    document.getElementById("task5").value="";
    document.getElementById("task5").style.visibility="hidden";
    //$(id).find("span").css("background-color","aquamarine");
    let dann=id%100;
    let mesec=id%10000;
    mesec=Math.floor(mesec/100+1);
    let godina=Math.floor(id/10000);
    document.getElementById("currDate").innerHTML=dann+"."+mesec+"."+godina;
    document.getElementById("myForm").style.display = "block";
    
    for(let i=1;i<nizTaskova.length;i++){
      
      
      if(nizTaskova[i].id==dann+"."+mesec+"."+godina){
        
        var allTasks=nizTaskova[i].allTasks;
        const splitTasks = allTasks.split(",");
        
        for(let i=1;i<splitTasks.length;i++){
          if(splitTasks[i-1]==""){
            splitTasks.splice(i,1);
            i--;
            continue;
          }
          document.getElementById("task"+i.toString()).value=splitTasks[i-1];
      document.getElementById("task"+i.toString()).style.visibility="visible";
        }
        
    }
    
  }
    /*var allTasks = localStorage.getItem(id.toString());
    if(allTasks!=null){
    const splitTasks = allTasks.split(",");
    for(let i=1;i<splitTasks.length;i++){
      if(splitTasks[i-1]==""){
        splitTasks.splice(i,1);
        i--;
        continue;
      }
      document.getElementById("task"+i.toString()).value=splitTasks[i-1];
      document.getElementById("task"+i.toString()).style.visibility="visible";
     
    }}*/
  }


  
  function closeForm() {
    

    document.getElementById("myForm").style.display = "none";
  }

  function checkStorage(){
    if(localStorage.getItem("tasks")!=null){
      nizTaskova=JSON.parse(localStorage.getItem("tasks"));
    }
    else return 0;
    
    for(let i=1;i<nizTaskova.length;i++){
      let id=nizTaskova[i].id;
      let lmao = nizTaskova[i].allTasks;
      let niz=id.split(".");
      id=parseInt(niz[0])+parseInt(niz[1]-1)*100+(parseInt(niz[2]))*10000;
      const myElem = document.getElementById(id);
      if(myElem!=null){
        const mySpanElem = myElem.getElementsByTagName("span");
        mySpanElem[0].style.backgroundColor="#67DBB8";
        if(lmao==""){
          mySpanElem[0].style.backgroundColor="white";

        }
      }
      //alert(id);
    }
    
    return;
  }

  function addTaskField(){
    let id = document.getElementById("currDate").innerHTML;
    //alert(id);
    //s = s.substring(0,2);
    let len = localStorage.getItem(id);

    /*let dann=id%100;
    let mesec=id%10000;
    mesec=Math.floor(mesec/100+1);
    let godina=Math.floor(id/10000);*/

    for(let i=1;i<nizTaskova.length;i++){
      //alert(nizTaskova[i].id);
      
      if(nizTaskova[i].id==id){
        //alert("proslo");

        var allTasks=nizTaskova[i].allTasks;
        
        const splitTasks = allTasks.split(",");
        
        let hm=splitTasks.length;
        //alert(document.getElementById("task"+hm).value.length);
        
        if(document.getElementById("task"+hm).value.length!=0){
          
          saveTasks();
          document.getElementById("task"+(hm+1).toString()).style.visibility="visible";
        }
        document.getElementById("task"+hm.toString()).style.visibility="visible";
        return;
      }
    }
    if(document.getElementById("task1").value.length!=0){
      saveTasks();
      document.getElementById("task2").style.visibility="visible";
    }

   /* if(len==null) return;
    const all = len.split(",");
    let i = all.length;
    document.getElementById("task"+i.toString()).style.visibility="visible";*/
  }

  function saveTasks(){
    let s = document.getElementById("currDate").innerHTML;
    //s = s.substring(0,2);
    let allTasks = "";
    for(let i=1;i<6;i++){
      const myElem = document.getElementById("task"+i.toString());
      if (myElem.style.visibility=="hidden") break;
      if(myElem.value!=""){
      allTasks+=myElem.value;
      allTasks+=",";}
      
    }
    //if(allTasks=="") return;
    let id=s;
    let lmao={id,allTasks};
    let flag=0;
    //alert(s);
    //alert(nizTaskova[2].id);
    for(let i=0;i<nizTaskova.length;i++){
      if(nizTaskova[i].id==s){
        nizTaskova[i]=lmao;
        flag=1;
        //alert("ISTI JE MAJMUNE");
      }
      //alert("KARINA");
    }
    if(flag==0)
      nizTaskova.push(lmao);
    
    //nizTaskova.push(lmao);
    
    localStorage.setItem("tasks",JSON.stringify(nizTaskova));
    //localStorage.setItem(s,allTasks);

    checkStorage();
    let niz=s.split(".");
    s=parseInt(niz[0])+parseInt(niz[1]-1)*100+(parseInt(niz[2]))*10000;
    //alert(s);
    openForm(s);
  }