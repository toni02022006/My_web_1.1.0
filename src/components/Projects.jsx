// src/components/Projects.jsx
import React from 'react';
import Slider from "react-slick"; 
import { projects } from '../data/projects'; 
import styles from './Projects.module.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Projects() {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,            
    slidesToShow: 4,       
    slidesToScroll: 1,     
    autoplay: true,        
    autoplaySpeed: 2500,   
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1600, 
        settings: { slidesToShow: 4 }
      },
      {
        breakpoint: 1400, 
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 1024, 
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 600,  
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <section className={styles.container} id="proyectos">
      <div className={styles.header}>
        <span className={styles.label}>PORTAFOLIO</span>
        <h2 className={styles.title}>Proyectos Destacados</h2>
        <p className={styles.subtitle}>Soluciones reales implementadas en empresas.</p>
      </div>

      <div className={styles.sliderWrapper}>
        <Slider {...settings}>
          {projects.map((project) => (
            /* ELIMINAMOS EL WRAPPER 'cardPadding' PARA EVITAR CONFUSIÓN */
            /* La clase .card ahora tiene margin: 0 20px en el CSS */
            <div key={project.id} className={styles.slideContainer}>
              <div className={styles.card}>
                
                <div className={styles.imageContainer}>
                  <img src={project.image} alt={project.title} className={styles.image} />
                  <div className={styles.categoryBadge}>{project.category}</div>
                </div>

                <div className={styles.content}>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <p className={styles.description}>{project.description}</p>
                  
                  <div className={styles.techStack}>
                    {project.tech.map((t, index) => (
                      <span key={index} className={styles.techTag}>{t}</span>
                    ))}
                  </div>

                  <div className={styles.links}>
                    {project.live !== "#" && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                        <FaExternalLinkAlt /> Demo
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Projects;