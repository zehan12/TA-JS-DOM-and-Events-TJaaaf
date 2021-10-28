// let allboxes = document.querySelectorAll(".box");
// let boxFirst = document.querySelector("ul");
// let li = document.querySelectorAll("li");


// let box = document.querySelectorAll('box');


// function flipCard(){
// allboxes.forEach((elem)=>{
//    for ( let i = 1 ; i < elem ; i++ ){
//    elem.innerText = i+1;
//    console.log(EventTarget);
   
// }
// })
// }

// allboxes.forEach((elem)=>elem.addEventListener("click", flipCard));

let root = document.querySelector(".boxes");
let allboxes = document.querySelectorAll("li");

function handelEvent(event){
    console.log(event.target, "Event");
    
    allboxes.innerText = 1;
    
    
}

root.addEventListener("click", handelEvent)