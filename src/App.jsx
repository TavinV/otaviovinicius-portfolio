import { useState } from 'react'

import Header from './components/layout/Header'
import Background from './components/layout/Background'
import MyPicture from './components/ui/MyPicutre'
import Section from './components/layout/Section'
import Footer from './components/layout/Footer'
import HeroSection from './components/layout/HeroSection'

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
