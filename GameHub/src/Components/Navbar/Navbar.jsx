import styles from './Navbar.module.css'

function Navbar() {
    return(
        <nav className={styles.navbar}>
            <span className="Navabar-Logo">GameHub</span>
            <ul className={styles.links}>
                <li><a href="#about">Nosotros</a></li>
                <li><a href="#'proj'">Catalogo</a></li>
                <li><a href="#about">Favoritos</a></li>
            </ul>
        </nav>
    )
}

export default Navbar