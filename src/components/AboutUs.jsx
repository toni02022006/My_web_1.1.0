// src/components/Services.jsx
import React from 'react';
import styles from './Services.module.css';
import { FaLaptopCode, FaBrain, FaServer, FaChalkboardTeacher, FaArrowRight, FaRobot, FaChartLine } from 'react-icons/fa';

function Services() {
  
  const servicesData = [
    {
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      icon: <FaLaptopCode />,
      title: "Desarrollo Web & Apps",
      description: "Experiencias digitales veloces. Desde Landing Pages que convierten hasta Aplicaciones Web (PWA) escalables.",
      tags: ["React", "Next.js", "UX/UI"]
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      icon: <FaServer />,
      title: "Sistemas ERP & CRM",
      description: "Software a medida para automatizar tu empresa. Digitaliza inventarios, ventas y personal en un solo lugar.",
      tags: ["Python", "Django", "SQL"]
    },
    {
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
      icon: <FaBrain />,
      title: "Inteligencia Artificial",
      description: "Implementamos Chatbots inteligentes y modelos predictivos entrenados con los datos reales de tu negocio.",
      tags: ["Gemini API", "RAG", "LLMs"]
    },
    {
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
      icon: <FaRobot />,
      title: "Automatización & RPA",
      description: "Robots de software que hacen el trabajo aburrido por ti. Web Scraping, llenado de formularios y extracción de datos.",
      tags: ["Selenium", "Scripts", "Python"]
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      icon: <FaChartLine />,
      title: "Analítica & Dashboards",
      description: "Transformamos datos brutos en tableros visuales para la toma de decisiones estratégicas. Visualiza el futuro.",
      tags: ["Power BI", "Pandas", "KPIs"]
    },
    {
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
      icon: <FaChalkboardTeacher />,
      title: "Consultoría IT",
      description: "Capacitación corporativa y mentoría técnica para equipos. Elevamos el nivel de ingeniería de tu personal.",
      tags: ["Mentoring", "Agile", "Security"]
    }
  ];

  return (
    <section className={styles.container} id="servicios">
      
      <div className={styles.header}>
        <span className={styles.label}>KODIA SOLUTIONS</span>
        <h2 className={styles.title}>Servicios de Alto Impacto</h2>
        <p className={styles.subtitle}>
          Fusionamos ingeniería robusta con diseño estratégico para escalar tu negocio.
        </p>
      </div>

      <div className={styles.grid}>
        {servicesData.map((service, index) => (
          <div key={index} className={styles.card}>
            <div 
              className={styles.cardImage} 
              style={{ backgroundImage: `url(${service.image})` }}
            ></div>
            <div className={styles.overlay}></div>
            <div className={styles.content}>
              <div className={styles.iconBox}>{service.icon}</div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.description}</p>
              <div className={styles.footer}>
                <div className={styles.tagsGroup}>
                  {service.tags.map((tag, i) => (
                    <span key={i} className={styles.tag}>{tag}</span>
                  ))}
                </div>
                <span className={styles.arrow}><FaArrowRight /></span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;