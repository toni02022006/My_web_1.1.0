// src/components/Hero.jsx
import styles from './Hero.module.css' // <-- 1. Importa los estilos

function Hero() {
  return (
    // 2. Usa los estilos como si fueran un objeto
    <section className={styles.heroSection}> 
      <h1 className={styles.title}>¡Hola, soy Anthoni Otiniano!</h1>
      <p className={styles.subtitle}>Este es mi nuevo portafolio y ya está en Internet.</p>
      <p className={styles.subtitle}>¡Este es el primer cambio!</p>
    </section>
  )
}

export default Hero