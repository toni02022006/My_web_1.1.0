// src/components/Projects.jsx
import React from 'react';
import { projects } from '../data/projects'; // <-- Importa la data
import ProjectCard from './ProjectCard';      // <-- Importa el molde
import styles from './Projects.module.css';

function Projects() {
  return (
    // La 'id' es para que funcione el link del Navbar
    <section className={styles.container} id="proyectos"> 
      <h2 className={styles.title}>Proyectos</h2>
      <div className={styles.grid}>
        {
          // ¡La magia de React!
          // Mapea la data y crea una tarjeta por cada proyecto
          projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        }
      </div>
    </section>
  );
}

export default Projects;