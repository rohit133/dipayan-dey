"use client";

import React from 'react';
import NoiseBackground from './NoiseBackground';

const GlobalBackground: React.FC = () => {
    const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

    React.useEffect(() => {
        const updateMousePosition = (ev: MouseEvent) => {
            setMousePosition({ x: ev.clientX, y: ev.clientY });
        };
        window.addEventListener('mousemove', updateMousePosition);
        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-background transition-colors duration-sm">
            <NoiseBackground opacity={0.03} />

            {/* Global Mouse Spotlight */}
            <div
                className="absolute inset-0 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(249, 115, 22, 0.06), transparent 50%)`
                }}
            />

            {/* Premium Ambient Glows - Top Left */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-orange-600/10 dark:bg-orange-600/5 rounded-full blur-[120px] animate-pulse" />

            {/* Premium Ambient Glows - Bottom Right */}
            <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] bg-orange-900/10 dark:bg-orange-900/5 rounded-full blur-[120px]" />
        </div>
    );
};

export default GlobalBackground;
