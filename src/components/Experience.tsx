"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { experienceData } from '@/lib/data';
import SectionHeader from './SectionHeader';

const Experience: React.FC = () => {
    return (
        <section id="experience" className="py-32 text-white relative overflow-hidden section-padding">

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-24 text-center">
                    <h2 className="text-xs font-black uppercase tracking-[0.4em] text-orange-600 mb-8">
                        The Journey
                    </h2>
                    <h3 className="text-[12vw] md:text-[6vw] font-black text-white leading-[0.85] tracking-tighter uppercase font-display">
                        Professional
                        <br />
                        <span className="italic text-orange-600">History</span>
                    </h3>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[1.5rem] md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10" />

                    {experienceData.map((exp, index) => (
                        <motion.div
                            key={index}
                            className={`relative mb-24 ${index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto md:text-left'
                                }`}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            {/* Timeline Dot */}
                            <motion.div
                                className="absolute left-[1rem] md:left-1/2 top-0 w-4 h-4 -md:ml-2 -ml-2 bg-orange-600 rounded-full z-20 shadow-[0_0_20px_rgba(234,88,12,0.5)]"
                                whileHover={{ scale: 1.5 }}
                            />

                            <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-20' : 'md:pl-20'
                                }`}>
                                <motion.div
                                    className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-500 group"
                                >
                                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-600 mb-4 transition-opacity group-hover:opacity-100">
                                        {exp.year}
                                    </div>
                                    <h4 className="text-4xl font-black text-white uppercase tracking-tighter leading-none mb-2 font-display">
                                        {exp.role}
                                    </h4>
                                    <div className="text-lg text-gray-400 font-bold mb-8 uppercase tracking-widest">
                                        {exp.company}
                                    </div>
                                    <p className="text-gray-500 font-medium leading-relaxed mb-8 group-hover:text-gray-300 transition-colors">
                                        {exp.description}
                                    </p>
                                    <div className={`flex flex-wrap gap-4 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                                        {exp.achievements.map((achievement, idx) => (
                                            <motion.div
                                                key={idx}
                                                className="px-4 py-2 bg-white/5 border border-white/5 rounded-full text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-white hover:border-white/20 transition-all"
                                                initial={{ opacity: 0, y: 10 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5, delay: 0.1 * idx }}
                                                viewport={{ once: true }}
                                            >
                                                {achievement}
                                            </motion.div>
                                        ))}
                                    </div>
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
