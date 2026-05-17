import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import FadeIn from "@/components/animations/fade-in"
import StaggerContainer from "@/components/animations/stagger-container"
import StaggerItem from "@/components/animations/stagger-item"

const experiences = [
  {
    company: "UC Riverside - FutureFarmNow & Apache AsterixDB",
    position: "Senior Software Engineer",
    period: "May 2024 - Present",
    description: "Apache AsterixDB Committer and solo engineer at UCR shipping products for the US Department of Agriculture (USDA-NIFA-funded FutureFarmNow) and maintaining the data pipelines behind them. Lab's engineering and outreach lead, absorbing operational load so faculty and researchers can focus on research and teaching.",
    link: "https://ffn.cs.ucr.edu/",
    linkText: "Try FutureFarmNow beta",
    achievements: [
      "Apache AsterixDB Committer; led Java open-source contributions to a JSON-native distributed query engine — containerized multi-node deployments, CRS-aware geospatial execution, and a JTS migration improving memory and query latency. Driving alignment with OGC standards.",
      "Engineered DynoViz, a Scala/Java/Spark distributed visualization engine serving terabyte-scale data with 60× storage reduction and up to 10× faster query latency. Published at ACM SIGSPATIAL '24.",
      "Candidate for the UC Tech Award for Innovation (UC system-wide) for FutureFarmNow — authored and presented the technical and business narrative to senior UC leadership.",
      "Built and deployed a multimodal AI assistant on Gemini 2.5 Flash with a 5-turn agentic tool loop across 7 live APIs (soil, NDVI, evapotranspiration, pest risk, market prices). Cut cached input token cost by 75% via prompt caching and TTL-based response caching.",
      "Prototyped a governed RAG pipeline on GCP using Gemini embeddings, BigQuery, and Cloud SQL Proxy into PostgreSQL with pgvector/HNSW for grounded inference over private knowledge.",
      "Orchestrated long-running Python and Spark analytics pipelines with request-state tracking, retries, idempotency, caching, outbox-style eventual consistency, and OpenSearch (ELK) for observability across 100+ TB workloads.",
      "Built the TypeScript/Next.js frontend for FutureFarmNow, optimizing geospatial data fetching, caching, progressive rendering, and code chunking.",
      "Designed, proposed, and mentor the Apache AsterixDB Google Summer of Code project on MCP/tooling support for safe, schema-aware AI agent analytics.",
      "Planned and led hands-on AsterixDB workshops with real-world Yelp data covering semantic modeling, query design, and performance benchmarking.",
      "Presented at IEEE MDM 2025 and academic/industry events; mentor Masters students on distributed-systems and AI projects, prepare engineering-focused academic material, and drive industrial collaborations."
    ],
    technologies: ["Apache AsterixDB", "Scala", "Java", "Python", "Spark", "Next.js", "TypeScript", "Gemini 2.5 Flash", "RAG", "GCP", "BigQuery", "PostgreSQL", "pgvector", "OpenSearch (ELK)", "Linux", "HDFS", "JTS", "OGC", "Distributed Systems", "Geospatial Analytics"]
  },
  {
    company: "Temenos",
    position: "Senior Software Engineer",
    period: "July 2021 - August 2022",
    description: "Built event-driven microservices and integrated Open Banking + accounting-data aggregators for digital banking. Finalist in the Temenos Hackathon for a fractional-CFO concept pitched to the exec committee.",
    achievements: [
      "Integrated RESTful Java/Spring services with Open Banking aggregators (SaltEdge, Plaid) for real-time account linking and transaction-data ingestion across 100+ financial institutions inside Temenos Infinity.",
      "Pitched to the Temenos exec committee a fractional-CFO concept for SMBs leveraging Codat integrations across banking, accounting, payroll, and commerce data for cash-flow visibility and credit-readiness analytics. Productized after the Hackathon final.",
      "Designed an event-driven microservice using the SAGA pattern on Kafka / SQS / EventHubs and AWS Lambda for serverless workflow steps, with structured logging, metrics, and retry mechanisms.",
      "Built Terraform-based infrastructure-as-code and microservice deployment workflows across AWS and Azure, saving 20+ engineering hours every week."
    ],
    technologies: ["Java", "Spring", "Kafka", "AWS Lambda", "AWS SQS", "Azure Event Hubs", "Terraform", "SaltEdge", "Plaid", "Codat", "SAGA", "REST APIs", "Docker"]
  },
  {
    company: "Temenos",
    position: "Software Engineer",
    period: "July 2019 - July 2021",
    description: "Co-designed event-driven request management for digital banking, automated build/deploy pipelines, and served as L1 Developer point of contact for global banks.",
    achievements: [
      "Co-designed an event-driven request management system in Java/Spring capturing tens of thousands of digital banking service requests daily through REST APIs.",
      "Implemented unit, integration, and end-to-end tests.",
      "Automated build and deployment of retail banking artifacts on AWS/Azure CI/CD pipelines, saving 40 person-hours weekly.",
      "Served as L1 Developer point of contact for global banks; investigated and triaged production transaction-flow incidents via JSON event-log analysis of microservice payloads."
    ],
    technologies: ["Java", "Spring Boot", "REST APIs", "Microservices", "AWS", "Azure", "CI/CD", "JSON Log Analysis"]
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