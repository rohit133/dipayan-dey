"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { whoIWorkWithData } from '@/lib/data';
import NoiseBackground from './NoiseBackground';
import SectionHeader from './SectionHeader';

const WhoIWorkWith: React.FC = () => {
    return (
        <section className="py-32 bg-gray-900 text-white relative overflow-hidden">
            <NoiseBackground opacity={0.03} />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <SectionHeader
                    title={whoIWorkWithData.title}
                    subtitle={whoIWorkWithData.subtitle}
                    className="mb-16"
                    titleClassName="text-5xl md:text-6xl font-bold mb-4"
                    subtitleClassName="text-xl text-gray-400"
                />

                {/* Audiences List */}
                <div className="space-y-6">
                    {whoIWorkWithData.audiences.map((audience, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex gap-6 items-start group"
                            whileHover={{ x: 10 }}
                        >
                            <CheckCircle2 className="w-7 h-7 text-orange-500 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                            <div>
                                <h3 className="text-2xl font-bold mb-2 group-hover:text-orange-500 transition-colors">
                                    {audience.type}
                                </h3>
                                <p className="text-lg text-gray-400">
                                    {audience.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhoIWorkWith;
