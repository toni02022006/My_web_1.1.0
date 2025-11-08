// src/components/AboutMe.jsx
import React from 'react';
import styles from './AboutMe.module.css';

function AboutMe() {
  return (
    // La 'id' es para que funcione el link del Navbar
    <section className={styles.container} id="sobre-mi"> 
      <h2 className={styles.title}>Sobre Mí</h2>
      
      <div className={styles.content}>
        <p>
          ¡Hola! Soy Anthoni, un ingeniero de software apasionado por crear 
          soluciones tecnológicas que resuelven problemas reales.
        </p>
        <p>
          Tengo experiencia en desarrollo full-stack, especializándome en 
          React para el frontend y Python (Django) para el backend. 
          Me encanta aprender y estoy constantemente explorando nuevas 
          tecnologías para mejorar mis habilidades.
        </p>
        <p>
          Tengo experiencia en desarrollo full-stack, especializándome en 
          React para el frontend y Python (Django) para el backend. 
          Me encanta aprender y estoy constantemente explorando nuevas 
          tecnologías para mejorar mis habilidades.
        </p>

        {/* --- AÑADE ESTE PÁRRAFO --- */}
        <p>
          Adicionalmente, he tenido la oportunidad de ser 
          <strong> líder y supervisor en más de 15 grupos</strong> de 
          proyectos, lo que me ha permitido desarrollar fuertes habilidades 
          de comunicación, gestión de equipos y resolución de problemas.
        </p>

        <h3 className={styles.subtitle}>Mis Habilidades</h3>
        <ul className={styles.skills}>
          <li>React</li>
          <li>JavaScript</li>
          <li>Python</li>
          <li>Django</li>
          <li>Node.js</li>
          <li>SQL / MySQL</li>
          <li>Git & GitHub</li>
          <li>HTML & CSS</li>
        </ul>
      </div>
    </section>
  );
}

export default AboutMe;