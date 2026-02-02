"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { TextReveal } from '@/components/ui/TextReveal';

interface SectionHeaderProps {
    title: string;
    subtitle: string;
    className?: string;
    titleClassName?: string;
    subtitleClassName?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
    title,
    subtitle,
    className = "mb-20",
    titleClassName = "text-[8.5vw] md:text-[4.5vw] font-black text-foreground leading-[0.9] tracking-tighter uppercase font-display",
    subtitleClassName = "text-md md:text-lg lg:text-xl text-muted-foreground font-medium max-w-2xl mt-6 leading-relaxed"
}) => {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <h2 className={titleClassName}>
                <TextReveal text={title} />
            </h2>
            <p className={subtitleClassName}>
                {subtitle}
            </p>
        </motion.div>
    );
};

export default SectionHeader;
