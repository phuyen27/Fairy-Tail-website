import { useState } from 'react'
import './App.css'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Author from './Components/Author'

function App() {
 
  return (
    <>
      <Navbar/>
      <Home/>
      <Author/>
    </>
  )
}

export default App
