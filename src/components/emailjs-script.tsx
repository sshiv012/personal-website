"use client"

import Script from "next/script"
import { EMAILJS_CONFIG } from "@/lib/constants"

export default function EmailJSScript() {
  return (
    <Script
      src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
      strategy="afterInteractive"
      integrity="sha384-dH8hL6Ktt7IQB7vP9u5LbE9Ys+OUnDv3LF7UNW1yM1V7PhNJnCxyB5L7VBdG6Mvu"
      crossOrigin="anonymous"
      onLoad={() => {
        if (typeof window !== 'undefined' && window.emailjs) {
          const publicKey = EMAILJS_CONFIG.publicKey;
          if (publicKey && publicKey !== 'xxxxxxxxxxxxx') {
            window.emailjs.init(publicKey);
          }
        }
      }}
    />
  )
}