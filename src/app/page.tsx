import Navigation from "@/components/navigation"
import Hero from "@/components/sections/hero"
import Projects from "@/components/sections/projects"
import Experience from "@/components/sections/experience"
import Education from "@/components/sections/education"
import Skills from "@/components/sections/skills"
import RecentActivity from "@/components/sections/recent-activity"
import Contact from "@/components/sections/contact"

export default function Home() {
  return (
    <div className="min-h-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        Skip to main content
      </a>
      <Navigation />
      <main id="main-content">
        <Hero />
        <div id="projects">
          <Projects />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="education">
          <Education />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="recent">
          <RecentActivity />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
    </div>
  );
}
