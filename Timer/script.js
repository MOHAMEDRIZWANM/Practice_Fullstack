const Task=document.getElementById("Task");
const description=document.getElementById("desc");
const duration=document.getElementById("dur");
const btn=document.getElementById("btn");
const table=document.getElementById("table");
const dlt=document.getElementById("dlt");



dlt.addEventListener('click',()=>{
    table.deleteRow(-1);
})



let s;
let count=0;
let text;
const start=document.getElementById('toggle');
const c=document.getElementById('count');

start.addEventListener('click',timestart)
function timestart(){
    text=start.textContent;
    if(text=="start"){
        count=0;
        start.style.setProperty('background-color','red')
        start.style.border='3px solid green'
        

    s=setInterval(()=>{ count=count+1;c.innerHTML=count;},1000);
     start.innerText="stop";
    }
   else{
     clearInterval(s);
     start.style.setProperty('background-color','green')
        start.style.border='3px solid red'


     start.innerText="start";
    c.innerHTML=0;
    var row=table.insertRow(-1);
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);    
    var cell3=row.insertCell(2);
    cell1.innerHTML=Task.value;
    cell2.innerHTML=desc.value;
    cell3.innerHTML=count;
    Task.value=" ";
    description.value=" ";
    duration.value=" ";
}
     

}



