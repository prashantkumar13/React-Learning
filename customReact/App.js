// we have to create a custom react app

// function head(container){

//     const print = document.createElement('h1')
//     print.innerHTML = "Welcome to the custom React"
//     container.appendChild(print)

// }

// const container = document.getElementById('root')

// head(container)


//method 1
// function reactElement(addElement , container){
    
//     const DomElement = document.createElement(addElement.type)
//     DomElement.innerHTML = addElement.text

//     DomElement.setAttribute('href' , addElement.props.href)
//     DomElement.setAttribute('alt' , addElement.props.alt)

//     container.appendChild(DomElement)
// }

function reactElement(addElement , container){
    const DomElement = document.createElement(addElement.type)
    DomElement.innerHTML = addElement.text

    for (const prop in addElement.props) {
        console.log(prop)
        DomElement.setAttribute(prop , addElement.props[prop])
        console.log(addElement.props[prop])
    }

    container.appendChild(DomElement)
}

const addElement = {
    type : "a",
    props : {
        href : "prashant@google.com",
        alt : "yo"
    },
    text : "link with google",
}

const container = document.getElementById('root');

reactElement(addElement , container)