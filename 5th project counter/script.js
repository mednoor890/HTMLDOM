let counter=document.querySelector(".counter");
const add=document.querySelector("#lowerCountBtn");
const minus=document.querySelector("#upperCountBtn");
add.addEventListener("click",more);
minus.addEventListener("click",less);
let count=0;
function more(){
    count++;
    counter.innerHTML=count;
    counter.animate([{opacity:"0.2"},{opacity:"1.0"}],{duration:500,fill:"forwards"})
}
function less(){
count--;
counter.innerHTML=count;
counter.animate([{opacity:"0.2"},{opacity:"1.0"}],{duration:500,fill:"forwards"})
}
// this need to change color while incrementing and decrementing 