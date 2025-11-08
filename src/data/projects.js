// src/data/projects.js

// 1. IMPORTAMOS LAS IMÁGENES COMO VARIABLES
import crmImage from '../assets/CRM-System.png';
import planosImage from '../assets/planosperuxd.jpg';

export const projects = [
  {
    id: 1,
    title: "CRM con WhatsApp API",
    description: "Un sistema de gestión de clientes que se integra con la API de WhatsApp...",

    // 2. USAMOS LA VARIABLE, NO UN STRING DE TEXTO
    image: crmImage, 

    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/toni02022006/...",
    live: "https://mi-crm.netlify.app"
  },
  {
    id: 2,
    title: "Página de Intranet",
    description: "Intranet para una empresa X, que gestiona reportes, tareas y permisos...",

    // 2. USAMOS LA VARIABLE
    image: planosImage,

    tech: ["Django", "Python", "React", "MySQL"],
    github: "https://github.com/toni02022006/...",
    live: "#" 
  },
];