import { ServicesData } from "@/types";

export const servicesData: ServicesData = {
    badge: "Services",
    titleFirst: "What We",
    titleSecond: "Do",
    subtitle: "Paid media, CRO, and analytics — built around revenue, not vanity metrics.",
    services: [
        {
            id: 1,
            title: "Paid Acquisition",
            subtitle: "Google & Meta",
            description: "Structure, budgets, creative tests, and weekly optimization for CAC and ROAS.",
            icon: "target",
        },
        {
            id: 2,
            title: "Programmatic",
            subtitle: "DV360 & DSPs",
            description: "Planning, pacing, troubleshooting, and reporting for complex media buys.",
            icon: "network",
        },
        {
            id: 3,
            title: "Funnel & CRO",
            subtitle: "Pages & offers",
            description: "Messaging, CTAs, forms, and trust signals that convert existing traffic.",
            icon: "map",
        },
        {
            id: 4,
            title: "Analytics",
            subtitle: "Tracking & CRM",
            description: "GA4, UTMs, dashboards, and lead routing so you know what to scale.",
            icon: "search",
        },
    ],
};
