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
import NoiseBackground from './NoiseBackground';
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
        <section id="contact" className="py-32 bg-gray-50 relative overflow-hidden">
            <NoiseBackground />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <SectionHeader
                    title={contactData.title}
                    subtitle={contactData.description}
                    className="mb-16 max-w-3xl"
                    titleClassName="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
                    subtitleClassName="text-xl text-gray-700 mb-4 leading-relaxed"
                />

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                                    Your Name *
                                </label>
                                <Input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-4 border-2 border-gray-900 rounded-none focus:ring-2 focus:ring-orange-500 text-lg"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                                    Email Address *
                                </label>
                                <Input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-4 border-2 border-gray-900 rounded-none focus:ring-2 focus:ring-orange-500 text-lg"
                                    placeholder="john@company.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                                    Company Name
                                </label>
                                <Input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="w-full px-4 py-4 border-2 border-gray-900 rounded-none focus:ring-2 focus:ring-orange-500 text-lg"
                                    placeholder="Your Company"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                                    Message *
                                </label>
                                <Textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-4 border-2 border-gray-900 rounded-none focus:ring-2 focus:ring-orange-500 resize-none text-lg"
                                    placeholder="Tell me about your current challenges and growth goals..."
                                />
                            </div>

                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <Button
                                    type="submit"
                                    className="w-full bg-gray-900 hover:bg-gray-800 text-white py-5 rounded-none font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-900"
                                >
                                    Send Message
                                    <Send className="ml-2 w-5 h-5" />
                                </Button>
                            </motion.div>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="border-4 border-gray-900 p-8 bg-white">
                            <h3 className="text-2xl font-bold text-gray-900 mb-8">
                                Other Ways to Connect
                            </h3>

                            <div className="space-y-6">
                                <motion.a
                                    href={`mailto:${contactData.email}`}
                                    className="flex items-center gap-4 group"
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="w-12 h-12 bg-gray-900 flex items-center justify-center group-hover:bg-orange-600 transition-colors">
                                        <Mail className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-500 font-bold uppercase tracking-wide">Email</div>
                                        <div className="text-gray-900 font-bold group-hover:text-orange-600 transition-colors">
                                            {contactData.email}
                                        </div>
                                    </div>
                                </motion.a>

                                <motion.a
                                    href={`https://${contactData.linkedin}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 group"
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="w-12 h-12 bg-gray-900 flex items-center justify-center group-hover:bg-orange-600 transition-colors">
                                        <Linkedin className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-500 font-bold uppercase tracking-wide">LinkedIn</div>
                                        <div className="text-gray-900 font-bold group-hover:text-orange-600 transition-colors">
                                            Connect with me
                                        </div>
                                    </div>
                                </motion.a>

                                <CalModalButton
                                    variant="ghost"
                                    className="flex items-center gap-4 group p-0 h-auto hover:bg-transparent justify-start w-full"
                                >
                                    <div className="w-12 h-12 bg-gray-900 flex items-center justify-center group-hover:bg-orange-600 transition-colors flex-shrink-0">
                                        <Calendar className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="text-left">
                                        <div className="text-xs text-gray-500 font-bold uppercase tracking-wide">Schedule Call</div>
                                        <div className="text-gray-900 font-bold group-hover:text-orange-600 transition-colors">
                                            Book 30-min strategy session
                                        </div>
                                    </div>
                                </CalModalButton>
                            </div>
                        </div>

                        <div className="bg-gray-900 p-8 text-white">
                            <h4 className="text-xl font-bold mb-3">Quick Response</h4>
                            <p className="text-gray-300">
                                I respond to all inquiries within 24 hours. For urgent matters, reach out via LinkedIn.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Hidden button for programmatic trigger */}
            <div className="hidden">
                <CalModalButton ref={hiddenCalBtnRef}>Hidden Trigger</CalModalButton>
            </div>

        </section >
    );
};

export default Contact;
