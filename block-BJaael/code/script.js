let body = document.querySelector('body');
let span = document.createElement('span');
body.append(span);

function color(){
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    return bgColor;
}

function randon(max){
    var num = Math.floor(Math.random() * max);
    // var num = Math.floor(Math.random()*(length))
    return num;
}

for ( let i = 0 ; i <= 500 ; i++ ){
    let div = document.createElement('div');
    div.style.backgroundColor = '#fff';
    div.style.border = '6px solid black';
    div.style.height = '4rem';
    div.style.width = '4rem';
    div.style.paddingTop = '22px'
    div.style.textAlign = 'center';
    div.innerText = randon(500);
    span.append(div);
    span.style.display = 'flex';
    span.style.flexWrap = 'wrap';
    body.style.backgroundColor = 'red';
    
}


function addAction(){
    div.forEach((e)=>{
    e.style.backgroundColor = color();
    e.innerText  = randon(500);
})
}
div.addEventListener('mousemove',addAction);


// var randomNumber = Math.floor(Math.random()*(quotes.length));
// document.getElementById(‘quote’).innerHTML=quotes[randomNumber]; 