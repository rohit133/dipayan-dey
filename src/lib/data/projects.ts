import { ProjectsData } from "@/types";

export const projectsData: ProjectsData = {
    badge: "The Portfolio",
    title: "Strategic",
    titleItalic: "Impact",
    projects: [
        {
            id: 1,
            title: "Vakilsearch (SEO Growth)",
            category: "Legal Tech",
            description: "Implemented comprehensive on-page and off-page SEO strategy driven by organic insights per service category.",
            metrics: [
                { label: "Site Visits", value: "+50%" },
                { label: "Timeframe", value: "7 Months" },
                { label: "Copy Output", value: "+20%" }
            ],
            channels: ["SEO", "Content Strategy", "Backlinking"],
            image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&h=600&fit=crop"
        },
        {
            id: 2,
            title: "Infant Builders (Social)",
            category: "Real Estate",
            description: "Executed digital strategy for lead generation and engagement, outperforming competitors in all engagement metrics.",
            metrics: [
                { label: "Engagement", value: "+80%" },
                { label: "Visits", value: "+80%" },
                { label: "Timeframe", value: "12 Months" }
            ],
            channels: ["Facebook Ads", "Social Media", "Lead Gen"],
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop"
        },
        {
            id: 3,
            title: "Programmatic Scale",
            category: "Agency (Datawrkz)",
            description: "Managed programmatic media campaigns for diverse agency clients using DV360, Xandr, and Amazon DSP.",
            metrics: [
                { label: "Platforms", value: "10+" },
                { label: "Channels", value: "Omnichannel" },
                { label: "Optimization", value: "Daily" }
            ],
            channels: ["DV360", "AppNexus", "Amazon DSP"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
        },
        {
            id: 4,
            title: "Black Coffee Media",
            category: "Performance",
            description: "Focus on Lead Gen and App Installs. Tested new creatives and strategies to maintain perfect ROAS and CPA.",
            metrics: [
                { label: "Focus", value: "ROAS/CPA" },
                { label: "Platforms", value: "Google/FB" },
                { label: "Reporting", value: "Automated" }
            ],
            channels: ["Google Ads", "Facebook Ads", "Data Studio"],
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
        }
    ]
};
