import createElement from './functions';

const contact = function(){


    const main = createElement("main");
    const mainDiv = createElement("div", "content");
    const heroH1 = createElement("h1", "", "Where elegance meets taste.");
    const heroH2 = createElement("h2", "", "Discover one of italy's oldest and finest Pizzerias where you will get the best pizzas, wines, or pasta.");

    main.appendChild(mainDiv);
    mainDiv.appendChild(heroH1);
    mainDiv.appendChild(heroH2);

    return main;
}

export default contact;