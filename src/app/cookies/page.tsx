"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { footerData } from "@/lib/data";

const LAST_UPDATED = "July 31, 2026";

export default function CookiesPolicy() {
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
                    {footerData.legal.cookies.title}
                </motion.h1>
                <p className="mb-10 text-sm text-gray-500">Last updated: {LAST_UPDATED}</p>

                <div className="space-y-8 text-base leading-relaxed text-gray-700">
                    <p>
                        This site uses cookies and similar technologies to improve functionality, understand site
                        usage, and deliver relevant ads.
                    </p>

                    <section>
                        <h2 className="mb-3 text-xl font-semibold text-gray-950">Types of cookies we use</h2>
                        <ul className="list-disc space-y-2 pl-5">
                            <li>
                                <strong>Essential cookies:</strong> required for the site to function (e.g. form
                                submission, session security). Cannot be disabled.
                            </li>
                            <li>
                                <strong>Analytics cookies:</strong> Google Analytics (GA4) — helps us understand
                                which pages and campaigns perform best.
                            </li>
                            <li>
                                <strong>Advertising cookies:</strong> Meta Pixel, Google Ads tags — used for
                                retargeting and measuring ad performance.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="mb-3 text-xl font-semibold text-gray-950">Managing cookies</h2>
                        <p>
                            You can control or delete cookies through your browser settings at any time. Disabling
                            non-essential cookies will not affect core site functionality but may reduce the
                            relevance of ads you see from us.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-xl font-semibold text-gray-950">Third-party cookies</h2>
                        <p className="mb-3">
                            Some cookies are set by third parties (Google, Meta) whose use of data is governed by
                            their own privacy policies:
                        </p>
                        <ul className="list-disc space-y-2 pl-5">
                            <li>
                                <a
                                    href="https://policies.google.com/privacy"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sky-600 underline underline-offset-2"
                                >
                                    Google Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.facebook.com/privacy/policy/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sky-600 underline underline-offset-2"
                                >
                                    Meta Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="mb-3 text-xl font-semibold text-gray-950">Contact</h2>
                        <p>{footerData.contact.email}</p>
                    </section>
                </div>
            </div>
        </main>
    );
}
