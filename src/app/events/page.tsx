import type { Metadata } from "next";

import EventsPageContent from "@/components/events/EventsPageContent";
import MarketingLayout from "@/components/layout/MarketingLayout";

export const metadata: Metadata = {
    title: "Events & Workshops",
    description:
        "Influencer marketing masterclasses, performance marketing workshops, and founder meetups by Adbibe — online and in Bengaluru.",
    alternates: { canonical: "https://adbibe.com/events" },
};

export default function EventsPage() {
    return (
        <MarketingLayout>
            <EventsPageContent />
        </MarketingLayout>
    );
}
