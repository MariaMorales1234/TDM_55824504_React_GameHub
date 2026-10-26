import styles from './Navbar.module.css'

function Navbar({ darkMode, onToggle }) {
    return(
        <nav className={styles.navbar}>
            <span className="Navabar-Logo">GameHub</span>
            <ul className={styles.links}>
                <li><a href="#about">Nosotros</a></li>
                <li><a href="#Catalog">Catalogo</a></li>
                <li><a href="#Favorites">Favoritos</a></li>
                <li>
                    <button className={styles.themeBtn} onClick={onToggle}>
                        {darkMode ? '☀ Claro' : '☾ Oscuro'}
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar