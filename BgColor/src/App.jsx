import { useState } from 'react'

function App() {
  const [color, setColor] = useState('pink')

  // function changeColor(color){
  //   setColor(color)
  // }

  return (
    <>
      <div className="w-full h-screen duration-100"
           style={{backgroundColor: color}}>

          <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        
          <div className="flex justify-center gap-3 shadow-lg bg-white px-4 py-3 rounded-3xl">
      
              <button 
               onClick={() => setColor('red')}
               className=" px-4 py-1 rounded-full text-white shadow-lg"
               style = {{backgroundColor : 'red'}}
              >Red</button>

              <button
               onClick={() => setColor('yellow')}
               className=" px-4 py-1 rounded-full text-white shadow-lg"
               style = {{backgroundColor : 'yellow'}}
              >Yellow</button>

              <button
               onClick={() => setColor('blue')}
               className=" px-4 py-1 rounded-full text-white shadow-lg"
               style = {{backgroundColor : 'blue'}}
              >Blue</button>

              <button
               onClick={() => setColor('green')}
               className=" px-4 py-1 rounded-full text-white shadow-lg"
               style = {{backgroundColor : 'Green'}}
              >Green</button>
          </div>
          </div> 
      </div>
    </>
  )
}

export default App
