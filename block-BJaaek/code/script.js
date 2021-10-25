let first = document.querySelector('.first');
let second = document.querySelector('.second');


// first.addEventListener('onclick',function(){
//     randomBgColor();
// })
// first.addEventListener("click",function() {
//     const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
//     document.first.style.backgroundColor = rndCol;
//   });

first.addEventListener("click",clickChange);

function clickChange() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    first.style.backgroundColor = bgColor;
  }
  

  second.addEventListener("mousemove",hoverChange);

  function hoverChange() {
      var x = Math.floor(Math.random() * 256);
      var y = Math.floor(Math.random() * 256);
      var z = Math.floor(Math.random() * 256);
      var bgColor = "rgb(" + x + "," + y + "," + z + ")";
      second.style.backgroundColor = bgColor;
    }
    