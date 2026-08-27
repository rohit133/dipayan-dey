"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, Rocket, ShoppingBag } from "lucide-react";

import { whoIWorkWithData } from "@/lib/data";
import { BodyText, CardTitle, SectionHeading } from "@/components/ui/typography";

const icons = [ShoppingBag, Rocket, Building2];

const WhoIWorkWith: React.FC = () => {
    return (
        <section className="section-shell section-alt">
            <div className="section-inner">
                <SectionHeading
                    eyebrow="Clients"
                    title={whoIWorkWithData.title}
                    description={whoIWorkWithData.subtitle}
                />

                <div className="mt-8 grid gap-4 md:grid-cols-3">
                    {whoIWorkWithData.audiences.map((audience, index) => {
                        const Icon = icons[index] ?? Building2;
                        return (
                            <motion.div
                                key={audience.type}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                viewport={{ once: true, margin: "-40px" }}
                                className="surface-card p-5 md:p-6"
                            >
                                <div className="icon-badge mb-4 h-10 w-10">
                                    <Icon className="h-4 w-4" />
                                </div>
                                <CardTitle className="text-lg">{audience.type}</CardTitle>
                                <BodyText className="mt-2 text-white/58">{audience.description}</BodyText>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhoIWorkWith;
