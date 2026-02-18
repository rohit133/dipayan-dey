"use client";

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Linkedin, Calendar } from 'lucide-react';
import { contactData } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { CalModalButton } from '@/components/ui/CalModalButton';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import SectionHeader from './SectionHeader';

interface FormData {
    name: string;
    email: string;
    company: string;
    message: string;
}

const Contact: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        company: '',
        message: ''
    });

    const hiddenCalBtnRef = useRef<HTMLButtonElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock submission
        toast.success("Message Sent!", {
            description: "Opening scheduler...",
        });
        setTimeout(() => {
            hiddenCalBtnRef.current?.click();
        }, 1000);
        setFormData({ name: '', email: '', company: '', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="py-32 md:py-48 text-foreground relative overflow-hidden section-padding">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-20 md:mb-24">
                    <h2 className="text-xs font-black uppercase tracking-[0.4em] text-orange-600 mb-6 md:mb-8">
                        {contactData.badge}
                    </h2>
                    <h3 className="text-[8vw] md:text-[6.5vw] font-black text-foreground leading-[0.9] tracking-tighter uppercase font-display mb-10 md:mb-12">
                        {contactData.title}
                        <br />
                        <span className="italic text-orange-600">{contactData.titleItalic}</span>
                    </h3>
                    <p className="text-md md:text-lg lg:text-xl text-muted-foreground font-medium max-w-2xl leading-relaxed">
                        {contactData.description}
                    </p>
                </div>

                <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 md:gap-16 items-start">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="p-8 md:p-12 bg-foreground/[0.03] border border-foreground/10 rounded-[2rem]"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-3">
                                    <label className="text-[9px] font-black uppercase tracking-[0.3em] text-muted-foreground">
                                        Your Identity
                                    </label>
                                    <Input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-transparent border-0 border-b border-foreground/10 rounded-none px-2 py-4 text-base focus:ring-0 focus:border-orange-600 transition-all placeholder:text-muted-foreground/20 text-foreground"
                                        placeholder="Jane Smith"
                                    />
                                </div>

                                <div className="space-y-3">
                                    <label className="text-[9px] font-black uppercase tracking-[0.3em] text-muted-foreground">
                                        Digital Signal
                                    </label>
                                    <Input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-transparent border-0 border-b border-foreground/10 rounded-none px-2 py-4 text-base focus:ring-0 focus:border-orange-600 transition-all placeholder:text-muted-foreground/20 text-foreground"
                                        placeholder="jane@growth.io"
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-[9px] font-black uppercase tracking-[0.3em] text-muted-foreground">
                                    Strategic Vision
                                </label>
                                <Textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={3}
                                    className="w-full bg-transparent border-0 border-b border-foreground/10 rounded-none px-2 py-4 text-base focus:ring-0 focus:border-orange-600 transition-all placeholder:text-muted-foreground/20 text-foreground resize-none h-24"
                                    placeholder="Tell me about your goals..."
                                />
                            </div>

                            <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                                <Button
                                    type="submit"
                                    className="w-full h-14 md:h-16 bg-foreground hover:bg-orange-600 text-background hover:text-white rounded-full font-black uppercase tracking-widest text-xs transition-all duration-500 shadow-xl shadow-foreground/5"
                                >
                                    Transmit Signal
                                    <Send className="ml-3 w-4 h-4" />
                                </Button>
                            </motion.div>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="grid gap-4 md:gap-6"
                        >
                            <motion.a
                                href={`mailto:${contactData.email}`}
                                className="group p-6 md:p-8 bg-foreground/[0.02] border border-foreground/10 rounded-2xl hover:bg-orange-600/5 hover:border-orange-600/30 transition-all duration-500"
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="flex items-center gap-5">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-foreground/5 rounded-xl flex items-center justify-center border border-foreground/10 group-hover:bg-orange-600 group-hover:border-orange-600 transition-all duration-500">
                                        <Mail className="w-5 h-5 md:w-6 md:h-6 text-foreground group-hover:text-white" />
                                    </div>
                                    <div>
                                        <div className="text-[8px] font-black uppercase tracking-[0.3em] text-orange-600 mb-1">{contactData.boxLabels.email}</div>
                                        <div className="text-lg md:text-xl font-bold text-foreground transition-colors break-all">
                                            {contactData.email}
                                        </div>
                                    </div>
                                </div>
                            </motion.a>

                            <motion.a
                                href={`https://${contactData.linkedin}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group p-6 md:p-8 bg-foreground/[0.02] border border-foreground/10 rounded-2xl hover:bg-orange-600/5 hover:border-orange-600/30 transition-all duration-500"
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="flex items-center gap-5">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-foreground/5 rounded-xl flex items-center justify-center border border-foreground/10 group-hover:bg-orange-600 group-hover:border-orange-600 transition-all duration-500">
                                        <Linkedin className="w-5 h-5 md:w-6 md:h-6 text-foreground group-hover:text-white" />
                                    </div>
                                    <div>
                                        <div className="text-[8px] font-black uppercase tracking-[0.3em] text-orange-600 mb-1">{contactData.boxLabels.linkedin}</div>
                                        <div className="text-lg md:text-xl font-black text-foreground uppercase tracking-tighter transition-colors font-display">
                                            Growth Connection
                                        </div>
                                    </div>
                                </div>
                            </motion.a>

                            <CalModalButton
                                className="group p-6 md:p-8 bg-foreground/[0.02] border border-foreground/10 rounded-2xl hover:bg-orange-600/5 hover:border-orange-600/30 transition-all duration-500 w-full h-auto text-left block"
                            >
                                <div className="flex items-center gap-5">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-foreground/5 rounded-xl flex items-center justify-center border border-foreground/10 group-hover:bg-orange-600 group-hover:border-orange-600 transition-all duration-500">
                                        <Calendar className="w-5 h-5 md:w-6 md:h-6 text-foreground group-hover:text-white" />
                                    </div>
                                    <div>
                                        <div className="text-[8px] font-black uppercase tracking-[0.3em] text-orange-600 mb-1">{contactData.boxLabels.calendly}</div>
                                        <div className="text-lg md:text-xl font-black text-foreground uppercase tracking-tighter transition-colors font-display">
                                            Secure Slot
                                        </div>
                                    </div>
                                </div>
                            </CalModalButton>
                        </motion.div>

                        <motion.div
                            className="p-6 md:p-8 bg-orange-600/10 border border-orange-600/20 text-foreground rounded-2xl"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            <h4 className="text-lg font-black uppercase tracking-tighter mb-3 font-display italic">{contactData.protocol.title}</h4>
                            <p className="text-muted-foreground font-medium leading-relaxed text-xs md:text-sm">
                                {contactData.protocol.description}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Hidden button for programmatic trigger */}
            <div className="hidden">
                <CalModalButton ref={hiddenCalBtnRef}>Hidden Trigger</CalModalButton>
            </div>
        </section>
    );
};

export default Contact;
