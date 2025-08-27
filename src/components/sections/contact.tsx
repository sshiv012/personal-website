import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import ContactForm from "@/components/contact-form"
import FadeIn from "@/components/animations/fade-in"
import { PERSONAL_INFO } from "@/lib/constants"
import type { ContactMethod } from "@/types"

const contactMethods: ContactMethod[] = [
  {
    title: "Email",
    description: "Best for detailed discussions and project inquiries",
    value: PERSONAL_INFO.email,
    link: `mailto:${PERSONAL_INFO.email}`
  },
  {
    title: "LinkedIn",
    description: "Professional networking and career opportunities",
    value: "Connect on LinkedIn",
    link: PERSONAL_INFO.linkedin
  },
  {
    title: "GitHub",
    description: "Explore my code and open source contributions",
    value: "View on GitHub",
    link: PERSONAL_INFO.github
  }
]

export default function Contact() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-6xl font-light tracking-tight">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I&apos;m always interested in hearing about new opportunities, collaborations, or just having a chat about technology.
            </p>
          </div>
        </FadeIn>

        <div className="min-h-[600px] flex items-end">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end w-full">
            <FadeIn delay={0.2}>
              <div className="w-full">
                <div className="flex flex-col justify-end">
                  <div className="space-y-4">
                    {contactMethods.map((method, index) => (
                      <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                        <CardHeader className="py-4">
                          <CardTitle className="text-lg font-medium">{method.title}</CardTitle>
                          <CardDescription className="text-sm leading-relaxed">
                            {method.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pt-0 pb-4">
                          <a 
                            href={method.link}
                            target={method.title !== "Email" ? "_blank" : undefined}
                            rel={method.title !== "Email" ? "noopener noreferrer" : undefined}
                            className="inline-block"
                          >
                            <Button variant="outline" className="w-full" size="sm">
                              {method.value}
                            </Button>
                          </a>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="w-full">
                <ContactForm />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}