const quotes =[{
    name:"albert einstein",
    quote:"Strive not to be a success,but rather to be a value."
},
{
    name:"nelsen mandela",
    quote:"The greatest glory in living lies not in never falling, but in rising every time we fall." 

},
{
    name:"walt disney",
    quote:"The way to get started is to quit talking and begin doing."
},
{
    name:"steve jobs",
    quote:"The way to get started is to quit talking and begin doing."
},
{
    name:"john lennon",
    quote:"Life is what happens when you're busy making other plans."
    
},
{
    name:"james cameron",
    quote:"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success."
},
{
    name:"eleon roosvelt",
    quote:"The future belongs to those who believe in the beauty of their dreams."
},
{
    name:"ann frank",
    quote:"Whoever is happy will make others happy too." 
},{
    name:"Benjamin Franklin",
    quote:"Tell me and I forget. Teach me and I remember. Involve me and I learn." 
},
{
    name:"Aristotle",
    quote:"It is during our darkest moments that we must focus to see the light."
}]
const quoteBtn=document.querySelector("#quoteBtn");
const quote=document.querySelector("#quote");
const quoteAuthor=document.querySelector("#quoteAuthor");
quoteBtn.addEventListener("click",displayQuote);
function displayQuote(){
let number=Math.floor(Math.random()*quotes.length);
quoteAuthor.innerHTML=quotes[number].name;
quote.innerHTML= quotes[number].quote;




}