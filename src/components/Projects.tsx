"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { type Project } from "@/types";
import { projectsData } from "@/lib/data";
import ProjectModal from "./ProjectModal";
import { BodyText, CardTitle, SectionHeading } from "@/components/ui/typography";

const Projects: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = (project: Project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    return (
        <section id="projects" className="section-shell">
            <div className="section-inner">
                <SectionHeading
                    eyebrow={projectsData.badge}
                    title={
                        <>
                            {projectsData.title}{" "}
                            <span className="text-accent">{projectsData.titleItalic}</span>
                        </>
                    }
                />

                <div className="mt-8 grid gap-4 lg:grid-cols-2">
                    {projectsData.projects.map((project, index) => (
                        <motion.article
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.45, delay: index * 0.06 }}
                            viewport={{ once: true, margin: "-40px" }}
                            className="surface-card group p-6 md:p-7"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <p className="text-xs font-medium uppercase tracking-wider text-sky-300/80">
                                        {project.category}
                                    </p>
                                    <CardTitle className="mt-2">{project.title}</CardTitle>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => handleOpenModal(project)}
                                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/70 transition-all hover:border-sky-400/35 hover:bg-sky-500/10 hover:text-sky-200 group-hover:border-sky-400/25"
                                    aria-label={`View details for ${project.title}`}
                                >
                                    <ArrowUpRight className="h-4 w-4" />
                                </button>
                            </div>

                            <BodyText className="mt-4 text-white/60">{project.description}</BodyText>

                            <div className="mt-5 grid gap-2.5 sm:grid-cols-3">
                                {project.metrics.map((metric) => (
                                    <div
                                        key={`${project.id}-${metric.label}`}
                                        className="rounded-xl border border-white/[0.06] bg-black/25 px-3 py-3"
                                    >
                                        <div className="type-stat text-lg">{metric.value}</div>
                                        <div className="mt-0.5 text-[10px] font-medium uppercase tracking-wider text-white/40">
                                            {metric.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>

            <ProjectModal
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
};

export default Projects;
