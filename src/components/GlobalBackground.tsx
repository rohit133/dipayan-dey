"use client";

import React from "react";

import NoiseBackground from "./NoiseBackground";

const GlobalBackground: React.FC = () => {
    const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

    React.useEffect(() => {
        const updateMousePosition = (ev: MouseEvent) => {
            setMousePosition({ x: ev.clientX, y: ev.clientY });
        };
        window.addEventListener("mousemove", updateMousePosition);
        return () => window.removeEventListener("mousemove", updateMousePosition);
    }, []);

    return (
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#080808]">
            <NoiseBackground opacity={0.025} />

            {/* Subtle grid */}
            <div
                className="absolute inset-0 opacity-[0.35]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
                    backgroundSize: "64px 64px",
                    maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent)",
                }}
            />

            {/* Cursor spotlight — subtle */}
            <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(249, 115, 22, 0.04), transparent 55%)`,
                }}
            />

            <div className="absolute -left-[20%] top-[-15%] h-[45%] w-[45%] rounded-full bg-sky-500/[0.08] blur-[100px]" />
            <div className="absolute -right-[15%] bottom-[10%] h-[35%] w-[35%] rounded-full bg-violet-600/[0.07] blur-[100px]" />
        </div>
    );
};

export default GlobalBackground;
