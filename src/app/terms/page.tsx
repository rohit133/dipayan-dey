"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { footerData } from "@/lib/data";

const LAST_UPDATED = "July 31, 2026";

export default function TermsConditions() {
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
                    {footerData.legal.terms.title}
                </motion.h1>
                <p className="mb-10 text-sm text-gray-500">Last updated: {LAST_UPDATED}</p>

                <div className="space-y-8 text-base leading-relaxed text-gray-700">
                    <p>
                        By using adbibe.com or engaging Adbibe&apos;s services, you agree to the following terms.
                    </p>

                    <section>
                        <h2 className="mb-3 text-xl font-semibold text-gray-950">1. Services</h2>
                        <p>
                            Adbibe provides performance marketing, programmatic advertising, CRO, marketing
                            automation, social media marketing, brand strategy, and marketing consulting services
                            as agreed in a separate signed statement of work (SOW) or service agreement. This
                            website provides general information and does not itself constitute a service
                            agreement.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-xl font-semibold text-gray-950">2. Use of This Website</h2>
                        <p>
                            You may use this website for lawful purposes only. You may not attempt to disrupt the
                            site, scrape content for commercial resale, or misrepresent your identity when
                            submitting forms.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-xl font-semibold text-gray-950">3. No Guarantee of Results</h2>
                        <p>
                            Marketing performance depends on factors outside Adbibe&apos;s control (market
                            conditions, platform policy changes, client-side execution, budget levels). Case
                            studies and testimonials reflect specific client results and are not guarantees of
                            similar outcomes for other businesses.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-xl font-semibold text-gray-950">4. Intellectual Property</h2>
                        <p>
                            All content on this site — including copy, design, and the Adbibe name and logo — is
                            owned by Adbibe and may not be reproduced without permission. Client logos and case
                            study content are used with permission.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-xl font-semibold text-gray-950">5. Payment &amp; Engagement Terms</h2>
                        <p>
                            Specific payment terms, deliverables, and timelines are governed by the individual
                            service agreement signed with each client, not by this website.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-xl font-semibold text-gray-950">6. Limitation of Liability</h2>
                        <p>
                            Adbibe is not liable for indirect, incidental, or consequential damages arising from
                            use of this website or reliance on its content. Service-specific liability terms are
                            set out in individual client agreements.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-xl font-semibold text-gray-950">7. Third-Party Links</h2>
                        <p>
                            This site may link to third-party sites (e.g. our WhatsApp communities, booking
                            tools). We are not responsible for the content or practices of those third parties.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-xl font-semibold text-gray-950">8. Governing Law</h2>
                        <p>
                            These terms are governed by the laws of India, with courts in Bangalore, Karnataka
                            having jurisdiction.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-xl font-semibold text-gray-950">9. Changes to These Terms</h2>
                        <p>
                            We may update these terms periodically. Continued use of the site after changes
                            constitutes acceptance.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-xl font-semibold text-gray-950">10. Contact</h2>
                        <p>{footerData.contact.email}</p>
                    </section>
                </div>
            </div>
        </main>
    );
}
