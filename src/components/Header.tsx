"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { contactData } from "@/lib/data";
import { CalModalButton } from "@/components/ui/CalModalButton";

interface NavItem {
    name: string;
    href: string;
    isHash?: boolean;
}

const navItems: NavItem[] = [
    { name: "Services", href: "/#services", isHash: true },
    { name: "Work", href: "/#projects", isHash: true },
    { name: "Community", href: "/community" },
    { name: "Events", href: "/events" },
    { name: "Contact", href: "/#contact", isHash: true },
];

const Header: React.FC = () => {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 16);
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMobileMenuOpen]);

    const scrollToHash = (href: string) => {
        const hash = href.includes("#") ? href.split("#")[1] : "";
        if (!hash) return;
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const handleHashNav = (e: React.MouseEvent, item: NavItem) => {
        setIsMobileMenuOpen(false);
        if (!item.isHash) return;

        if (pathname === "/") {
            e.preventDefault();
            scrollToHash(item.href);
        }
    };

    return (
        <motion.header
            className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-3 sm:pt-4"
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
            <nav
                className={`w-full max-w-7xl rounded-2xl border px-4 py-2.5 transition-all duration-300 md:rounded-full md:px-5 md:py-3 ${
                    isScrolled ? "glass-nav" : "border-white/[0.06] bg-black/40 backdrop-blur-md"
                }`}
            >
                <div className="flex items-center justify-between gap-3">
                    <Link
                        href="/"
                        className="flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/70"
                        aria-label="Adbibe homepage"
                    >
                        <img
                            src="/logo.png"
                            alt="Adbibe"
                            className="h-9 w-9 rounded-xl shadow-lg shadow-sky-500/20"
                        />
                        <div className="leading-tight">
                            <span className="font-display text-base font-semibold text-white">Adbibe</span>
                            <span className="hidden text-[11px] text-white/45 sm:block">
                                AI performance marketing
                            </span>
                        </div>
                    </Link>

                    <div className="hidden items-center gap-0.5 xl:flex">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={(e) => handleHashNav(e, item)}
                                className={`link-nav rounded-lg px-3 py-2 no-underline hover:bg-white/[0.04] hover:no-underline ${
                                    pathname === item.href ? "text-white" : ""
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden items-center gap-3 lg:flex">
                        <CalModalButton
                            calLink={contactData.calCom}
                            className="btn-primary h-10 px-5 text-sm"
                        >
                            Book a call
                        </CalModalButton>
                    </div>

                    <button
                        type="button"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white xl:hidden"
                        onClick={() => setIsMobileMenuOpen((open) => !open)}
                        aria-expanded={isMobileMenuOpen}
                        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                    >
                        {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>

                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            className="mt-3 overflow-hidden rounded-xl border border-white/10 bg-[#0c0c0c]/95 p-3 backdrop-blur-xl xl:hidden"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.22 }}
                        >
                            <div className="space-y-0.5">
                                <Link
                                    href="/#about"
                                    onClick={(e) => handleHashNav(e, { name: "About", href: "/#about", isHash: true })}
                                    className="block rounded-lg px-3 py-2.5 text-[15px] font-medium text-white/80 hover:bg-white/[0.05]"
                                >
                                    About
                                </Link>
                                {navItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={(e) => handleHashNav(e, item)}
                                        className="block rounded-lg px-3 py-2.5 text-[15px] font-medium text-white/80 hover:bg-white/[0.05]"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                            <div className="mt-3 border-t border-white/10 pt-3">
                                <CalModalButton
                                    calLink={contactData.calCom}
                                    className="btn-primary h-11 w-full text-sm"
                                >
                                    Book a call
                                </CalModalButton>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </motion.header>
    );
};

export default Header;
