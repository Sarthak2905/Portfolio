import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import { portfolioData } from './data/portfolioData'

const sectionIds = ['home', 'about', 'projects', 'experience', 'contact']

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const navigate = useNavigate()
  const location = useLocation()

  const handleNavigate = (sectionId) => {
    navigate(`/#${sectionId}`)
  }

  // Keep navbar highlight synced with the section currently visible on screen.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting)
        if (visible?.target?.id) {
          setActiveSection(visible.target.id)
        }
      },
      {
        rootMargin: '-40% 0px -55% 0px',
        threshold: [0.2, 0.6],
      },
    )

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  // React Router handles hash updates; this effect performs smooth scrolling to the section.
  useEffect(() => {
    const hash = location.hash.replace('#', '')
    const targetId = hash || 'home'
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [location.hash])

  return (
    <>
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} name={portfolioData.name} />
      <main>
        <Hero
          name={portfolioData.name}
          role={portfolioData.role}
          taglines={portfolioData.taglines}
          description={portfolioData.heroDescription}
          onNavigate={handleNavigate}
          resumeUrl={portfolioData.resumeUrl}
        />
        <About about={portfolioData.about} skills={portfolioData.skills} resumeUrl={portfolioData.resumeUrl} />
        <Projects projects={portfolioData.projects} />
        <Experience experiences={portfolioData.experiences} />
        <Contact socialLinks={portfolioData.socialLinks} />
      </main>
      <Footer name={portfolioData.name} socialLinks={portfolioData.socialLinks} />
    </>
  )
}

export default App
