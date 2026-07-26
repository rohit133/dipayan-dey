"use client";

import React from "react";
import { motion } from "framer-motion";

import { processData } from "@/lib/data";
import { BodyText, CardTitle, SectionHeading } from "@/components/ui/typography";

const Process: React.FC = () => {
    return (
        <section id="process" className="section-shell">
            <div className="section-inner">
                <SectionHeading
                    eyebrow="Delivery model"
                    title={processData.title}
                    description={processData.subtitle}
                />

                <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                    {processData.steps.map((step, index) => (
                        <motion.article
                            key={step.number}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.45, delay: index * 0.06 }}
                            viewport={{ once: true, margin: "-40px" }}
                            className="surface-card relative p-5 md:p-6"
                        >
                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500/15 font-mono text-sm font-semibold text-orange-300">
                                {step.number}
                            </span>
                            <CardTitle className="mt-4 text-lg">{step.title}</CardTitle>
                            <BodyText className="mt-2 text-white/58">{step.description}</BodyText>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
