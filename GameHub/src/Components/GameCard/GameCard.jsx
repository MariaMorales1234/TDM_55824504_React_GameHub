import './GameCard.css';

function GameCard({ game, isFavorite, toggleFavorite }) {
  return (
    <article className="game-card">
        <div className="game-image">
            <img
                src={game.image}
                alt={`Portada de ${game.name}`}
                loading="lazy"
            />

            <span className="game-category">{game.category}</span>
        </div>
     

      <h3>{game.name}</h3>

      <p className="game-description">{game.description}</p>

      <div className="game-platforms">
        <strong>Plataformas:</strong>
        <p>{game.platforms}</p>
      </div>

      <button
        className={`favorite-button ${isFavorite ? "is-favorite" : ""}`}
        onClick={() => toggleFavorite(game)}
      >
        {isFavorite ? "♥ En favoritos" : "♡ Agregar a favoritos"}
      </button>
    </article>
  );
}

export default GameCard;