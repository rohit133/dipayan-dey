import { FooterData } from "@/types";

export const footerData: FooterData = {
    about: {
        title: "About",
        description: "We’re an AI-powered marketing consultancy focused on performance, programmatic, and growth strategy. Founded by an ex-Flipkart marketer, we help brands scale using data, automation, and human-led decision-making."
    },
    services: {
        title: "Services",
        items: [
            "AI-Powered Performance Marketing",
            "Meta & Google Ads Management",
            "Programmatic Advertising (DV360)",
            "Growth Strategy & Media Planning",
            "Marketing Audits & Consulting",
            "AI Automation & Analytics"
        ]
    },
    caseStudies: {
        title: "Case Studies",
        description: "Explore how we’ve helped startups, D2C brands, and enterprises build scalable marketing systems using performance, programmatic, and AI-driven strategies."
    },
    legal: {
        privacy: {
            title: "Privacy Policy",
            content: "We value your privacy. This policy explains how we collect, use, and protect your personal information when you interact with our website, services, or content. We do not sell your data to third parties.",
            links: [{ label: "Read Privacy Policy", href: "/privacy" }]
        },
        cookies: {
            title: "Cookies Policy",
            content: "Our website uses cookies and similar technologies to improve user experience, analyze traffic, and support marketing efforts. You can control cookie preferences through your browser settings.",
            links: [{ label: "Read Cookies Policy", href: "/cookies" }]
        },
        terms: {
            title: "Terms & Conditions",
            content: "By accessing this website, you agree to comply with our terms. All content is for informational purposes only and does not guarantee specific marketing outcomes. Service terms are defined separately through formal agreements.",
            links: [{ label: "Read Terms & Conditions", href: "/terms" }]
        },
        aiDisclosure: {
            title: "AI Disclosure",
            content: "We use AI tools to assist with data analysis, automation, insights, and optimization. All AI-supported outputs are reviewed by humans before implementation. Client data is handled responsibly and is not used to train public AI models.",
            links: [{ label: "Read AI Disclosure", href: "/ai-disclosure" }]
        }
    },
    socialLinks: [
        { platform: "Email", href: "mailto:dipayandey22@gmail.com", icon: "Mail" },
        { platform: "LinkedIn", href: "https://linkedin.com/in/dipayan-dey", icon: "Linkedin" },
        { platform: "Twitter", href: "https://twitter.com/dipayandey", icon: "Twitter" },
        { platform: "Instagram", href: "https://instagram.com/dipayandey", icon: "Instagram" }
    ],
    ecosystem: [
        { label: "Case Studies", href: "#projects" },
        { label: "Methodology", href: "#about" },
        { label: "Our Mission", href: "#about" }
    ],
    contact: {
        title: "Contact",
        email: "dipayandey22@gmail.com"
    },
    nexus: {
        title: "Nexus",
        sessionLabel: "Strategy Session",
        sessionValue: "Secure Slot",
        directLabel: "Direct Line"
    },
    copyright: "Dipayan Dey. All rights reserved.",
    trustStatement: "Performance-driven. Privacy-first. Results-focused.",
    status: "Status: Operational"
};
