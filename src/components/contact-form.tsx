"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { EMAILJS_CONFIG } from "@/lib/constants"
import { SendIcon } from "@/components/ui/icons"


export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setIsLoading(true)

    try {
      if (typeof window !== 'undefined' && window.emailjs && formRef.current) {
        window.emailjs.init(EMAILJS_CONFIG.publicKey)

        await window.emailjs.sendForm(
          EMAILJS_CONFIG.serviceId, 
          EMAILJS_CONFIG.templateId, 
          formRef.current
        )
        setIsSubmitted(true)
        if (formRef.current) {
          formRef.current.reset()
        }

        // Reset success state after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false)
        }, 5000)
      } else {
        throw new Error('EmailJS not loaded')
      }
    } catch (error) {
      console.error('Error sending email:', error)
      alert('Failed to send message. Please try again or email me directly.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full">
      <Card className="shadow-lg">
        <CardContent className="p-4">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your full name"
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  required
                />
              </div>
              <div className="space-y-3">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  required
                />
              </div>
            </div>

            <div className="space-y-3">
              <label htmlFor="time" className="text-sm font-medium text-foreground">
                Best time to contact
              </label>
              <select
                name="time"
                id="time"
                defaultValue="Anytime"
                className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                  backgroundPosition: 'right 12px center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '16px'
                }}
              >
                <option value="Anytime">Anytime</option>
                <option value="Morning (8 AM - 12 PM)">Morning (8 AM - 12 PM)</option>
                <option value="Afternoon (12 PM - 5 PM)">Afternoon (12 PM - 5 PM)</option>
                <option value="Evening (5 PM - 9 PM)">Evening (5 PM - 9 PM)</option>
                <option value="Weekends">Weekends</option>
              </select>
            </div>

            <div className="space-y-3">
              <label htmlFor="message" className="text-sm font-medium text-foreground">
                Message *
              </label>
              <textarea
                name="message"
                id="message"
                rows={6}
                placeholder="Tell me about your project, question, or just say hello..."
                className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-vertical"
                required
              />
            </div>

            <motion.div
              whileTap={{ scale: 0.98 }}
              className="pt-4"
            >
              <Button
                type="submit"
                disabled={isLoading || isSubmitted}
                className="w-full h-12 text-base font-medium rounded-lg transition-all duration-300"
                size="lg"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Sending...
                  </div>
                ) : isSubmitted ? (
                  <div className="flex items-center gap-2">
                    <span className="text-lg">✅</span>
                    Thanks! I&apos;ll get back to you soon
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <span>Send Message</span>
                    <SendIcon className="transition-transform group-hover:translate-x-1" />
                  </div>
                )}
              </Button>
            </motion.div>

          </form>

          <div className="mt-8 pt-6 border-t border-border">
            <div className="flex flex-wrap gap-2 justify-center">
              <Badge variant="secondary" className="text-xs">
                Usually responds within 24 hours
              </Badge>
              <Badge variant="outline" className="text-xs">
                Secure HTTPS transmission
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}