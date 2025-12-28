// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Importamos Link para navegación interna
import styles from './Navbar.module.css';
import { FaSun, FaMoon, FaUserTie } from 'react-icons/fa';

function Navbar() {
  // Estado para el tema (oscuro por defecto)
  const [theme, setTheme] = useState('dark');

  // Efecto para aplicar el tema al HTML
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Función para cambiar entre modos
  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };

  return (
    <nav className={styles.navbar}>
      {/* LOGO DE LA AGENCIA (Lleva al inicio) */}
      <Link to="/" className={styles.title}>KODIA</Link>
      
      <div className={styles.menu}>
        <ul className={styles.menuItems}>
          {/* MENÚ DE LA AGENCIA (Usamos /# para que funcione desde cualquier página) */}
          <li><a href="/#servicios">Servicios</a></li>
          <li><a href="/#proyectos">Proyectos</a></li>
          <li><a href="/#nosotros">Nosotros</a></li>
          <li><a href="/#contacto">Contacto</a></li>
          
          {/* BOTÓN ESPECIAL: TU CV PROFESIONAL */}
          <li>
            <Link to="/perfil" className={styles.profileBtn}>
              <FaUserTie style={{ marginRight: '8px' }}/> 
              Mi CV
            </Link>
          </li>

          {/* BOTÓN CAMBIO DE TEMA */}
          <li>
            <button 
              onClick={toggleTheme} 
              className={styles.themeBtn}
              title="Cambiar tema Claro/Oscuro"
            >
              {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
  
export default Navbar;