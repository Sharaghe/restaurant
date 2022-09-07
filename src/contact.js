import createElement from './functions';

const contact = function(){


    const main = createElement("main");
    const mainDiv = createElement("div", "content");
    const title = createElement("h2", "", "Contact us");

    main.appendChild(mainDiv);
    mainDiv.appendChild(title);

    return main;
}

export default contact;