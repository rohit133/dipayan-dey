"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SectionHeader from './SectionHeader';

const Skills: React.FC = () => {
    return (
        <section id="skills" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    title={skillsData.title}
                    subtitle="Expertise across the full marketing technology stack"
                    className="text-center mb-16"
                    titleClassName="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                    subtitleClassName="text-xl text-gray-600 max-w-2xl mx-auto"
                />

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {skillsData.categories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full border-2 border-gray-100 hover:border-orange-300 transition-all duration-500 shadow-lg hover:shadow-2xl group">
                                <CardHeader>
                                    <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                                        {category.name}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3">
                                        {category.skills.map((skill, idx) => (
                                            <motion.li
                                                key={idx}
                                                className="flex items-center gap-3 text-gray-700 group/item"
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.4, delay: idx * 0.05 }}
                                                viewport={{ once: true }}
                                                whileHover={{ x: 10 }}
                                            >
                                                <motion.div
                                                    className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-teal-500"
                                                    whileHover={{ scale: 1.5 }}
                                                    transition={{ duration: 0.2 }}
                                                />
                                                <span className="font-medium group-hover/item:text-orange-600 transition-colors duration-300">
                                                    {skill}
                                                </span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
