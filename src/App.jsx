// src/App.jsx

import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import AboutMe from './components/AboutMe' // <-- 1. IMPORTA
// import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <AboutMe /> {/* <-- 2. AÑÁDELO AQUÍ */}
      {/* <Footer /> */}
    </div>
  )
}

export default App