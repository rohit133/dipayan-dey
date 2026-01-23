"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: Mail, href: 'mailto:hello@performancemarketer.com', label: 'Email' },
        { icon: Linkedin, href: 'https://linkedin.com/in/performancemarketer', label: 'LinkedIn' },
        { icon: Twitter, href: 'https://twitter.com/performancemarketer', label: 'Twitter' }
    ];

    return (
        <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
            {/* Noise texture */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
            }} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between border-b border-white/20 pb-8 mb-8">
                    {/* Brand */}
                    <motion.div
                        className="mb-6 md:mb-0"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-black uppercase tracking-tight mb-2">
                            Performance Marketing
                        </h3>
                        <p className="text-gray-400 text-sm">
                            Ex-Flipkart • 5+ Years Experience
                        </p>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        className="flex items-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 border-2 border-white flex items-center justify-center hover:bg-white hover:text-gray-900 transition-all duration-300"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                aria-label={social.label}
                            >
                                <social.icon className="w-5 h-5" />
                            </motion.a>
                        ))}
                    </motion.div>
                </div>

                {/* Copyright */}
                <motion.div
                    className="text-center text-gray-400 text-sm"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    © {currentYear} Performance Marketing Consultant. All rights reserved.
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
