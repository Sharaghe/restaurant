import menu from './home.js';
import createElement from './functions';

const mainDiv = document.querySelector('div#content');
const header = createElement("header");
const logoDiv = createElement("div", "logo");
const logoH1 = createElement("h1", "", "Pizzeria Trentino");

logoDiv.appendChild(logoH1);
header.appendChild(logoDiv);

const ul = createElement("ul", "header-links");
const li1 = createElement("li", "", "Home");
const li2 = createElement("li", "", "Menu");
const li3 = createElement("li", "", "About");

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
header.appendChild(ul);
mainDiv.appendChild(header);
mainDiv.appendChild(menu());
