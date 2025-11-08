// src/App.jsx

import Hero from './components/Hero'
import Navbar from './components/Navbar' // <-- 1. IMPORTA EL NAVBAR
// import Projects from './components/Projects'
// import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar /> {/* <-- 2. AÑÁDELO AQUÍ (justo arriba del Hero) */}
      <Hero />
      {/* <Projects /> */}
      {/* <Footer /> */}
    </div>
  )
}

export default App