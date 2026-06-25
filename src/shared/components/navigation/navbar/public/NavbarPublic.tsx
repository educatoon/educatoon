import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './NavbarPublic.module.css'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className={`${styles.navbar} container d-flex align-items-center justify-content-between`}>

      <div className={styles.logo}>
        <h3 className={styles.logoText}>Educatoon</h3>
      </div>

      <div
        className={styles.menuToggle}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      <div className={`${styles.links} ${menuOpen ? styles.active : ''}`}>
        <ul className={`${styles.linksNavbar}`}>
          <li>
            <a className={styles.navLink} href="#secao-sobre-nos">
              Sobre nós
            </a>
          </li>
          <li>
            <a className={styles.navLink} href="#secao-vantagens">
              Diferencial
            </a>
          </li>
          <li>
            <a className={styles.navLink} href="#secao-personagens">
              Personagens
            </a>
          </li>
          <li className={styles.btnLogin}>
            <Link to="/login">
              Fazer Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar