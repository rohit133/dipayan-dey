"use client";

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Twitter, ArrowRight, Instagram, ExternalLink, ArrowUpRight } from 'lucide-react';
import { footerData, contactData } from '@/lib/data';
import Link from 'next/link';
import { CalModalButton } from '@/components/ui/CalModalButton';

const Footer: React.FC = () => {
    const iconMap: Record<string, any> = {
        Mail,
        Linkedin,
        Twitter,
        Instagram
    };
    const hiddenCalBtnRef = useRef<HTMLButtonElement>(null);

    return (
        <footer className="text-foreground pt-32 pb-12 relative overflow-hidden border-t border-foreground/5">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Massive CTA Section */}
                <div className="mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-[10vw] md:text-[6.5vw] font-black uppercase tracking-tighter leading-[0.9] mb-12 font-display">
                            Build Your <br />
                            <span className="text-orange-600 italic">Legacy.</span>
                        </h2>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 md:gap-18 mb-32">
                    {/* Brand Meta */}
                    <div className="lg:col-span-5 space-y-8 md:space-y-10">
                        <div>
                            <Link href="/" className="inline-flex items-center gap-4 group">
                                <span className="w-10 h-10 md:w-12 md:h-12 bg-foreground text-background flex items-center justify-center font-black rounded-xl transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">D</span>
                                <span className="text-2xl md:text-3xl font-black uppercase tracking-tighter font-display">Dipayan Dey</span>
                            </Link>
                            <p className="mt-8 text-muted-foreground text-sm md:text-sm lg:text-sm font-medium leading-relaxed max-w-md">
                                {footerData.about.description}
                            </p>
                        </div>
                        <div className="flex gap-4 md:gap-6">
                            {footerData.socialLinks.map((social, i) => {
                                const IconComponent = iconMap[social.icon] || Mail;
                                return (
                                    <Link
                                        key={i}
                                        href={social.href}
                                        className="w-10 h-10 md:w-12 md:h-12 rounded-2xl border border-foreground/10 flex items-center justify-center text-muted-foreground hover:text-white hover:border-orange-600 hover:bg-orange-600 transition-all duration-500"
                                    >
                                        <IconComponent className="w-4 h-4 md:w-5 md:h-5" />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* Navigation Hub */}
                    <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                        <div>
                            <h4 className="text-[9px] md:text-[14px] font-black uppercase tracking-[0.3em] text-orange-600 mb-8 md:mb-10">Capabilities</h4>
                            <ul className="space-y-4 md:space-y-5">
                                {footerData.services.items.map((service, i) => (
                                    <li key={i}>
                                        <span className="text-xs md:text-[10px] font-bold text-muted-foreground hover:text-foreground transition-colors cursor-pointer uppercase tracking-widest flex items-center gap-2 group">
                                            {service}
                                            <ArrowUpRight className="w-3 h-3 md:w-5 md:h-5 opacity-0 group-hover:opacity-100 transition-all" />
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-[9px] md:text-[15px] font-black uppercase tracking-[0.3em] text-orange-600 mb-8 md:mb-10">Ecosystem</h4>
                            <ul className="space-y-4 md:space-y-5">
                                {footerData.ecosystem.map((link, i) => (
                                    <li key={i}>
                                        <Link href={link.href} className="text-xs md:text-[10px] font-bold text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest flex items-center gap-2 group">
                                            {link.label}
                                            <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 opacity-0 group-hover:opacity-100 transition-all" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="col-span-2 md:col-span-1 border-t md:border-t-0 md:border-l border-foreground/10 pt-10 md:pt-0 md:pl-12">
                            <h4 className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-orange-600 mb-8 md:mb-10">{footerData.nexus.title}</h4>
                            <div className="space-y-6 md:space-y-8">
                                <button onClick={() => hiddenCalBtnRef.current?.click()} className="block group">
                                    <p className="text-[8px] md:text-[10px] uppercase font-black text-muted-foreground/60 mb-2 tracking-widest">{footerData.nexus.sessionLabel}</p>
                                    <div className="text-lg md:text-xl font-black hover:text-orange-500 transition-colors uppercase tracking-tighter font-display italic">
                                        {footerData.nexus.sessionValue}
                                    </div>
                                </button>
                                <div>
                                    <p className="text-[8px] md:text-[10px] uppercase font-black text-muted-foreground/60 mb-2 tracking-widest">{footerData.nexus.directLabel}</p>
                                    <a href={`mailto:${footerData.contact.email}`} className="text-xs md:text-sm font-bold text-foreground hover:text-orange-500 transition-all break-all">
                                        {footerData.contact.email}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Legal Bento */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20">
                    {Object.entries(footerData.legal).map(([key, section]) => (
                        <Link
                            key={key}
                            href={section.links?.[0]?.href || '#'}
                            className="p-6 md:p-8 rounded-3xl bg-foreground/5 border border-foreground/10 hover:bg-foreground/[0.08] hover:border-foreground/20 transition-all duration-500 group"
                        >
                            <h5 className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-foreground mb-4 flex items-center justify-between">
                                {section.title}
                                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </h5>
                            <p className="text-[10px] md:text-[11px] text-muted-foreground leading-relaxed line-clamp-2 group-hover:text-muted-foreground/80">
                                {section.content}
                            </p>
                        </Link>
                    ))}
                </div>

                {/* Footer Bottom */}
                <div className="pt-12 border-t border-foreground/5 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                        <p className="text-[8px] md:text-[9px] font-black uppercase tracking-widest">
                            @ {new Date().getFullYear()} {footerData.copyright}
                        </p>
                        <div className="hidden md:block w-px h-4 bg-foreground/10" />
                        <span className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-orange-600/60 transition-colors hover:text-orange-600">
                            {footerData.trustStatement}
                        </span>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="px-4 md:px-5 py-2 bg-foreground/5 rounded-full border border-foreground/10 flex items-center gap-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                            <span className="text-[8px] md:text-[8px] font-black uppercase tracking-widest text-muted-foreground">{footerData.status}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden">
                <CalModalButton ref={hiddenCalBtnRef}>Hidden Trigger</CalModalButton>
            </div>
        </footer>
    );
};

export default Footer;
