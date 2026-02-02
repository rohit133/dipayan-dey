"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { footerData } from '@/lib/data';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
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
                    {footerData.legal.privacy.title}
                </motion.h1>

                <div className="prose prose-lg prose-gray">
                    <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                        {footerData.legal.privacy.content}
                    </p>

                    <h2 className="text-2xl font-bold mb-4">How We Use Your Data</h2>
                    <p className="mb-6">
                        We collect information to provide better services to all our users. This includes things like:
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Information you provide us (e.g., name, email during signup/contact).</li>
                        <li>Device information and usage data when you visit our site.</li>
                        <li>Interaction data with our marketing services and AI-driven tools.</li>
                    </ul>

                    <h2 className="text-2xl font-bold mb-4">Data Protection</h2>
                    <p className="mb-6">
                        We implement state-of-the-art security measures to protect your data from unauthorized access, alteration, disclosure, or destruction.
                    </p>

                    <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
                    <p className="mb-6">
                        You have the right to access, update, or delete your personal information at any time. Please contact us at {footerData.contact.email} for any privacy-related requests.
                    </p>
                </div>
            </div>
        </main>
    );
}
