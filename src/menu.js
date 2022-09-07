import createElement from './functions';

const menu = function(){


    const main = createElement("main");
    const mainDiv = createElement("div", "content");
    const heroH2 = createElement("h2", "", "Our Menu");

    main.appendChild(mainDiv);
    mainDiv.appendChild(heroH2);

    return main;
}

export default menu;