"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { aboutData } from '@/lib/data';
import { ScrollRevealText } from '@/components/ui/ScrollRevealText';

interface ExpertiseCardProps {
    item: string;
    index: number;
    total: number;
    scrollYProgress: MotionValue<number>;
    isMobile: boolean;
}

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({ item, index, total, scrollYProgress, isMobile }) => {
    // Calculate scroll range for this card
    const step = 1 / total;
    const start = index * step;
    const end = start + step;

    const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
    const y = useTransform(scrollYProgress, [start, end], [50, 0]);

    // Mobile values (Sequential/Transient)
    const activeOpacity = useTransform(scrollYProgress, [start, end, end + step], [0, 1, 0]);

    return (
        <motion.div
            style={{ opacity, y }}
            className="group relative p-10 bg-foreground/[0.02] border border-transparent rounded-[2rem] hover:bg-orange-600/5 transition-colors duration-500 overflow-hidden"
        >
            {/* Animated background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/0 via-orange-600/0 to-orange-600/0 group-hover:to-orange-600/10 transition-all duration-700" />

            {/* Mobile Scroll Active Background Tint */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-orange-600/0 via-orange-600/0 to-orange-600/10 pointer-events-none"
                style={{ opacity: isMobile ? activeOpacity : 0 }}
            />

            {/* Interactive Glow Spotlight — desktop only to avoid mobile flicker */}
            <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 hidden md:block transition-opacity duration-500 pointer-events-none"
                style={{
                    background: `radial-gradient(600px circle at 50% 50%, rgba(255,255,255,0.08), transparent 50%)`,
                }}
            />

            {/* Hover Border Glow */}
            <motion.div
                className="absolute inset-0 rounded-[2rem] border border-orange-500/50 shadow-[0_0_15px_rgba(234,88,12,0.3)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ opacity: isMobile ? activeOpacity : undefined }}
            />

            <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-foreground/5 flex items-center justify-center border border-foreground/10 mb-8 group-hover:bg-orange-600 group-hover:border-orange-600 transition-all duration-500 group-hover:rotate-6">
                    <CheckCircle2 className="w-7 h-7 text-orange-600 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-sm md:text-base font-black uppercase tracking-[0.2em] text-foreground leading-tight mb-4 group-hover:text-orange-500 transition-colors">
                    {item}
                </h4>
                <div className="w-12 h-1 bg-foreground/10 rounded-full group-hover:w-24 group-hover:bg-orange-600 transition-all duration-700" />
            </div>
        </motion.div>
    );
};

const About: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.7", "end end"]
    });

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const mouseX = useSpring(0, { stiffness: 150, damping: 20 });
    const mouseY = useSpring(0, { stiffness: 150, damping: 20 });

    function onMouseMove(e: React.MouseEvent) {
        const { currentTarget, clientX, clientY } = e;
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        mouseX.set((clientX - left) / width - 0.5);
        mouseY.set((clientY - top) / height - 0.5);
    }

    function onMouseLeave() {
        mouseX.set(0);
        mouseY.set(0);
    }

    const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);

    // Content Parallax Transforms
    const contentY = useTransform(scrollYProgress, [0, 1], [0, -40]);
    const imageY = useTransform(scrollYProgress, [0, 1], [0, 40]);

    // Expertise Grid Mobile Scroll Transform
    const mobileGridY = useTransform(scrollYProgress, [0, 1], ["5%", "-100%"]);

    return (
        <section id="about" className="py-14 md:py-32 text-foreground relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Content Column */}
                <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center mb-18 md:mb-32">
                    <motion.div
                        style={{ y: contentY }}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-orange-600 mb-6">
                            {aboutData.badge}
                        </h2>

                        <motion.h3 className="text-xl md:text-2xl lg:text-3xl font-black text-foreground mb-8 md:mb-10 leading-[41px] tracking-tighter uppercase font-display ">
                            <div className="block md:hidden">
                                <ScrollRevealText
                                    className='font-edu'
                                    text={aboutData.mobile_title}
                                    highlightPhrases={["Turn ideas", "data-led", "outcomes,", "Connect", "Brands"]}
                                />
                            </div>
                            <div className="hidden md:block">
                                {aboutData.title}
                            </div>
                        </motion.h3>

                        <div className="space-y-6 hidden md:block">
                            <ScrollRevealText
                                text={aboutData.description}
                                className="text-md md:text-lg lg:text-xl text-muted-foreground leading-relaxed font-medium text-justify"
                            />
                        </div>
                    </motion.div>

                    {/* Image Column with 3D Tilt - Hidden on mobile */}
                    <motion.div
                        style={{ y: imageY }}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative perspective-1000 hidden md:flex justify-center lg:justify-end"
                        onMouseMove={onMouseMove}
                        onMouseLeave={onMouseLeave}
                    >
                        <motion.div
                            style={{ rotateX, rotateY }}
                            className="relative w-full max-w-[320px] md:max-w-md aspect-[4/5] overflow-hidden rounded-3xl border border-foreground/10 shadow-2xl"
                        >
                            <img
                                src={aboutData.image}
                                alt="Performance Marketer"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 hover:scale-100"
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 dark:from-black/95 via-transparent to-transparent" />

                            <div className="absolute bottom-6 left-6 right-6 text-left">
                                <div className="text-xl md:text-2xl font-black uppercase tracking-tighter text-white mb-1">{aboutData.imageName}</div>
                                <div className="text-[9px] font-black uppercase tracking-[0.3em] text-orange-600">{aboutData.imageRole}</div>
                            </div>
                        </motion.div>

                        {/* Decorative 3D elements */}
                        <motion.div
                            style={{
                                x: useTransform(mouseX, [-0.5, 0.5], [20, -20]),
                                y: useTransform(mouseY, [-0.5, 0.5], [20, -20]),
                            }}
                            className="absolute -top-6 -right-6 w-32 h-32 border border-orange-600/30 rounded-full blur-xl -z-10"
                        />
                    </motion.div>
                </div>
            </div>

            {/* Sticky Expertise Grid Container */}
            <div ref={containerRef} className="relative h-[450dvh] md:h-[400dvh] -mt-32">
                <div className="sticky top-0 h-screen flex items-start pt-24 md:pt-0 md:items-center justify-center md:overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
                        <motion.div
                            style={{ y: isMobile ? mobileGridY : 0 }}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                        >
                            {aboutData.expertise.map((item, index) => (
                                <ExpertiseCard
                                    key={index}
                                    item={item}
                                    index={index}
                                    total={aboutData.expertise.length}
                                    scrollYProgress={scrollYProgress}
                                    isMobile={isMobile}
                                />
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
