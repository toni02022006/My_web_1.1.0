// src/data/projects.js

import metricsImage from '../assets/metrics-system.png'; 
import chatbotImage from '../assets/chatboot-system.png';   
import trackingImage from '../assets/detctar-inactividad.png';
import scrapingImage from '../assets/metrics-system.png'; 

export const projects = [
  // --- PRIMERA TANDA ---
  {
    id: 1,
    title: "Dashboard de Productividad",
    category: "Automatización",
    description: "Sistema inteligente que incrementó la eficiencia operativa en 'Planos Perú'. Monitoreo automatizado de hardware.",
    image: metricsImage,
    tech: ["Python", "Django", "Desktop App"],
    github: "https://github.com/toni02022006", 
    live: "#" 
  },
  {
    id: 2,
    title: "Asistente Virtual (IA)",
    category: "Inteligencia Artificial",
    description: "Implementación de IA Generativa (Google Gemini) para automatizar respuestas y reducir carga operativa.",
    image: chatbotImage,
    tech: ["Gemini API", "Python", "React"],
    github: "https://github.com/toni02022006",
    live: "#"
  },
  {
    id: 3,
    title: "ERP Gestión de Talento",
    category: "Desarrollo Web",
    description: "Plataforma integral para RR.HH. Control de asistencia y evaluación de desempeño para equipos de +30 personas.",
    image: trackingImage,
    tech: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com/toni02022006",
    live: "#"
  },
  {
    id: 4,
    title: "Bot Legal (RPA)",
    category: "RPA & Scraping",
    description: "Robot que extrae expedientes de SUNARP en tiempo real, integrando la data legal al sistema administrativo.",
    image: scrapingImage, 
    tech: ["Selenium", "Python", "Scraping"],
    github: "https://github.com/toni02022006",
    live: "#"
  },
  // --- SEGUNDA TANDA (DUPLICADA PARA EFECTO INFINITO) ---
  {
    id: 5,
    title: "Dashboard de Productividad",
    category: "Automatización",
    description: "Sistema inteligente que incrementó la eficiencia operativa en 'Planos Perú'. Monitoreo automatizado de hardware.",
    image: metricsImage,
    tech: ["Python", "Django", "Desktop App"],
    github: "https://github.com/toni02022006", 
    live: "#" 
  },
  {
    id: 6,
    title: "Asistente Virtual (IA)",
    category: "Inteligencia Artificial",
    description: "Implementación de IA Generativa (Google Gemini) para automatizar respuestas y reducir carga operativa.",
    image: chatbotImage,
    tech: ["Gemini API", "Python", "React"],
    github: "https://github.com/toni02022006",
    live: "#"
  },
  {
    id: 7,
    title: "ERP Gestión de Talento",
    category: "Desarrollo Web",
    description: "Plataforma integral para RR.HH. Control de asistencia y evaluación de desempeño para equipos de +30 personas.",
    image: trackingImage,
    tech: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com/toni02022006",
    live: "#"
  },
  {
    id: 8,
    title: "Bot Legal (RPA)",
    category: "RPA & Scraping",
    description: "Robot que extrae expedientes de SUNARP en tiempo real, integrando la data legal al sistema administrativo.",
    image: scrapingImage, 
    tech: ["Selenium", "Python", "Scraping"],
    github: "https://github.com/toni02022006",
    live: "#"
  }
];