"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface ServiceCardProps {
    title: string;
    subtitle: string;
    description: string;
    icon: LucideIcon;
    index: number;
    colSpanClass: string;
    theme: 'orange' | 'dark' | 'light' | 'gradient';
    onClick: () => void;
    isExpanded?: boolean;
}

import { useSpring, useTransform } from 'framer-motion';

const ServiceCard: React.FC<ServiceCardProps> = ({
    title,
    subtitle,
    description,
    icon: Icon,
    index,
    colSpanClass,
    theme,
    onClick,
    isExpanded
}) => {
    const mouseX = useSpring(0, { stiffness: 150, damping: 20 });
    const mouseY = useSpring(0, { stiffness: 150, damping: 20 });

    function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        const { currentTarget, clientX, clientY } = e;
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        mouseX.set((clientX - left) / width - 0.5);
        mouseY.set((clientY - top) / height - 0.5);

        // Update CSS variables for spotlight effect
        const x = clientX - left;
        const y = clientY - top;
        currentTarget.style.setProperty("--mouse-x", `${x}px`);
        currentTarget.style.setProperty("--mouse-y", `${y}px`);
    }

    function onMouseLeave(e: React.MouseEvent<HTMLDivElement>) {
        mouseX.set(0);
        mouseY.set(0);
        const { currentTarget } = e;
        currentTarget.style.removeProperty("--mouse-x");
        currentTarget.style.removeProperty("--mouse-y");
    }

    const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);

    const getThemeAccents = () => {
        switch (theme) {
            case 'orange': return 'text-orange-600 border-orange-600/20 group-hover:border-orange-600/50';
            case 'dark': return 'text-foreground border-foreground/10 group-hover:border-foreground/30';
            case 'light': return 'text-blue-500 border-blue-500/20 group-hover:border-blue-500/50';
            case 'gradient': return 'text-purple-500 border-purple-500/20 group-hover:border-purple-500/50';
            default: return 'text-foreground border-foreground/10 group-hover:border-foreground/30';
        }
    };

    const accentClass = getThemeAccents();

    return (
        <motion.div
            className={`${colSpanClass} row-span-2 relative group cursor-pointer perspective-1000`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            onClick={onClick}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
        >
            <motion.div
                style={{ rotateX, rotateY }}
                className={`relative h-full bg-foreground/[0.03] backdrop-blur-xl border border-foreground/10 p-8 md:p-10 overflow-hidden rounded-[2.5rem] transition-colors duration-500 group-hover:bg-foreground/[0.06]`}
            >
                {/* Spotlight Gradient */}
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                        background: `radial-gradient(600px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(255,255,255,0.06), transparent 40%)`
                    }}
                />

                {/* Accent Background Glow */}
                <div className={`absolute -top-24 -right-24 w-48 h-48 blur-[80px] opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-700 rounded-full ${theme === 'orange' ? 'bg-orange-500' : 'bg-foreground'}`} />

                <div className="relative z-10 h-full flex flex-col justify-between">
                    <div>
                        <motion.div
                            className={`inline-flex p-3 md:p-4 rounded-2xl bg-foreground/5 mb-6 md:mb-8 border border-foreground/5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 ${accentClass.split(' ')[0]}`}
                        >
                            <Icon className="w-8 h-8 md:w-10 md:h-10" />
                        </motion.div>

                        <div className={`text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] mb-3 md:mb-4 opacity-50 group-hover:opacity-100 transition-opacity ${accentClass.split(' ')[0]}`}>
                            {subtitle}
                        </div>

                        <h3 className="text-3xl md:text-4xl font-black text-foreground mb-4 md:mb-6 leading-tight uppercase font-display tracking-tighter">
                            {title}
                        </h3>

                        <p className="text-muted-foreground text-md md:text-lg lg:text-xl leading-relaxed font-medium mb-6 md:mb-8 group-hover:text-foreground/80 transition-colors">
                            {description}
                        </p>
                    </div>

                    <div className="flex items-center justify-between">
                        <motion.div
                            className={`flex items-center gap-3 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] transition-all ${accentClass.split(' ')[0]}`}
                        >
                            <span>Explore Details</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                        </motion.div>

                        {/* Interactive small dots */}
                        <div className="flex gap-1.5">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className={`w-1 h-1 rounded-full bg-foreground/10 group-hover:bg-foreground/40 transition-colors`} style={{ transitionDelay: `${i * 100}ms` }} />
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ServiceCard;
