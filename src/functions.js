const createElement = (elementName, className = "", textValue = "") => {
    let div = document.createElement(elementName);
    
    if(className){
        div.classList.add(className);
    }

    if(textValue){
        let text = document.createTextNode(textValue);
        div.appendChild(text);
    }
    return div;
}

export default createElement;