'use client'

import { useState } from 'react'
import Navigation from './components/Navigation'
import ThemeToggle from './components/ThemeToggle'
import SectionContainer from './components/SectionContainer'
import Home from './components/sections/Home'
import About from './components/sections/About'
import Education from './components/sections/Education'
import Skills from './components/sections/Skills'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Theme Toggle - Fixed Position */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* Navigation */}
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Content */}
      <main className={`min-h-screen transition-all duration-300 ${
        activeSection === 'home' ? '' : 'pt-0'
      } md:ml-20 pb-20 md:pb-0`}>
        <div className="w-full">
          <SectionContainer isActive={activeSection === 'home'}>
            <Home setActiveSection={setActiveSection} />
          </SectionContainer>
          
          <SectionContainer isActive={activeSection === 'about'}>
            <About />
          </SectionContainer>
          
          <SectionContainer isActive={activeSection === 'education'}>
            <Education />
          </SectionContainer>
          
          <SectionContainer isActive={activeSection === 'skills'}>
            <Skills />
          </SectionContainer>
          
          <SectionContainer isActive={activeSection === 'experience'}>
            <Experience />
          </SectionContainer>
          
          <SectionContainer isActive={activeSection === 'projects'}>
            <Projects />
          </SectionContainer>
          
          <SectionContainer isActive={activeSection === 'contact'}>
            <Contact />
          </SectionContainer>
        </div>
      </main>
    </div>
  )
}

