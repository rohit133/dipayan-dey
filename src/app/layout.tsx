import type { Metadata } from "next";
import { Onest, Fraunces, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";

import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const eduNSWACTCursive = localFont({
  src: "./fonts/EduNSWACTCursive-VariableFont_wght.ttf",
  variable: "--font-edu-nsw-act-cursive",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adbibe.com"),
  title: {
    default: "Adbibe | AI-Powered Performance Marketing, CRO & Growth Consulting",
    template: "%s | Adbibe",
  },
  description:
    "Adbibe helps D2C, SaaS, and growth-stage brands improve paid acquisition, conversion rates, tracking, and programmatic performance with founder-led execution.",
  keywords: [
    "Adbibe",
    "performance marketing consultant",
    "AI marketing consultant",
    "conversion rate optimization",
    "programmatic advertising consultant",
    "Google Ads expert",
    "Meta Ads consultant",
    "growth consulting",
  ],
  alternates: {
    canonical: "https://adbibe.com",
  },
  openGraph: {
    title: "Adbibe | AI-Powered Performance Marketing, CRO & Growth Consulting",
    description:
      "Founder-led growth consulting for brands that need stronger acquisition systems, cleaner tracking, and better conversion performance.",
    url: "https://adbibe.com",
    siteName: "Adbibe",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adbibe | AI-Powered Performance Marketing, CRO & Growth Consulting",
    description:
      "Paid acquisition, CRO, analytics, and programmatic support for growth-stage brands.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

import SmoothScroll from "@/components/SmoothScroll";

import GlobalBackground from "@/components/GlobalBackground";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${onest.variable} ${fraunces.variable} ${geistMono.variable} ${eduNSWACTCursive.variable} antialiased selection:bg-orange-500/30`}>
        <GlobalBackground />
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <Toaster />
      </body>
    </html>
  );
}
