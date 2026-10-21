import styles from './Hero.module.css'

function Hero({ name }) {
    return (
        <section className={styles.hero}>
            <p className="hero-greeting">Bienvenido a</p>
            <h1 className="hero-name">GameHub</h1>
            <h3 className="hero-professions">Catalogo de videojuegos</h3>
            <p className="hero.message">Descubre todas las opciones que tenemos para tí</p>
            <button className="button-project">Ver Catalogo</button>
        </section>
    )
}

export default Hero