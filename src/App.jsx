// src/App.jsx

import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer' // <-- 1. IMPORTA

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <AboutMe />
      <Footer /> {/* <-- 2. AÑÁDELO AQUÍ */}
    </div>
  )
}

export default App