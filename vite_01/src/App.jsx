import Hello from "./hello"

function App() {
  
  const username = "prashant"
  return (
    <> // fragments ik element return karne ke kam aata hai
     <h1>welcome to site with vite {username}</h1>
    <Hello />
    <p> beleive in your self and any thing is possible</p>
    </>
  )
}

export default App
