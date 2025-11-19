// src/data/projects.js

// Importamos las imágenes (puedes seguir usando las mismas por ahora)
import metricsImage from '../assets/planosperuxd.jpg'; // Usaremos esta para el de Métricas
import chatbotImage from '../assets/CRM-System.png';   // Usaremos esta para el Chatbot
import trackingImage from '../assets/placeholder.png'; // Usaremos el placeholder para el tercero

export const projects = [
  {
    id: 1,
    title: "Sistema de Métricas de Productividad",
    description: "Aplicación de escritorio (Python/Django) para arquitectura. Monitoriza actividad automatizada y optimiza la detección de tiempos inactivos mediante análisis de periféricos.",
    image: metricsImage,
    tech: ["Python", "Django", "Desktop App", "Automatización"],
    github: "https://github.com/toni02022006", // Actualiza si tienes el link específico
    live: "#"
  },
  {
    id: 2,
    title: "Chatbot Corporativo con IA",
    description: "Implementación de un chatbot personalizado integrando la API de Google Gemini. Automatiza consultas y procesos internos de la empresa.",
    image: chatbotImage,
    tech: ["IA", "Google Gemini API", "Python", "NLP"],
    github: "https://github.com/toni02022006",
    live: "#"
  },
  {
    id: 3,
    title: "Sistema de Seguimiento de Personal",
    description: "Software especializado para el control de personal y practicantes. Gestión de módulos críticos y bases de datos.",
    image: trackingImage,
    tech: ["React", "Node.js", "PostgreSQL", "Full Stack"],
    github: "https://github.com/toni02022006",
    live: "#"
  }
];