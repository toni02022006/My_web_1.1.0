// src/components/Services.jsx
import React from 'react';
import styles from './Services.module.css';
import { FaCode, FaCogs, FaServer, FaChalkboardTeacher } from 'react-icons/fa'; // Íconos

function Services() {
  return (
    // La 'id' es para el link del Navbar
    <section className={styles.container} id="servicios">
      <h2 className={styles.title}>Mis Servicios</h2>
      <div className={styles.grid}>

        {/* Servicio 1: Desarrollo Web */}
        <div className={styles.serviceCard}>
          <FaCode size={40} className={styles.icon} />
          <h3>Desarrollo Web</h3>
          <p>Creación de sitios y aplicaciones web modernas, rápidas y responsivas (que se adaptan a celulares).</p>
        </div>

        {/* Servicio 2: Sistemas a Medida */}
        <div className={styles.serviceCard}>
          <FaCogs size={40} className={styles.icon} />
          <h3>Sistemas a Medida</h3>
          <p>Diseño y desarrollo de software personalizado (como CRMs, intranets, etc.) ajustado a tus necesidades.</p>
        </div>

        {/* Servicio 3: Backend & APIs */}
        <div className={styles.serviceCard}>
          <FaServer size={40} className={styles.icon} />
          <h3>Backend & APIs</h3>
          <p>Desarrollo de lógica de servidor robusta, APIs RESTful y gestión de bases de datos para potenciar tu aplicación.</p>
        </div>
        
        <div className={styles.serviceCard}>
            <FaChalkboardTeacher size={40} className={styles.icon} />
            <h3>Instructor de Programación</h3>
            <p>Clases y mentorías personalizadas para individuos o grupos. Te ayudo a aprender desde cero o a dominar tecnologías específicas como Java, React, Python, Django, metodologias ágiles y desarrollo de aplicaciones android y apple.</p>
        </div>

      </div>
    </section>
  );
}

export default Services;