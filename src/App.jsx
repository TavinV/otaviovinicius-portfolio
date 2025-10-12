import { useState } from 'react'

import Header from './components/ui/Header'
import Background from './components/layout/Background'
import MyPicture from './components/ui/MyPicutre'
import Section from './components/layout/Section'
import Footer from './components/ui/Footer'
import HeroSection from './components/ui/HeroSection'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
      <Header />
      <Background />
      <HeroSection />
      <Footer />
      </>
    
  )
}

export default App
