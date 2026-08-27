"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { footerData } from "@/lib/data";

const LAST_UPDATED = "July 31, 2026";

export default function AIDisclosure() {
    return (
        <main className="min-h-screen bg-white px-4 py-28 text-gray-950 sm:py-32">
            <div className="mx-auto max-w-3xl">
                <Link
                    href="/"
                    className="group mb-10 inline-flex items-center text-sm font-semibold uppercase tracking-widest text-gray-500 transition-colors hover:text-gray-950"
                >
                    <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    Back to Home
                </Link>

                <motion.h1
                    className="mb-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    How Adbibe Uses AI
                </motion.h1>
                <p className="mb-10 text-sm text-gray-500">Last updated: {LAST_UPDATED}</p>

                <div className="space-y-8 text-base leading-relaxed text-gray-700">
                    <p>
                        Adbibe is an AI-powered marketing agency, and we believe in being transparent about
                        exactly how AI fits into our work.
                    </p>

                    <section>
                        <h2 className="mb-3 text-xl font-semibold text-gray-950">Where we use AI</h2>
                        <ul className="list-disc space-y-2 pl-5">
                            <li>Creative testing and variant generation (ad copy, headline testing)</li>
                            <li>
                                Data analysis and reporting automation (pulling insights from campaign data
                                faster)
                            </li>
                            <li>Programmatic bid and pacing optimization</li>
                            <li>
                                Research and first-draft content generation, always reviewed and edited by our
                                team before publishing or shipping to a client
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="mb-3 text-xl font-semibold text-gray-950">Where we don&apos;t rely on AI</h2>
                        <ul className="list-disc space-y-2 pl-5">
                            <li>
                                Strategic decisions on budget allocation, positioning, and account structure —
                                made by our founder-led team, not automated
                            </li>
                            <li>Client communication and reporting — reviewed by a human before it reaches you</li>
                            <li>Final creative and messaging approval</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="mb-3 text-xl font-semibold text-gray-950">Why this matters to you</h2>
                        <p>
                            AI helps us move faster and test more, but it doesn&apos;t replace the judgment that
                            determines whether a campaign is actually working. Every AI-assisted output that
                            leaves Adbibe is reviewed by a human before it&apos;s used on your account.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-xl font-semibold text-gray-950">Questions</h2>
                        <p>{footerData.contact.email}</p>
                    </section>
                </div>
            </div>
        </main>
    );
}
