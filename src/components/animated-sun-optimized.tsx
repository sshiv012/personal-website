"use client"

import { motion } from "framer-motion"
import { useState, useRef, useEffect, useMemo } from "react"
import { SUN_ANIMATION } from "@/lib/constants"

export default function AnimatedSun() {
  const [isHovered, setIsHovered] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  // Detect mobile breakpoint after hydration to avoid mismatch
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Check immediately after mount
    checkMobile()

    // Update on resize
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Use IntersectionObserver to pause animations when off-screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    const currentContainer = containerRef.current
    if (currentContainer) {
      observer.observe(currentContainer)
    }

    return () => {
      if (currentContainer) {
        observer.unobserve(currentContainer)
      }
    }
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width) * 100
        const y = ((e.clientY - rect.top) / rect.height) * 100
        setMousePosition({ x, y })
      }
    }

    if (isHovered && isInView) {
      document.addEventListener('mousemove', handleMouseMove)
    } else {
      document.removeEventListener('mousemove', handleMouseMove)
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [isHovered, isInView])

  // Reduce particle counts for mobile devices
  const particleCount = isMobile ? Math.floor(SUN_ANIMATION.particleCount * 0.5) : SUN_ANIMATION.particleCount
  const dotCounts = isMobile ? {
    outer: Math.floor(SUN_ANIMATION.dotCounts.outer * 0.6),
    middle: Math.floor(SUN_ANIMATION.dotCounts.middle * 0.6),
    extended: Math.floor(SUN_ANIMATION.dotCounts.extended * 0.6),
  } : SUN_ANIMATION.dotCounts

  // Pre-calculate dot positions
  const outerDots = useMemo(() => {
    return [...Array(dotCounts.outer)].map((_, i) => {
      const angle = (i * 360) / dotCounts.outer
      const radian = (angle * Math.PI) / 180
      const radius = SUN_ANIMATION.radii.outer
      const x = Math.cos(radian) * radius
      const y = Math.sin(radian) * radius
      return { x, y, i }
    })
  }, [dotCounts.outer])

  const middleDots = useMemo(() => {
    return [...Array(dotCounts.middle)].map((_, i) => {
      const angle = (i * 360) / dotCounts.middle + 7.5
      const radian = (angle * Math.PI) / 180
      const radius = SUN_ANIMATION.radii.middle
      const x = Math.cos(radian) * radius
      const y = Math.sin(radian) * radius
      return { x, y, i }
    })
  }, [dotCounts.middle])

  const extendedDots = useMemo(() => {
    return [...Array(dotCounts.extended)].map((_, i) => {
      const angle = (i * 360) / dotCounts.extended + 11.25
      const radian = (angle * Math.PI) / 180
      const radius = SUN_ANIMATION.radii.extended
      const x = Math.cos(radian) * radius
      const y = Math.sin(radian) * radius
      return { x, y, i }
    })
  }, [dotCounts.extended])

  const particles = useMemo(() => {
    return [...Array(particleCount)].map((_, i) => {
      const angle = (i * 137.5) % 360
      const radius = 30 + (i % 4) * 15
      const radian = (angle * Math.PI) / 180
      const baseX = 50 + Math.cos(radian) * radius
      const baseY = 50 + Math.sin(radian) * radius
      return { baseX, baseY, i }
    })
  }, [particleCount])

  if (!isInView) {
    // Return a static placeholder when not in view
    return (
      <div
        ref={containerRef}
        className="absolute inset-0 flex items-center justify-center overflow-hidden"
      >
        <div className="w-[150vh] h-[150vh] rounded-full bg-gradient-to-br from-yellow-200/20 via-orange-300/15 to-red-400/10 dark:from-yellow-200/10 dark:via-orange-300/8 dark:to-red-400/5 blur-3xl" />
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 flex items-center justify-center overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative pointer-events-none">
        <motion.div
          className="w-[150vh] h-[150vh] rounded-full bg-gradient-to-br from-yellow-200/40 via-orange-300/35 to-red-400/25 dark:from-yellow-200/25 dark:via-orange-300/20 dark:to-red-400/15 blur-3xl"
          animate={{
            scale: [...SUN_ANIMATION.coreScales.massive.scale],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: SUN_ANIMATION.coreScales.massive.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120vh] h-[120vh] rounded-full bg-gradient-to-br from-yellow-300/35 via-orange-400/25 to-red-500/20 dark:from-yellow-300/20 dark:via-orange-400/15 dark:to-red-500/10 blur-2xl"
          animate={{
            scale: [...SUN_ANIMATION.coreScales.secondary.scale],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: SUN_ANIMATION.coreScales.secondary.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80vh] h-[80vh] rounded-full bg-gradient-to-br from-yellow-400/25 via-orange-500/20 to-red-600/15 dark:from-yellow-400/15 dark:via-orange-500/12 dark:to-red-600/8 blur-xl"
          animate={{
            scale: [...SUN_ANIMATION.coreScales.inner.scale],
            opacity: [0.7, 0.9, 0.7],
          }}
          transition={{
            duration: SUN_ANIMATION.coreScales.inner.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {outerDots.map(({ x, y, i }) => (
            <motion.div
              key={`outer-dot-${i}`}
              className="absolute w-2 h-2 bg-yellow-300/80 dark:bg-yellow-300/60 rounded-full"
              style={{
                left: `${x}vh`,
                top: `${y}vh`,
                transform: 'translate(-50%, -50%)',
              }}
              animate={{
                scale: isHovered ? 1.8 : [0.8, 1.2, 0.8],
                opacity: isHovered ? 0.9 : [0.4, 0.7, 0.4],
              }}
              transition={{
                scale: {
                  duration: isHovered ? 0.6 : 3 + (i % 5) * 0.4,
                  repeat: isHovered ? 0 : Infinity,
                  ease: isHovered ? "easeOut" : "easeInOut",
                  delay: isHovered ? i * 0.02 : (i * 0.1) % 2,
                },
                opacity: {
                  duration: isHovered ? 0.6 : 3 + (i % 5) * 0.4,
                  repeat: isHovered ? 0 : Infinity,
                  ease: isHovered ? "easeOut" : "easeInOut",
                  delay: isHovered ? i * 0.02 : (i * 0.1) % 2,
                }
              }}
            />
          ))}

          {middleDots.map(({ x, y, i }) => (
            <motion.div
              key={`middle-dot-${i}`}
              className="absolute w-1.5 h-1.5 bg-orange-300/70 dark:bg-orange-300/50 rounded-full"
              style={{
                left: `${x}vh`,
                top: `${y}vh`,
                transform: 'translate(-50%, -50%)',
              }}
              animate={{
                scale: isHovered ? 1.5 : [0.9, 1.1, 0.9],
                opacity: isHovered ? 0.8 : [0.3, 0.6, 0.3],
              }}
              transition={{
                scale: {
                  duration: isHovered ? 0.5 : 3.5 + (i % 4) * 0.375,
                  repeat: isHovered ? 0 : Infinity,
                  ease: isHovered ? "easeOut" : "easeInOut",
                  delay: isHovered ? i * 0.025 : (i * 0.15) % 1.5,
                },
                opacity: {
                  duration: isHovered ? 0.5 : 3.5 + (i % 4) * 0.375,
                  repeat: isHovered ? 0 : Infinity,
                  ease: isHovered ? "easeOut" : "easeInOut",
                  delay: isHovered ? i * 0.025 : (i * 0.15) % 1.5,
                }
              }}
            />
          ))}

          {extendedDots.map(({ x, y, i }) => (
            <motion.div
              key={`extended-dot-${i}`}
              className="absolute w-1 h-1 bg-yellow-400/60 dark:bg-yellow-400/40 rounded-full"
              style={{
                left: `${x}vh`,
                top: `${y}vh`,
                transform: 'translate(-50%, -50%)',
              }}
              animate={{
                scale: isHovered ? 1.3 : [1, 1.05, 1],
                opacity: isHovered ? 0.7 : [0.2, 0.5, 0.2],
              }}
              transition={{
                scale: {
                  duration: isHovered ? 0.4 : 4 + (i % 3) * 0.33,
                  repeat: isHovered ? 0 : Infinity,
                  ease: isHovered ? "easeOut" : "easeInOut",
                  delay: isHovered ? i * 0.03 : (i * 0.2) % 1,
                },
                opacity: {
                  duration: isHovered ? 0.4 : 4 + (i % 3) * 0.33,
                  repeat: isHovered ? 0 : Infinity,
                  ease: isHovered ? "easeOut" : "easeInOut",
                  delay: isHovered ? i * 0.03 : (i * 0.2) % 1,
                }
              }}
            />
          ))}
        </div>

        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-radial from-yellow-100/60 via-orange-200/40 to-transparent dark:from-yellow-100/40 dark:via-orange-200/25 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="absolute inset-0">
          {particles.map(({ baseX, baseY, i }) => {
            let repulsionX = 0
            let repulsionY = 0

            if (isHovered) {
              const dx = baseX - mousePosition.x
              const dy = baseY - mousePosition.y
              const distance = Math.sqrt(dx * dx + dy * dy)
              const repulsionStrength = Math.max(0, SUN_ANIMATION.repulsionDistance - distance)

              if (distance > 0 && repulsionStrength > 0) {
                repulsionX = (dx / distance) * repulsionStrength * SUN_ANIMATION.repulsionStrength
                repulsionY = (dy / distance) * repulsionStrength * SUN_ANIMATION.repulsionStrength
              }
            }

            const finalX = Math.max(5, Math.min(95, baseX + repulsionX))
            const finalY = Math.max(5, Math.min(95, baseY + repulsionY))

            return (
              <motion.div
                key={`particle-${i}`}
                className="absolute w-1.5 h-1.5 bg-yellow-300/50 dark:bg-yellow-300/30 rounded-full"
                animate={{
                  top: `${finalY}%`,
                  left: `${finalX}%`,
                  y: isHovered ? 0 : [-10, -30, -10],
                  x: isHovered ? 0 : [0, (i % 3 - 1) * 15, 0],
                  opacity: isHovered ? 0.8 : [0, 0.6, 0],
                  scale: isHovered ? 1.2 : [0, 1, 0],
                }}
                transition={{
                  top: { duration: 0.3, ease: "easeOut" },
                  left: { duration: 0.3, ease: "easeOut" },
                  y: {
                    duration: isHovered ? 0.3 : 3 + (i % 3),
                    repeat: isHovered ? 0 : Infinity,
                    ease: "easeInOut",
                    delay: isHovered ? 0 : (i * 0.1) % 2,
                  },
                  x: {
                    duration: isHovered ? 0.3 : 3 + (i % 3),
                    repeat: isHovered ? 0 : Infinity,
                    ease: "easeInOut",
                    delay: isHovered ? 0 : (i * 0.1) % 2,
                  },
                  opacity: {
                    duration: isHovered ? 0.3 : 3 + (i % 3),
                    repeat: isHovered ? 0 : Infinity,
                    ease: "easeInOut",
                  },
                  scale: {
                    duration: isHovered ? 0.3 : 3 + (i % 3),
                    repeat: isHovered ? 0 : Infinity,
                    ease: "easeInOut",
                  }
                }}
                style={{
                  transform: 'translate(-50%, -50%)',
                }}
              />
            )
          })}
        </div>
      </div>

      <motion.div
        className="absolute inset-0 bg-gradient-radial from-transparent via-orange-50/10 to-transparent"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute inset-0 bg-gradient-radial from-yellow-100/5 via-orange-100/3 to-transparent"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </div>
  )
}