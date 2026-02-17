"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { processData } from '@/lib/data';
import SectionHeader from '@/components/SectionHeader';

const Process: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    // Track scroll for the beam
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 50%", "end 50%"] // Starts/Ends when section borders hit center screen
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 200, // Stiffer for more direct control "collision" feel
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section
            ref={containerRef}
            id="process"
            className="relative py-32 md:py-48 overflow-hidden"
        >
            {/* Background Handled by GlobalBackground */}

            {/* 1. Header Section */}
            <div className="container mx-auto px-6 mb-20 md:mb-32 flex flex-col items-center">
                {/* Restored Eyebrow */}
                <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="h-[2px] w-12 bg-orange-500 rounded-full" />
                    <h3 className="text-sm font-bold uppercase tracking-[0.4em] text-orange-500">The Evolution</h3>
                    <div className="h-[2px] w-12 bg-orange-500 rounded-full" />
                </div>

                <SectionHeader
                    title="Scaling System"
                    subtitle={processData.subtitle}
                    className="text-center flex flex-col items-center"
                />
            </div>

            {/* 2. Timeline Container */}
            <div className="relative max-w-7xl mx-auto px-6">

                {/* Desktop Center Beam */}
                <div className="absolute left-1/2 top-0 bottom-0 w-[1px] hidden md:block -translate-x-1/2">
                    {/* Track */}
                    <div className="absolute inset-0 bg-white/5" />

                    {/* Filling Beam */}
                    <motion.div
                        style={{ scaleY, originY: 0 }}
                        className="absolute top-0 left-0 w-full h-full bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.4)]"
                    />

                    {/* Traveller Dot - The Lead */}
                    <motion.div
                        style={{ top: useTransform(scaleY, (v: number) => `${v * 100}%`) }}
                        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_orange] z-30"
                    />
                </div>

                {/* Mobile Left Beam */}
                <div className="absolute left-14 top-0 bottom-0 w-[1px] md:hidden">
                    <div className="absolute inset-0 bg-white/5" />
                    <motion.div
                        style={{ scaleY, originY: 0 }}
                        className="absolute top-0 left-0 w-full h-full bg-orange-500"
                    />
                    {/* Mobile Traveller Dot */}
                    <motion.div
                        style={{ top: useTransform(scaleY, (v: number) => `${v * 100}%`) }}
                        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_orange] z-30"
                    />
                </div>

                {/* Steps */}
                <div className="relative">
                    {processData.steps.map((step, index) => (
                        <ProcessItem key={index} step={step} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ProcessItem: React.FC<{ step: any; index: number }> = ({ step, index }) => {
    const isEven = index % 2 === 0;

    return (
        <div className="min-h-[40vh] md:min-h-[80vh] flex items-center justify-center relative py-12">
            <motion.div
                initial="initial"
                whileInView="active"
                viewport={{ margin: "-45% 0px -45% 0px" }} // Tight sync with dot collision
                variants={{
                    initial: { opacity: 1, y: 0 },
                    active: { opacity: 1, y: 0 }
                }}
                className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center"
            >
                {/* Desktop: Alternating Left Side */}
                <div className={`hidden md:flex ${isEven ? 'justify-end' : 'order-1'} `}>
                    {isEven ? (
                        <div className="text-right max-w-lg pr-12">
                            <motion.h3
                                variants={{
                                    initial: { color: "#ffffff" },
                                    active: { color: "#f97316" }
                                }}
                                transition={{ duration: 0.3 }}
                                className="text-4xl lg:text-5xl font-display font-medium mb-6"
                            >
                                {step.title}
                            </motion.h3>
                            <p className="text-white/60 text-lg lg:text-xl font-light leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ) : (
                        <div className="flex justify-end pr-12">
                            <motion.div
                                variants={{
                                    initial: { opacity: 0.05, scale: 1 },
                                    active: { opacity: 0.1, scale: 1.1 }
                                }}
                                className="text-[10rem] font-display font-black text-white leading-none select-none"
                            >
                                {step.number}
                            </motion.div>
                        </div>
                    )}
                </div>

                {/* Center Point - Checkpoint Dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex justify-center items-center w-8 h-8 z-10">
                    <motion.div
                        variants={{
                            initial: {
                                backgroundColor: "rgba(249, 115, 22, 0)",
                                borderColor: "rgba(255, 255, 255, 0.2)",
                                scale: 1,
                                boxShadow: "none"
                            },
                            active: {
                                backgroundColor: "rgba(249, 115, 22, 1)",
                                borderColor: "#f97316",
                                scale: 1.2,
                                boxShadow: "0 0 20px rgba(249,115,22,0.8)"
                            }
                        }}
                        transition={{ duration: 0.2 }}
                        className="w-4 h-4 md:w-5 md:h-5 border-2 rounded-full z-20"
                    />
                </div>

                {/* Desktop: Alternating Right Side */}
                <div className={`hidden md:flex ${isEven ? '' : 'justify-start'}`}>
                    {!isEven ? (
                        <div className="text-left max-w-lg pl-12">
                            <motion.h3
                                variants={{
                                    initial: { color: "#ffffff" },
                                    active: { color: "#f97316" }
                                }}
                                transition={{ duration: 0.3 }}
                                className="text-4xl lg:text-5xl font-display font-medium mb-6"
                            >
                                {step.title}
                            </motion.h3>
                            <p className="text-white/60 text-lg lg:text-xl font-light leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ) : (
                        <div className="flex justify-start pl-12">
                            <motion.div
                                variants={{
                                    initial: { opacity: 0.05, scale: 1 },
                                    active: { opacity: 0.1, scale: 1.1 }
                                }}
                                className="text-[10rem] font-display font-black text-white leading-none select-none"
                            >
                                {step.number}
                            </motion.div>
                        </div>
                    )}
                </div>

                {/* Mobile Content */}
                <div className="md:hidden pl-16 pr-4">
                    <motion.div
                        variants={{
                            initial: { opacity: 0.05 },
                            active: { opacity: 0.1 }
                        }}
                        className="text-6xl font-display font-black text-white leading-none mb-2"
                    >
                        {step.number}
                    </motion.div>
                    <motion.h3
                        variants={{
                            initial: { color: "#ffffff" },
                            active: { color: "#f97316" }
                        }}
                        className="text-2xl font-display font-medium mb-2"
                    >
                        {step.title}
                    </motion.h3>
                    <p className="text-white/60 text-base font-light leading-relaxed">
                        {step.description}
                    </p>
                </div>

            </motion.div>
        </div>
    );
}

export default Process;
