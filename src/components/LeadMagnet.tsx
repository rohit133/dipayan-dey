"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Download, CheckCircle2 } from 'lucide-react';
import { leadMagnetData } from '@/lib/data';
import { Button } from '@/components/ui/button';

const LeadMagnet: React.FC = () => {
    const handleDownload = () => {
        // Mock download action
        alert('Blueprint download will be triggered here!');
    };

    return (
        <section className="py-32 md:py-48 text-foreground relative overflow-hidden">

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    className="relative p-10 md:p-20 bg-foreground/[0.03] border border-foreground/10 rounded-[3rem] overflow-hidden backdrop-blur-sm"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                >
                    {/* Decorative internal elements */}
                    <div className="absolute top-10 right-10 w-32 h-32 border border-foreground/5 rounded-full" />
                    <div className="absolute -bottom-10 -left-10 w-64 h-64 border border-orange-600/10 rounded-full" />

                    <div className="max-w-3xl mx-auto text-center">
                        <motion.span
                            className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-8 px-4 py-2 bg-orange-600/5 rounded-full border border-orange-600/10"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            {leadMagnetData.badge}
                        </motion.span>

                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-[1] tracking-tighter uppercase font-display mb-8">
                            {leadMagnetData.title}
                            <span className="block italic text-orange-600 mt-4 text-3xl md:text-4xl lg:text-5xl">{leadMagnetData.titleItalic}</span>
                        </h3>

                        <p className="text-md md:text-lg lg:text-xl text-muted-foreground font-medium mb-12 leading-relaxed max-w-2xl mx-auto">
                            {leadMagnetData.description}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mb-16 max-w-4xl mx-auto">
                            {leadMagnetData.benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    className="flex flex-col items-center gap-4 p-6 bg-foreground/[0.03] border border-foreground/5 rounded-2xl group hover:bg-orange-600/5 transition-all"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                                    viewport={{ once: true }}
                                >
                                    <div className="w-10 h-10 rounded-full bg-orange-600/10 flex items-center justify-center border border-orange-600/20 group-hover:bg-orange-600 group-hover:border-orange-600 transition-all duration-500">
                                        <CheckCircle2 className="w-5 h-5 text-orange-600 group-hover:text-white" />
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/80 text-center leading-tight">{benefit}</span>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Button
                                onClick={handleDownload}
                                className="h-14 md:h-18 px-10 md:px-14 bg-foreground hover:bg-orange-600 text-background hover:text-white rounded-full font-black uppercase tracking-widest text-xs md:text-sm transition-all duration-500 shadow-2xl shadow-orange-600/20 relative group"
                            >
                                <motion.div
                                    className="absolute inset-0 bg-orange-600 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity"
                                />
                                <span className="relative z-10 flex items-center gap-3">
                                    <Download className="w-5 h-5 md:w-6 md:h-6" />
                                    {leadMagnetData.cta}
                                </span>
                            </Button>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default LeadMagnet;
