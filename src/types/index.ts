// Animation types
export interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

// Contact form types
export interface ContactMethod {
  title: string;
  description: string;
  value: string;
  link: string;
}

export interface EmailJSConfig {
  publicKey: string;
  serviceId: string;
  templateId: string;
}

// Personal info types
export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  email: string;
  github: string;
  linkedin: string;
}

// Animation configuration types
export interface AnimationConstants {
  fadeInDuration: number;
  fadeInDelay: number;
  easing: readonly [number, number, number, number];
  scrollMargin: string;
}

export interface CoreScaleConfig {
  duration: number;
  scale: readonly [number, number, number];
}

export interface SunAnimationConfig {
  coreScales: {
    massive: CoreScaleConfig;
    secondary: CoreScaleConfig;
    inner: CoreScaleConfig;
  };
  dotCounts: {
    outer: number;
    middle: number;
    extended: number;
  };
  radii: {
    outer: number;
    middle: number;
    extended: number;
  };
  particleCount: number;
  repulsionDistance: number;
  repulsionStrength: number;
}

// UI constants types
export interface UIConstants {
  scrollThreshold: number;
  maxWidth: string;
  padding: {
    section: string;
    container: string;
  };
  breakpoints: {
    md: string;
    lg: string;
  };
}

// Navigation types
export interface NavigationSection {
  id: string;
  label: string;
}

// Global window types for EmailJS
declare global {
  interface Window {
    emailjs?: {
      init: (publicKey: string) => void;
      sendForm: (serviceId: string, templateId: string, form: HTMLFormElement) => Promise<{status: number; text: string}>;
    };
  }
}