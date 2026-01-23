"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { experienceData } from '@/lib/data';
import SectionHeader from './SectionHeader';

const Experience: React.FC = () => {
    return (
        <section id="experience" className="py-24 bg-gradient-to-b from-slate-50 to-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    title="Experience"
                    subtitle="8+ years of driving measurable results for brands"
                    className="text-center mb-16"
                    titleClassName="text-4xl md:text-5xl font-light text-gray-900 mb-4 font-display"
                    subtitleClassName="text-xl text-gray-600"
                />

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-300 via-teal-300 to-orange-300" />

                    {experienceData.map((exp, index) => (
                        <motion.div
                            key={index}
                            className={`relative mb-16 ${index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto md:text-left'
                                }`}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            {/* Timeline Dot */}
                            <motion.div
                                className="absolute left-0 md:left-1/2 top-0 w-12 h-12 -ml-6 bg-gradient-to-br from-orange-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg z-10"
                                whileHover={{ scale: 1.2, rotate: 360 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Briefcase className="w-6 h-6 text-white" />
                            </motion.div>

                            <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'
                                }`}>
                                <motion.div
                                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-500 border border-gray-100"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="text-sm font-semibold text-orange-600 mb-2">
                                        {exp.year}
                                    </div>
                                    <h3 className="text-2xl font-light text-gray-900 mb-1 font-display">
                                        {exp.role}
                                    </h3>
                                    <div className="text-lg text-teal-600 font-semibold mb-3">
                                        {exp.company}
                                    </div>
                                    <p className="text-gray-600 mb-4 leading-relaxed">
                                        {exp.description}
                                    </p>
                                    <ul className="space-y-2">
                                        {exp.achievements.map((achievement, idx) => (
                                            <motion.li
                                                key={idx}
                                                className="flex items-start gap-2 text-gray-700"
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                                viewport={{ once: true }}
                                            >
                                                <span className="text-orange-500 mt-1">•</span>
                                                <span className="text-sm">{achievement}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
