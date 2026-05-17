"use client"

import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { useState } from "react"
import FadeIn from "@/components/animations/fade-in"

const SkillBadge = ({ skill }: { skill: string; index: number }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <Badge
        variant="secondary"
        className="text-sm py-2 px-4 transition-all duration-300 cursor-default relative overflow-hidden hover:bg-primary hover:text-primary-foreground"
        style={{
          boxShadow: isHovered
            ? '0 0 20px rgba(255, 193, 7, 0.3), 0 0 40px rgba(255, 193, 7, 0.1)'
            : 'none'
        }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-yellow-200/20 via-orange-200/30 to-yellow-200/20"
          initial={{ x: "-100%" }}
          animate={{ x: isHovered ? "100%" : "-100%" }}
          transition={{
            duration: 0.6,
            ease: "easeInOut"
          }}
        />
        <span className="relative z-10">{skill}</span>
      </Badge>
    </motion.div>
  )
}

const skillCategories = [
  {
    category: "Languages",
    skills: ["Java", "Python", "TypeScript", "SQL", "Scala"]
  },
  {
    category: "Distributed Systems & OSS",
    skills: ["Apache AsterixDB (Committer)", "Apache Spark", "Hadoop / HDFS", "Kafka", "Event-Driven Architecture", "SAGA Orchestration", "JTS", "OGC Standards"]
  },
  {
    category: "Databases",
    skills: ["PostgreSQL (pgvector / HNSW)", "AsterixDB", "MySQL", "BigQuery", "DynamoDB", "Redis"]
  },
  {
    category: "Frameworks",
    skills: ["Spring Boot", "FastAPI", "Next.js", "React", "JPA", "Hibernate", "JUnit", "Microservices"]
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS (Lambda, SQS, Kinesis, RDS)", "GCP (BigQuery, Cloud SQL Proxy)", "Azure (Event Hubs, Function App)", "Terraform", "Docker", "Jenkins", "CI/CD", "Maven", "Linux", "OpenSearch / ELK", "Apache HTTP Server (SSL/TLS)"]
  },
  {
    category: "AI & ML",
    skills: ["Gemini 2.5 Flash", "RAG", "Agentic Workflows", "Function Calling", "Prompt Caching", "Multimodal AI", "Schema-Guided AI", "MCP / Tooling"]
  },
  {
    category: "Embedded Fintech",
    skills: ["Open Banking Aggregators (SaltEdge, Plaid)", "Codat (banking / accounting / payroll)", "SMB Cash-Flow Analytics"]
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
              Some of the technologies I&apos;ve worked with.
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
                    <SkillBadge key={skillIndex} skill={skill} index={skillIndex} />
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