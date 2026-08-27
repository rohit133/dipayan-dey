"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

import { contactData, leadMagnetData } from "@/lib/data";
import { CalModalButton } from "@/components/ui/CalModalButton";
import { SectionHeading } from "@/components/ui/typography";

const LeadMagnet: React.FC = () => {
    return (
        <section className="section-shell section-alt">
            <div className="section-inner max-w-3xl">
                <motion.div
                    className="surface-featured p-6 sm:p-8"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                        <div className="flex-1">
                            <div className="icon-badge mb-4">
                                <FileText className="h-5 w-5" />
                            </div>
                            <SectionHeading
                                eyebrow={leadMagnetData.badge}
                                title={
                                    <>
                                        {leadMagnetData.title}{" "}
                                        <span className="text-accent">{leadMagnetData.titleItalic}</span>
                                    </>
                                }
                                description={leadMagnetData.subtitle}
                                compact
                            />

                            <div className="mt-4 flex flex-wrap gap-2">
                                {leadMagnetData.benefits.map((benefit) => (
                                    <span key={benefit} className="chip text-xs">
                                        {benefit}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex shrink-0 flex-col gap-2.5 sm:min-w-[200px]">
                            <Link
                                href="/adbibe-growth-blueprint.txt"
                                download
                                className="btn-primary h-11 gap-2 text-sm"
                            >
                                <Download className="h-4 w-4" />
                                {leadMagnetData.cta}
                            </Link>
                            <CalModalButton
                                calLink={contactData.calCom}
                                className="btn-secondary h-11 text-sm"
                            >
                                Book a call
                            </CalModalButton>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default LeadMagnet;
