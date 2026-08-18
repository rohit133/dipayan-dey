import { FooterData } from "@/types";

export const footerData: FooterData = {
    about: {
        title: "About",
        description:
            "Founder-led AI performance marketing agency based in Bangalore — paid acquisition, CRO, and programmatic for D2C and SaaS.",
    },
    services: {
        title: "Services",
        items: [
            "Performance marketing",
            "Programmatic",
            "AI automation",
            "Social media",
            "Brand strategy",
            "Consulting",
        ],
    },
    caseStudies: {
        title: "Case Studies",
        description: "Programmatic, performance, and acquisition work for brands like Toyota, Wonderla, and Amama.",
    },
    legal: {
        privacy: {
            title: "Privacy Policy",
            content: "What data we collect, why we collect it, and how you can control it.",
            links: [{ label: "Read Privacy Policy", href: "/privacy" }],
        },
        cookies: {
            title: "Cookie Policy",
            content: "How cookies and similar technologies are used on this site.",
            links: [{ label: "Read Cookie Policy", href: "/cookies" }],
        },
        terms: {
            title: "Terms of Service",
            content: "Terms for using this website and engaging Adbibe's services.",
            links: [{ label: "Read Terms of Service", href: "/terms" }],
        },
        aiDisclosure: {
            title: "AI Disclosure",
            content: "How AI supports our work — always reviewed by humans before it reaches you.",
            links: [{ label: "Read AI Disclosure", href: "/ai-disclosure" }],
        },
    },
    socialLinks: [
        { platform: "Email", href: "mailto:hello@adbibe.com", icon: "Mail" },
        { platform: "LinkedIn", href: "https://www.linkedin.com/company/adbibeofficial/", icon: "Linkedin" },
        { platform: "Instagram", href: "https://www.instagram.com/adbibeofficial?utm_source=qr", icon: "Instagram" },
        { platform: "Facebook", href: "https://www.facebook.com/adbibeofficial", icon: "Facebook" },
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
