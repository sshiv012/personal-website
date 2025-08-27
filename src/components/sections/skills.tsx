import { Badge } from "@/components/ui/badge"
import FadeIn from "@/components/animations/fade-in"

const skillCategories = [
  {
    category: "Languages",
    skills: ["Java", "Python", "TypeScript", "Scala", "Node.js"]
  },
  {
    category: "Database",
    skills: ["PostgreSQL", "AsterixDB", "MySQL", "MongoDB", "DynamoDB", "Redis"]
  },
  {
    category: "Frameworks",
    skills: ["Spring", "FastAPI", "JPA", "Hibernate", "JUnit", "Next.js", "React", "Lambda Functions"]
  },
  {
    category: "DevOps & Tools",
    skills: ["Docker", "CI/CD with Jenkins", "AWS", "Azure", "Swagger", "Kafka", "OAuth"]
  },
  {
    category: "AI & ML",
    skills: ["Gemini 2.0", "Prompt Engineering", "Function Calling", "Schema-guided AI", "Google AI Studio"]
  }
]

export default function Skills() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-6xl font-light tracking-tight">
              Skills
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technical expertise across full-stack development, AI/ML, and distributed systems.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="space-y-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-xl font-medium text-foreground">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="text-sm py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}