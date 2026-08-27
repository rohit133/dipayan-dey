"use client";

import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";

import { type Project } from "@/types";
import { contactData } from "@/lib/data";
import { CalModalButton } from "@/components/ui/CalModalButton";
import { BodyText, CardTitle, Eyebrow, Subheading } from "@/components/ui/typography";

interface ProjectModalProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            window.lenis?.stop();
        } else {
            document.body.style.overflow = "unset";
            window.lenis?.start();
        }

        return () => {
            document.body.style.overflow = "unset";
            window.lenis?.start();
        };
    }, [isOpen]);

    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-xl"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.96, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.96, y: 20 }}
                        transition={{ duration: 0.2 }}
                        className="surface-card-static relative z-10 w-full max-w-5xl overflow-hidden rounded-2xl shadow-[0_30px_100px_rgba(0,0,0,0.55)]"
                    >
                        <button
                            onClick={onClose}
                            className="absolute right-4 top-4 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/55 text-white transition-colors hover:bg-sky-500"
                            aria-label="Close case study"
                        >
                            <X className="h-5 w-5" />
                        </button>

                        <div
                            data-lenis-prevent
                            className="grid max-h-[88vh] overflow-y-auto overscroll-contain md:grid-cols-[0.82fr_1.18fr]"
                        >
                            <div className="relative min-h-[260px] overflow-hidden border-b border-white/10 md:min-h-full md:border-b-0 md:border-r">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="absolute inset-0 h-full w-full object-cover"
                                    />
                                ) : (
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.25),transparent_35%),linear-gradient(135deg,#111,#1f1f1f)]" />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6">
                                    <Eyebrow className="text-sky-200">{project.category}</Eyebrow>
                                    <CardTitle className="mt-3 text-xl sm:text-2xl">{project.title}</CardTitle>
                                </div>
                            </div>

                            <div className="space-y-8 p-6 text-white md:p-8">
                                <header className="space-y-4">
                                    <Eyebrow className="text-white/42">Case study breakdown</Eyebrow>
                                    <BodyText className="mt-2">
                                        {project.fullDescription || project.description}
                                    </BodyText>
                                </header>

                                <div className="grid gap-3 sm:grid-cols-3">
                                    {project.metrics.map((metric) => (
                                        <div
                                            key={`${project.id}-${metric.label}`}
                                            className="rounded-3xl border border-white/10 bg-white/[0.03] p-4"
                                        >
                                            <div className="type-stat text-sky-300">{metric.value}</div>
                                            <div className="mt-1 text-xs uppercase tracking-[0.16em] text-white/42">
                                                {metric.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="grid gap-6 md:grid-cols-2">
                                    {project.challenge && (
                                        <section className="rounded-[1.75rem] border border-white/10 bg-black/20 p-5">
                                            <Eyebrow className="text-white/42">Challenge</Eyebrow>
                                            <BodyText className="mt-3">{project.challenge}</BodyText>
                                        </section>
                                    )}
                                    {project.solution && (
                                        <section className="rounded-[1.75rem] border border-white/10 bg-black/20 p-5">
                                            <Eyebrow className="text-white/42">Approach</Eyebrow>
                                            <BodyText className="mt-3">{project.solution}</BodyText>
                                        </section>
                                    )}
                                </div>

                                {project.result && (
                                    <section className="rounded-[1.75rem] border border-sky-500/20 bg-sky-500/10 p-5">
                                        <div className="flex items-start gap-3">
                                            <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-sky-200" />
                                            <div>
                                                <Eyebrow className="text-sky-100">Outcome</Eyebrow>
                                                <Subheading className="mt-3 text-sky-50">
                                                    {project.result}
                                                </Subheading>
                                            </div>
                                        </div>
                                    </section>
                                )}

                                <div>
                                    <Eyebrow className="text-white/42">Channels used</Eyebrow>
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {project.channels.map((channel) => (
                                            <span
                                                key={`${project.id}-${channel}`}
                                                className="rounded-full border border-white/10 px-3 py-1.5 text-xs font-medium text-white/58"
                                            >
                                                {channel}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <CalModalButton
                                    calLink={contactData.calCom}
                                    className="w-full rounded-full bg-sky-500 px-6 py-3 text-base font-semibold text-white hover:bg-sky-400 sm:w-auto"
                                >
                                    Discuss a similar growth plan
                                </CalModalButton>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;
