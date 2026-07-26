"use client";

import React from "react";
import Link from "next/link";
import { Mail, Linkedin } from "lucide-react";

import { contactData, footerData } from "@/lib/data";
import { CalModalButton } from "@/components/ui/CalModalButton";
import { BodyText, Eyebrow } from "@/components/ui/typography";

const iconMap = {
    Mail,
    Linkedin,
} as const;

const Footer: React.FC = () => {
    const navLinks = [
        { label: "About", href: "/#about" },
        { label: "Services", href: "/#services" },
        { label: "Case studies", href: "/#projects" },
        { label: "Community", href: "/community" },
        { label: "Events", href: "/events" },
        { label: "Reviews", href: "/#reviews" },
        { label: "FAQ", href: "/#faq" },
        { label: "Contact", href: "/#contact" },
    ];

    return (
        <footer className="relative border-t border-white/[0.06] px-4 pb-8 pt-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="surface-featured flex flex-col gap-5 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
                    <div>
                        <p className="font-display text-lg font-semibold text-white sm:text-xl">
                            Ready to grow smarter?
                        </p>
                        <BodyText className="mt-1 text-white/55">{footerData.about.description}</BodyText>
                    </div>
                    <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                        <CalModalButton calLink={contactData.calCom} className="btn-primary h-11 text-sm">
                            Book a call
                        </CalModalButton>
                        <a
                            href={`mailto:${footerData.contact.email}`}
                            className="btn-secondary h-11 text-sm"
                        >
                            Email us
                        </a>
                    </div>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-8 sm:grid-cols-4">
                    <div className="col-span-2 sm:col-span-1">
                        <Link href="/" className="inline-flex items-center gap-2.5">
                            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 text-sm font-bold text-white">
                                A
                            </span>
                            <span className="font-display text-lg font-semibold text-white">Adbibe</span>
                        </Link>
                        <BodyText className="mt-2 text-white/45">adbibe.com</BodyText>
                        <div className="mt-4 flex gap-2">
                            {footerData.socialLinks.map((social, i) => {
                                const Icon = iconMap[social.icon as keyof typeof iconMap] ?? Mail;
                                return (
                                    <Link
                                        key={i}
                                        href={social.href}
                                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/55 transition-all hover:border-orange-400/40 hover:bg-orange-500/10 hover:text-white"
                                        aria-label={social.platform}
                                    >
                                        <Icon className="h-4 w-4" />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    <div>
                        <Eyebrow>Navigate</Eyebrow>
                        <ul className="mt-3 space-y-2">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="link-nav text-white/60">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <Eyebrow>Services</Eyebrow>
                        <ul className="mt-3 space-y-2">
                            {footerData.services.items.map((service) => (
                                <li key={service}>
                                    <span className="text-sm text-white/55">{service}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <Eyebrow>Legal</Eyebrow>
                        <ul className="mt-3 space-y-2">
                            {Object.entries(footerData.legal).map(([key, section]) => (
                                <li key={key}>
                                    <Link
                                        href={section.links?.[0]?.href || "#"}
                                        className="link-nav text-white/60"
                                    >
                                        {section.title.replace(" Policy", "").replace(" & Conditions", "")}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-8 flex flex-col gap-2 border-t border-white/[0.06] pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
                    <p>© {new Date().getFullYear()} {footerData.copyright}</p>
                    <p className="text-orange-300/60">{footerData.trustStatement}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
