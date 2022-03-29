(function(){

    let result = document.querySelector('.result')
    let allBoxes = document.querySelectorAll('.box')
    let initialValue = 0;
    
    result.innerText = initialValue;
    
    allBoxes.forEach((box) => {
        box.addEventListener('click',handleClick)
    })
    
    function handleClick(event){
        //!eval will do all operations and give calculated output
        
        //!when equals is pressed
        if(event.target.classList.contains('equals')){
            result.innerText = eval(result.innerText)
            return;
        }
    
        //!when clears is pressed
        if(event.target.innerText === 'C'){
            result.innerText = initialValue;
            return;
        }
    
        //!When we begin we have 0. So for the first calculation to overwrite 0 in result bar:
        if(result.innerText == initialValue) {
            result.innerText = event.target.innerText;
        } else {
            result.innerText = result.innerText + event.target.innerText
        }
        
    }
    
    }
    )();
