import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


// const addElement = {
//     type : "a",
//     props : {
//         href : "prashant@google.com",
//         alt : "yo"
//     },
//     text : "link with google",
// }

// const anotherElement = (
//     <a href='prashant@google.com' alt='yo'>link with google</a>
// )

const anotherElement = React.createElement( //babel inject karta hai
    'a',
    {href:'prashant@google.com' , alt:'yo'},
    'link with google',
)

createRoot(document.getElementById('root'))
.render(
  
    // addElement
    <>
    {/* anotherElement // reference pass karna hai bus  */}
    <App />
    </>
  
)
