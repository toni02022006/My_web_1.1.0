// src/components/Navbar.jsx
import React from 'react';
import styles from './Navbar.module.css'; // Importamos los estilos que crearemos

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.title}>Anthoni.dev</a>

      <div className={styles.menu}>
        <ul className={styles.menuItems}>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="#sobre-mi">Sobre Mí</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;