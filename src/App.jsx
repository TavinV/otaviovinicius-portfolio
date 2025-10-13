import { useState } from 'react'

import Header from './components/layout/Header'
import Background from './components/layout/Background'
import Footer from './components/layout/Footer'

import HeroSection from './components/sections/HeroSection'
import TechSection from './components/sections/TechSection'
import ProjectsSection from './components/sections/ProjectsSection'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
      <Header />
      <Background />
      <HeroSection />
      <TechSection />
      <ProjectsSection />
      <Footer />
      </>
    
  )
}

export default App
