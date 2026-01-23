"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, TrendingUp } from 'lucide-react';
import { heroData } from '@/lib/data';
import { Button } from '@/components/ui/button';
import NoiseBackground from './NoiseBackground';

const Hero: React.FC = () => {
    const scrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
            <NoiseBackground />

            {/* Subtle animated gradient elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute -top-40 -right-40 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 30, 0],
                        y: [0, 20, 0],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute -bottom-40 -left-40 w-96 h-96 bg-gray-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
                    animate={{
                        scale: [1, 1.3, 1],
                        x: [0, -30, 0],
                        y: [0, -20, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
                <div className="w-full">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mb-8"
                    >
                        <motion.div
                            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-semibold"
                            whileHover={{ scale: 1.05 }}
                        >
                            <TrendingUp className="w-4 h-4" />
                            Ex-Flipkart • 5+ Years Experience
                        </motion.div>
                    </motion.div>

                    {/* Main headline */}
                    <motion.h1
                        className="text-6xl md:text-7xl lg:text-8xl font-light text-gray-900 mb-8 leading-[0.95] tracking-tight font-display"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {heroData.headline.split(' ').slice(0, 3).join(' ')}
                        <br />
                        <span className="text-orange-600 italic">
                            {heroData.headline.split(' ').slice(3, 6).join(' ')}
                        </span>
                        <br />
                        {heroData.headline.split(' ').slice(6).join(' ')}
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl leading-relaxed"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        {heroData.subheadline}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-wrap gap-4 mb-20"
                    >
                        <Button
                            onClick={scrollToContact}
                            size="lg"
                            className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-7 text-lg font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
                        >
                            <Download className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                            {heroData.cta}
                        </Button>
                        <Button
                            onClick={scrollToContact}
                            size="lg"
                            variant="outline"
                            className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-7 text-lg font-semibold rounded-xl transition-all duration-300 group"
                        >
                            {heroData.ctaSecondary}
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </motion.div>

                    {/* Stats Grid */}
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-gray-200"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        {heroData.stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                className="text-left"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                            >
                                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-gray-600 font-medium">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2">
                    <motion.div
                        className="w-1.5 h-1.5 bg-gray-600 rounded-full"
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
