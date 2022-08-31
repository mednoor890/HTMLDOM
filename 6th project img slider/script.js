 const previous=document.querySelector(".prevBtn");
 const next=document.querySelector(".nextBtn");
 const container=document.querySelector(".images");
 let counter= 0;
 previous.addEventListener("click",previousimg);
 next.addEventListener("click",nextimg);
 function previousimg(){
     container.animate([{opacity:'0.1'},{opacity:'1.0'}],{duration:1000,fill:'forwards'});
if (counter == 0)
{
    counter= 3;
    
}

     counter--;
container.style.backgroundImage = `url(img/bcg-${counter}.jpg)`;



 }
 function nextimg(){
    container.animate([{opacity:'0.1'},{opacity:'1.0'}],{duration:1000,fill:'forwards'});
    if (counter == 3)
    {
        counter= -1;
        
    }
    
         counter++;
    container.style.backgroundImage = `url(img/bcg-${counter}.jpg)`;
    
    
    
     }
 