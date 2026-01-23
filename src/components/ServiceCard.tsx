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
    const getThemeStyles = () => {
        switch (theme) {
            case 'orange':
                return {
                    container: 'bg-orange-600',
                    textTitle: 'text-white',
                    textSubtitle: 'text-orange-100',
                    textDesc: 'text-white/90',
                    iconColor: 'text-white',
                    learnMoreColor: 'text-white',
                    hoverBg: undefined
                };
            case 'dark':
                return {
                    container: 'bg-gray-900',
                    textTitle: 'text-white',
                    textSubtitle: 'text-gray-400',
                    textDesc: 'text-gray-300',
                    iconColor: 'text-orange-500',
                    learnMoreColor: 'text-orange-500',
                    hoverBg: undefined
                };
            case 'light':
                return {
                    container: 'bg-white',
                    textTitle: 'text-gray-900',
                    textSubtitle: 'text-gray-500',
                    textDesc: 'text-gray-700',
                    iconColor: 'text-orange-600',
                    learnMoreColor: 'text-gray-900',
                    hoverBg: '#f9fafb'
                };
            case 'gradient':
                return {
                    container: 'bg-gradient-to-br from-gray-100 to-gray-200',
                    textTitle: 'text-gray-900',
                    textSubtitle: 'text-gray-600',
                    textDesc: 'text-gray-800',
                    iconColor: 'text-gray-900',
                    learnMoreColor: 'text-gray-900',
                    hoverBg: undefined
                };
        }
    };

    const styles = getThemeStyles();

    const renderBackgroundPattern = () => {
        switch (theme) {
            case 'orange':
                return (
                    <motion.div
                        className="absolute inset-0 opacity-10"
                        animate={{
                            backgroundPosition: ['0% 0%', '100% 100%'],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                        style={{
                            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)',
                            backgroundSize: '200% 200%',
                        }}
                    />
                );
            case 'dark':
                return (
                    <motion.div
                        className="absolute inset-0 opacity-5"
                        animate={{
                            rotate: [0, 360],
                        }}
                        transition={{
                            duration: 30,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        style={{
                            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                            backgroundSize: '20px 20px',
                        }}
                    />
                );
            case 'light':
                return (
                    <motion.div
                        className="absolute inset-0 opacity-5"
                        animate={{
                            x: [0, 20, 0],
                            y: [0, 20, 0],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        style={{
                            backgroundImage: 'linear-gradient(to right, black 1px, transparent 1px), linear-gradient(to bottom, black 1px, transparent 1px)',
                            backgroundSize: '20px 20px',
                        }}
                    />
                );
            case 'gradient':
                return (
                    <motion.div
                        className="absolute inset-0 opacity-10"
                        animate={{
                            backgroundPosition: ['0% 0%', '100% 0%'],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        style={{
                            backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(0,0,0,0.1) 20px, rgba(0,0,0,0.1) 40px)',
                            backgroundSize: '200% 100%',
                        }}
                    />
                );
        }
    };

    return (
        <motion.div
            className={`${colSpanClass} row-span-2 relative group cursor-pointer`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
            viewport={{ once: true }}
            onClick={onClick}
        >
            <motion.div
                className={`relative h-full border-4 border-gray-900 p-8 overflow-hidden ${styles.container}`}
                whileHover={{ scale: 1.02, backgroundColor: styles.hoverBg }}
                transition={{ duration: 0.3 }}
            >
                {renderBackgroundPattern()}

                <div className="relative z-10 h-full flex flex-col justify-between">
                    <div>
                        <motion.div
                            whileHover={theme === 'orange' ? { scale: 1.1, rotate: 360 } :
                                theme === 'light' ? { scale: 1.2, rotate: -10 } :
                                    theme === 'dark' ? { scale: [1, 1.2, 1], transition: { duration: 3, repeat: Infinity } } :
                                        { rotate: [0, 5, -5, 0], transition: { duration: 2, repeat: Infinity } }}
                            transition={{ duration: theme === 'orange' || theme === 'light' ? 0.5 : undefined }}
                        >
                            <Icon className={`w-16 h-16 mb-6 ${styles.iconColor}`} />
                        </motion.div>
                        <h3 className={`text-3xl md:text-4xl lg:text-5xl font-black mb-3 ${styles.textTitle} font-display`}>
                            {title}
                        </h3>
                        <div className={`text-sm font-bold uppercase tracking-wider mb-4 ${styles.textSubtitle}`}>
                            {subtitle}
                        </div>
                        <p className={`text-base md:text-lg leading-relaxed ${styles.textDesc}`}>
                            {description}
                        </p>
                    </div>
                    <motion.div
                        className={`flex items-center gap-2 font-bold mt-6 ${styles.learnMoreColor}`}
                        whileHover={{ x: 10 }}
                    >
                        <span>LEARN MORE</span>
                        <ArrowRight className="w-5 h-5" />
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ServiceCard;
