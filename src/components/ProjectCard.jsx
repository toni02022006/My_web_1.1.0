// src/components/ProjectCard.jsx
import React from 'react';
import styles from './ProjectCard.module.css';

// Este componente recibe un 'project' como "prop"
function ProjectCard({ project }) {
  return (
    <div className={styles.card}>
      <img 
        src={project.image} 
        alt={project.title} 
        className={styles.image} 
      />
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.description}>{project.description}</p>

      <ul className={styles.techList}>
        {project.tech.map((techItem, id) => (
          <li key={id} className={styles.techItem}>
            {techItem}
          </li>
        ))}
      </ul>

      <div className={styles.links}>
        <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.link}>
          GitHub
        </a>
        <a href={project.live} target="_blank" rel="noopener noreferrer" className={styles.link}>
          Demo
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;