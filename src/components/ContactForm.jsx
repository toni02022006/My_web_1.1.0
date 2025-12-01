// src/components/ContactForm.jsx
import React from 'react';
import styles from './ContactForm.module.css';

function ContactForm() {
  return (
    <section className={styles.container} id="contacto">
      <h2 className={styles.title}>Envíame un Mensaje</h2>
      <p className={styles.subtitle}>¿Tienes una idea o proyecto? Escríbeme y lo hacemos realidad.</p>
      
      <div className={styles.formWrapper}>
        {/* ATRIBUTOS CLAVE PARA NETLIFY:
            name="contacto" -> Nombre del formulario en el panel de Netlify
            method="POST"   -> Método de envío
            data-netlify="true" -> Activa la magia de Netlify
        */}
        <form 
          name="contacto" 
          method="POST" 
          data-netlify="true" 
          className={styles.form}
        >
          {/* Input oculto obligatorio para React + Netlify */}
          <input type="hidden" name="form-name" value="contacto" />

          <div className={styles.inputGroup}>
            <label htmlFor="nombre">Nombre</label>
            <input type="text" name="nombre" id="nombre" required placeholder="Tu nombre" />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="email">Correo Electrónico</label>
            <input type="email" name="email" id="email" required placeholder="tucorreo@ejemplo.com" />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="mensaje">Mensaje</label>
            <textarea name="mensaje" id="mensaje" rows="5" required placeholder="Cuéntame sobre tu proyecto..."></textarea>
          </div>

          <button type="submit" className={styles.submitBtn}>Enviar Mensaje</button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;