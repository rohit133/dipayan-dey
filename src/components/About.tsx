"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { aboutData } from '@/lib/data';
import { ScrollRevealText } from '@/components/ui/ScrollRevealText';
import NoiseBackground from './NoiseBackground';

const About: React.FC = () => {
    return (
        <section id="about" className="py-32 bg-gray-50 relative overflow-hidden">
            <NoiseBackground />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-20 items-center">
                    {/* Content Column - Now First */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <motion.h2
                            className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight font-display font-medium"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            {aboutData.title}
                        </motion.h2>

                        <div className="mb-10">
                            <ScrollRevealText
                                text={aboutData.description}
                                className="text-xl md:text-2xl text-gray-900 leading-relaxed font-display font-light"
                            />
                        </div>

                        <div className="space-y-4">
                            {aboutData.expertise.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-start gap-4 group"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ x: 5 }}
                                >
                                    <div className="flex-shrink-0 mt-1">
                                        <CheckCircle2 className="w-6 h-6 text-orange-600 group-hover:scale-110 transition-transform" />
                                    </div>
                                    <span className="text-lg text-gray-800 font-medium group-hover:text-gray-900 transition-colors">
                                        {item}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Image Column - Now Second */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative aspect-[3/4]">
                            {/* Decorative border */}
                            <motion.div
                                className="absolute -inset-4 border-4 border-gray-900"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                viewport={{ once: true }}
                            />
                            <img
                                src={aboutData.image}
                                alt="Performance Marketer"
                                className="relative w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
