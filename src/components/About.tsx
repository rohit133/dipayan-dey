"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import { aboutData } from "@/lib/data";
import { BodyText, CardTitle, SectionHeading } from "@/components/ui/typography";

const About: React.FC = () => {
    return (
        <section id="about" className="section-shell">
            <div className="section-inner grid gap-8 lg:grid-cols-2 lg:items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5 }}
                >
                    <SectionHeading
                        eyebrow={aboutData.badge}
                        title={aboutData.title}
                        description={aboutData.description}
                    />

                    <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                        {aboutData.expertise.map((item) => (
                            <li
                                key={item}
                                className="flex items-center gap-2.5 rounded-xl border border-white/[0.06] bg-white/[0.03] px-3.5 py-2.5"
                            >
                                <CheckCircle2 className="h-4 w-4 shrink-0 text-orange-400/90" />
                                <span className="text-sm text-white/75">{item}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: 0.08 }}
                    className="surface-featured flex items-center p-6 lg:p-7"
                >
                    <div className="flex w-full items-center gap-5">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-black/30 font-display text-lg font-semibold text-white">
                            AD
                        </div>
                        <div>
                            <CardTitle>{aboutData.imageName}</CardTitle>
                            <BodyText className="mt-0.5 text-white/55">{aboutData.imageRole}</BodyText>
                            <p className="mt-2.5 text-sm text-white/45">Ex-Flipkart · 5+ years in performance</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
