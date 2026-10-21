import './GameCatalog.css';
import { games } from "../../data/games.js";
import GameCard from "../GameCard/GameCard.jsx";

function GameCatalog({ favorites, toggleFavorite }) {
  return (
    <section className="catalog" id="catalogo">
      <div className="catalog-header">
        <h2>Explora nuestro catálogo</h2>
        <p>
          Descubre nuevos mundos y encuentra tu próximo videojuego favorito.
        </p>
      </div>

      <div className="game-grid">
        {games.map((game) => (
          <GameCard
            key={game.id}
            game={game}
            isFavorite={favorites.some(
              (favorite) => favorite.id === game.id
            )}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </div>
    </section>
  );
}

export default GameCatalog;