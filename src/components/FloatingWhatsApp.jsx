// src/components/FloatingWhatsApp.jsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

function FloatingWhatsApp() {
  const styles = {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    backgroundColor: '#25D366', // Color oficial WhatsApp
    color: 'white',
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
    zIndex: 1000,
    cursor: 'pointer',
    transition: 'transform 0.3s'
  };

  const handleClick = () => {
    window.open('https://wa.me/51960141668?text=Hola,%20quisiera%20cotizar%20un%20proyecto%20de%20software.', '_blank');
  };

  return (
    <div style={styles} onClick={handleClick} title="¡Hablemos por WhatsApp!">
      <FaWhatsapp size={35} />
    </div>
  );
}

export default FloatingWhatsApp;