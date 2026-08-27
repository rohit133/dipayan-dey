"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Calendar, MapPin, Video } from "lucide-react";

import { eventsData } from "@/lib/data";
import type { EventCategory } from "@/types";
import { BodyText, SectionTitle } from "@/components/ui/typography";

const filters: { id: "all" | EventCategory; label: string }[] = [
    { id: "all", label: "All" },
    { id: "influencer", label: "Influencer" },
    { id: "performance", label: "Performance" },
    { id: "founders", label: "Founders & startups" },
];

const formatIcons = {
    Online: Video,
    Hybrid: Video,
    "In-person": MapPin,
} as const;

function formatEventDate(iso: string) {
    return new Date(iso).toLocaleDateString("en-IN", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });
}

const EventsPageContent: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<"all" | EventCategory>("all");

    const filtered = useMemo(
        () =>
            activeFilter === "all"
                ? eventsData.events
                : eventsData.events.filter((e) => e.category === activeFilter),
        [activeFilter]
    );

    return (
        <div className="section-inner px-4 sm:px-6 lg:px-8">
            <Link
                href="/"
                className="mb-8 inline-flex items-center gap-2 text-sm text-white/55 transition-colors hover:text-white"
            >
                <ArrowLeft className="h-4 w-4" />
                Back to home
            </Link>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
                <p className="type-eyebrow inline-flex items-center gap-2">
                    <span className="h-px w-6 bg-orange-500/50" aria-hidden />
                    {eventsData.badge}
                </p>
                <SectionTitle className="mt-4">
                    {eventsData.title}{" "}
                    <span className="text-accent">{eventsData.titleAccent}</span>
                </SectionTitle>
                <BodyText className="mt-4 text-white/60">{eventsData.description}</BodyText>
            </motion.div>

            <div className="mt-8 flex flex-wrap gap-2">
                {filters.map((filter) => (
                    <button
                        key={filter.id}
                        type="button"
                        onClick={() => setActiveFilter(filter.id)}
                        className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                            activeFilter === filter.id
                                ? "bg-orange-500 text-white shadow-lg shadow-orange-500/25"
                                : "border border-white/10 bg-white/[0.03] text-white/65 hover:border-white/20 hover:text-white"
                        }`}
                    >
                        {filter.label}
                    </button>
                ))}
            </div>

            <div className="mt-8 space-y-4">
                <AnimatePresence mode="popLayout">
                    {filtered.map((event, index) => {
                        const FormatIcon = formatIcons[event.format] ?? Calendar;
                        return (
                            <motion.article
                                key={event.id}
                                layout
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.25, delay: index * 0.04 }}
                                className="surface-card flex flex-col gap-5 p-6 md:flex-row md:items-center md:justify-between md:p-7"
                            >
                                <div className="flex-1">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <span className="rounded-full border border-orange-500/25 bg-orange-500/10 px-2.5 py-1 text-[11px] font-medium text-orange-200">
                                            {event.categoryLabel}
                                        </span>
                                        <span className="text-xs text-white/40">{event.spotsLabel}</span>
                                    </div>
                                    <h2 className="type-card-title mt-3 text-xl md:text-2xl">{event.title}</h2>
                                    <div className="mt-3 flex flex-col gap-1.5 text-sm text-white/55 sm:flex-row sm:flex-wrap sm:gap-4">
                                        <span className="flex items-center gap-2">
                                            <Calendar className="h-3.5 w-3.5 text-orange-300/80" />
                                            {formatEventDate(event.date)} · {event.time}
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <FormatIcon className="h-3.5 w-3.5 text-orange-300/80" />
                                            {event.format} · {event.location}
                                        </span>
                                    </div>
                                    <BodyText className="mt-3 max-w-2xl text-white/58">{event.description}</BodyText>
                                </div>
                                <a
                                    href={event.registerUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary inline-flex h-11 shrink-0 px-6 text-sm md:self-center"
                                >
                                    {event.registerLabel}
                                </a>
                            </motion.article>
                        );
                    })}
                </AnimatePresence>
            </div>

            {filtered.length === 0 && (
                <p className="mt-8 text-center text-white/50">No events in this category yet. Check back soon.</p>
            )}
        </div>
    );
};

export default EventsPageContent;
