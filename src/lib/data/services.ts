import { ServicesData } from "@/types";

export const servicesData: ServicesData = {
    badge: "Services",
    titleFirst: "Six core services.",
    titleSecond: "One unified engine.",
    subtitle:
        "Adbibe is a founder-led AI performance marketing agency based in Bangalore, India, specializing in paid acquisition, CRO, and programmatic media for D2C and SaaS brands. Every service is infused with AI — not as a feature, but as how we work.",
    services: [
        {
            id: 1,
            title: "Performance Marketing with AI",
            subtitle: "Paid media",
            description:
                "Paid media that converts — engineered for maximum ROAS and minimum CPL across major paid platforms with machine-speed optimization.",
            icon: "target",
            platforms: ["Meta", "Google", "LinkedIn", "Snapchat", "Bing"],
        },
        {
            id: 2,
            title: "Programmatic Marketing with AI",
            subtitle: "DV360 & DSPs",
            description:
                "DSP management, real-time bidding, audience data layers, and Connected TV — premium reach bought at machine speed and optimized by AI.",
            icon: "network",
            platforms: ["DSP", "RTB", "CTV", "Display"],
        },
        {
            id: 3,
            title: "AI Automation & AI Marketing",
            subtitle: "Workflows & agents",
            description:
                "Custom AI agents, automated workflows, dynamic creative optimization, and predictive analytics — the infrastructure that makes marketing run itself.",
            icon: "bot",
            platforms: ["n8n", "Make", "AI Agents", "DCO"],
        },
        {
            id: 4,
            title: "Social Media Marketing",
            subtitle: "Paid + organic",
            description:
                "Organic strategy, community management, and growth across platforms where your audience lives — with AI-assisted planning and performance tracking.",
            icon: "smartphone",
            platforms: ["Instagram", "LinkedIn", "X", "Facebook"],
        },
        {
            id: 5,
            title: "Brand Strategy",
            subtitle: "Positioning & GTM",
            description:
                "Positioning, narrative architecture, visual identity direction, and go-to-market strategy — brands that convert and compound.",
            icon: "landmark",
            platforms: ["Positioning", "Identity", "GTM"],
        },
        {
            id: 6,
            title: "Marketing Consulting",
            subtitle: "CMO-as-a-Service",
            description:
                "Strategy, budget architecture, funnel design, team training, and full-spectrum marketing intelligence for startups and scaling brands.",
            icon: "brain",
            platforms: ["CMO-as-a-Service", "Audits", "Training"],
        },
    ],
};
