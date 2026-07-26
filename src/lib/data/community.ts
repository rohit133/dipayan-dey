import type { CommunityData } from "@/types";

/**
 * Replace WhatsApp group invite URLs with your real chat.whatsapp.com links.
 * Create groups in WhatsApp → Group info → Invite via link.
 */
export const communityData: CommunityData = {
    badge: "Community",
    title: "Influencers &",
    titleAccent: "freelancers",
    description:
        "Join our WhatsApp communities for brand collabs, paid briefs, and peer support — built for creators and independent marketers.",
    note: "Free to join. No spam — briefs and events only.",
    groups: [
        {
            id: "influencer",
            title: "Influencers & creators",
            tagline: "Brand deals · UGC · campaigns",
            description:
                "Connect with brands running influencer and UGC campaigns. Get briefs, rate cards, and collab opportunities shared in the group.",
            benefits: [
                "Paid brand briefs",
                "Campaign deadlines & assets",
                "Creator peer network",
            ],
            // TODO: Replace with your Influencer WhatsApp group invite link
            whatsappGroupUrl: "https://chat.whatsapp.com/INVITE_INFLUENCERS",
            memberLabel: "500+ creators",
        },
        {
            id: "freelancer",
            title: "Freelancers & marketers",
            tagline: "Ads · CRO · analytics gigs",
            description:
                "For freelance performance marketers, media buyers, and growth specialists looking for project leads and Adbibe referrals.",
            benefits: [
                "Freelance & contract leads",
                "Tool tips & audits",
                "Adbibe partner referrals",
            ],
            // TODO: Replace with your Freelancer WhatsApp group invite link
            whatsappGroupUrl: "https://chat.whatsapp.com/INVITE_FREELANCERS",
            memberLabel: "300+ freelancers",
        },
    ],
};
