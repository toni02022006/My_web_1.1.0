// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Hero from './components/Hero'
import Stats from './components/Stats'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Projects from './components/Projects'
import AboutUs from './components/AboutUs' // <-- OJO: Importamos el nuevo "Nosotros"
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import Profile from './pages/Profile' // <-- Importamos la nueva página

// Creamos un componente "Home" para agrupar todo lo de la página principal
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Projects />
      <AboutUs /> {/* Ahora muestra "Nosotros" */}
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
  )
}

export default App