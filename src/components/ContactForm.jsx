// src/components/ContactForm.jsx
import React, { useState } from 'react';
import styles from './ContactForm.module.css';
import { FaWhatsapp } from 'react-icons/fa'; // Asegúrate de tener react-icons instalado

function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 1. Número de teléfono (Código Perú 51 + Tu número)
    const phoneNumber = "51960141668"; 

    // 2. Estructura del mensaje
    const text = `
Hola Anthoni, vi tu portafolio y me interesa contactarte.
    
📌 *Nombre:* ${formData.nombre}
📧 *Correo:* ${formData.email}
    
📝 *Mensaje:* ${formData.mensaje}
    `;

    // 3. Crear la URL de WhatsApp y abrirla
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <section className={styles.container} id="contacto">
      <h2 className={styles.title}>Hablemos por WhatsApp</h2>
      <p className={styles.subtitle}>¿Tienes un proyecto en mente? Envíame un mensaje directo.</p>
      
      <div className={styles.formWrapper}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="nombre">Nombre</label>
            <input 
              type="text" 
              name="nombre" 
              value={formData.nombre}
              onChange={handleChange}
              required 
              placeholder="Tu nombre" 
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="email">Correo Electrónico (Opcional)</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              placeholder="tucorreo@ejemplo.com" 
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="mensaje">Tu Propuesta o Duda</label>
            <textarea 
              name="mensaje" 
              rows="5" 
              value={formData.mensaje}
              onChange={handleChange}
              required 
              placeholder="Hola, necesito un sistema para..."
            ></textarea>
          </div>

          <button type="submit" className={styles.submitBtn}>
            <FaWhatsapp size={20} style={{ marginRight: '10px' }} />
            Enviar a WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;