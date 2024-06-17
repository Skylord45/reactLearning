const reactElement = {
    type : "a",
    props : {
        href : "https://youtube.com",
        target : "_blank"
    },
    children : "Click me to visit Youtube"
}


function customRender(container, Element){
    const domElement = document.createElement(Element.type)
    domElement.innerHTML = Element.children;

    /*
    // here we have only two attribute than it's well and good
    domElement.setAttribute("href", Element.props.href);
    domElement.setAttribute("target", Element.props.target)
    */

    // what if we have many attribute in props (we use for loop in props of reactElement)

    for (const prop in Element.props) {
        domElement.setAttribute(prop, Element.props[prop])
      //  domElement.setAttribute("prop", Element.props.prop)
        // both upper syntex is same 
    }
    container.appendChild(domElement);
}


const mainContainer = document.querySelector('#root')

customRender(mainContainer, reactElement)