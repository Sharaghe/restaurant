import createElement from './functions';

const contact = function(){


    const main = createElement("main");
    const mainDiv = createElement("div", "content");
    const title = createElement("h2", "", "Contact us");

    const mail = createElement("h3", "", "reserve@trentino.it");

    main.appendChild(mainDiv);
    mainDiv.appendChild(title);
    mainDiv.appendChild(mail);

    return main;
}

export default contact;