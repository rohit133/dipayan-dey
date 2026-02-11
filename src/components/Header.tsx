"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavItem {
    name: string;
    href: string;
}

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

    const [isVisible, setIsVisible] = useState<boolean>(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        const handleHideNav = () => {
            console.log("Header: hide-nav received");
            setIsVisible(false);
        };
        const handleShowNav = () => {
            console.log("Header: show-nav received");
            setIsVisible(true);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('hide-nav', handleHideNav);
        window.addEventListener('show-nav', handleShowNav);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('hide-nav', handleHideNav);
            window.removeEventListener('show-nav', handleShowNav);
        };
    }, []);

    const navItems: NavItem[] = [
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Work', href: '#projects' },
        { name: 'Process', href: '#process' },
        { name: 'Contact', href: '#contact' }
    ];

    const handleNavClick = (href: string) => {
        setIsMobileMenuOpen(false);
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <motion.header
            className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
            initial={{ y: -100 }}
            animate={{ y: isVisible ? 0 : -200 }}
            transition={{ duration: 0.5 }}
        >
            <motion.nav
                className={`w-full max-w-6xl px-6 py-4 rounded-full transition-all duration-300 flex items-center justify-between ${isScrolled
                    ? 'bg-background/40 dark:bg-black/40 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] border border-foreground/10'
                    : 'bg-foreground/5 backdrop-blur-sm border border-foreground/5'
                    }`}
            >
                {/* Logo */}
                <motion.div
                    className="text-lg font-bold"
                    whileHover={{ scale: 1.05 }}
                >
                    <a
                        href="#"
                        className="text-foreground font-black uppercase tracking-tight flex items-center gap-2 group"
                    >
                        <span className="w-8 h-8 bg-foreground text-background flex items-center justify-center rounded-lg transition-transform group-hover:rotate-12">D</span>
                        Dipayan Dey
                    </a>
                </motion.div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-1">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavClick(item.href);
                            }}
                            className={`px-5 py-2 rounded-full text-[11px] font-black uppercase tracking-[0.15em] transition-all duration-300 ${item.name === 'Contact'
                                ? 'bg-foreground text-background hover:bg-orange-500 hover:text-white shadow-xl shadow-foreground/5 dark:shadow-white/5'
                                : 'text-muted-foreground hover:text-foreground hover:bg-foreground/5'
                                }`}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <motion.button
                    className="md:hidden p-2 text-foreground"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    whileTap={{ scale: 0.95 }}
                >
                    {isMobileMenuOpen ? (
                        <X className="w-6 h-6" />
                    ) : (
                        <Menu className="w-6 h-6" />
                    )}
                </motion.button>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="absolute top-24 left-4 right-4 bg-background/95 dark:bg-black/90 backdrop-blur-2xl rounded-2xl shadow-2xl overflow-hidden md:hidden border border-foreground/10"
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="p-4 space-y-2">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavClick(item.href);
                                    }}
                                    className="block px-4 py-3 text-muted-foreground hover:bg-foreground/5 hover:text-foreground rounded-lg text-sm font-black uppercase tracking-widest transition-colors"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Header;
