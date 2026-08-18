"use client";

import React from "react";
import { motion } from "framer-motion";
import { Brain, Landmark, Network, Smartphone, Sparkles, Target } from "lucide-react";

import { servicesData } from "@/lib/data";
import { BodyText, CardTitle, SectionHeading } from "@/components/ui/typography";

const Services: React.FC = () => {
    const iconMap = [Target, Network, Sparkles, Smartphone, Landmark, Brain];

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

                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {servicesData.services.map((service, index) => {
                        const Icon = iconMap[index] ?? Target;

                        return (
                            <motion.article
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.45, delay: index * 0.05 }}
                                viewport={{ once: true, margin: "-40px" }}
                                className="surface-card group flex flex-col p-5 sm:p-6"
                            >
                                <div className="flex items-start justify-between gap-3">
                                    <div className="icon-badge transition-transform duration-300 group-hover:scale-105">
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <span className="font-mono text-xs text-white/30">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                </div>
                                <p className="mt-4 text-xs font-medium uppercase tracking-wider text-white/40">
                                    {service.subtitle}
                                </p>
                                <CardTitle className="mt-2 text-lg sm:text-xl">{service.title}</CardTitle>
                                <BodyText className="mt-3 flex-1 text-white/60">{service.description}</BodyText>
                                {service.platforms && service.platforms.length > 0 && (
                                    <div className="mt-4 flex flex-wrap gap-1.5">
                                        {service.platforms.map((platform) => (
                                            <span
                                                key={platform}
                                                className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[11px] text-white/55"
                                            >
                                                {platform}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
