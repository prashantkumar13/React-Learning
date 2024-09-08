import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './context/theme'
import ThemeButton from './components/ThemeButton'
import Card from './components/Card'

function App() {
  
  const [themeMode , setThemeMode] = useState('light') //by default light mode hai

  const lightTheme = () => {
    setThemeMode('light')
  }

  const darkTheme = () => {
    setThemeMode('dark')
  }


  useEffect(() => {
    const modes = document.querySelector('html')
    modes.classList.remove('light' , 'dark')
    modes.classList.add(themeMode)
  } , [themeMode])

  return (

    <ThemeProvider value={{themeMode , lightTheme , darkTheme}}>
        
    <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                <ThemeButton />
            </div>

            <div className="w-full max-w-sm mx-auto">
                <Card />
            </div>
        </div>
    </div>

    </ThemeProvider>
  )
}

export default App
