"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { GitHubIcon, LinkedInIcon, MenuIcon, XIcon, SunIcon } from "@/components/ui/icons"
import { PERSONAL_INFO, UI_CONSTANTS } from "@/lib/constants"

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > UI_CONSTANTS.scrollThreshold)
      
      // Calculate scroll progress - reaches 100% when contact section is fully visible
      const contactElement = document.getElementById('contact')
      if (contactElement) {
        const contactTop = contactElement.offsetTop
        const contactHeight = contactElement.offsetHeight
        const viewportHeight = window.innerHeight
        const currentScroll = window.scrollY
        
        // Calculate total scrollable distance to fully show contact section
        const totalScrollDistance = contactTop + contactHeight - viewportHeight
        const progress = totalScrollDistance > 0 ? Math.min(currentScroll / totalScrollDistance, 1) : 0
        setScrollProgress(progress)
      } else {
        // Fallback to original calculation
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight
        const progress = totalHeight > 0 ? Math.min(window.scrollY / totalHeight, 1) : 0
        setScrollProgress(progress)
      }
      
      // Determine active section - improved detection for contact section
      const sections = ['projects', 'experience', 'education', 'skills', 'recent', 'contact']
      let currentSection = ''
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          // If we're near the bottom of the page, highlight contact
          if (section === 'contact' && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
            currentSection = 'contact'
            break
          }
          // Standard detection: section is visible in upper part of viewport
          if (rect.top <= 200 && rect.bottom > 200) {
            currentSection = section
            break
          }
        }
      }
      
      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  const NavigationItem = ({ section, label }: { section: string; label: string }) => {
    const isActive = activeSection === section
    
    return (
      <motion.button
        onClick={() => scrollToSection(section)}
        className="text-sm hover:text-foreground/80 transition-colors relative"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className={isActive ? 'text-yellow-400 font-medium' : ''}>{label}</span>
        {isActive && (
          <motion.div
            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-300 to-orange-400 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </motion.button>
    )
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
      {/* Dynamic Background */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: isScrolled 
            ? 'linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)'
            : 'transparent',
          backdropFilter: isScrolled ? 'blur(8px)' : 'none'
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Dark mode overlay */}
      <motion.div 
        className="absolute inset-0 dark:block hidden"
        animate={{
          background: isScrolled 
            ? 'linear-gradient(180deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.85) 100%)'
            : 'transparent',
          backdropFilter: isScrolled ? 'blur(8px)' : 'none'
        }}
        transition={{ duration: 0.3 }}
      />
      
      
      
      {/* Scroll Progress Bar - moved to bottom */}
      <motion.div 
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-yellow-300 to-orange-400"
        style={{ 
          width: `${scrollProgress * 100}%`,
          transformOrigin: 'left center'
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {scrollProgress > 0 && (
        <motion.div
          className="absolute bottom-0 flex items-center justify-center w-8 h-8"
          style={{ 
            left: `calc(${scrollProgress * 100}% - 2px)`,
            bottom: '-16px'
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            animate={{
              rotate: scrollProgress * 360,
              filter: [
                "drop-shadow(0 0 0px rgba(255, 193, 7, 0))",
                "drop-shadow(0 0 15px rgba(255, 193, 7, 0.9))",
                "drop-shadow(0 0 0px rgba(255, 193, 7, 0))"
              ]
            }}
            transition={{
              rotate: { duration: 0.3 },
              filter: { 
                duration: 1.5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }
            }}
            className="w-8 h-8 flex items-center justify-center"
          >
            <SunIcon size={28} className="text-yellow-400" />
          </motion.div>
        </motion.div>
      )}
      
      <div className="max-w-6xl mx-auto px-6 py-4 relative z-10">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="font-medium text-lg hover:text-yellow-400 transition-colors cursor-pointer"
          >
            {PERSONAL_INFO.name}
          </button>

          <div className="hidden md:flex items-center space-x-8">
            <NavigationItem section="projects" label="Projects" />
            <NavigationItem section="experience" label="Experience" />
            <NavigationItem section="education" label="Education" />
            <NavigationItem section="skills" label="Skills" />
            <NavigationItem section="recent" label="Recent" />
            <NavigationItem section="contact" label="Contact" />
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground/80 transition-colors"
              >
                <GitHubIcon />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground/80 transition-colors"
              >
                <LinkedInIcon />
              </a>
              <ThemeToggle />
            </div>

            <div className="flex md:hidden items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                className="p-2 w-10 h-10"
                asChild
              >
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground/80 transition-colors flex items-center justify-center"
                >
                  <GitHubIcon />
                </a>
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                className="p-2 w-10 h-10"
                asChild
              >
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground/80 transition-colors flex items-center justify-center"
                >
                  <LinkedInIcon />
                </a>
              </Button>
              
              <div className="w-10 h-10 flex items-center justify-center">
                <ThemeToggle />
              </div>
              
              <Button
                variant="ghost"
                size="sm"
                className="p-2 w-10 h-10"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/20">
          <div className="px-6 py-4 space-y-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="block w-full text-left text-sm hover:text-foreground/80 transition-colors py-2"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="block w-full text-left text-sm hover:text-foreground/80 transition-colors py-2"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('education')}
              className="block w-full text-left text-sm hover:text-foreground/80 transition-colors py-2"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="block w-full text-left text-sm hover:text-foreground/80 transition-colors py-2"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('recent')}
              className="block w-full text-left text-sm hover:text-foreground/80 transition-colors py-2"
            >
              Recent
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-sm hover:text-foreground/80 transition-colors py-2"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation