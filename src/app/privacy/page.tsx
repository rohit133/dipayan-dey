"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { footerData } from "@/lib/data";

const LAST_UPDATED = "July 31, 2026";

export default function PrivacyPolicy() {
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
                    {footerData.legal.privacy.title}
                </motion.h1>
                <p className="mb-10 text-sm text-gray-500">Last updated: {LAST_UPDATED}</p>

                <div className="space-y-8 text-base leading-relaxed text-gray-700">
                    <p>
                        Adbibe (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;) operates adbibe.com. This policy explains what
                        data we collect, why, and how you can control it.
                    </p>

                    <section>
                        <h2 className="mb-3 text-xl font-semibold text-gray-950">1. Information We Collect</h2>
                        <ul className="list-disc space-y-2 pl-5">
                            <li>
                                <strong>Information you provide:</strong> name, email, company name, and message
                                content when you fill out a contact form, book a call, or download a resource.
                            </li>
                            <li>
                                <strong>Automatically collected information:</strong> IP address, browser type,
                                device type, pages visited, and referral source, via cookies and analytics tools
                                (see our Cookie Policy).
                            </li>
                            <li>
                                <strong>Third-party data:</strong> information from ad platforms (Google, Meta)
                                when you interact with our ads, subject to those platforms&apos; own privacy policies.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="mb-3 text-xl font-semibold text-gray-950">2. How We Use Your Information</h2>
                        <ul className="list-disc space-y-2 pl-5">
                            <li>To respond to inquiries and schedule calls</li>
                            <li>To send requested resources (e.g. the Growth Checklist)</li>
                            <li>To improve our website and marketing based on aggregate usage patterns</li>
                            <li>
                                To retarget website visitors with relevant ads, where you have consented to
                                marketing cookies
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="mb-3 text-xl font-semibold text-gray-950">3. How We Share Information</h2>
                        <p className="mb-3">We do not sell your personal data. We share data only with:</p>
                        <ul className="list-disc space-y-2 pl-5">
                            <li>Service providers who help us operate (email, scheduling, CRM, hosting)</li>
                            <li>
                                Analytics and advertising platforms (Google Analytics, Meta Pixel), in aggregated
                                or pseudonymized form
                            </li>
                            <li>Legal authorities, if required by law</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="mb-3 text-xl font-semibold text-gray-950">4. Data Retention</h2>
                        <p>
                            We retain contact form and lead data for as long as needed to respond to your inquiry
                            and for up to 24 months afterward for record-keeping, unless you request deletion
                            sooner.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-xl font-semibold text-gray-950">5. Your Rights</h2>
                        <p>
                            You may request access to, correction of, or deletion of your personal data at any
                            time by emailing {footerData.contact.email}. If you are in the EU/UK, you have rights
                            under GDPR; if you are in India, you have rights under the DPDP Act, 2023.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-xl font-semibold text-gray-950">6. Security</h2>
                        <p>
                            We use industry-standard measures to protect your data but cannot guarantee absolute
                            security of information transmitted online.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-xl font-semibold text-gray-950">7. Children&apos;s Privacy</h2>
                        <p>
                            Adbibe&apos;s services are not directed at individuals under 18. We do not knowingly
                            collect data from minors.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-xl font-semibold text-gray-950">8. Changes to This Policy</h2>
                        <p>
                            We may update this policy periodically. The &quot;Last updated&quot; date above reflects the
                            most recent revision.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-xl font-semibold text-gray-950">9. Contact</h2>
                        <p>Questions about this policy: {footerData.contact.email}</p>
                    </section>
                </div>
            </div>
        </main>
    );
}
