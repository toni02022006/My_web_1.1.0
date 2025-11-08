// src/components/Footer.jsx
import React from 'react';
import styles from './Footer.module.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Íconos de Font Awesome
import { MdEmail } from 'react-icons/md'; // Íconos de Material Design

function Footer() {
  return (
    // La 'id' es para que funcione el link del Navbar
    <footer className={styles.container} id="contacto">
      <div className={styles.content}>
        <h2>Contacto</h2>
        <p>¡No dudes en contactarme!</p>
        <ul className={styles.links}>
          <li>
            <a 
              href="https://www.linkedin.com/in/jaoi-b3373b296/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} /> 
              <span>LinkedIn</span>
            </a>
          </li>
          <li>
            <a 
              href="https://github.com/toni02022006" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaGithub size={30} />
              <span>GitHub</span>
            </a>
          </li>
          <li>
            <a href="mailto:otinianoantoni02@gmail.com">
              <MdEmail size={30} />
              <span>otinianoantoni02@gmail.com</span>
            </a>
          </li>
        </ul>
        <p className={styles.copyright}>
          © 2025 Anthoni Otiniano. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;