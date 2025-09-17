import type { Metadata } from "next";
import { Noto_Sans_Tamil, Noto_Sans_Devanagari, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import EmailJSScript from "@/components/emailjs-script";
import { PERSONAL_INFO } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const notoSansTamil = Noto_Sans_Tamil({
  subsets: ["tamil", "latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-noto-tamil",
});

const notoSansDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari", "latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-noto-devanagari",
});

export const metadata: Metadata = {
  title: `${PERSONAL_INFO.name} - ${PERSONAL_INFO.title}`,
  description: PERSONAL_INFO.description,
  metadataBase: new URL('https://suryaacharan.com'),
  icons: {
    icon: "/sun-favicon.svg",
    shortcut: "/sun-favicon.svg",
    apple: "/sun-favicon.svg",
  },
  openGraph: {
    title: `${PERSONAL_INFO.name} - ${PERSONAL_INFO.title}`,
    description: PERSONAL_INFO.description,
    type: 'website',
    url: 'https://suryaacharan.com',
    siteName: PERSONAL_INFO.name,
    locale: 'en_US',
    // TODO: Add og-image.png to public/ folder with dimensions 1200x630
    // images: [
    //   {
    //     url: '/og-image.png',
    //     width: 1200,
    //     height: 630,
    //     alt: `${PERSONAL_INFO.name} - Portfolio`,
    //   },
    // ],
  },
  twitter: {
    card: 'summary',
    title: `${PERSONAL_INFO.name} - ${PERSONAL_INFO.title}`,
    description: PERSONAL_INFO.description,
    // TODO: Add og-image.png to public/ folder
    // images: ['/og-image.png'],
    creator: '@suryaacharan',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://suryaacharan.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${notoSansTamil.variable} ${notoSansDevanagari.variable} antialiased font-sans`}>
        <EmailJSScript />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
