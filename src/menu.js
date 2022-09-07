import createElement from './functions';

const menu = function(){


    const main = createElement("main");
    const mainDiv = createElement("div", "content");
    const heroH2 = createElement("h2", "", "Our Menu");
    mainDiv.appendChild(heroH2);

    let cont = createElement("div", "item-wrapper");
    let name = createElement("div", "", "Pizza Margeritha");
    let price = createElement("div", "", "5€");
    cont.appendChild(name);
    cont.appendChild(price);
    mainDiv.appendChild(cont);

    name = createElement("div", "", "Pizza Diavola");
    price = createElement("div", "", "5.50€");
    cont.appendChild(name);
    cont.appendChild(price);
    mainDiv.appendChild(cont);

    name = createElement("div", "", "Pizza Hawaii");
    price = createElement("div", "", "6€");
    cont.appendChild(name);
    cont.appendChild(price);
    mainDiv.appendChild(cont);

    name = createElement("div", "", "Pizza Quattro Stagioni");
    price = createElement("div", "", "6.50€");
    cont.appendChild(name);
    cont.appendChild(price);
    mainDiv.appendChild(cont);

    name = createElement("div", "", "Pizza Da Flo");
    price = createElement("div", "", "6.50€");
    cont.appendChild(name);
    cont.appendChild(price);
    mainDiv.appendChild(cont);

    main.appendChild(mainDiv);
    

    return main;
}

export default menu;