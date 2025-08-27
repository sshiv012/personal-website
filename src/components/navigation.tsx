"use client"

import { useState, useEffect } from "react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { GitHubIcon, LinkedInIcon, MenuIcon, XIcon } from "@/components/ui/icons"
import { PERSONAL_INFO, UI_CONSTANTS } from "@/lib/constants"

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > UI_CONSTANTS.scrollThreshold)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-background/80 backdrop-blur-md border-b border-border/20'
        : 'bg-transparent'
      }`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-medium text-lg">
            {PERSONAL_INFO.name}
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('projects')}
              className="text-sm hover:text-foreground/80 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-sm hover:text-foreground/80 transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('education')}
              className="text-sm hover:text-foreground/80 transition-colors"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-sm hover:text-foreground/80 transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('recent')}
              className="text-sm hover:text-foreground/80 transition-colors"
            >
              Recent
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm hover:text-foreground/80 transition-colors"
            >
              Contact
            </button>
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