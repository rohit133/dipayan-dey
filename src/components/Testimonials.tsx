"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

import { testimonialsData } from "@/lib/data";
import { BodyText, CardTitle, SectionHeading } from "@/components/ui/typography";

const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="section-shell section-alt">
            <div className="section-inner">
                <SectionHeading
                    eyebrow={testimonialsData.badge}
                    title={
                        <>
                            {testimonialsData.title}{" "}
                            <span className="text-accent">{testimonialsData.titleItalic}</span>
                        </>
                    }
                />

                <div className="mt-8 grid gap-4 lg:grid-cols-3">
                    {testimonialsData.testimonials.map((testimonial, index) => (
                        <motion.article
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.45, delay: index * 0.06 }}
                            viewport={{ once: true, margin: "-40px" }}
                            className="surface-card flex h-full flex-col p-6 md:p-7"
                        >
                            <Quote className="h-7 w-7 text-sky-400/70" />
                            <BodyText className="mt-4 flex-1 text-white/72">
                                &ldquo;{testimonial.quote}&rdquo;
                            </BodyText>

                            <div className="mt-6 flex items-center gap-3 border-t border-white/[0.06] pt-5">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/12 text-xs font-bold uppercase text-sky-200">
                                    {testimonial.company
                                        .split(" ")
                                        .map((word) => word[0])
                                        .join("")
                                        .slice(0, 2)}
                                </div>
                                <div>
                                    <CardTitle className="text-base">{testimonial.company}</CardTitle>
                                    <p className="text-sm text-white/50">
                                        {testimonial.name} · {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
