"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate, useSpring, useMotionValue, MotionValue } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { projectsData } from '@/lib/data';
import ProjectModal from './ProjectModal';
import { Project } from '@/types';

const Projects: React.FC = () => {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"],
    });

    const projectList = projectsData.projects;
    const totalProjects = projectList.length;
    // Length: Intro (1 screen) + 1 screen per project
    const containerHeight = `${(totalProjects + 1) * 100}vh`;

    // Title Animation: Fades out in the first 10% of scroll
    const titleOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
    const titleY = useTransform(scrollYProgress, [0, 0.1], [0, -100]);
    const titleScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.9]);

    const handleOpenModal = (project: Project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    return (
        <section
            ref={targetRef}
            className="relative bg-transparent text-white"
            style={{ height: containerHeight }}
        >
            <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">


                {/* 1. Introductory Title Sequence */}
                <motion.div
                    style={{ opacity: titleOpacity, y: titleY, scale: titleScale }}
                    className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none px-4"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center text-center"
                    >
                        <div className="flex items-center gap-3 mb-6 bg-white/5 border border-white/10 px-5 py-2 rounded-full backdrop-blur-md">
                            <Sparkles className="w-4 h-4 text-orange-400" />
                            <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/80 font-sans">
                                {projectsData.badge}
                            </span>
                        </div>
                        <h2 className="text-5xl md:text-8xl font-medium tracking-tighter text-white font-display mb-4">
                            {projectsData.title}<span className="text-white/20 italic font-serif ml-4">{projectsData.titleItalic}</span>
                        </h2>
                        <p className="max-w-md text-white/50 text-sm md:text-base font-sans tracking-wide leading-relaxed">
                            Scroll to explore selected case studies
                        </p>
                    </motion.div>
                </motion.div>

                {/* 2. Project Cards Stack */}
                <div className="relative w-full h-full max-w-[90vw] md:max-w-[70vw] mx-auto flex items-center justify-center z-10">
                    {projectList.map((project, index) => {
                        const step = 0.9 / totalProjects;
                        const start = 0.1 + (index * step);
                        const end = start + step;

                        return (
                            <SpotlightCard
                                key={project.id}
                                project={project}
                                index={index}
                                scrollProgress={scrollYProgress}
                                range={[start, end]}
                                onOpenModal={handleOpenModal}
                            />
                        );
                    })}
                </div>

                {/* Progress Indicator */}
                <div className="absolute bottom-12 left-12 z-50 flex gap-2">
                    {projectList.map((_, i) => (
                        <motion.div
                            key={i}
                            className="w-1.5 h-1.5 rounded-full bg-white/20"
                            style={{
                                backgroundColor: useTransform(
                                    scrollYProgress,
                                    [0.1 + (i * (0.9 / totalProjects)), 0.1 + ((i + 1) * (0.9 / totalProjects))],
                                    ["rgba(255,255,255,0.2)", "rgba(249,115,22,1)"] // Orange when active
                                )
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Modal */}
            <ProjectModal
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
};

interface CardProps {
    project: Project;
    index: number;
    scrollProgress: MotionValue<number>;
    range: [number, number];
    onOpenModal: (project: Project) => void;
}

const SpotlightCard: React.FC<CardProps> = ({ project, index, scrollProgress, range, onOpenModal }) => {
    const [start, end] = range;
    const fadeDuration = (end - start) * 0.2; // 20% of duration for fade

    // Animation Logic
    const opacity = useTransform(
        scrollProgress,
        [start - fadeDuration, start, end - fadeDuration, end],
        [0, 1, 1, 0]
    );

    const scale = useTransform(
        scrollProgress,
        [start - fadeDuration, start, end],
        [0.9, 1, 1.05] // Subtle grow while active
    );

    const x = useTransform(
        scrollProgress,
        [start - fadeDuration, start],
        [100, 0] // Slide in from right slightly (or left?)
        // Request: "fade in from the left" -> means starting X should be negative? 
        // Let's try starting X = -50 -> 0
    );
    // Slide in from RIGHT (positive x)
    const xRight = useTransform(scrollProgress, [start - fadeDuration, start], [100, 0]);

    // Internal Mouse/Spotlight Logic
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        let { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            style={{
                opacity,
                scale,
                x: xRight,
                // Only interactable when visible?
                pointerEvents: useTransform(opacity, v => v > 0.5 ? 'auto' : 'none')
            }}
            className="absolute inset-0 flex items-center justify-center p-4 md:p-8"
        >
            <div
                onMouseMove={onMouseMove}
                className="group relative w-full h-[60vh] md:h-[70vh] bg-[#0a0a0a] border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl"
            >
                {/* 1. Default Content (Text Poster) - Always Visible */}
                <div className="absolute inset-0 p-6 md:p-16 flex flex-col justify-between z-20 pointer-events-none">
                    <div className="flex justify-between items-start">
                        <div className="flex flex-col gap-3 md:gap-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md w-fit">
                                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                                <span className="text-[10px] font-bold uppercase tracking-widest text-white/70">{project.category}</span>
                            </div>
                            <h1 className="text-3xl md:text-7xl font-medium text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40 font-display leading-[1.1] md:leading-[0.9] tracking-tight uppercase drop-shadow-sm">
                                {project.title}
                            </h1>
                        </div>
                        <button
                            onClick={() => onOpenModal(project)}
                            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-orange-500 hover:bg-white/10 hover:border-orange-500/50 transition-all group/btn pointer-events-auto"
                        >
                            <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-end">
                        <div className="space-y-4 md:space-y-6">
                            <p className="text-base md:text-2xl text-white/60 font-light leading-relaxed max-w-sm md:max-w-none">
                                {project.description}
                            </p>
                            <div className="flex gap-3 md:gap-4">
                                {project.tags?.map((tag: string, i: number) => (
                                    <span key={i} className="text-[10px] font-mono text-white/20 uppercase tracking-wider">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 md:gap-4">
                            {project.metrics.slice(0, 3).map((metric: any, i: number) => (
                                <div key={i} className="flex flex-col border-b border-white/5 pb-1 md:pb-2">
                                    <span className="text-xl md:text-3xl font-bold text-white">{metric.value}</span>
                                    <span className="text-[8px] md:text-[10px] uppercase tracking-widest text-white/40 font-bold">{metric.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 2. The Reveal Layer (Image) - Masked by Cursor */}
                {/* This layer sits ON TOP of specific elements or behind? 
                    Request: "hovering over the card will reveal the image from the back"
                    Technically, if it reveals from back, the TEXT must be transparent?
                    Or maybe the image appears ON TOP but masked?
                    Let's try: Image is Background, but covered by the dark "Poster" layer.
                    The Poster Layer is masked OUT by the cursor to reveal the image behind.
                    
                    Wait, CSS Masking is tricky for "Holes".
                    Easier: 
                    Background: Dark Poster Color.
                    Foreground: Image.
                    Image is MASKED to only show at cursor.
                */}

                <motion.div
                    className="absolute inset-0 z-10 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${project.image})`,
                        maskImage: useMotionTemplate`radial-gradient(220px circle at ${mouseX}px ${mouseY}px, black 40%, transparent 100%)`,
                        WebkitMaskImage: useMotionTemplate`radial-gradient(220px circle at ${mouseX}px ${mouseY}px, black 40%, transparent 100%)`,
                    }}
                >
                    {/* Add a separate overlay inside the reveal so text is still readable if needed, or leave raw image for maximum impact */}
                    <div className="absolute inset-0 bg-black/20" />
                </motion.div>

                {/* Grid Pattern overlay for texture on the dark side */}
                <div className="absolute inset-0 z-0 opacity-[0.05] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

            </div>
        </motion.div>
    );
};

export default Projects;
