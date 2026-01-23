"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { processData } from '@/lib/data';
import NoiseBackground from './NoiseBackground';
import SectionHeader from './SectionHeader';

const Process: React.FC = () => {
    return (
        <section id="process" className="py-32 bg-gray-50 relative overflow-hidden">
            <NoiseBackground />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <SectionHeader
                    title={processData.title}
                    subtitle={processData.subtitle}
                    className="mb-20"
                />

                {/* Process Steps */}
                <div className="space-y-16">
                    {processData.steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="flex gap-8 items-start">
                                {/* Number */}
                                <motion.div
                                    className="text-7xl md:text-8xl font-bold text-gray-200 leading-none"
                                    whileHover={{ scale: 1.1, color: '#ea580c' }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {step.number}
                                </motion.div>

                                {/* Content */}
                                <div className="flex-1 pt-2">
                                    <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-3 font-display">
                                        {step.title}
                                    </h3>
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>

                            {/* Connecting line */}
                            {index < processData.steps.length - 1 && (
                                <div className="absolute left-12 top-24 w-0.5 h-16 bg-gray-300" />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
