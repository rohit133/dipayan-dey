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

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
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
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.nav
                className={`w-full max-w-6xl px-6 py-4 rounded-full transition-all duration-300 flex items-center justify-between ${isScrolled
                    ? 'bg-[#FFF0E5]/60 backdrop-blur-md shadow-sm border border-white/20'
                    : 'bg-[#FFF0E5] shadow-none'
                    }`}
            >
                {/* Logo */}
                <motion.div
                    className="text-lg font-bold"
                    whileHover={{ scale: 1.05 }}
                >
                    <a
                        href="#"
                        className="text-gray-900 font-black uppercase tracking-tight"
                    >
                        Performance Marketing
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
                            className={`px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition-all duration-300 ${item.name === 'Contact'
                                ? 'bg-gray-900 text-white hover:bg-black shadow-md'
                                : 'text-gray-700 hover:text-gray-900 hover:bg-black/5'
                                }`}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <motion.button
                    className="md:hidden p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    whileTap={{ scale: 0.95 }}
                >
                    {isMobileMenuOpen ? (
                        <X className="w-6 h-6 text-gray-900" />
                    ) : (
                        <Menu className="w-6 h-6 text-gray-900" />
                    )}
                </motion.button>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="absolute top-24 left-4 right-4 bg-white rounded-2xl shadow-xl overflow-hidden md:hidden border border-gray-100"
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
                                    className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-lg font-medium transition-colors"
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
