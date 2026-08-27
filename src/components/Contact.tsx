"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Linkedin, Mail, Send } from "lucide-react";
import { toast } from "sonner";

import { contactData } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { CalModalButton } from "@/components/ui/CalModalButton";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BodyText, SectionHeading } from "@/components/ui/typography";

interface FormData {
    name: string;
    email: string;
    company: string;
    message: string;
}

const Contact: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        company: "",
        message: "",
    });

    const hiddenCalBtnRef = useRef<HTMLButtonElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const subject = encodeURIComponent(`Adbibe enquiry from ${formData.name}`);
        const body = encodeURIComponent(
            [
                `Name: ${formData.name}`,
                `Email: ${formData.email}`,
                `Company: ${formData.company || "—"}`,
                "",
                formData.message,
            ].join("\n")
        );

        window.location.href = `mailto:${contactData.email}?subject=${subject}&body=${body}`;

        toast.success("Opening your email app…");
        setTimeout(() => hiddenCalBtnRef.current?.click(), 400);
        setFormData({ name: "", email: "", company: "", message: "" });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    type QuickLink =
        | { icon: typeof Mail; label: string; href: string; external: boolean }
        | { icon: typeof Calendar; label: string; isCal: true };

    const quickLinks: QuickLink[] = [
        {
            icon: Mail,
            label: contactData.email,
            href: `mailto:${contactData.email}`,
            external: false,
        },
        {
            icon: Linkedin,
            label: "LinkedIn",
            href: `https://${contactData.linkedin}`,
            external: true,
        },
        {
            icon: Calendar,
            label: "Book a call",
            isCal: true,
        },
    ];

    return (
        <section id="contact" className="section-shell">
            <div className="section-inner">
                <SectionHeading
                    eyebrow={contactData.badge}
                    title={
                        <>
                            {contactData.title}{" "}
                            <span className="text-sky-300">{contactData.titleItalic}</span>
                        </>
                    }
                    description={contactData.description}
                />

                <div className="mt-8 flex items-start gap-8 lg:gap-10">
                    <div className="w-full max-w-2xl">
                    <motion.form
                        onSubmit={handleSubmit}
                        className="surface-card-static space-y-5 p-5 sm:p-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="space-y-2">
                                <label className="text-xs font-semibold uppercase tracking-wider text-white/45">
                                    Name
                                </label>
                                <Input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="h-11 rounded-xl border-white/10 bg-black/20 transition-colors focus-visible:border-sky-500/40 focus-visible:ring-sky-500/20"
                                    placeholder="Your name"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-semibold uppercase tracking-wider text-white/45">
                                    Email
                                </label>
                                <Input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="h-11 rounded-xl border-white/10 bg-black/20 transition-colors focus-visible:border-sky-500/40 focus-visible:ring-sky-500/20"
                                    placeholder="you@company.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-semibold uppercase tracking-wider text-white/45">
                                Company <span className="normal-case text-white/30">(optional)</span>
                            </label>
                            <Input
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                className="h-11 rounded-xl border-white/10 bg-black/20"
                                placeholder="Company name"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-semibold uppercase tracking-wider text-white/45">
                                Message
                            </label>
                            <Textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={4}
                                className="min-h-[100px] rounded-xl border-white/10 bg-black/20 transition-colors focus-visible:border-sky-500/40 focus-visible:ring-sky-500/20"
                                placeholder="What do you need help with?"
                            />
                        </div>

                        <Button type="submit" className="btn-primary h-12 w-full">
                            Send message
                            <Send className="ml-2 h-4 w-4" />
                        </Button>
                    </motion.form>

                    <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
                        {quickLinks.map((item) => {
                            const Icon = item.icon;
                            const inner = (
                                <>
                                    <Icon className="h-4 w-4 shrink-0 text-sky-300" />
                                    <span className="truncate text-xs font-medium text-white/80 sm:text-sm">
                                        {item.label}
                                    </span>
                                </>
                            );

                            if ("isCal" in item) {
                                return (
                                    <CalModalButton
                                        key={item.label}
                                        calLink={contactData.calCom}
                                        variant="ghost"
                                        className="surface-card-static flex h-auto min-h-[44px] flex-col items-center justify-center gap-1.5 p-3 text-center text-white/80 hover:bg-transparent hover:border-white/14"
                                    >
                                        {inner}
                                    </CalModalButton>
                                );
                            }

                            return (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    target={item.external ? "_blank" : undefined}
                                    rel={item.external ? "noopener noreferrer" : undefined}
                                    className="surface-card-static flex min-h-[44px] flex-col items-center justify-center gap-1.5 p-3 text-center hover:border-white/14"
                                >
                                    {inner}
                                </a>
                            );
                        })}
                    </div>

                    <BodyText className="mt-4 text-center text-white/50 sm:text-left">
                        {contactData.protocol.description}
                    </BodyText>
                    </div>

                    <motion.aside
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, delay: 0.08 }}
                        className="hidden w-[240px] shrink-0 pt-1 lg:block xl:w-[280px]"
                    >
                        <div className="surface-featured overflow-hidden p-2">
                            <img
                                src="/contact-welcome.jpg"
                                alt="Professional growth strategy session"
                                className="aspect-[3/4] w-full rounded-xl object-cover"
                            />
                        </div>
                        <p className="mt-4 font-display text-base font-semibold text-white">
                            Let&apos;s build your next growth move.
                        </p>
                        <p className="mt-1.5 text-sm leading-relaxed text-white/50">
                            Send a note — we&apos;ll reply within one business day.
                        </p>
                    </motion.aside>
                </div>
            </div>

            <div className="hidden">
                <CalModalButton ref={hiddenCalBtnRef} calLink={contactData.calCom}>
                    Hidden
                </CalModalButton>
            </div>
        </section>
    );
};

export default Contact;
