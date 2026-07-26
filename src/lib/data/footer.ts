import { FooterData } from "@/types";

export const footerData: FooterData = {
    about: {
        title: "About",
        description: "Founder-led growth for brands that want measurable acquisition.",
    },
    services: {
        title: "Services",
        items: [
            "Paid media",
            "Programmatic",
            "CRO",
            "Analytics",
        ],
    },
    caseStudies: {
        title: "Case Studies",
        description: "SEO, social, programmatic, and performance work.",
    },
    legal: {
        privacy: {
            title: "Privacy Policy",
            content: "How we handle your data when you use this site or contact us.",
            links: [{ label: "Read Privacy Policy", href: "/privacy" }],
        },
        cookies: {
            title: "Cookies Policy",
            content: "How cookies are used on this site.",
            links: [{ label: "Read Cookies Policy", href: "/cookies" }],
        },
        terms: {
            title: "Terms & Conditions",
            content: "Terms for using this website and our services.",
            links: [{ label: "Read Terms & Conditions", href: "/terms" }],
        },
        aiDisclosure: {
            title: "AI Disclosure",
            content: "How AI tools support our work — always reviewed by humans.",
            links: [{ label: "Read AI Disclosure", href: "/ai-disclosure" }],
        },
    },
    socialLinks: [
        { platform: "Email", href: "mailto:hello@adbibe.com", icon: "Mail" },
        { platform: "LinkedIn", href: "https://linkedin.com/in/dipayan-dey", icon: "Linkedin" },
    ],
    ecosystem: [
        { label: "Case studies", href: "#projects" },
        { label: "Services", href: "#services" },
        { label: "FAQ", href: "#faq" },
    ],
    contact: {
        title: "Contact",
        email: "hello@adbibe.com",
    },
    nexus: {
        title: "Start",
        sessionLabel: "Call",
        sessionValue: "Book a call",
        directLabel: "Email",
    },
    copyright: "Adbibe. All rights reserved.",
    trustStatement: "Performance-led. Privacy-first.",
    status: "Operational",
};
