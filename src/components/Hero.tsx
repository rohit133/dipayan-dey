"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

import { contactData, heroData } from "@/lib/data";
import { CalModalButton } from "@/components/ui/CalModalButton";
import { HeroTitle, Lead } from "@/components/ui/typography";

// const trustBar = ["Vakilsearch", "Datawrkz", "Infant Builders", "Black Coffee Media"];

const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
};

const Hero: React.FC = () => {
    return (
        <section
            id="home"
            className="relative overflow-hidden px-4 pb-14 pt-28 sm:px-6 sm:pb-16 sm:pt-32 md:pt-36 lg:px-8"
        >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(56,189,248,0.14),transparent)]" />

            <div className="relative mx-auto max-w-7xl">
                <motion.div
                    {...fadeUp}
                    transition={{ duration: 0.5 }}
                    className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-500/25 bg-sky-500/10 px-3.5 py-1.5 text-sm font-medium text-sky-100"
                >
                    <Sparkles className="h-3.5 w-3.5 text-sky-300" />
                    <span>{heroData.badge}</span>
                </motion.div>

                <motion.div {...fadeUp} transition={{ duration: 0.55, delay: 0.06 }}>
                    <HeroTitle className="max-w-3xl text-balance">{heroData.headline}</HeroTitle>
                </motion.div>

                <motion.div
                    {...fadeUp}
                    transition={{ duration: 0.55, delay: 0.12 }}
                    className="mt-5 max-w-xl"
                >
                    <Lead className="text-white/62">{heroData.subheadline}</Lead>
                </motion.div>

                <motion.div
                    {...fadeUp}
                    transition={{ duration: 0.55, delay: 0.18 }}
                    className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
                >
                    <CalModalButton
                        calLink={contactData.calCom}
                        className="btn-primary h-12 gap-2 px-7 text-sm sm:h-[3.25rem] sm:text-base"
                    >
                        {heroData.cta}
                        <ArrowRight className="h-4 w-4" />
                    </CalModalButton>
                    {/* <Link href="#projects" className="btn-secondary h-12 px-7 text-sm sm:h-[3.25rem] sm:text-base">
                        {heroData.ctaSecondary}
                    </Link> */}
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
