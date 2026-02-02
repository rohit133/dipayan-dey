"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { processData } from '@/lib/data';

const Process: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Extremely smooth progress for cinematic sweeping
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 30,
        damping: 20,
        restDelta: 0.0001
    });

    // Header visibility
    const headerOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
    const headerY = useTransform(scrollYProgress, [0, 0.05], [0, -50]);
    const trackOpacity = useTransform(scrollYProgress, [0.06, 0.08], [0, 1]);

    const [winWidth, setWinWidth] = useState(0);
    useEffect(() => {
        setWinWidth(window.innerWidth);
        const handleResize = () => setWinWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // SWEEP LOGIC: One sweep per stage
    const sweepRange = winWidth * 0.75;
    const swirlX = useTransform(smoothProgress, (p) => {
        if (p < 0.08) return 0;

        const stepCount = processData.steps.length;
        const progressPerStep = 0.92 / stepCount;
        const currentStepProgress = (p - 0.08) % progressPerStep;
        const normalized = currentStepProgress / progressPerStep;

        // Use a full cosine wave to go 0 -> 1 -> 0
        // (1 - cos(theta))/2
        const sweepFactor = (1 - Math.cos(normalized * 2 * Math.PI)) / 2;
        return sweepFactor * sweepRange;
    });

    return (
        <section
            ref={containerRef}
            id="process"
            className="relative bg-black text-white"
            style={{ height: '1400vh' }} // Even slower for retrieval mechanics
        >
            <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-start justify-center px-6 md:px-24">

                {/* 1. Header Area */}
                <motion.div
                    style={{ opacity: headerOpacity, y: headerY }}
                    className="absolute top-[20%] left-[10%] md:left-[15%] z-20 pointer-events-none"
                >
                    <div className="flex items-center gap-4 text-orange-500 mb-8">
                        <div className="h-[1px] w-16 bg-orange-500" />
                        <h3 className="text-[14px] font-bold uppercase tracking-[0.6em]">The Evolution</h3>
                    </div>
                    <h2 className="text-5xl sm:text-6xl md:text-9xl font-display font-medium leading-[0.8] tracking-tighter uppercase whitespace-pre-line">
                        Scaling{"\n"}
                        <span className="italic text-orange-500 text-5xl sm:text-6xl md:text-[0.8em]">Methodology</span>
                    </h2>
                </motion.div>

                {/* 2. The Progress Rail (Far Left) */}
                <motion.div
                    style={{ opacity: trackOpacity }}
                    className="absolute left-[5%] md:left-[10%] top-0 bottom-0 w-[1px] z-0"
                >
                    <div className="absolute inset-0 bg-white/5" />
                    <motion.div
                        style={{ scaleY: smoothProgress, originY: 0 }}
                        className="absolute inset-0 bg-gradient-to-b from-orange-500 via-orange-400 to-transparent shadow-[0_0_15px_rgba(249,115,22,0.3)]"
                    />
                </motion.div>

                {/* 3. The Traveler Dot - Doing the Sweep */}
                <motion.div
                    style={{
                        opacity: trackOpacity,
                        top: useTransform(smoothProgress, [0, 1], ["0%", "100%"]),
                        x: swirlX,
                        left: "5%",
                    }}
                    className="absolute md:left-[10%] -translate-x-1/2 -translate-y-1/2 w-10 h-10 z-50 pointer-events-none"
                >
                    <div className="absolute inset-0 bg-orange-500 rounded-full blur-[15px] animate-pulse" />
                    <div className="absolute inset-0 bg-orange-500 rounded-full border-[3px] border-white shadow-[0_0_50px_rgba(249,115,22,1)]" />
                    {/* Visual energy core */}
                    <div className="absolute inset-2 bg-white rounded-full opacity-30 blur-[2px]" />
                </motion.div>

                {/* 4. Wide-Aspect Cards - The "Magnetic Retrieval" Logic */}
                <div className="relative w-full h-full flex items-center justify-start z-10 pl-[5%] md:pl-[12%]">
                    {processData.steps.map((step, index) => {
                        const stepCount = processData.steps.length;
                        const start = 0.08 + (index * (0.92 / stepCount));
                        const end = start + (0.92 / stepCount);

                        return (
                            <ProcessStep
                                key={step.number}
                                step={step}
                                progress={scrollYProgress}
                                range={[start, end]}
                                index={index}
                                swirlX={swirlX}
                                sweepRange={sweepRange}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

interface ProcessStepProps {
    step: any;
    progress: any;
    range: [number, number];
    index: number;
    swirlX: any;
    sweepRange: number;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ step, progress, range, index, swirlX, sweepRange }) => {
    const [start, end] = range;
    const windowTotal = end - start;

    // RETRIEVAL LOGIC:
    // Outward phase: 0% -> 50% of card duration (Dot travels Left -> Right)
    // Inward phase: 50% -> 100% of card duration (Dot travels Right -> Left, bringing card)

    const midPoint = start + (windowTotal / 2);

    // Card only shows up during the inward phase
    const opacity = useTransform(progress, [midPoint, midPoint + windowTotal * 0.1, end - windowTotal * 0.1, end], [0, 1, 1, 0]);

    // Card follows the dot's horizontal position during retrieval
    // We only want the card to follow when it's visible (during inward phase)
    const cardX = useTransform(swirlX, (v) => {
        // Dot travels Out (0 -> sweepRange) and In (sweepRange -> 0)
        // We catch it on the way back.
        return v;
    });

    const scale = useTransform(progress, [midPoint, midPoint + 0.01, end], [0.9, 1, 0.95]);

    return (
        <motion.div
            style={{
                opacity,
                display: useTransform(opacity, v => v === 0 ? "none" : "flex")
            }}
            className="absolute inset-0 flex items-center justify-start"
        >
            <motion.div
                style={{ opacity: useTransform(progress, [midPoint, (midPoint + end) / 2, end], [0, 0.05, 0]) }}
                className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none z-0"
            >
                <span className="text-[70vh] font-display font-black text-white/5 tracking-tighter uppercase whitespace-nowrap">
                    {step.number}
                </span>
            </motion.div>

            {/* Wide-Aspect Cinematic Card */}
            <motion.div
                style={{ scale, x: cardX }}
                className="relative z-10 w-full max-w-5xl bg-neutral-900/50 backdrop-blur-[100px] border border-white/10 p-10 md:p-14 rounded-[3.5rem] shadow-[0_50px_100px_rgba(0,0,0,0.8)] group overflow-hidden"
            >
                {/* Visual Magnetic Anchor to Dot */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-40 bg-gradient-to-b from-transparent via-orange-500 to-transparent shadow-[0_0_20px_rgba(249,115,22,0.8)]" />

                <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-10 md:gap-16 items-center">
                    {/* Identifier */}
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-[2.5rem] bg-orange-500 flex items-center justify-center text-5xl md:text-6xl font-display font-bold text-white shadow-2xl">
                            {step.number}
                        </div>
                        <div className="text-center">
                            <h4 className="text-[11px] font-bold uppercase tracking-[0.5em] text-orange-500/80">Method</h4>
                            <p className="text-[10px] font-mono text-white/20 uppercase tracking-[0.3em]">Phase 0{index + 1}</p>
                        </div>
                    </div>

                    {/* Content - Cinematic Wide Layout */}
                    <div className="space-y-6 md:space-y-8">
                        <h3 className="text-4xl md:text-7xl lg:text-8xl font-display font-medium text-white leading-[0.9] tracking-tighter uppercase">
                            {step.title}
                        </h3>
                        <p className="text-xl md:text-2xl text-white/50 font-light leading-relaxed font-display max-w-3xl">
                            {step.description}
                        </p>
                    </div>
                </div>

                {/* Sub-progress bar within card */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/5 overflow-hidden">
                    <motion.div
                        style={{ scaleX: useTransform(progress, [start, end], [0, 1]), originX: 0 }}
                        className="absolute inset-0 bg-orange-500/30"
                    />
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Process;
