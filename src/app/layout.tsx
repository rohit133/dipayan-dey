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
    default: "Adbibe | Founder-led AI Performance Marketing Agency in Bangalore",
    template: "%s | Adbibe",
  },
  description:
    "Adbibe is a founder-led AI performance marketing agency based in Bangalore, India, specializing in paid acquisition, programmatic advertising, CRO, marketing automation, and brand strategy for D2C and SaaS brands.",
  keywords: [
    "Adbibe",
    "performance marketing agency Bangalore",
    "AI marketing agency",
    "Google Ads Meta Ads",
    "programmatic advertising",
    "conversion rate optimization",
    "marketing automation",
    "Dipayan Dey",
  ],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  alternates: {
    canonical: "https://adbibe.com",
  },
  openGraph: {
    title: "Adbibe | Founder-led AI Performance Marketing Agency in Bangalore",
    description:
      "Founder-led paid acquisition, CRO, programmatic, and AI marketing for D2C and SaaS brands.",
    url: "https://adbibe.com",
    siteName: "Adbibe",
    type: "website",
    images: [{ url: "/logo.png", width: 64, height: 64, alt: "Adbibe" }],
  },
  twitter: {
    card: "summary",
    title: "Adbibe | AI Performance Marketing Agency",
    description:
      "Paid acquisition, CRO, analytics, and programmatic — founder-led from Bangalore.",
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
      <body className={`${onest.variable} ${fraunces.variable} ${geistMono.variable} ${eduNSWACTCursive.variable} antialiased selection:bg-sky-500/30`}>
        <GlobalBackground />
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <Toaster />
      </body>
    </html>
  );
}
