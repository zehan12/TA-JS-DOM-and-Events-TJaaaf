// CSS 
let h1 = document.querySelector("h1");

h1.style.textAlign = "center";
h1.style.paddingTop = "80px";
h1.style.fontSize = "50px"
h1.style.fontFamily = "arial"
h1.style.fontWeight = "100"

let container = document.querySelector(".container");

container.style.textAlign = "center"

let input = document.querySelector("input");

input.style.boxShadow = "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;";

input.style.width = "500px"

input.style.height = "60px"

input.style.fontSize = "20px"

input.style.fontWeight = "100"

input.style.textAlign = "center"

let btn = document.querySelectorAll("button");

btn.forEach((b)=>{
    b.style.height = "30px"
    b.style.width = "100px"
    b.style.margin = "10px"
})


let todo = [];

//Selectors
let form = document.querySelector("form");

form.addEventListener('submit',handelSumbit);

function handelSubmit(event){
    event.preventDefault();
        if ( input.value != "" )
        addTodo(input.value);
    input.value = ';';
}

function addTodo(todo){
    let ul = document.querySelector('.ul');
    let li = document.querySelector('li');

    li.innerHTML = `
    <button name="checkButton"><i class="fas fa-trash"></i></button>
    <span class="todo-item">${todo}</span>
    <button name="delete"><i class="fas fa-trash"></i></button>
    `;

    li.classList.add('todo-list-item');
    ul.appendChild('li')
}