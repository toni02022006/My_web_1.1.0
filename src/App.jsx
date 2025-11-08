// src/App.jsx

import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects' // <-- 1. IMPORTA PROYECTOS
// import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects /> {/* <-- 2. AÑÁDELO AQUÍ */}
      {/* <Footer /> */}
    </div>
  )
}

export default App