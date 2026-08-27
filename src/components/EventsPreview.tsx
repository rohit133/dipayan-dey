"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin, Video } from "lucide-react";

import { eventsData } from "@/lib/data";
import { SectionHeading } from "@/components/ui/typography";

const formatIcons = {
    Online: Video,
    Hybrid: Video,
    "In-person": MapPin,
} as const;

function formatEventDate(iso: string) {
    return new Date(iso).toLocaleDateString("en-IN", {
        weekday: "short",
        day: "numeric",
        month: "short",
        year: "numeric",
    });
}

const EventsPreview: React.FC = () => {
    const featured = eventsData.events.slice(0, 3);

    return (
        <section id="events" className="section-shell section-alt">
            <div className="section-inner">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                    <SectionHeading
                        eyebrow={eventsData.badge}
                        title={
                            <>
                                {eventsData.title}{" "}
                                <span className="text-accent">{eventsData.titleAccent}</span>
                            </>
                        }
                        description={eventsData.description}
                    />
                    <Link
                        href="/events"
                        className="btn-secondary inline-flex h-10 shrink-0 gap-2 self-start px-4 text-sm sm:self-auto"
                    >
                        All events
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>

                <div className="mt-8 grid gap-4 lg:grid-cols-3">
                    {featured.map((event, index) => {
                        const FormatIcon = formatIcons[event.format] ?? Calendar;
                        return (
                            <motion.article
                                key={event.id}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.06 }}
                                viewport={{ once: true, margin: "-40px" }}
                                className="surface-card flex flex-col p-5 md:p-6"
                            >
                                <span className="w-fit rounded-full border border-orange-500/25 bg-orange-500/10 px-2.5 py-1 text-[11px] font-medium text-orange-200">
                                    {event.categoryLabel}
                                </span>
                                <h3 className="type-card-title mt-3 text-lg">{event.title}</h3>
                                <div className="mt-3 space-y-1.5 text-sm text-white/55">
                                    <p className="flex items-center gap-2">
                                        <Calendar className="h-3.5 w-3.5 shrink-0 text-orange-300/80" />
                                        {formatEventDate(event.date)} · {event.time}
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <FormatIcon className="h-3.5 w-3.5 shrink-0 text-orange-300/80" />
                                        {event.format} · {event.location}
                                    </p>
                                </div>
                                <p className="mt-3 flex-1 text-sm text-white/58">{event.description}</p>
                                <a
                                    href={event.registerUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary mt-5 inline-flex h-10 w-full text-sm"
                                >
                                    {event.registerLabel}
                                </a>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default EventsPreview;
