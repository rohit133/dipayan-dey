import {
    HeroData,
    TrustData,
    AboutData,
    ServicesData,
    ProcessData,
    Project,
    SkillsData,
    Experience,
    Testimonial,
    WhoIWorkWithData,
    LeadMagnetData,
    ContactData
} from "@/types";

export const heroData: HeroData = {
    headline: "Obsessed with Marketing. Focused on Results.",
    subheadline: "Performance and programmatic marketer with 5+ years of experience, helping businesses scale through data-driven strategy, thoughtful execution, and a genuine love for marketing.",
    cta: "Download Free Growth Blueprint",
    ctaSecondary: "Book a Free Strategy Call",
    stats: [
        { value: "5+", label: "Years Experience" },
        { value: "50+", label: "Clients Managed" },
        { value: "₹50Cr+", label: "Ad Spend Managed" },
        { value: "4.2x", label: "Avg ROAS" }
    ]
};

export const trustData: TrustData = {
    title: "Previously worked with and consulted for",
    companies: [
        "Flipkart",
        "Wanderla",
        "BBC",
        "Toyota",
        "Amama"
    ]
};

export const aboutData: AboutData = {
    title: "Performance-Led Growth, Not Guesswork",
    description: "I’m a performance and programmatic marketer with 5+ years of experience, driven by a deep passion for marketing and growth. I work closely with businesses to turn ideas into scalable, data-led outcomes, believing that marketing exists everywhere—in how brands communicate, connect, and convert. Outside of work, I stay active through swimming, badminton, and table tennis, enjoy discovering new cafés, and value meaningful conversations with new people and ideas.",
    expertise: [
        "Scale revenue without killing ROAS",
        "Build full-funnel growth systems",
        "Fix tracking & attribution mess",
        "Turn ad spend into predictable growth",
        "Strategic creative & content planning",
        "Performance-driven media strategy"
    ],
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=1000&fit=crop"
};

export const servicesData: ServicesData = {
    title: "What I Do",
    subtitle: "Outcome-driven systems, not just campaign execution",
    services: [
        {
            id: 1,
            title: "Performance Marketing",
            subtitle: "Meta & Google Ads",
            description: "Full-funnel campaigns that drive conversions, not just clicks. Built for scale and profitability.",
            icon: "target"
        },
        {
            id: 2,
            title: "Programmatic Advertising",
            subtitle: "DV360 & DSPs",
            description: "Precision targeting at scale. Reach the right audience without wasting budget on noise.",
            icon: "network"
        },
        {
            id: 3,
            title: "Media Planning & Strategy",
            subtitle: "Growth Architecture",
            description: "Strategic roadmaps that connect channels, fix attribution, and maximize every rupee spent.",
            icon: "map"
        },
        {
            id: 4,
            title: "Audit & Consulting",
            subtitle: "Performance Health Check",
            description: "Identify what's broken, what's working, and where your next 10x opportunity is hiding.",
            icon: "search"
        }
    ]
};

export const processData: ProcessData = {
    title: "My Growth Process",
    subtitle: "A proven framework I've used to scale brands",
    steps: [
        {
            number: "01",
            title: "Audit & Diagnosis",
            description: "Deep dive into your funnel, tracking, creative, and unit economics. I find what's bleeding money and what's ready to scale."
        },
        {
            number: "02",
            title: "Strategy & Funnel Design",
            description: "Build a data-backed growth plan—channels, targeting, messaging, and budget allocation that fits your goals."
        },
        {
            number: "03",
            title: "Execution & Scaling",
            description: "Launch campaigns, test creatives, optimize targeting. Everything's tracked, everything's measured."
        },
        {
            number: "04",
            title: "Optimization & Reporting",
            description: "Continuous improvement based on real data. You get transparent reporting and clear next steps, always."
        }
    ]
};

export const projectsData: Project[] = [
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
];

export const skillsData: SkillsData = {
    title: "Platforms I Use",
    subtitle: "Tools are secondary. Strategy and execution matter most.",
    categories: [
        {
            name: "Paid Media",
            skills: [
                "Meta Business Suite",
                "Google Ads",
                "TikTok Ads",
                "LinkedIn Campaign Manager",
                "Twitter Ads",
                "Snapchat Ads"
            ]
        },
        {
            name: "Programmatic & DSPs",
            skills: [
                "Google DV360",
                "The Trade Desk",
                "Amazon DSP",
                "AppNexus (Xandr)"
            ]
        },
        {
            name: "Analytics & Tracking",
            skills: [
                "Google Analytics 4",
                "Google Tag Manager",
                "Looker Studio",
                "Trackier",
                "Mixpanel"
            ]
        },
        {
            name: "Marketing Tech",
            skills: [
                "HubSpot",
                "Salesforce",
                "Optimizely",
                "SEMrush",
                "WordPress"
            ]
        }
    ]
};

