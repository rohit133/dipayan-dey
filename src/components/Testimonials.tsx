"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { testimonialsData } from '@/lib/data';
import SectionHeader from './SectionHeader';

const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="py-32 md:py-48 text-foreground relative overflow-hidden section-padding">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-20 text-center">
                    <motion.h2
                        className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-orange-600 mb-6"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        {testimonialsData.badge}
                    </motion.h2>
                    <motion.h3
                        className="text-4xl md:text-5xl lg:text-7xl font-black text-foreground leading-[0.9] tracking-tighter uppercase font-display"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        {testimonialsData.title} <span className="italic text-orange-600">{testimonialsData.titleItalic}</span>
                    </motion.h3>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                    {testimonialsData.testimonials.map((testimonial, index: number) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative"
                            onMouseMove={(e) => {
                                const { currentTarget, clientX, clientY } = e;
                                const rect = currentTarget.getBoundingClientRect();
                                const x = clientX - rect.left;
                                const y = clientY - rect.top;
                                currentTarget.style.setProperty("--mouse-x", `${x}px`);
                                currentTarget.style.setProperty("--mouse-y", `${y}px`);
                            }}
                            onMouseLeave={(e) => {
                                const { currentTarget } = e;
                                currentTarget.style.removeProperty("--mouse-x");
                                currentTarget.style.removeProperty("--mouse-y");
                            }}
                        >
                            <div className="p-8 md:p-10 bg-foreground/5 border border-foreground/10 rounded-3xl h-full hover:bg-foreground/[0.08] hover:border-foreground/20 transition-all duration-500 relative perspective-1000 overflow-hidden">
                                {/* Spotlight Gradient */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                    style={{
                                        background: `radial-gradient(600px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(255,255,255,0.06), transparent 40%)`
                                    }}
                                />
                                {/* Subtle Quote Background */}
                                <Quote className="absolute top-10 right-10 w-16 h-16 md:w-20 md:h-20 text-foreground/[0.03] -z-10" />

                                <div className="mb-8">
                                    <Quote className="w-7 h-7 md:w-8 md:h-8 text-orange-600 opacity-50 mb-6" />
                                    <p className="text-md md:text-lg lg:text-xl text-foreground font-medium leading-relaxed italic">
                                        "{testimonial.quote}"
                                    </p>
                                </div>

                                <div className="flex items-center gap-4 md:gap-6 pt-8 md:pt-10 border-t border-foreground/10">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-12 h-12 md:w-16 md:h-16 rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all duration-500 border border-foreground/10"
                                    />
                                    <div>
                                        <div className="text-base md:text-lg font-black text-foreground uppercase tracking-tighter font-display transition-colors group-hover:text-orange-500">
                                            {testimonial.name}
                                        </div>
                                        <div className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                                            {testimonial.role} @ {testimonial.company}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
