"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Megaphone, Users, MessageCircle } from "lucide-react";

import { communityData } from "@/lib/data";
import { SectionHeading } from "@/components/ui/typography";

const icons = {
    influencer: Megaphone,
    freelancer: Users,
} as const;

const CommunityBanner: React.FC = () => {
    return (
        <section id="community" className="section-shell">
            <div className="section-inner">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                    <SectionHeading
                        eyebrow={communityData.badge}
                        title={
                            <>
                                {communityData.title}{" "}
                                <span className="text-accent">{communityData.titleAccent}</span>
                            </>
                        }
                        description={communityData.description}
                    />
                    <Link
                        href="/community"
                        className="btn-secondary inline-flex h-10 shrink-0 gap-2 self-start px-4 text-sm sm:self-auto"
                    >
                        View community hub
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                    {communityData.groups.map((group, index) => {
                        const Icon = icons[group.id];
                        return (
                            <motion.article
                                key={group.id}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.06 }}
                                viewport={{ once: true, margin: "-40px" }}
                                className="surface-card flex flex-col p-6 md:p-7"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div className="icon-badge">
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-white/50">
                                        {group.memberLabel}
                                    </span>
                                </div>
                                <p className="mt-4 text-xs font-medium uppercase tracking-wider text-orange-300/80">
                                    {group.tagline}
                                </p>
                                <h3 className="type-card-title mt-1">{group.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-white/58">{group.description}</p>
                                <ul className="mt-4 space-y-1.5">
                                    {group.benefits.map((benefit) => (
                                        <li key={benefit} className="flex items-center gap-2 text-sm text-white/65">
                                            <span className="h-1 w-1 rounded-full bg-orange-400" />
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href={group.whatsappGroupUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary mt-6 inline-flex h-11 w-full gap-2 text-sm sm:w-auto"
                                >
                                    <MessageCircle className="h-4 w-4" />
                                    Join WhatsApp group
                                </a>
                            </motion.article>
                        );
                    })}
                </div>

                <p className="mt-4 text-center text-xs text-white/40 sm:text-left">{communityData.note}</p>
            </div>
        </section>
    );
};

export default CommunityBanner;
