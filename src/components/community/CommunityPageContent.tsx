"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    ArrowLeft,
    CheckCircle2,
    Megaphone,
    MessageCircle,
    Shield,
    Users,
} from "lucide-react";

import { communityData } from "@/lib/data";
import { BodyText, SectionTitle } from "@/components/ui/typography";

const icons = {
    influencer: Megaphone,
    freelancer: Users,
} as const;

const CommunityPageContent: React.FC = () => {
    return (
        <div className="section-inner px-4 sm:px-6 lg:px-8">
            <Link
                href="/"
                className="mb-8 inline-flex items-center gap-2 text-sm text-white/55 transition-colors hover:text-white"
            >
                <ArrowLeft className="h-4 w-4" />
                Back to home
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-3xl"
            >
                <p className="type-eyebrow inline-flex items-center gap-2">
                    <span className="h-px w-6 bg-orange-500/50" aria-hidden />
                    {communityData.badge}
                </p>
                <SectionTitle className="mt-4">
                    {communityData.title}{" "}
                    <span className="text-accent">{communityData.titleAccent}</span>
                </SectionTitle>
                <BodyText className="mt-4 text-white/60">{communityData.description}</BodyText>
            </motion.div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
                {communityData.groups.map((group, index) => {
                    const Icon = icons[group.id];
                    return (
                        <motion.article
                            key={group.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 + index * 0.08 }}
                            className="surface-featured flex flex-col p-6 md:p-8"
                        >
                            <div className="flex items-center justify-between">
                                <div className="icon-badge h-12 w-12">
                                    <Icon className="h-6 w-6" />
                                </div>
                                <span className="text-xs font-medium text-white/45">{group.memberLabel}</span>
                            </div>
                            <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-orange-300/90">
                                {group.tagline}
                            </p>
                            <h2 className="type-card-title mt-2 text-2xl">{group.title}</h2>
                            <BodyText className="mt-3 text-white/58">{group.description}</BodyText>

                            <ul className="mt-6 space-y-3">
                                {group.benefits.map((benefit) => (
                                    <li key={benefit} className="flex items-center gap-3 text-sm text-white/70">
                                        <CheckCircle2 className="h-4 w-4 shrink-0 text-orange-400" />
                                        {benefit}
                                    </li>
                                ))}
                            </ul>

                            <a
                                href={group.whatsappGroupUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary mt-8 inline-flex h-12 w-full gap-2 text-base sm:w-auto sm:px-8"
                            >
                                <MessageCircle className="h-5 w-5" />
                                Join on WhatsApp
                            </a>
                            <p className="mt-3 text-xs text-white/40">
                                Opens WhatsApp to join the group. Link opens in a new tab.
                            </p>
                        </motion.article>
                    );
                })}
            </div>

            <div className="surface-card-static mt-10 flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:gap-6 md:p-8">
                <div className="icon-badge shrink-0">
                    <Shield className="h-5 w-5" />
                </div>
                <div>
                    <h3 className="type-subheading">Community guidelines</h3>
                    <BodyText className="mt-2 text-white/55">
                        {communityData.note} No unsolicited DMs to members. Brand briefs are posted by Adbibe or
                        vetted partners only. Report spam to hello@adbibe.com.
                    </BodyText>
                </div>
            </div>
        </div>
    );
};

export default CommunityPageContent;
