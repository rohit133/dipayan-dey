import React from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

interface MarketingLayoutProps {
    children: React.ReactNode;
}

const MarketingLayout: React.FC<MarketingLayoutProps> = ({ children }) => {
    return (
        <main className="min-h-screen">
            <Header />
            <div className="pt-24 pb-4">{children}</div>
            <Footer />
        </main>
    );
};

export default MarketingLayout;
