"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import { projectsData } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import NoiseBackground from './NoiseBackground';
import SectionHeader from './SectionHeader';

const Projects: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const categories = ['All', ...Array.from(new Set(projectsData.map(p => p.category)))];

    const filteredProjects = selectedCategory === 'All'
        ? projectsData
        : projectsData.filter(p => p.category === selectedCategory);

    return (
        <section id="projects" className="py-32 bg-white relative overflow-hidden">
            <NoiseBackground />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <SectionHeader
                    title="Recent Results"
                    subtitle="Real campaigns. Real numbers. No fluff."
                />

                {/* Category Filter */}
                <motion.div
                    className="flex flex-wrap gap-3 mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    {categories.map((category) => (
                        <motion.button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 border-2 ${selectedCategory === category
                                ? 'bg-gray-900 text-white border-gray-900'
                                : 'bg-white text-gray-900 border-gray-900 hover:bg-gray-900 hover:text-white'
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {category}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedCategory}
                        className="grid md:grid-cols-2 gap-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group"
                            >
                                <div className="relative mb-6 aspect-[4/3] overflow-hidden bg-gray-100 border-4 border-gray-900">
                                    <motion.img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                        whileHover={{ scale: 1.05 }}
                                    />
                                </div>

                                <div className="flex items-center justify-between mb-3">
                                    <Badge className="bg-gray-900 text-white hover:bg-gray-800 text-xs font-bold px-3 py-1">
                                        {project.category}
                                    </Badge>
                                </div>

                                <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-3 group-hover:text-orange-600 transition-colors font-display">
                                    {project.title}
                                </h3>

                                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                                    {project.description}
                                </p>

                                {/* Metrics */}
                                <div className="grid grid-cols-3 gap-6 mb-6 pb-6 border-b-2 border-gray-200">
                                    {project.metrics.map((metric, idx) => (
                                        <div key={idx}>
                                            <div className="flex items-center gap-1 text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                                                {metric.value}
                                                <TrendingUp className="w-5 h-5 text-orange-600" />
                                            </div>
                                            <div className="text-xs text-gray-600 font-semibold uppercase tracking-wide">
                                                {metric.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Channels */}
                                <div className="flex flex-wrap gap-2">
                                    {project.channels.map((channel, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 bg-gray-100 text-gray-900 rounded-full text-sm font-semibold border border-gray-300"
                                        >
                                            {channel}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Projects;
