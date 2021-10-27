
//!create element 
let body = document.querySelector('body');
let outerbox = document.createElement('div');

//!give property to cover
outerbox.style.display = "flex";
outerbox.style.flexWrap = "wrap"
body.append(outerbox);


//!color changing function
function color(){
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    return bgColor;
}

//!number changing function
function random(max){
    var num = Math.floor(Math.random() * max);
    // var num = Math.floor(Math.random()*(length))
    return num;
}


//!loop to create multiple box 
for ( let i = 0 ; i <= 500 ; i++ ){

    //?create a div 
    let box = document.createElement('div');

    //?create a new class name "box"
    box.className = "box" ;
    // box.classList.add("box");

    //?give CSS property to it
    box.style.backgroundColor = '#fff';
    box.style.height = '4rem';
    box.style.width = '4rem';
    box.style.border = '2px solid black';
    
    //?create a h2 and give innerText property
    let h2 = document.createElement("h2");
    h2.innerText = random(500);
    box.append(h2);
    outerbox.append(box);
}

//!create a new variable name boxes
let boxes = document.querySelectorAll(".box");


//!function moveMouse use forEach take element 
function moveMouse(){
    boxes.forEach((elem) => {
        elem.style.backgroundColor = color();
        elem.children[0].innerText = random(500);
    })
}

//! final Execution of function threw addEventListener
outerbox.addEventListener("mousemove", moveMouse);


// var randomNumber = Math.floor(Math.random()*(quotes.length));
// document.getElementById(‘quote’).innerHTML=quotes[randomNumber]; 



