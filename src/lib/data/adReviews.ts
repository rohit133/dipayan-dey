import type { AdReviewsData } from "@/types";

import { contactData } from "./contact";

export const adReviewsData: AdReviewsData = {
    badge: "Campaign feedback",
    title: "What brands say about our ad work",
    submitReviewUrl: `mailto:${contactData.email}?subject=Adbibe%20campaign%20review`,
    reviews: [
        {
            id: "1",
            quote: "Cut our Meta CPA by 34% in six weeks without dropping spend.",
            author: "Growth lead",
            role: "D2C skincare",
            platform: "Meta Ads",
            rating: 5,
        },
        {
            id: "2",
            quote: "Finally clean attribution — we trust the dashboard again.",
            author: "Founder",
            role: "B2B SaaS",
            platform: "Google + GA4",
            rating: 5,
        },
        {
            id: "3",
            quote: "Influencer whitelisting playbook paid for itself in one launch.",
            author: "Marketing manager",
            role: "Lifestyle brand",
            platform: "Influencer",
            rating: 5,
        },
        {
            id: "4",
            quote: "Landing page CRO lift of 22% on cold traffic — shipped fast.",
            author: "Head of performance",
            role: "Edtech",
            platform: "CRO",
            rating: 5,
        },
        {
            id: "5",
            quote: "Programmatic display actually drove incremental conversions.",
            author: "CMO",
            role: "Fintech",
            platform: "Programmatic",
            rating: 5,
        },
        {
            id: "6",
            quote: "Clear weekly reporting and no vanity metrics — rare.",
            author: "Co-founder",
            role: "Consumer app",
            platform: "Multi-channel",
            rating: 5,
        },
        {
            id: "7",
            quote: "Scaled Google from ₹2L to ₹12L/month with stable ROAS.",
            author: "Performance lead",
            role: "Marketplace",
            platform: "Google Ads",
            rating: 5,
        },
        {
            id: "8",
            quote: "Creator brief templates saved our team hours every campaign.",
            author: "Brand manager",
            role: "Food & beverage",
            platform: "Influencer",
            rating: 5,
        },
    ],
};
