import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import Hero from './Components/Hero/Hero.jsx'
import GameCatalog from './Components/GameCatalog/GameCatalog.jsx'
import Favorites from './Components/Favorites/Favorites.jsx'
import Footer from './Components/Footer/Footer.jsx'
import './App.css'

function App() {
  const [favorites, setFavorites] = useState([]);

  function toggleFavorite(game) {
    setFavorites((currentFavorites) => {
      const exists = currentFavorites.some(
        (favorite) => favorite.id === game.id
      );

      if (exists) {
        return currentFavorites.filter(
          (favorite) => favorite.id !== game.id
        );
      }

      return [...currentFavorites, game];
    });
  }

  return (
    <>
      < Navbar/>
      < Hero/>
      < GameCatalog
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />
      < Favorites
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />
      < Footer/>
    </>
  )
}

export default App
