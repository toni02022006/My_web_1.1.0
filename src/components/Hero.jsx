// src/components/Hero.jsx
import styles from './Hero.module.css' 

function Hero() {
  return (
    <section className={styles.heroSection}> 
      {/* Nombre extraído de tu CV  */}
      <h1 className={styles.title}>Juan Anthoni Otiniano</h1>
      
      {/* Título profesional [cite: 47] */}
      <h2 className={styles.jobTitle}>Ingeniero de Software</h2> 
      
      {/* Tu descripción profesional exacta [cite: 52-53] */}
      <p className={styles.subtitle}>
        Ingeniero en Software dinámico y proactivo, con experiencia en diversas tecnologías de desarrollo. 
        Poseo una sólida capacidad de aprendizaje y una gran adaptabilidad a nuevos entornos y desafíos técnicos.
      </p>
    </section>
  )
}

export default Hero