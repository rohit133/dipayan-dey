import { ProjectsData } from "@/types";

export const projectsData: ProjectsData = {
    badge: "Case studies",
    title: "Selected",
    titleItalic: "Work",
    projects: [
        {
            id: 1,
            title: "Toyota",
            category: "Automotive · Programmatic",
            description:
                "Programmatic reporting and viewability optimization across DV360 and Xandr for multi-model campaigns.",
            fullDescription:
                "Managed reporting and campaign analysis for Toyota’s programmatic campaigns across DV360 and Xandr. Built automated reporting frameworks using Excel, Pivot Tables, and VLOOKUP to analyze performance by vehicle model, publisher, language, creative size, and ad format.",
            metrics: [
                { label: "Focus", value: "Viewability" },
                { label: "Platforms", value: "DV360+" },
            ],
            channels: ["DV360", "Xandr"],
            image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop",
            tags: ["programmatic"],
            challenge: "Fragmented reporting slowed optimization across Toyota campaigns.",
            solution:
                "Automated daily performance, GAM, and viewability reports by model, publisher, and format.",
            result: "Faster optimization and clearer campaign decision-making.",
        },
        {
            id: 2,
            title: "Wonderla",
            category: "Entertainment · Programmatic",
            description:
                "Launched 120+ programmatic campaigns across Display, Video, Audio, and Rich Media.",
            fullDescription:
                "Supported the execution of 120+ campaigns for Wonderla across multiple formats, including Display, Video, Audio, and Rich Media. Managed campaign trafficking, UTM creation, third-party tag implementation, creative QA, and pixel testing before launch.",
            metrics: [
                { label: "Campaigns", value: "120+" },
                { label: "Formats", value: "4+" },
            ],
            channels: ["DV360", "Xandr"],
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
            tags: ["programmatic"],
            challenge: "High-volume launches needed strict QA without delaying go-live.",
            solution:
                "Structured trafficking, UTM, tag, creative QA, and pixel testing workflows.",
            result: "Smooth delivery across DV360 and Xandr at scale.",
        },
        {
            id: 3,
            title: "8 Network",
            category: "Media · App Installs",
            description:
                "Show-based audience segmentation that cut app install costs from ₹80–100 to ₹4–9 CPI.",
            fullDescription:
                "Developed a show-based acquisition strategy for 8 Network by creating separate campaigns for different content categories such as horror, music, and storytelling. Campaigns were activated shortly before each live show to capture high-intent users.",
            metrics: [
                { label: "CPI", value: "₹4–9" },
                { label: "From", value: "₹80–100" },
            ],
            channels: ["Paid Media", "Segmentation"],
            image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
            tags: ["performance"],
            challenge: "High CPI from broad acquisition unrelated to live-show intent.",
            solution:
                "Category-specific campaigns timed to each live show for high-intent users.",
            result: "CPI reduced from ₹80–100 to ₹4–9.",
        },
        {
            id: 4,
            title: "WeSkill",
            category: "EdTech · Performance",
            description:
                "Full-funnel Meta and Google acquisition that cut CPL by 55% while keeping lead quality.",
            fullDescription:
                "Built a full-funnel acquisition strategy for WeSkill using TOF, MOF, and BOF campaigns across Meta and Google Ads. Through audience testing, creative optimization, and messaging tailored toward parents and students, the campaign achieved a 55% reduction in CPL while maintaining lead quality.",
            metrics: [
                { label: "CPL", value: "-55%" },
                { label: "Channels", value: "G/Meta" },
            ],
            channels: ["Google", "Meta"],
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
            tags: ["performance"],
            challenge: "Lead cost was high without clear funnel-stage messaging.",
            solution:
                "TOF/MOF/BOF structure with parent/student creative and continuous audience testing.",
            result: "55% lower CPL with maintained lead quality.",
        },
        {
            id: 5,
            title: "Amama",
            category: "D2C · Performance",
            description:
                "Product-focused Meta and Google spend that lifted ROAS from 1.2x to 4–5x.",
            fullDescription:
                "Analyzed product-level performance for Amama and identified a small group of products driving the majority of sales. Reallocated budget toward top-performing collections and optimized campaign structure across Meta and Google Ads.",
            metrics: [
                { label: "ROAS", value: "4–5x" },
                { label: "From", value: "1.2x" },
            ],
            channels: ["Google", "Meta"],
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
            tags: ["performance"],
            challenge: "Budget was spread across underperforming products.",
            solution:
                "Product-level analysis and reallocation toward top collections with tighter structure.",
            result: "ROAS improved from 1.2x to 4–5x.",
        },
    ],
};
