// src/components/Stats.jsx
import React from 'react';
import styles from './Stats.module.css';

function Stats() {
  const stats = [
    { number: "+30", label: "Proyectos Entregados" },
    { number: "100%", label: "Clientes Satisfechos" },
    { number: "+3", label: "Años de Experiencia" }, // Basado en tu CV
    { number: "24/7", label: "Soporte Técnico" }
  ];

  return (
    <div className={styles.statsContainer}>
      {stats.map((stat, index) => (
        <div key={index} className={styles.statItem}>
          <h3 className={styles.number}>{stat.number}</h3>
          <p className={styles.label}>{stat.label}</p>
        </div>
      ))}
    </div>
  );
}

export default Stats;