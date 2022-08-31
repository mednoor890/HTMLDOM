//const colorBtn = document.querySelector("button");
const yb=document.getElementById("yb");
const rb=document.getElementById("rb");
const wb=document.getElementById("wb");
const ob=document.getElementById("ob");
const bb=document.getElementById("bb");
const pb=document.getElementById("pb");
const gb=document.getElementById("gb");
let msg = document.getElementById("msg");

//const bodyBcg = document.querySelector("body");
const colors = ["yellow","red" ,"green" ,"blue" ,"white","pink","orange"];
function changeColor(){
    let random = Math.floor(Math.random()*colors.length)
var bgcolor=colors[random];
return(bgcolor);

}
const bodycChanger=()=>{
    document.body.style.background=randomC;
}
var randomC=changeColor();
const checkAnswer=(e)=>{
 console.log(randomC)
 var esm=e.target.value
   
 if (esm == randomC) 
 { msg.innerHTML =`
 <div style="position:relative;margin-top:400px; margin-left:-550px;"><h1>Lucker</h1></div>
` 
console.log("nice")
}else   msg.innerHTML=`

    
     <div style="position:relative;margin-top:400px; margin-left:-600px;"><h1> wrong guess it was ${randomC}</h1>

    `
setTimeout(bodycChanger,1000)    
    }   
    
yb.addEventListener('click',checkAnswer);
rb.addEventListener('click',checkAnswer);
wb.addEventListener('click',checkAnswer);
ob.addEventListener('click',checkAnswer);
bb.addEventListener('click',checkAnswer);
pb.addEventListener('click',checkAnswer);
gb.addEventListener('click',checkAnswer);

//next adding a try again button and adding score will  be more