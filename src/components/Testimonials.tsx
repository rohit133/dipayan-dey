"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { testimonialsData } from '@/lib/data';
import NoiseBackground from './NoiseBackground';
import SectionHeader from './SectionHeader';

const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="py-32 bg-white relative overflow-hidden">
            <NoiseBackground />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <SectionHeader
                    title="What Founders Say"
                    subtitle="Results speak louder than promises"
                />

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonialsData.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="border-4 border-gray-900 p-8 bg-white h-full hover:bg-gray-50 transition-all duration-300">
                                {/* Quote Icon */}
                                <Quote className="w-10 h-10 text-orange-600 mb-6" />

                                {/* Quote */}
                                <p className="text-gray-800 leading-relaxed mb-8 text-lg">
                                    "{testimonial.quote}"
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-4 pt-6 border-t-2 border-gray-200">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-14 h-14 rounded-full object-cover border-2 border-gray-900 grayscale group-hover:grayscale-0 transition-all"
                                    />
                                    <div>
                                        <div className="font-bold text-gray-900">
                                            {testimonial.name}
                                        </div>
                                        <div className="text-sm text-gray-600">
                                            {testimonial.role}, {testimonial.company}
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
