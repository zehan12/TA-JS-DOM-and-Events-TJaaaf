let form = document.querySelector("form");

let modal = document.querySelector(".modal");
let info = document.querySelector(".info");


let userInfo = {};

function handelSumbit(event){
        event.preventDefault();
        let elements = event.target.elements;
        
        userInfo.name = elements.name.value;

        userInfo.email = elements.email[0].value;

        userInfo.category = elements.gender.value;

        userInfo.color = elements.email[1].value;

        userInfo.rate = elements.range.value;

        userInfo.genre = elements.drone.value;

        console.log(elements.terms.value);

        modal.classList.add("open");

        displayForm(userInfo);

}

form.addEventListener("submit",handelSumbit);

function displayForm(data = {}){
    info.innerHTML = "";
    let name = document.createElement('h2');
    name.innerText = `Hello ${userInfo.name}`;
    let email = document.createElement('p');
    email.innerText = `Email : ${userInfo.email}`;
    let movie = document.createElement('p');
    movie.innerText = `Movie : ${userInfo.category}`;
    let color = document.createElement('p');
    color.innerText = `Color : ${userInfo.color}`;
    let rating = document.createElement('p');
    rating.innerText = `Rating : ${userInfo.rate}`;
    let drone = document.createElement('p');
    drone.innerText = `Drone : ${userInfo.drone}`;
    let terms = document.createElement('p');
    terms.innerText = `Terms : ${userInfo.terms}`;


    info.append(name,email,movie,color,rating,drone,terms);    
    // modalinfo.append(name);

}