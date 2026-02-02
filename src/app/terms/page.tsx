"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { footerData } from '@/lib/data';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TermsConditions() {
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
                    {footerData.legal.terms.title}
                </motion.h1>

                <div className="prose prose-lg prose-gray">
                    <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                        {footerData.legal.terms.content}
                    </p>

                    <h2 className="text-2xl font-bold mb-4">Use of Website</h2>
                    <p className="mb-6">
                        The content on this website is for informational purposes only. While we strive for accuracy, we do not warrant the completeness or reliability of any information provided.
                    </p>

                    <h2 className="text-2xl font-bold mb-4">Services and Outcomes</h2>
                    <p className="mb-6">
                        Marketing performance depends on numerous variables. While we use advanced AI and data-driven strategies, we do not guarantee specific business outcomes or revenue targets. All formal service engagements are governed by separate master service agreements.
                    </p>

                    <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
                    <p className="mb-6">
                        All content, including text, designs, and AI-generated proprietary frameworks on this site, are the property of the agency unless otherwise stated.
                    </p>
                </div>
            </div>
        </main>
    );
}
