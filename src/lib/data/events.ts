import type { EventsData } from "@/types";

import { contactData } from "./contact";

const calRegister = `https://${contactData.calCom}`;

export const eventsData: EventsData = {
    badge: "Events & workshops",
    title: "Learn, network,",
    titleAccent: "grow",
    description:
        "Live sessions on influencer marketing, paid performance, and founder-led growth — online and in select cities.",
    events: [
        {
            id: "influencer-masterclass",
            title: "Influencer Marketing Masterclass",
            category: "influencer",
            categoryLabel: "Influencer marketing",
            date: "2026-06-14",
            time: "11:00 AM IST",
            format: "Online",
            location: "Zoom · Recording shared",
            description:
                "Briefing frameworks, rate cards, whitelisting, and measuring creator ROI for D2C and lifestyle brands.",
            spotsLabel: "Limited seats",
            registerUrl: calRegister,
            registerLabel: "Reserve your spot",
        },
        {
            id: "performance-workshop",
            title: "Performance Marketing Workshop",
            category: "performance",
            categoryLabel: "Performance marketing",
            date: "2026-06-28",
            time: "4:00 PM IST",
            format: "Hybrid",
            location: "Bengaluru + live stream",
            description:
                "Account structure, creative testing, attribution fixes, and scaling Meta & Google without burning margin.",
            spotsLabel: "40 in-person · 200 online",
            registerUrl: calRegister,
            registerLabel: "Register",
        },
        {
            id: "founders-meetup",
            title: "Founders & Startup Growth Meetup",
            category: "founders",
            categoryLabel: "Founders & startups",
            date: "2026-07-12",
            time: "6:30 PM IST",
            format: "In-person",
            location: "Indiranagar, Bengaluru",
            description:
                "Founder roundtables on CAC, retention, and when to hire vs outsource growth. Open Q&A with Adbibe team.",
            spotsLabel: "25 founders",
            registerUrl: calRegister,
            registerLabel: "Apply to attend",
        },
        {
            id: "influencer-brand-mixer",
            title: "Creator × Brand Mixer",
            category: "influencer",
            categoryLabel: "Influencer marketing",
            date: "2026-07-26",
            time: "5:00 PM IST",
            format: "In-person",
            location: "Koramangala, Bengaluru",
            description:
                "Speed networking for creators and brand marketers. Bring your media kit or one-pager.",
            spotsLabel: "Invite-only · waitlist open",
            registerUrl: "https://chat.whatsapp.com/INVITE_EVENTS",
            registerLabel: "Join waitlist on WhatsApp",
        },
    ],
};
