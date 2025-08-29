"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import FadeIn from "@/components/animations/fade-in"
import StaggerContainer from "@/components/animations/stagger-container"
import StaggerItem from "@/components/animations/stagger-item"

const FloatingParticle = ({ index }: { index: number }) => {
  // Define specific positions around the card edges
  const positions = [
    { top: '10px', left: '10px' },      // Top-left
    { top: '10px', right: '10px' },     // Top-right  
    { bottom: '10px', left: '10px' },   // Bottom-left
    { bottom: '10px', right: '10px' },  // Bottom-right
    { top: '50%', left: '10px' },       // Middle-left
    { top: '50%', right: '10px' }       // Middle-right
  ]
  
  const position = positions[index % positions.length]
  const moveDistance = 20
  
  return (
    <motion.div
      className="absolute w-1 h-1 bg-yellow-300/60 rounded-full pointer-events-none z-10"
      style={{
        ...position,
        transform: position.top === '50%' ? 'translateY(-50%)' : 'none'
      }}
      initial={{
        opacity: 0,
        scale: 0
      }}
      animate={{
        opacity: [0, 0.8, 0.4, 0.8, 0],
        scale: [0, 1.2, 0.8, 1.2, 0],
        x: index % 2 === 0 
          ? [0, moveDistance, -moveDistance/2, moveDistance, 0]
          : [0, -moveDistance, moveDistance/2, -moveDistance, 0],
        y: index % 3 === 0 
          ? [0, -moveDistance/2, moveDistance, -moveDistance/2, 0]
          : [0, moveDistance/2, -moveDistance, moveDistance/2, 0]
      }}
      exit={{
        opacity: 0,
        scale: 0,
        transition: { duration: 0.3 }
      }}
      transition={{
        duration: 2.5 + (index % 3) * 0.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: index * 0.15,
      }}
    />
  )
}

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <StaggerItem key={index}>
      <div 
        className="relative h-full group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className="h-full"
          animate={{
            filter: isHovered 
              ? "drop-shadow(0 0 30px rgba(255, 193, 7, 0.3))" 
              : "drop-shadow(0 0 0px rgba(255, 193, 7, 0))",
          }}
          transition={{ 
            duration: 0.4,
            ease: "easeOut"
          }}
        >
          <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer h-full flex flex-col relative overflow-hidden rounded-lg">
            <AnimatePresence mode="wait">
              {isHovered && (
                <motion.div
                  key="hover-effects"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 pointer-events-none"
                >
                  {[...Array(6)].map((_, particleIndex) => (
                    <FloatingParticle key={`particle-${index}-${particleIndex}`} index={particleIndex} />
                  ))}
                  <motion.div
                    className="absolute inset-0 border-2 border-yellow-300/30 rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
            
            <CardHeader className="flex-shrink-0">
              <CardTitle className="text-xl font-medium">{project.title}</CardTitle>
              <CardDescription className="text-base leading-relaxed">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow">
              <div className="flex-grow"></div>
              <div className="space-y-4 mt-auto">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <motion.a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium hover:underline"
                  whileHover={{
                    textShadow: "0 0 10px rgba(255, 193, 7, 0.5)",
                  }}
                >
                  View Project →
                </motion.a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </StaggerItem>
  )
}

const projects = [
  {
    title: "PlotThePlot",
    description: "AI-Native Novel Analysis Platform using Gemini 2.0 for long-form comprehension, producing structured story arcs and relationship graphs",
    technologies: ["Python", "Flask", "Gemini 2.0", "Next.js", "D3.js", "SQLite"],
    link: "https://plot-the-plot.vercel.app/"
  },
  {
    title: "Raster Data Exploration", 
    description: "Full-stack platform for exploring terabyte-scale satellite imagery with custom indexing and millisecond pixel retrieval",
    technologies: ["Scala", "Apache Spark", "Hadoop", "JavaScript", "Beast"],
    link: "https://dl.acm.org/doi/10.1145/3681763.3698475"
  },
  {
    title: "GeoVocab",
    description: "Revolutionary mapping solution that locates any geographic location with 3 simple English words",
    technologies: ["Java", "Spring Boot", "MySQL", "Docker"],
    link: "https://github.com/suryaacharan/geovocab"
  },
  {
    title: "Weather Data Analytics",
    description: "MapReduce system processing 4 years of weather data to identify states with stable weather patterns, 20% performance improvement",
    technologies: ["Java", "MapReduce", "Hadoop", "Maven"],
    link: "https://github.com/suryaacharan/WeatherReportProcessing"
  }
]

export default function Projects() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-6xl font-light tracking-tight">
              Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of work that showcases my skills and passion for creating meaningful digital experiences.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}