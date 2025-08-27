"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface StaggerItemProps {
  children: ReactNode
  className?: string
}

export default function StaggerItem({ children, className }: StaggerItemProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 60 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            ease: [0.21, 0.47, 0.32, 0.98]
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}