const button=document.querySelector("#sendBtn");
const input=document.querySelector("#messageIn");
const output=document.querySelector("#messageOut");
button.addEventListener("click",getMsg);
function  getMsg()
{
    let content=input.value;
//console.log(content);
if (content==""){
    alert("plz enter a msg")
}
else {
    output.innerHTML=content;
}
}
