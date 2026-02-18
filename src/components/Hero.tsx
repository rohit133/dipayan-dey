"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, TrendingUp } from 'lucide-react';
import { heroData, contactData } from '@/lib/data';
import { CalModalButton } from '@/components/ui/CalModalButton';

import { useRef } from 'react';
import { useScroll, useTransform, useSpring } from 'framer-motion';
import dynamic from 'next/dynamic';

const Hero3D = dynamic(() => import('./Hero3D'), { ssr: false });

const Hero: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 400]);
    const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
    const rotateX = useTransform(scrollYProgress, [0, 1], [0, 15]);

    const smoothY = useSpring(y, { stiffness: 100, damping: 30 });
    const smoothRotateX = useSpring(rotateX, { stiffness: 100, damping: 30 });

    return (
        <section ref={containerRef} className="relative min-h-[100dvh] md:min-h-[140vh] flex items-center md:items-start justify-center overflow-hidden pt-0 md:pt-48">
            {/* 3D Scene */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <Hero3D />
            </div>

            <motion.div
                style={{ y: smoothY, opacity, scale, rotateX: smoothRotateX }}
                className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 perspective-1000"
            >
                <div className="w-full text-center md:text-left flex flex-col items-center md:items-start">
                    {/* Status Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mb-10 md:mb-12"
                    >
                        <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-foreground/5 border border-foreground/10 rounded-full text-[10px] md:text-xs font-black uppercase tracking-[0.2em] backdrop-blur-md text-foreground/80">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                            </span>
                            {heroData.badge}
                        </div>
                    </motion.div>


                    {/* Massive Editorial Headline */}
                    <div className="text-[13vw] md:text-[6.5vw] font-black text-foreground mb-8 md:mb-12 leading-[65px] md:leading-[0.9] tracking-tighter uppercase font-display select-none">
                        <div className="overflow-hidden">
                            <motion.div
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            >
                                {heroData.headline.split(' ').slice(0, 3).join(' ')}
                            </motion.div>
                        </div>
                        <div className="overflow-hidden text-orange-600 italic">
                            <motion.div
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                            >
                                {heroData.headline.split(' ').slice(3).join(' ')}
                            </motion.div>
                        </div>
                    </div>

                    {/* Sophisticated Subheadline */}
                    <motion.p
                        className="hidden md:block text-md md:text-lg lg:text-xl text-muted-foreground mb-12 md:mb-16 max-w-2xl leading-relaxed font-medium text-justify"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        {heroData.subheadline}
                    </motion.p>

                    {/* Premium CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="hidden md:flex flex-col sm:flex-row items-center justify-center md:items-start gap-4 md:gap-6 w-full sm:w-auto"
                    >
                        <CalModalButton
                            className="w-full sm:w-auto bg-foreground text-background hover:bg-orange-600 hover:text-white px-10 py-6 md:px-12 md:py-8 text-sm font-black uppercase tracking-widest rounded-full shadow-2xl transition-all duration-500 group overflow-hidden relative"
                        >
                            <span className="relative z-10 flex items-center gap-3">
                                {heroData.cta}
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </span>
                        </CalModalButton>

                        <Link href="#projects" className="w-full sm:w-auto inline-flex items-center justify-center border border-foreground/10 hover:border-orange-600/50 hover:bg-foreground/5 text-foreground px-10 py-6 md:px-10 md:px-8 md:py-5 font-black uppercase tracking-widest rounded-full transition-all duration-500 group" >
                            <span className="flex items-center gap-3">
                                {heroData.ctaSecondary}
                                <TrendingUp className="w-5 h-5 transition-transform group-hover:scale-110 group-hover:text-orange-600" />
                            </span>
                        </Link>
                    </motion.div>
                </div>
            </motion.div>

            {/* Large Scroll Prompt */}
            <motion.div
                className="absolute bottom-12 md:bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
                style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
            >
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/20">{heroData.scrollLabel}</span>
                <div className="w-[1px] h-12 md:h-20 bg-gradient-to-b from-orange-500 to-transparent" />
            </motion.div>
        </section>
    );
};

// Add Link import
import Link from 'next/link';

export default Hero;
