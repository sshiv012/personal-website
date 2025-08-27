"use client"

import { motion } from "framer-motion"
import { ANIMATION_CONSTANTS } from "@/lib/constants"
import type { FadeInProps } from "@/types"

export default function FadeIn({ 
  children, 
  delay = ANIMATION_CONSTANTS.fadeInDelay, 
  direction = "up", 
  className 
}: FadeInProps) {
  const directionOffset = {
    up: { y: 60 },
    down: { y: -60 },
    left: { x: 60 },
    right: { x: -60 }
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...directionOffset[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: ANIMATION_CONSTANTS.scrollMargin }}
      transition={{ 
        duration: ANIMATION_CONSTANTS.fadeInDuration, 
        delay,
        ease: ANIMATION_CONSTANTS.easing 
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}