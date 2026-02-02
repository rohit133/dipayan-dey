import type { Metadata } from "next";
import { Onest, Fraunces, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";

import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
  weight: ["400", "700"],
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
  title: "Dipayan Dey Portfolio",
  description: "Dipayan Dey Portfolio",
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
