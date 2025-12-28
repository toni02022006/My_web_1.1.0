// src/pages/Profile.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../components/AboutMe.module.css'; // Reutilizamos estilos
import { FaDownload, FaBriefcase, FaGraduationCap, FaCertificate, FaCode, FaLanguage } from 'react-icons/fa';

function Profile() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '80px', backgroundColor: 'var(--bg-color)' }}>
        <section className={styles.container}>
          
          {/* ENCABEZADO */}
          <div className={styles.header}>
            <h1 className={styles.title}>Juan Anthoni Otiniano Imboma</h1>
            <p className={styles.subtitle}>Ingeniero de Software | Especialista en IA & Full Stack</p>
            
            {/* BOTÓN DE DESCARGA (Ver instrucciones abajo) */}
            <a href="/cv-juan-otiniano.pdf" download className={styles.downloadBtn}>
              <FaDownload /> Descargar CV Completo (PDF)
            </a>
          </div>

          <div className={styles.grid}>
            
            {/* COLUMNA IZQUIERDA: EXPERIENCIA (Detallada) */}
            <div className={styles.column}>
              <h3 className={styles.columnTitle}><FaBriefcase /> Experiencia Profesional</h3>
              
              <div className={styles.timelineItem}>
                <h4>Programador de Automatización & IA</h4>
                <span className={styles.date}>Planos Perú | Agosto 2025 - Diciembre 2025</span>
                <ul className={styles.list}>
                  <li><strong>Automatización:</strong> Desarrollo de Sistema de Métricas de Productividad (Escritorio) usando Python y Django para monitoreo de periféricos.</li>
                  <li><strong>Inteligencia Artificial:</strong> Implementación de Chatbot Corporativo integrando la API de Google Gemini para consultas internas.</li>
                  <li><strong>Gestión Visual:</strong> Creación de herramientas (Diagramas de Gantt) para el seguimiento de proyectos de arquitectura.</li>
                  <li><strong>Web Scraping:</strong> Módulo automatizado con Selenium para consultas en tiempo real a SUNARP.</li>
                </ul>
              </div>

              <div className={styles.timelineItem}>
                <h4>Programador y Analista de Datos</h4>
                <span className={styles.date}>Soluciones Integrales JB | Agosto 2023 - Junio 2025</span>
                <ul className={styles.list}>
                  <li><strong>Liderazgo:</strong> Supervisión y coordinación de equipos de desarrollo (+30 programadores) y ciberseguridad.</li>
                  <li><strong>Full Stack:</strong> Arquitectura de sistemas escalables con React.js, Bootstrap, Django, PHP y .NET.</li>
                  <li><strong>Base de Datos:</strong> Optimización de módulos críticos y gestión de productos.</li>
                  <li><strong>Estrategia:</strong> Presentación semanal de resultados ejecutivos para la toma de decisiones gerenciales.</li>
                </ul>
              </div>
            </div>

            {/* COLUMNA DERECHA: EDUCACIÓN, CURSOS Y SKILLS */}
            <div className={styles.column}>
              
              {/* EDUCACIÓN */}
              <h3 className={styles.columnTitle}><FaGraduationCap /> Educación</h3>
              <div className={styles.timelineItem}>
                <h4>Ingeniería de Software con IA</h4>
                <span className={styles.date}>SENATI | Egresado (2023 - 2025)</span>
              </div>

              {/* CERTIFICACIONES */}
              <h3 className={styles.columnTitle}><FaCertificate /> Certificaciones</h3>
              <ul className={styles.list} style={{marginBottom: '2rem'}}>
                <li>IA con Machine Learning - <strong>Oracle</strong> (2024)</li>
                <li>Seguridad Cibernética - <strong>Cisco</strong> (2024)</li>
                <li>Análisis de Datos - <strong>LinkedIn</strong> (2024)</li>
                <li>Fundamentos de Desarrollo - <strong>Microsoft</strong> (2024)</li>
              </ul>

              {/* HABILIDADES TÉCNICAS */}
              <div className={styles.skillsBox}>
                <h3 className={styles.columnTitle}><FaCode /> Tech Stack</h3>
                
                <p className={styles.skillCategory}>Backend & Lenguajes</p>
                <div className={styles.tags}>
                  <span>Python (Django)</span><span>Node.js</span><span>PHP</span><span>Java</span><span>C#.NET</span>
                </div>

                <p className={styles.skillCategory}>Frontend</p>
                <div className={styles.tags}>
                  <span>React.js</span><span>JavaScript (ES6+)</span><span>Bootstrap</span><span>HTML5/CSS3</span>
                </div>

                <p className={styles.skillCategory}>Base de Datos & IA</p>
                <div className={styles.tags}>
                  <span>PostgreSQL</span><span>MySQL</span><span>Oracle SQL</span><span>Gemini API</span><span>TensorFlow</span>
                </div>
              </div>

              {/* IDIOMAS */}
              <div style={{marginTop: '2rem'}}>
                 <h3 className={styles.columnTitle}><FaLanguage /> Idiomas</h3>
                 <ul className={styles.list}>
                   <li><strong>Inglés:</strong> Intermedio (B2)</li>
                   <li><strong>Alemán:</strong> Básico (A1)</li>
                 </ul>
              </div>

            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Profile;