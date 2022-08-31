const colorBtn = document.querySelector(".colorBtn");
const bodyBcg = document.querySelector("body");
const colors = ["yellow","red" ,"green" ,"blue" ,"white","pink","orange"];
colorBtn.addEventListener('click',changeColor);
function changeColor(){
    let random = Math.floor(Math.random()*colors.length)
bodyBcg.style.backgroundColor=colors[random];


}