// src/components/AboutUs.jsx
import React from 'react';
import styles from './AboutMe.module.css'; // Asegúrate de que este archivo CSS exista
import { FaMapMarkerAlt, FaHandshake, FaRocket } from 'react-icons/fa';

function AboutUs() {
  return (
    <section className={styles.container} id="nosotros">
      
      <div style={{textAlign: 'center', marginBottom: '3rem'}}>
        <span style={{
          color: 'var(--accent-color)', 
          fontWeight: 'bold', 
          letterSpacing: '2px', 
          fontSize: '0.9rem'
        }}>
          TALENTO LOCAL, ESTÁNDARES GLOBALES
        </span>
        <h2 className={styles.title}>Impulsando el Futuro Digital del Perú</h2>
        <p className={styles.subtitle} style={{maxWidth: '800px', margin: '1rem auto'}}>
          En <strong>KODIA</strong>, entendemos los desafíos de las empresas peruanas. 
          No somos una multinacional lejana; somos ingenieros locales comprometidos con la modernización 
          de nuestro país, brindando tecnología de punta a precios accesibles.
        </p>
      </div>

      <div className={styles.grid} style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        
        <div className={styles.column}>
          <h3 className={styles.columnTitle} style={{color: 'var(--accent-color)'}}>
            <FaRocket style={{marginRight: '10px'}}/> Nuestra Misión
          </h3>
          <p style={{color: 'var(--text-secondary)', lineHeight: '1.6'}}>
            Hacer que la Inteligencia Artificial y el software a medida sean herramientas accesibles 
            para la <strong>pequeña y mediana empresa peruana (PYME)</strong>, ayudándolas a competir en igualdad de condiciones.
          </p>
        </div>
        
        <div className={styles.column}>
          <h3 className={styles.columnTitle} style={{color: 'var(--accent-color)'}}>
            <FaMapMarkerAlt style={{marginRight: '10px'}}/> Nuestra Visión
          </h3>
          <p style={{color: 'var(--text-secondary)', lineHeight: '1.6'}}>
            Convertirnos en el socio tecnológico de confianza para los emprendedores del Perú, 
            siendo reconocidos por nuestra calidad, honestidad y resultados reales.
          </p>
        </div>

        <div className={styles.column}>
          <h3 className={styles.columnTitle} style={{color: 'var(--accent-color)'}}>
            <FaHandshake style={{marginRight: '10px'}}/> Nuestro Compromiso
          </h3>
          <p style={{color: 'var(--text-secondary)', lineHeight: '1.6'}}>
            Te hablamos claro, sin tecnicismos complicados. Nos involucramos en tu negocio 
            como si fuera nuestro, garantizando soporte local y soluciones que realmente funcionan.
          </p>
        </div>

      </div>
    </section>
  );
}

export default AboutUs;