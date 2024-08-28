import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 10
  let [counter, setCounter] = useState(10)    // UI me updation ke liye hooks use hote hai

  const addOne = function adding(){
    console.log("clicked" , counter)
    counter = counter + 1;
    if(counter <= 20){
      setCounter(counter)
    }
      
  }

  const subtractOne = () => {
    // console.log("clicked" , Math.random())
    counter = counter - 1
    console.log("clicked", counter)
    if(counter >= 0){
      setCounter(counter)
    }  
    
  }

  return (
    <>
      
      <h1>Click Me</h1>
      <h2>counter : {counter}</h2>

      <button onClick={addOne} disabled={counter >= 20}>Add</button>
      <br/>
      <button onClick={subtractOne} disabled={counter <= 0}>Subtract</button>
      
    </>
  )
}

export default App
