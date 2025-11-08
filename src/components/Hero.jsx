// src/components/Hero.jsx
import styles from './Hero.module.css' 

function Hero() {
  return (
    <section className={styles.heroSection}> 
      {/* Usamos tu nombre directo */}
      <h1 className={styles.title}>Anthoni Otiniano</h1>
      
      {/* Usamos tu título profesional del CV */}
      <h2 className={styles.jobTitle}>Ingeniero en Software</h2> 
      
      {/* Usamos tu tagline profesional del CV */}
      <p className={styles.subtitle}>
        Ingeniero en Software dinámico y proactivo, con experiencia en 
        diversas tecnologías y metodologías de desarrollo.
      </p>
    </section>
  )
}

export default Hero