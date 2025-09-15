"use client"

import { Button } from "@/components/ui/button"
import FadeIn from "@/components/animations/fade-in"
import AnimatedSun from "@/components/animated-sun-optimized"
import { PERSONAL_INFO } from "@/lib/constants"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <AnimatedSun />

      <div className="text-center space-y-8 max-w-4xl mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-light tracking-tight relative">
              {PERSONAL_INFO.name}
            </h1>
            <div className="space-y-2">
              <p className="text-xl md:text-2xl text-muted-foreground font-light">
                {PERSONAL_INFO.title}
              </p>
              <div className="text-lg md:text-2xl text-center italic text-muted-foreground/80">
                <span className="text-xl md:text-3xl font-light tracking-wide text-muted-foreground/90">
                  <span style={{ fontFamily: 'var(--font-devanagari)' }}>सूर्या</span> • <span style={{ fontFamily: 'var(--font-tamil)' }}>சூர்யா</span>
                </span> • &quot;Suryaa&quot; means <span className="text-amber-400 font-semibold text-xl md:text-3xl">Sun</span> in Sanskrit & Tamil
              </div>
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="space-y-4">
            <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-muted-foreground">
              Building scalable backends, human centric fronts, steady infra.<br />
              Now exploring AI workflows and geospatial analytics.<br />MS Computer Science @ UC Riverside.
            </p>
            <div className="flex gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                className="rounded-full"
                onClick={() => {
                  const element = document.getElementById('projects')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                View Projects
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full"
                onClick={() => {
                  const element = document.getElementById('contact')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}