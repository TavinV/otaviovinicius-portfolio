import Header from './components/layout/Header'
import Background from './components/layout/Background'
import Footer from './components/layout/Footer'

import HeroSection from './components/sections/HeroSection'
import TechSection from './components/sections/TechSection'
import ProjectsSection from './components/sections/ProjectsSection'
import TestimonialSection from './components/sections/TestimonialSection'

import LoadingScreen from './components/ui/LoadingSection'

import useProjects from './hooks/useProjects'
import useTestimonials from './hooks/useTestimonials'

function App() {
  const {loading: projectsLoading} = useProjects();
  const {loading: testimonailsLoading} = useTestimonials();

  const isLoading = projectsLoading || testimonailsLoading;

  if (isLoading){
    return <LoadingScreen />
  }

  return (
      <>
      <Header />
      <Background />
      <HeroSection />
      <TechSection />
      <ProjectsSection />
      <TestimonialSection />
      <Footer />
      </>
    
  )
}

export default App
