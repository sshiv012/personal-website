import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const activities = [
  {
    title: "IEEE MDM 2025 Presentation",
    description: "Presenting advanced seminar on geospatial analytics with AsterixDB, showcasing novel spatial capabilities",
    date: "Upcoming",
    type: "Research",
    status: "Scheduled"
  },
  {
    title: "AI Schema-guided Workflows",
    description: "Developing function calling and validation layers with Gemini 2.0 to minimize hallucinations",
    date: "Active",
    type: "AI/ML",
    status: "In Progress"
  },
  {
    title: "Apache AsterixDB Enhancement",
    description: "Expanding geospatial library with 60+ spatial functions and CRS support",
    date: "Ongoing",
    type: "Open Source",
    status: "Active"
  },
  {
    title: "Database Workshop Leadership",
    description: "Leading large-scale database workshops with AI-based query generation strategies",
    date: "Recent",
    type: "Teaching",
    status: "Completed"
  },
  {
    title: "ACM SIGSPATIAL Publication",
    description: "Contributing to raster data exploration research published at SIGSPATIAL 2024",
    date: "Published",
    type: "Research",
    status: "Completed"
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
  return (
    <section className="py-24 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-6xl font-light tracking-tight">
            What I&apos;ve Been Up To
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Current projects, learning endeavors, and activities that keep me engaged in the tech world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
              <CardHeader className="flex-shrink-0">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline" className="text-xs">
                    {activity.type}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {activity.date}
                  </span>
                </div>
                <CardTitle className="text-lg font-medium leading-tight">
                  {activity.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <CardDescription className="text-sm leading-relaxed flex-grow">
                  {activity.description}
                </CardDescription>
                <div className="flex justify-end mt-auto pt-3">
                  <Badge 
                    className={`text-xs ${getStatusColor(activity.status)} border-0`}
                  >
                    {activity.status}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}