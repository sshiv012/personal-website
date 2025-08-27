import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const education = [
  {
    institution: "University of California, Riverside",
    degree: "Masters in Computer Science",
    period: "2022 - March 2024",
    description: "Specialized in distributed systems, geospatial analytics, and AI/ML. Research in Apache AsterixDB and big data processing.",
    gpa: "3.94/4.0"
  },
  {
    institution: "SRM Institute of Science and Technology",
    degree: "Bachelor of Computer Science & Engineering",
    period: "2015 - May 2019",
    description: "Strong foundation in algorithms, data structures, and software engineering. Active in competitive programming and hackathons.",
    gpa: "9.45/10.0"
  }
]

export default function Education() {
  return (
    <section className="py-24 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-6xl font-light tracking-tight">
            Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic background and continuous learning journey in technology and design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <CardTitle className="text-xl font-medium">{edu.institution}</CardTitle>
                    <CardDescription className="text-base font-medium text-foreground">
                      {edu.degree}
                    </CardDescription>
                  </div>
                  <span className="text-sm text-muted-foreground font-medium">
                    {edu.period}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  {edu.description}
                </p>
                {edu.gpa && (
                  <div className="pt-2">
                    <span className="text-sm font-medium">GPA: {edu.gpa}</span>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}