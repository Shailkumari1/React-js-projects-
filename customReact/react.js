

function customRender (raectElement, container){

    const domElement = document.createElement(raectElement.type)
    domElement.innerHTML =raectElement.Children

    for (const prop in raectElement.props) {
        if(prop === 'Children') continue;
        domElement.setAttribute(prop, raectElement.props[prop])
 
    }
    container.appendChild(domElement)
}

const raectElement = {
    type: 'a',
    props: {
        href :'https://google.com',
        target : '_blank'
    },
    Children : 'click me  to visite google'
}



const mainContainer = document.querySelector('#root')

customRender(raectElement,mainContainer)