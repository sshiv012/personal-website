"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { SunIcon, MoonIcon } from "@/components/ui/icons"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [isTransitioning, setIsTransitioning] = React.useState(false)

  const handleToggle = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setTheme(theme === "light" ? "dark" : "light")
      setTimeout(() => setIsTransitioning(false), 300)
    }, 150)
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleToggle}
      className="w-9 h-9 p-0 relative overflow-hidden"
    >
      <motion.div
        className="relative w-full h-full flex items-center justify-center"
        animate={{ 
          rotateY: isTransitioning ? 180 : 0,
        }}
        transition={{ 
          duration: 0.6, 
          ease: "easeInOut" 
        }}
      >
        <motion.div
          className="absolute"
          animate={{
            scale: theme === "light" ? 1 : 0,
            rotate: theme === "light" ? 0 : -90,
            opacity: theme === "light" ? 1 : 0,
          }}
          transition={{ 
            duration: 0.3, 
            ease: "easeInOut",
            scale: { delay: theme === "light" ? 0 : 0.1 }
          }}
        >
          <motion.div
            animate={{
              boxShadow: theme === "light" 
                ? ["0 0 0px rgba(255, 193, 7, 0)", "0 0 20px rgba(255, 193, 7, 0.3)", "0 0 0px rgba(255, 193, 7, 0)"]
                : "0 0 0px rgba(255, 193, 7, 0)"
            }}
            transition={{
              duration: 2,
              repeat: theme === "light" ? Infinity : 0,
              ease: "easeInOut"
            }}
            className="rounded-full flex items-center justify-center"
          >
            <SunIcon size={19.2} />
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute"
          animate={{
            scale: theme === "dark" ? 1 : 0,
            rotate: theme === "dark" ? 0 : 90,
            opacity: theme === "dark" ? 1 : 0,
          }}
          transition={{ 
            duration: 0.3, 
            ease: "easeInOut",
            scale: { delay: theme === "dark" ? 0 : 0.1 }
          }}
        >
          <motion.div
            animate={{
              y: theme === "dark" ? [0, -2, 0] : 0,
            }}
            transition={{
              duration: 4,
              repeat: theme === "dark" ? Infinity : 0,
              ease: "easeInOut"
            }}
          >
            <MoonIcon size={19.2} />
          </motion.div>
        </motion.div>
      </motion.div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}