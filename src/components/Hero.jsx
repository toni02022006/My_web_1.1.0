// src/components/Hero.jsx
import styles from './Hero.module.css';
import { FaReact, FaPython, FaBrain, FaDatabase } from 'react-icons/fa'; 
import { BiCodeAlt } from 'react-icons/bi';

function Hero() {
  return (
    <section className={styles.heroSection}>
      {/* Fondo con efectos */}
      <div className={styles.backgroundGlow}></div>

      <div className={styles.container}>
        
        {/* COLUMNA IZQUIERDA: Marca y Texto */}
        <div className={styles.textColumn}>
          <div className={styles.badge}>
            <span className={styles.pulse}></span>
            Agencia de Software & IA
          </div>
          
          <h1 className={styles.title}>
            {/* EL NOMBRE DE TU EMPRESA */}
            <span className={styles.acronym}>KODIA</span>
            
            {/* El significado elegante abajo */}
            <span className={styles.fullName}>
              Key Operational Development & <br /> Intelligent Automation
            </span>
            <span className={styles.fullName}>
              Desarrollo Operativo Clave y <br /> Automatización Inteligente
            </span>
          </h1>
          
          <h2 className={styles.jobTitle}>
            Transformamos tu visión en tecnología escalable.
          </h2> 
          
          <p className={styles.subtitle}>
            Especialistas en <strong>Automatización de Procesos</strong>, <strong>Inteligencia Artificial</strong> y 
            <strong> Desarrollo Web</strong> de alto impacto. Llevamos tu empresa al futuro digital.
          </p>

          <div className={styles.buttonGroup}>
            <a href="#contacto" className={styles.primaryBtn}>Cotizar Ahora</a>
            <a href="#proyectos" className={styles.secondaryBtn}>Ver Proyectos</a>
          </div>
        </div>

        {/* COLUMNA DERECHA: Elementos Flotantes (Igual que antes) */}
        <div className={styles.visualColumn}>
          <div className={styles.mainCard}>
            <BiCodeAlt size={50} className={styles.codeIcon} />
            <div className={styles.codeLines}>
              <div className={styles.line} style={{width: '80%'}}></div>
              <div className={styles.line} style={{width: '60%'}}></div>
              <div className={styles.line} style={{width: '90%'}}></div>
            </div>
          </div>

          <div className={`${styles.floatingIcon} ${styles.iconReact}`}>
            <FaReact size={40} />
          </div>
          <div className={`${styles.floatingIcon} ${styles.iconPython}`}>
            <FaPython size={40} />
          </div>
          <div className={`${styles.floatingIcon} ${styles.iconAI}`}>
            <FaBrain size={40} />
          </div>
           <div className={`${styles.floatingIcon} ${styles.iconDb}`}>
            <FaDatabase size={35} />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero