// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Projects from './components/Projects';
import AboutUs from './components/AboutUs'; // <--- 1. IMPORTANTE: Que esta línea esté aquí
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Profile from './pages/Profile';

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Projects />
      
      {/* 2. IMPORTANTE: Que esta etiqueta esté aquí para que se vea la sección */}
      <AboutUs />
      
      <ContactForm />
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/perfil" element={<Profile />} />
    </Routes>
  );
}

export default App;