// src/App.jsx

import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Services from './components/Services' // <-- 1. IMPORTA
import Projects from './components/Projects'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services /> {/* <-- 2. AÑÁDELO AQUÍ */}
      <Projects />
      <AboutMe />
      <Footer />
    </div>
  )
}

export default App