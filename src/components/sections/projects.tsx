import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import FadeIn from "@/components/animations/fade-in"
import StaggerContainer from "@/components/animations/stagger-container"
import StaggerItem from "@/components/animations/stagger-item"

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
            <StaggerItem key={index}>
              <Card className="group hover:shadow-lg transition-shadow duration-300 cursor-pointer h-full flex flex-col">
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
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium hover:underline"
                    >
                      View Project →
                    </a>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}