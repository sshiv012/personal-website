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
      <Navigation />
      <main>
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
