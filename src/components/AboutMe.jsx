// src/components/AboutMe.jsx
import React from 'react';
import styles from './AboutMe.module.css';

function AboutMe() {
  return (
    <section className={styles.container} id="sobre-mi"> 
      <h2 className={styles.title}>Sobre Mí</h2>
      
      <div className={styles.content}>
        <p>
          Ingeniero en Software dinámico y proactivo. Mi objetivo es integrarme a un equipo colaborativo 
          donde pueda aportar mis habilidades técnicas y mi capacidad de organización para contribuir 
          al éxito de la empresa.
        </p>

        {/* --- NUEVA SECCIÓN DE EXPERIENCIA --- */}
        <h3 className={styles.subtitle}>Experiencia Profesional</h3>
        
        <div className={styles.experienceItem}>
          <h4>Programador Encargado de Automatización</h4>
          <span className={styles.company}>Planos Perú | Agosto 2025 - Diciembre 2025</span>
          <ul className={styles.experienceList}>
            <li>Diseño e implementación de Sistema de Métricas de Productividad con Python y Django.</li>
            <li>Desarrollo de Chatbot corporativo con la API de Google Gemini para automatización de consultas.</li>
            <li>Creación de herramientas de gestión visual (Diagramas de Gantt) para planificación de proyectos.</li>
          </ul>
        </div>

        <div className={styles.experienceItem}>
          <h4>Programador y Analista de Datos</h4>
          <span className={styles.company}>Soluciones Integrales JB | 2023 - 2025</span>
          <ul className={styles.experienceList}>
            <li><strong>Liderazgo:</strong> Supervisión y coordinación de más de 30 programadores y equipos multidisciplinarios.</li>
            <li>Desarrollo Full Stack escalable usando React.js, Django, PHP y .NET.</li>
            <li>Responsable de módulos críticos, optimización de bases de datos y gestión de clientes.</li>
          </ul>
        </div>

        {/* --- HABILIDADES --- */}
        <h3 className={styles.subtitle}>Mis Habilidades</h3>
        <ul className={styles.skills}>
          <li>Python (Django)</li>
          <li>React.js</li>
          <li>Inteligencia Artificial (Gemini)</li>
          <li>Node.js</li>
          <li>SQL / MySQL / Oracle</li>
          <li>Scrum & Kanban</li>
          <li>Git & GitHub</li>
        </ul>
      </div>
    </section>
  );
}

export default AboutMe;