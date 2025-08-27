import type { PersonalInfo, EmailJSConfig, AnimationConstants, SunAnimationConfig, UIConstants } from "@/types";

// Personal Information Constants
export const PERSONAL_INFO: PersonalInfo = {
  name: "Suryaa Charan",
  title: "Senior Applications Programmer & AI Engineer",
  description: "UC Riverside graduate specializing in AI systems, geospatial analytics, and distributed computing. Experience with Apache AsterixDB, Temenos, and cutting-edge research.",
  email: "sshiv012@ucr.edu",
  github: "https://github.com/suryaacharan",
  linkedin: "https://linkedin.com/in/suryaacharan",
} as const;

// EmailJS Configuration
export const EMAILJS_CONFIG: EmailJSConfig = {
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'xxxxxxxxxxxxx',
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_suryaacharan',
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_contactus',
} as const;

// Animation Constants
export const ANIMATION_CONSTANTS: AnimationConstants = {
  fadeInDuration: 0.8,
  fadeInDelay: 0,
  easing: [0.21, 0.47, 0.32, 0.98] as const,
  scrollMargin: "-100px",
} as const;

// Sun Animation Constants
export const SUN_ANIMATION: SunAnimationConfig = {
  coreScales: {
    massive: { duration: 6, scale: [1, 1.08, 1] },
    secondary: { duration: 4.5, scale: [1, 1.12, 1] },
    inner: { duration: 3.5, scale: [1, 1.15, 1] },
  },
  dotCounts: {
    outer: 32,
    middle: 24,
    extended: 16,
  },
  radii: {
    outer: 80,
    middle: 95,
    extended: 110,
  },
  particleCount: 40,
  repulsionDistance: 30,
  repulsionStrength: 0.8,
} as const;

// UI Constants
export const UI_CONSTANTS: UIConstants = {
  scrollThreshold: 50,
  maxWidth: "6xl",
  padding: {
    section: "24",
    container: "6",
  },
  breakpoints: {
    md: "768px",
    lg: "1024px",
  },
} as const;