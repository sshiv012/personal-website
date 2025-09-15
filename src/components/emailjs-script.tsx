"use client"

import Script from "next/script"
import { EMAILJS_CONFIG } from "@/lib/constants"

export default function EmailJSScript() {
  return (
    <Script
      src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
      strategy="afterInteractive"
      onLoad={() => {
        if (typeof window !== 'undefined' && window.emailjs) {
          window.emailjs.init(EMAILJS_CONFIG.publicKey);
        }
      }}
    />
  )
}