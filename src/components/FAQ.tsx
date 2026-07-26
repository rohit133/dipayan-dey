"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { faqItems } from "@/lib/data/faq";
import { BodyText, SectionHeading } from "@/components/ui/typography";

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number>(0);

    return (
        <section id="faq" className="section-shell">
            <div className="section-inner max-w-3xl">
                <SectionHeading eyebrow="FAQ" title="Common questions" />

                <div className="mt-8 space-y-2">
                    {faqItems.map((item, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={item.question}
                                className={`surface-card-static overflow-hidden transition-colors ${
                                    isOpen ? "border-orange-500/20" : ""
                                }`}
                            >
                                <button
                                    type="button"
                                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                                    aria-expanded={isOpen}
                                >
                                    <span className="type-card-title pr-2 text-base sm:text-lg">
                                        {item.question}
                                    </span>
                                    <span
                                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-orange-300 transition-transform duration-200 ${
                                            isOpen ? "rotate-180" : ""
                                        }`}
                                    >
                                        <ChevronDown className="h-4 w-4" />
                                    </span>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="border-t border-white/[0.06] px-5 pb-4 pt-1">
                                                <BodyText className="text-white/60">{item.answer}</BodyText>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
