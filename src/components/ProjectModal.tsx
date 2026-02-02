"use client";

import React, { useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { X, ExternalLink, CheckCircle2 } from 'lucide-react';
import { Project } from '@/types';

interface ProjectModalProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
    // 3D Tilt State
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "7deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = (mouseX / width) - 0.5;
        const yPct = (mouseY / height) - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
            x.set(0);
            y.set(0);
        };
    }, [isOpen]);

    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 overflow-hidden">
                    {/* Immersive Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/85 backdrop-blur-2xl"
                    />

                    {/* Modal Wrapper - 3D Perspective Parent */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotateX: 15, y: 40, perspective: 1200 }}
                        animate={{ opacity: 1, scale: 1, rotateX: 0, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, rotateX: -10, y: 20 }}
                        transition={{ type: "spring", damping: 22, stiffness: 120 }}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        style={{
                            rotateX,
                            rotateY,
                            transformStyle: "preserve-3d",
                        }}
                        className="relative w-full max-w-7xl h-full max-h-[90vh] z-10"
                    >
                        {/* 1. Close Button - Floating ABOVE clipping area */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 md:top-6 md:right-6 z-[100] p-3 md:p-4 rounded-full bg-black/60 border border-white/20 text-white hover:bg-orange-500 transition-all hover:scale-110 shadow-2xl backdrop-blur-3xl"
                            style={{ transform: "translateZ(100px)" }}
                        >
                            <X className="w-5 h-5 md:w-6 md:h-6" />
                        </button>

                        {/* 2. Main Card Body - With clipping and aesthetic layers */}
                        <div
                            className="relative w-full h-full bg-neutral-950/40 backdrop-blur-3xl border border-white/10 rounded-[3rem] overflow-hidden flex flex-col md:flex-row shadow-[0_50px_100px_rgba(0,0,0,0.8)]"
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            {/* Texture Layers */}
                            <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent" />
                            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150" />

                            {/* Image Side - 3D Visual Anchor */}
                            <div
                                className="w-full md:w-[38%] h-64 md:h-auto relative overflow-hidden bg-black/20 flex items-center justify-center p-6 md:p-8 lg:p-10"
                                style={{ transform: "translateZ(15px)" }}
                            >
                                <motion.div
                                    className="relative w-full aspect-[4/5] md:aspect-[3/4] rounded-[2rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.6)] bg-neutral-800"
                                    style={{ transform: "translateZ(30px)" }}
                                >
                                    <motion.img
                                        src={project.image}
                                        alt={project.title}
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                                    {/* Float Badge */}
                                    <div className="absolute bottom-6 left-6" style={{ transform: "translateZ(20px)" }}>
                                        <span className="px-3 py-1.5 rounded-full bg-orange-500 text-[10px] font-bold uppercase tracking-[0.2em] text-white shadow-lg">
                                            {project.category}
                                        </span>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Text Side - Precision Content */}
                            <div
                                className="w-full md:w-[62%] h-full overflow-y-auto p-6 md:p-12 text-white custom-scrollbar relative z-10 font-sans"
                                style={{ transform: "translateZ(20px)" }}
                            >
                                <div className="space-y-10 pb-24 md:pb-32">
                                    {/* Header Section */}
                                    <header className="space-y-4 md:space-y-6">
                                        <div className="flex items-center gap-3 text-orange-500">
                                            <div className="h-[1px] w-8 bg-orange-500" />
                                            <h3 className="text-[9px] font-bold uppercase tracking-[0.4em]">Case Study</h3>
                                        </div>

                                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-medium leading-[1] text-white tracking-tighter">
                                            {project.title.split(' (').map((part, i) => (
                                                <span key={i} className={i === 1 ? "block text-white/40 text-lg md:text-2xl mt-2 italic font-light font-display" : "block"}>
                                                    {i === 1 ? `(${part}` : part}
                                                </span>
                                            ))}
                                        </h2>

                                        <p className="text-base md:text-lg lg:text-xl text-white/70 font-light leading-relaxed font-display max-w-2xl border-l-[1px] border-white/10 pl-5">
                                            {project.fullDescription || project.description}
                                        </p>
                                    </header>

                                    {/* Metrics Grid */}
                                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                                        {project.metrics.map((metric, i) => (
                                            <div
                                                key={i}
                                                className="relative p-4 md:p-6 bg-white/[0.03] border border-white/5 rounded-[1.5rem] group hover:bg-white/[0.06] transition-all overflow-hidden flex flex-col justify-end min-h-[100px] md:min-h-[130px]"
                                            >
                                                <div className="absolute top-0 right-0 w-12 h-12 bg-orange-500/5 blur-xl rounded-full" />
                                                <div className="relative z-10">
                                                    <div className="text-lg md:text-xl lg:text-2xl font-bold text-orange-500 mb-1 font-display leading-[1.1] break-words">
                                                        {metric.value}
                                                    </div>
                                                    <div className="text-[8px] uppercase tracking-[0.2em] text-white/40 font-bold">
                                                        {metric.label}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Deep Dive Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                                        {project.challenge && (
                                            <section className="space-y-3">
                                                <h4 className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/30 flex items-center gap-2">
                                                    <div className="w-1 h-1 rounded-full border border-white/30" /> Challenge
                                                </h4>
                                                <p className="text-white/60 leading-relaxed text-sm font-light">
                                                    {project.challenge}
                                                </p>
                                            </section>
                                        )}
                                        {project.solution && (
                                            <section className="space-y-3">
                                                <h4 className="text-[9px] font-bold uppercase tracking-[0.3em] text-orange-500/50 flex items-center gap-2">
                                                    <div className="w-1 h-1 rounded-full bg-orange-500/50" /> Strategy
                                                </h4>
                                                <p className="text-white/60 leading-relaxed text-sm font-light">
                                                    {project.solution}
                                                </p>
                                            </section>
                                        )}
                                    </div>

                                    {/* Outcome Highlight */}
                                    {project.result && (
                                        <section className="relative p-8 md:p-10 bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 rounded-[2rem] overflow-hidden group">
                                            <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/10 blur-[80px] -mr-24 -mt-24 transition-transform group-hover:scale-125 duration-1000" />
                                            <div className="space-y-4 relative z-10">
                                                <CheckCircle2 className="w-8 h-8 text-orange-500 opacity-80" />
                                                <div className="space-y-2">
                                                    <h4 className="text-[9px] font-bold uppercase tracking-[0.4em] text-orange-500/80">Key Outcome</h4>
                                                    <p className="text-xl md:text-2xl text-white font-medium font-display leading-[1.1] tracking-tight">
                                                        {project.result}
                                                    </p>
                                                </div>
                                            </div>
                                        </section>
                                    )}

                                    {/* Footer & Action Area */}
                                    <footer className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                                        <div className="space-y-4">
                                            <h4 className="text-[8px] font-bold uppercase tracking-[0.4em] text-white/20">Omni Channels</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {project.channels.map((channel, i) => (
                                                    <span key={i} className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/5 text-[8px] font-medium uppercase tracking-[0.1em] text-white/40 hover:text-white transition-all cursor-default">
                                                        {channel}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex flex-col items-end gap-4 w-full md:w-auto">
                                            <button className="w-full md:w-auto flex items-center justify-center gap-3 bg-orange-500 text-white hover:bg-white hover:text-black px-8 py-4 rounded-full transition-all duration-300 shadow-[0_10px_30px_rgba(249,115,22,0.3)] group">
                                                <span className="text-[9px] font-bold uppercase tracking-[0.2em]">Live Preview</span>
                                                <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                            </button>
                                        </div>
                                    </footer>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;
