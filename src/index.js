import home from './home.js';
import contact from './contact.js';
import menu from './menu.js';
import createElement from './functions';

const mainDiv = document.querySelector('div#content');
const header = createElement("header");
const logoDiv = createElement("div", "logo");
const logoH1 = createElement("h1", "", "Pizzeria Trentino");

logoDiv.appendChild(logoH1);
header.appendChild(logoDiv);

const ul = createElement("ul", "header-links");
const li1 = createElement("li");
let homeLink = createElement("a", "", "Home");
homeLink.addEventListener("click", () => linkClicked("home"));
li1.appendChild(homeLink);

const li2 = createElement("li");
let menuLink = createElement("a", "", "Menu");
menuLink.addEventListener("click", () => linkClicked("menu"));
li2.appendChild(menuLink);

const li3 = createElement("li");
let aboutLink = createElement("a", "", "Contact");
aboutLink.addEventListener("click", () => linkClicked("contact"));
li3.appendChild(aboutLink);

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
header.appendChild(ul);
mainDiv.appendChild(header);
mainDiv.appendChild(home());

function linkClicked(site){
    clearContent();
    switch(site){
        case "home": mainDiv.appendChild(home()); break;
        case "contact": mainDiv.appendChild(contact()); break;
        case "menu": mainDiv.appendChild(menu()); break;
    }
}

function clearContent(){
    let main = document.querySelector('main');
    if(main){
        main.remove();
    }
}
