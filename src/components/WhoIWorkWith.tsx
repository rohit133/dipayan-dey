"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { whoIWorkWithData } from '@/lib/data';
import SectionHeader from './SectionHeader';

const WhoIWorkWith: React.FC = () => {
    return (
        <section className="py-32 text-foreground relative overflow-hidden section-padding">

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-20">
                    <h2 className="text-xs font-black uppercase tracking-[0.4em] text-orange-600 mb-6">
                        The Compatibility
                    </h2>
                    <h3 className="text-[8vw] md:text-[5vw] font-black text-foreground leading-[0.9] tracking-tighter uppercase font-display mb-12">
                        Strategic
                        <br />
                        <span className="italic text-orange-600">Partnerships</span>
                    </h3>
                </div>

                {/* Audiences Grid */}
                <div className="grid gap-6 md:gap-8">
                    {whoIWorkWithData.audiences.map((audience, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative p-8 md:p-10 bg-foreground/5 border border-foreground/10 rounded-3xl hover:bg-foreground/[0.08] hover:border-foreground/20 transition-all duration-500 overflow-hidden"
                            whileHover={{ x: 15 }}
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
                            {/* Spotlight Gradient */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                style={{
                                    background: `radial-gradient(600px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(255,255,255,0.06), transparent 40%)`
                                }}
                            />
                            {/* Abstract background element */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-orange-600/10 transition-all" />

                            <div className="flex gap-6 md:gap-8 items-start relative z-10">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-foreground/5 border border-foreground/10 rounded-xl flex items-center justify-center group-hover:bg-orange-600 group-hover:border-orange-600 transition-all duration-500 shrink-0">
                                    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-orange-600 group-hover:text-white transition-colors" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-2xl md:text-3xl font-black text-foreground uppercase tracking-tighter leading-none mb-3 md:mb-4 font-display transition-colors group-hover:text-orange-500">
                                        {audience.type}
                                    </h4>
                                    <p className="text-md md:text-lg lg:text-xl text-muted-foreground font-medium leading-relaxed max-w-2xl group-hover:text-foreground/80 transition-colors">
                                        {audience.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhoIWorkWith;
