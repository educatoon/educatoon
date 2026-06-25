import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import instagram from "../../../../assets/Icons/instagram.svg";
import linkedin from "../../../../assets/icons/linkedin.svg";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container py-4">
        <div className={styles.footerContent}>
          <div className={styles.footerColumn}>
            <h2 className={styles.logo}>Educatoon</h2>
            <p className={styles.contactInfo}>(69) 8409-7978</p>
            <p className={styles.contactInfo}>Av. Guaporé, 3109 - Jardim Clodoaldo.</p>
          </div>

          <div className={styles.footerColumn}>
            <p className={styles.columnTitle}>Navegue</p>
            <ul className={styles.navList}>
              <li><a href="#sobre">Quem Somos</a></li>
              <li><a href="#vantagens">Vantagens</a></li>
              <li><a href="#personagens">Personagens</a></li>
              <li><a href="#planos">Planos</a></li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <p className={styles.columnTitle}>Personagens</p>
            <ul className={styles.navList}>
              <li><a href="#matt">Matt</a></li>
              <li><a href="#pam">Pam</a></li>
              <li><a href="#susie">Susie</a></li>
              <li><a href="#vanessinha">Vanessinha</a></li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <p className={styles.columnTitle}>Redes sociais</p>
            <div className={styles.socialLinks}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="Instagram" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;