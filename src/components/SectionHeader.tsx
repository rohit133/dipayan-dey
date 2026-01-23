"use client";

import React from 'react';
import { motion } from 'framer-motion';

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
    className = "mb-16",
    titleClassName = "text-5xl md:text-6xl font-light text-gray-900 mb-4 font-display",
    subtitleClassName = "text-xl text-gray-600 max-w-2xl"
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
                {title}
            </h2>
            <p className={subtitleClassName}>
                {subtitle}
            </p>
        </motion.div>
    );
};

export default SectionHeader;
