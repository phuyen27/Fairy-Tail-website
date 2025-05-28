import { useState } from 'react'
import './App.css'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Author from './Components/Author'
import Movies from './Components/Movies'

function App() {
 const [appColor, setAppColor] = useState('#fb7185')
  return (
    <>
      <Navbar color={appColor} />
      <Home onCharacterChange = {setAppColor}/>
      <Author color = {appColor}/>
      <Movies color={appColor} />
    </>
  )
}

export default App
