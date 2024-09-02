import { useCallback, useEffect, useRef, useState } from 'react'



function App() {
  //dependies are password ,length , number , charaters

  const [password , setPassword] = useState("")

  const [length, setLength] = useState(8)

  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)

  const passwordRef = useRef() //inilially null de skte hai

  //to optimize the apporach we can use useCallback hook

  const Generator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numAllowed) str += "0123456789"
    if(charAllowed) str += "`@!#$%^&*{}[]:<"

    for (let index = 0; index < length; index++) {
        
      const ind = Math.floor(Math.random() * str.length + 1)
      
      let char = str.charAt(ind)

      pass += char
      console.log(pass)
      
    }

    setPassword(pass)


  } , [length , numAllowed , charAllowed , setPassword])

  const copyToClipBoard = useCallback(() => {
     
    // passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 3);
    // window.navigator.clipboard.writeText(password) //one method but not user friendly
    console.log("copy done")
  }, [password])

  useEffect(()=> {
     
    Generator()
  },[length , numAllowed , charAllowed , Generator])


  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'> 
        <h1 className='text-white text-center my-3'>Password Generator</h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type='text'
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            value={password}
            ref={passwordRef}
          />

          <button
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
            onClick={copyToClipBoard}
          >Copy
          </button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type='range'
              min = {6}
              max = {50}
              value={length}
              className='cursor-pointer'
              onChange={(e)=> {setLength(e.target.value)}}
            ></input>
            <label>Length : {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type='checkBox'
              defaultChecked = {numAllowed}
              className='cursor-pointer'
              onChange={() => {
                        setNumAllowed((prev) => !prev)}}
            ></input>
            <label> Number</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type='checkBox'
              defaultChecked = {charAllowed}
              className='cursor-pointer'
              onChange={() => {
                        setCharAllowed((prev) => !prev)
              }}
            ></input>
            <label>SpecialCharaters</label>
          </div>

        </div>

      </div>
    </>
  )
}

export default App
