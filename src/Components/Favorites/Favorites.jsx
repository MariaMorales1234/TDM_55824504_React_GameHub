import './Favorites.css';
import GameCard from "../GameCard/GameCard.jsx";

function Favorites({ favorites, toggleFavorite }) {
  return (
    <section className="favorites" id="favoritos">
      <div className="favorites-header">
        <span className="favorites-label">TU COLECCIÓN PERSONAL</span>

        <h2>Mis favoritos</h2>

        <p>
          Los videojuegos que elegiste para tu próxima aventura.
        </p>

        <span className="favorites-count">
          ♥ {favorites.length}{" "}
          {favorites.length === 1 ? "juego guardado" : "juegos guardados"}
        </span>
      </div>

      {favorites.length === 0 ? (
        <div className="favorites-empty">
          <span className="favorites-empty-icon">♡</span>

          <h3>Aún no tienes favoritos</h3>

          <p>
            Explora nuestro catálogo y agrega los videojuegos que más te gusten.
          </p>

          <a href="#catalogo" className="favorites-explore">
            Explorar catálogo
          </a>
        </div>
      ) : (
        <div className="game-grid">
          {favorites.map((game) => (
            <GameCard
              key={game.id}
              game={game}
              isFavorite={true}
              toggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Favorites;