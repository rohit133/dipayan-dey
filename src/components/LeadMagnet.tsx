"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Download, CheckCircle2 } from 'lucide-react';
import { leadMagnetData } from '@/lib/data';
import { Button } from '@/components/ui/button';
import NoiseBackground from './NoiseBackground';

const LeadMagnet: React.FC = () => {
    const handleDownload = () => {
        // Mock download action
        alert('Blueprint download will be triggered here!');
    };

    return (
        <section className="py-32 bg-orange-600 text-white relative overflow-hidden">
            <NoiseBackground opacity={0.03} />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-5xl md:text-6xl font-bold mb-6">
                        {leadMagnetData.title}
                    </h2>

                    <p className="text-2xl mb-4 text-orange-100">
                        {leadMagnetData.subtitle}
                    </p>

                    <p className="text-lg mb-10 text-orange-100 max-w-2xl mx-auto">
                        {leadMagnetData.description}
                    </p>

                    <div className="mb-10 space-y-3">
                        {leadMagnetData.benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                className="flex items-center justify-center gap-3 text-lg"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
                                <span>{benefit}</span>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button
                            onClick={handleDownload}
                            size="lg"
                            className="bg-white text-orange-600 hover:bg-gray-100 px-10 py-7 text-xl font-bold rounded-xl shadow-2xl"
                        >
                            <Download className="mr-3 w-6 h-6" />
                            {leadMagnetData.cta}
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default LeadMagnet;
