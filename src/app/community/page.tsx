import type { Metadata } from "next";

import CommunityPageContent from "@/components/community/CommunityPageContent";
import MarketingLayout from "@/components/layout/MarketingLayout";

export const metadata: Metadata = {
    title: "Influencer & Freelancer Community",
    description:
        "Join Adbibe WhatsApp groups for influencers, creators, and freelance performance marketers. Brand briefs, collabs, and growth gigs.",
    alternates: { canonical: "https://adbibe.com/community" },
};

export default function CommunityPage() {
    return (
        <MarketingLayout>
            <CommunityPageContent />
        </MarketingLayout>
    );
}
