"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Network, Map, Search } from 'lucide-react';
import { servicesData } from '@/lib/data';
import ServiceCard from './ServiceCard';

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
        <section id="services" className="py-32 text-foreground relative overflow-hidden section-padding">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Massive Editorial Header */}
                <motion.div
                    className="mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-xs font-black uppercase tracking-[0.4em] text-orange-600 mb-6">
                        {servicesData.badge}
                    </h2>

                    <motion.h3
                        className="text-[10vw] md:text-[5.5vw] font-black text-foreground leading-[0.9] tracking-tighter uppercase font-display mb-12"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        {servicesData.titleFirst}
                        <br />
                        <span className="text-transparent" style={{
                            WebkitTextStroke: '1.5px currentColor',
                            opacity: 0.2
                        }}>
                            {servicesData.titleSecond}
                        </span>
                    </motion.h3>
                    <motion.p
                        className="text-md md:text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed font-medium"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        {servicesData.subtitle}
                    </motion.p>
                </motion.div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-12 gap-6 auto-rows-[250px] md:auto-rows-[300px]">
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
