"use client";

import React from "react";
import { motion } from "framer-motion";
import { Map, Network, Search, Target } from "lucide-react";

import { servicesData } from "@/lib/data";
import { BodyText, CardTitle, SectionHeading } from "@/components/ui/typography";

const Services: React.FC = () => {
    const iconMap = [Target, Network, Map, Search];

    return (
        <section id="services" className="section-shell section-alt">
            <div className="section-inner">
                <SectionHeading
                    eyebrow={servicesData.badge}
                    title={
                        <>
                            {servicesData.titleFirst}{" "}
                            <span className="text-accent">{servicesData.titleSecond}</span>
                        </>
                    }
                    description={servicesData.subtitle}
                />

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                    {servicesData.services.map((service, index) => {
                        const Icon = iconMap[index] ?? Target;

                        return (
                            <motion.article
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.45, delay: index * 0.06 }}
                                viewport={{ once: true, margin: "-40px" }}
                                className="surface-card group p-6 md:p-7"
                            >
                                <div className="icon-badge transition-transform duration-300 group-hover:scale-105">
                                    <Icon className="h-5 w-5" />
                                </div>
                                <p className="mt-5 text-xs font-medium uppercase tracking-wider text-white/40">
                                    {service.subtitle}
                                </p>
                                <CardTitle className="mt-2">{service.title}</CardTitle>
                                <BodyText className="mt-3 text-white/60">{service.description}</BodyText>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
