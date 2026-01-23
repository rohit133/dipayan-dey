"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Network, Map, Search } from 'lucide-react';
import { servicesData } from '@/lib/data';
import ServiceCard from './ServiceCard';
import NoiseBackground from './NoiseBackground';

const Services: React.FC = () => {
    const [expandedCard, setExpandedCard] = useState<number | null>(null);

    const serviceConfig = [
        {
            colSpan: 'col-span-12 md:col-span-7',
            theme: 'orange',
            icon: Target
        },
        {
            colSpan: 'col-span-12 md:col-span-5',
            theme: 'dark',
            icon: Network
        },
        {
            colSpan: 'col-span-12 md:col-span-6',
            theme: 'light',
            icon: Map
        },
        {
            colSpan: 'col-span-12 md:col-span-6',
            theme: 'gradient',
            icon: Search
        }
    ] as const;

    return (
        <section id="services" className="py-32 bg-white relative overflow-hidden">
            <NoiseBackground />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header - Custom header for this section, so not using generic SectionHeader */}
                <motion.div
                    className="mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <motion.h2
                        className="text-7xl md:text-8xl lg:text-9xl font-black text-gray-900 mb-6 leading-none font-display"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        WHAT
                        <br />
                        <span className="text-transparent" style={{
                            WebkitTextStroke: '2px #000',
                        }}>
                            I DO
                        </span>
                    </motion.h2>
                    <motion.p
                        className="text-xl text-gray-600 max-w-2xl"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        {servicesData.subtitle}
                    </motion.p>
                </motion.div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-12 gap-6 auto-rows-[200px]">
                    {servicesData.services.map((service, index) => {
                        const config = serviceConfig[index] || serviceConfig[0];

                        return (
                            <ServiceCard
                                key={service.id}
                                index={index}
                                title={service.title}
                                subtitle={service.subtitle}
                                description={service.description}
                                icon={config.icon}
                                colSpanClass={config.colSpan}
                                theme={config.theme}
                                onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                                isExpanded={expandedCard === index}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