export const experienceData: Experience[] = [
    {
        year: "Oct 2023 - Present",
        role: "Senior Executive - Digital Marketing",
        company: "Flipkart",
        description: "Working in brand and performance marketing for platforms like Google Ads, Meta, and DV360. Handling diverse business units including Grocery, Mobile (Apple, Realme), Furniture, and Smartwatch.",
        achievements: [
            "Media planning and execution for major categories",
            "Managing cross-functional teams (Creative, Marcom)",
            "Collaborating with agencies like Grapes and GroupM"
        ]
    },
    {
        year: "Sep 2022 - Feb 2023",
        role: "Senior Executive - Ad Operation",
        company: "Datawrkz",
        description: "Plan, execute, manage, and optimize programmatic media campaigns for agency clients across Display, Mobile, Video, and remarketing.",
        achievements: [
            "Managed campaigns on DV360, Xandr, Amazon DSP, Snapchat, etc.",
            "Independent campaign pacing and optimization",
            "Troubleshooting pixels, tags, and tracking setups"
        ]
    },
    {
        year: "Oct 2021 - Jun 2022",
        role: "Digital Marketing Specialist",
        company: "Black Coffee Media",
        description: "Focused on Lead Gen, Awareness, App Install, and E-Commerce campaigns. Testing new strategies and creatives for optimal ROAS/CPA.",
        achievements: [
            "Managed campaigns on FB and Google",
            "Automated reporting via Google Data Studio",
            "Conducted audits and created media plans"
        ]
    },
    {
        year: "Sep 2019 - Sep 2020",
        role: "Digital Marketing Executive",
        company: "Vakilsearch",
        description: "Created, analyzed, and optimized digital marketing plans including SEO/SEM, social media, and display campaigns.",
        achievements: [
            "Increased site visits by 50% via SEO strategies",
            "Improved brand management by 30% through social listening",
            "Suggested new SEO tools increasing copywriter output by 20%"
        ]
    }
];

export const testimonialsData: Testimonial[] = [
    {
        id: 1,
        name: "Client Feedback",
        role: "Senior Manager",
        company: "Vakilsearch",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
        quote: "Dipayan's SEO strategies significantly boosted our organic traffic. His ability to identify new tools and optimize workflows was a game changer for our content team."
    },
    {
        id: 2,
        name: "Agency Partner",
        role: "Account Director",
        company: "Datawrkz",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
        quote: "A tech-savvy operator who handles complex programmatic setups with ease. From troubleshooting pixels to managing pacing across multiple DSPs, he delivers."
    },
    {
        id: 3,
        name: "Project Lead",
        role: "Marketing Head",
        company: "Infant Builders",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
        quote: "We saw an 80% increase in social engagement within the first year. Dipayan knows how to build a digital culture and connect with audiences authentically."
    }
];

export const whoIWorkWithData: WhoIWorkWithData = {
    title: "Who I Work With",
    subtitle: "I focus on brands that care about profit, not just impressions.",
    audiences: [
        {
            type: "Startups & D2C Brands",
            description: "Early-stage brands looking to scale profitably from day one."
        },
        {
            type: "Large Enterprises",
            description: "Corporate organizations needing structured digital transformation."
        },
        {
            type: "Agencies",
            description: "Partners needing expert programmatic and ad ops execution."
        },
        {
            type: "E-Commerce",
            description: "Brands focused on ROAS, CPA, and measurable sales growth."
        },
        {
            type: "Real Estate & Construction",
            description: "Traditional industries looking to build a digital culture."
        }
    ]
};

export const leadMagnetData: LeadMagnetData = {
    title: "Download My Free Growth Blueprint",
    subtitle: "The exact framework I use to audit, strategize, and scale brands profitably.",
    description: "Inside: funnel diagnostic checklist, ROAS optimization framework, creative testing playbook, and attribution setup guide.",
    cta: "Download Free Blueprint",
    benefits: [
        "Proven framework used for 25+ brands",
        "Actionable steps you can implement today",
        "No fluff, just strategic insights"
    ]
};

export const contactData: ContactData = {
    title: "Let's Talk Growth",
    description: "Book a free 30-minute strategy call. I'll audit your current setup, identify opportunities, and share exactly what I'd do to scale you profitably.",
    subtitle: "No sales pitch. No obligations. Just honest feedback and a clear roadmap.",
    email: "dipayandey22@gmail.com",
    linkedin: "www.linkedin.com/in/dipayan-dey",
    calendly: "calendly.com/performancemarketer/strategy-call"
};
