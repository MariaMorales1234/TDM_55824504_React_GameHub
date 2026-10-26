import { useState, useEffect } from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import Hero from './Components/Hero/Hero.jsx'
import GameCatalog from './Components/GameCatalog/GameCatalog.jsx'
import Favorites from './Components/Favorites/Favorites.jsx'
import Footer from './Components/Footer/Footer.jsx'
import './App.css'

function App() {
    const [darkMode, setDarkMode] = useState(() => {
        const saved = localStorage.getItem('darkMode')
        return saved !== null ? JSON.parse(saved) : true
    });

    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
      document.documentElement.setAttribute(
        "data-theme",
        darkMode ? "dark" : "light"
      );

      localStorage.setItem("darkMode", JSON.stringify(darkMode));
    }, [darkMode]);

    function toggleDarkMode() {
      setDarkMode(!darkMode)
    }

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
        <Navbar
          darkMode={darkMode}
          onToggle={toggleDarkMode}
        />
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
