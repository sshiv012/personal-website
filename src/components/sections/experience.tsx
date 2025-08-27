import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import FadeIn from "@/components/animations/fade-in"
import StaggerContainer from "@/components/animations/stagger-container"
import StaggerItem from "@/components/animations/stagger-item"

const experiences = [
  {
    company: "UC Riverside - Apache AsterixDB",
    position: "Senior Applications Programmer",
    period: "May 2024 - Present",
    description: "Managing UCR's Big Data infrastructure and expanding AsterixDB's geospatial capabilities. Presented research at IEEE MDM 2025.",
    achievements: [
      "Built 60+ spatial functions for geometry data processing",
      "Integrated Coordinate Reference System (CRS) support across distributed clusters",
      "Led database workshop engaging 50+ undergraduate students",
      "Handled datasets from 20GB-500GB for advanced analytics"
    ],
    technologies: ["Java", "Scala", "AsterixDB", "Distributed Systems", "Geospatial Analytics"]
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