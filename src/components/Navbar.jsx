// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
// Importamos íconos de Sol y Luna
import { FaSun, FaMoon } from 'react-icons/fa'; 

function Navbar() {
  // Estado para guardar el tema ('dark' o 'light')
  const [theme, setTheme] = useState('dark');

  // Al cargar la página, revisamos si ya había un tema guardado o aplicamos el oscuro
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };

  return (
    // Usamos un estilo en línea para el background dinámico, o actualizaremos el CSS después
    <nav className={styles.navbar}>
      <a href="/" className={styles.title}>Juan Anthoni</a>
      
      <div className={styles.menu}>
        <ul className={styles.menuItems}>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="#sobre-mi">Sobre Mí</a></li>
          <li><a href="#contacto">Contacto</a></li>
          
          {/* BOTÓN DE CAMBIO DE TEMA */}
          <li>
            <button onClick={toggleTheme} className={styles.themeBtn}>
              {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;