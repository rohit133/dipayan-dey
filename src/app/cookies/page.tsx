"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { footerData } from '@/lib/data';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function CookiesPolicy() {
    return (
        <main className="min-h-screen bg-white text-gray-950 py-32 px-4">
            <div className="max-w-3xl mx-auto">
                <Link href="/" className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-gray-950 transition-colors mb-12 group">
                    <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </Link>

                <motion.h1
                    className="text-5xl md:text-6xl font-black uppercase tracking-tight mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    {footerData.legal.cookies.title}
                </motion.h1>

                <div className="prose prose-lg prose-gray">
                    <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                        {footerData.legal.cookies.content}
                    </p>

                    <h2 className="text-2xl font-bold mb-4">What Are Cookies?</h2>
                    <p className="mb-6">
                        Cookies are small text files that are stored on your device when you visit a website. They help the website remember your preferences and improve your browsing experience.
                    </p>

                    <h2 className="text-2xl font-bold mb-4">Types of Cookies We Use</h2>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li><strong>Essential Cookies:</strong> Required for the website to function properly.</li>
                        <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our site.</li>
                        <li><strong>Marketing Cookies:</strong> Used to track visitors across websites to display relevant ads.</li>
                    </ul>

                    <h2 className="text-2xl font-bold mb-4">Managing Your Cookies</h2>
                    <p className="mb-6">
                        You can manage or disable cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of our website.
                    </p>
                </div>
            </div>
        </main>
    );
}
