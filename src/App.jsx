import { useState } from 'react'
import './App.css'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Author from './Components/Author'
import Movies from './Components/Movies'
import About from './Components/About'
import ItemMovie from './Components/ItemMovie'

function App() {
 const [appColor, setAppColor] = useState('#fb7185');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [clickPos, setClickPos] = useState({ x: 0, y: 0 }); // vị trí click

  // Hàm nhận movie được click + vị trí click (event)
  const handleSelectMovie = (movie, event) => {
    const x = event.clientX;
    const y = event.clientY;
    setClickPos({ x, y });
    setSelectedMovie(movie);
  };

  const handleBack = () => setSelectedMovie(null);
  return (
    <>
      <Navbar color={appColor} />
      <Home onCharacterChange = {setAppColor}/>
      <Author color = {appColor}/>
       {!selectedMovie ? (
        <Movies color={appColor} onSelectMovie={handleSelectMovie} />
      ) : (
        <ItemMovie color={appColor} movie={selectedMovie} onBack={handleBack} clickPos={clickPos} />
      )}
      <About color = {appColor} />
    </>
  )
}

export default App
