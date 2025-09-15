import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import FadeIn from "@/components/animations/fade-in"
import StaggerContainer from "@/components/animations/stagger-container"
import StaggerItem from "@/components/animations/stagger-item"

const experiences = [
  {
    company: "UC Riverside - Future Farm Now & Apache AsterixDB",
    position: "Senior Applications Programmer",
    period: "May 2024 - Present",
    description: "Lead engineer for USDA-funded Future Farm Now project processing satellite imagery from Planet Labs, Landsat, and Sentinel. Simultaneously managing UCR's Big Data infrastructure and expanding AsterixDB's geospatial capabilities.",
    link: "https://ffn.cs.ucr.edu/",
    linkText: "Try Future Farm Now beta version",
    achievements: [
      "Built interactive soil analysis system with multi-layer visualizations for California farmers",
      "Developed advanced NDVI time-series analysis with year-over-year trend comparisons",
      "Built 60+ spatial functions for geometry data processing in distributed AsterixDB clusters",
      "Integrated Coordinate Reference System (CRS) support across distributed systems",
      "Led database workshop engaging 60+ undergraduate students in Southern California",
      "Engineered GPS-optimized smart soil sampling with real-time accuracy assessment",
      "Created evapotranspiration mapping system for crop water use monitoring",
      "Architected Next.js frontend with Scala/Python backend handling 100+ TB satellite datasets"
    ],
    technologies: ["Next.js", "Scala", "Python", "Flask", "Java", "AsterixDB", "Satellite Imagery", "NDVI", "Leaflet", "Remote Sensing", "Distributed Systems", "Geospatial Analytics"]
  },
  {
    company: "Temenos",
    position: "Senior Software Engineer",
    period: "July 2021 - August 2022",
    description: "Implemented event-driven microservices and integrated Open Banking APIs. Finalist in Temenos Hackathon with virtual CFO solution.",
    achievements: [
      "Built SAGA pattern microservice improving system reliability",
      "Integrated APIs with 100+ financial institutions",
      "Saved 20+ engineering hours weekly with automation scripts",
      "Containerized microservices using Docker & Kubernetes"
    ],
    technologies: ["Java", "Spring", "AWS", "Azure", "Docker", "Kubernetes", "REST APIs"]
  },
  {
    company: "Temenos",
    position: "Software Engineer",
    period: "July 2019 - July 2021",
    description: "Designed event-driven request management system handling tens of thousands of daily requests. Mentored new hires and optimized QA processes.",
    achievements: [
      "Captured 10,000+ daily service requests via REST APIs",
      "Reduced onboarding time by 8 weeks for new hires",
      "Built automation saving 40 person-hours weekly",
      "Served as L1 Developer POC for Product Analysis team"
    ],
    technologies: ["Java", "Spring Boot", "REST APIs", "Microservices", "Banking Systems"]
  }
]

export default function Experience() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-6xl font-light tracking-tight">
              Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional journey and key accomplishments in software development.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="space-y-8">
          {experiences.map((exp, index) => (
            <StaggerItem key={index}>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <CardTitle className="text-xl font-medium">{exp.position}</CardTitle>
                      <CardDescription className="text-base font-medium text-foreground">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <span className="text-sm text-muted-foreground font-medium">
                      {exp.period}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                  {exp.link && (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-sm text-blue-600 hover:text-blue-800 underline"
                    >
                      {exp.linkText || exp.link}
                    </a>
                  )}

                  <div className="space-y-3">
                    <h4 className="font-medium text-sm">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start">
                          <span className="mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
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