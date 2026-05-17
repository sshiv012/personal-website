"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState, useEffect } from "react"
import Image from "next/image"

const activities = [
  {
    title: "Apache AsterixDB Committer",
    description: "Granted committer status on Apache AsterixDB after sustained contributions: containerized multi-node deployments, CRS-aware geospatial execution, JTS migration for memory and query gains, and ongoing alignment with OGC standards.",
    date: "Ongoing",
    type: "Open Source",
    status: "Active"
  },
  {
    title: "Candidate for UC Tech Award for Innovation",
    description: "Selected as a candidate for the UC Tech Award for Innovation (UC system-wide) for FutureFarmNow. Authored and presented the technical and business narrative to senior UC leadership ahead of the upcoming award event.",
    date: "Upcoming",
    type: "Recognition",
    status: "Active"
  },
  {
    title: "Google Summer of Code — Apache AsterixDB",
    description: "Designed, proposed, and mentoring the Apache AsterixDB GSoC project on MCP / tooling support for safe, schema-aware AI agent analytics. Helping bring new contributors into the project.",
    date: "Ongoing",
    type: "Open Source",
    status: "Active"
  },
  {
    title: "IEEE MDM 2025 Presentation",
    description: "Presented advanced seminar on geospatial analytics with Apache AsterixDB, showcasing novel spatial capabilities to academic and industry audiences.",
    date: "Completed",
    type: "Research",
    status: "Completed",
    image: "/images/ieee-mdm-2025.jpg",
    link: "https://mdm2025.github.io/advancedSeminars.html#main"
  },
  {
    title: "Big Data Management Workshop",
    description: "Planned and led one of the most successful AsterixDB workshops in Southern California with 60+ participants. Yelp business/review data, semantic modeling, query design, and performance benchmarking.",
    date: "Recent",
    type: "Teaching",
    status: "Completed",
    video: "/images/AsterixWorkshopGlimpse.mp4",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7256293581492035584/"
  },
  {
    title: "DynoViz — ACM SIGSPATIAL '24",
    description: "Scala/Java/Spark distributed visualization engine for terabyte-scale data. 60× storage reduction and up to 10× faster query latency via hierarchical tile pyramids, optimized caching, and selective pre-generation.",
    date: "Published",
    type: "Research",
    status: "Completed",
    link: "https://dl.acm.org/doi/10.1145/3681763.3698475"
  },
  {
    title: "Learning Tennis",
    description: "Started at 28, currently 3.5 rating - proving neuroplasticity knows no age limits",
    date: "Ongoing",
    type: "Personal",
    status: "Active"
  },
  {
    title: "Swimming & Running Milestones",
    description: "Learned swimming at 27, swam 1.5k distance. Completed first 10k run last year",
    date: "Achieved",
    type: "Personal",
    status: "Completed"
  },
  {
    title: "Meditation Practice",
    description: "Exploring different meditation forms, can maintain inner peace for 45 minutes",
    date: "Daily",
    type: "Personal",
    status: "Active"
  }
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "In Progress": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
    case "Active": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
    case "Completed": return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
    case "Scheduled": return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
    default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
  }
}

export default function RecentActivity() {
  const [selectedMedia, setSelectedMedia] = useState<{ src: string, type: 'image' | 'video' } | null>(null)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedMedia(null)
      }
    }

    if (selectedMedia) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [selectedMedia])

  return (
    <section className="py-24 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-6xl font-light tracking-tight">
            What I&apos;ve Been Up To
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From groundbreaking research and open-source contributions to embracing new challenges in life - a journey of continuous growth and meaningful impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <Card
              key={index}
              className={`hover:shadow-lg transition-shadow duration-300 h-full flex flex-col min-h-[280px] ${activity.image || activity.video ? 'cursor-pointer hover:scale-105 transition-transform' : ''
                }`}
              onClick={(e) => {
                if (activity.image) {
                  e.preventDefault()
                  setSelectedMedia({ src: activity.image, type: 'image' })
                } else if (activity.video) {
                  e.preventDefault()
                  setSelectedMedia({ src: activity.video, type: 'video' })
                } else if (activity.link) {
                  window.open(activity.link, '_blank')
                }
              }}
            >
              <CardHeader className="flex-shrink-0">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      {activity.type}
                    </Badge>
                    {activity.image && (
                      <Badge variant="secondary" className="text-xs bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300">
                        📷 Photo
                      </Badge>
                    )}
                    {activity.video && (
                      <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                        🎥 Video
                      </Badge>
                    )}
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {activity.date}
                  </span>
                </div>
                <CardTitle className="text-lg font-medium leading-tight">
                  {activity.title}
                </CardTitle>
                {(activity.image || activity.video) && (
                  <p className="text-xs text-muted-foreground mt-1">
                    (Click to view)
                  </p>
                )}
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <CardDescription className="text-sm leading-relaxed flex-grow">
                  {activity.description}
                </CardDescription>
                <div className="flex justify-between items-end mt-auto pt-3">
                  <div>
                    {activity.link && (
                      <a
                        href={activity.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-blue-600 hover:text-blue-800 underline"
                        onClick={(e) => e.stopPropagation()}
                      >
                        View Details
                      </a>
                    )}
                  </div>
                  <Badge
                    className={`text-xs ${getStatusColor(activity.status)} border-0 ml-auto`}
                  >
                    {activity.status}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {selectedMedia && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedMedia(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              {selectedMedia.type === 'image' ? (
                <Image
                  src={selectedMedia.src}
                  alt="Activity media"
                  width={800}
                  height={600}
                  className="object-contain max-w-full max-h-full"
                />
              ) : (
                <video
                  src={selectedMedia.src}
                  controls
                  autoPlay
                  className="max-w-full max-h-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  Your browser does not support the video tag.
                </video>
              )}
              <button
                className="absolute top-4 right-4 text-white text-2xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 transition-colors"
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedMedia(null)
                }}
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}