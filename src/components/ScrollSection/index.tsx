"use client";

import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Experience from "./Experience";
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function ScrollSection() {
    const containerRef = useRef<HTMLDivElement>(null!);
    const phoneUIRef = useRef<HTMLDivElement>(null!);

    useGSAP(() => {
        if (!containerRef.current) return;

        // 1. Sibling Background Transitions (Seamless Portal)
        const prevSection = containerRef.current.previousElementSibling as HTMLElement;
        const nextSection = containerRef.current.nextElementSibling as HTMLElement;

        if (prevSection) {
            gsap.to(prevSection, {
                backgroundColor: "#000000",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 100%",
                    end: "top 20%",
                    scrub: true,
                }
            });
        }

        if (nextSection) {
            gsap.fromTo(nextSection,
                { backgroundColor: "#000000" },
                {
                    backgroundColor: "transparent",
                    immediateRender: false,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "bottom 80%",
                        end: "bottom 0%",
                        scrub: true,
                    }
                }
            );
        }

        // 2. Main Scroll & Navbar Timeline
        ScrollTrigger.create({
            trigger: containerRef.current,
            start: "top top",
            end: "bottom bottom",
            onToggle: (self) => {
                const action = self.isActive ? 'hide-nav' : 'show-nav';

                // Robust Hiding: Add class to body to force override in CSS if needed
                if (self.isActive) {
                    document.body.classList.add('no-navbar');
                } else {
                    document.body.classList.remove('no-navbar');
                }

                window.dispatchEvent(new CustomEvent(action));
            },
            onRefresh: (self) => {
                if (self.isActive) {
                    document.body.classList.add('no-navbar');
                    window.dispatchEvent(new CustomEvent('hide-nav'));
                }
            }
        });

    }, { scope: containerRef });

    return (
        <section
            ref={containerRef}
            // 4000px of pinning + 120vh for entry/exit transition space
            className="relative w-full h-[calc(4000px+120vh)] bg-black"
        >
            {/* Sticky Container */}
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">

                <div ref={phoneUIRef} className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none opacity-0" style={{ opacity: 0 }}>
                    {/* UI elements for the phone will go here */}
                </div>

                {/* 3D Scene Layer (Background visual) */}
                <div className="absolute inset-0 z-10 pointer-events-none">
                    <Canvas
                        shadows
                        camera={{
                            position: [0, 0, 12],
                            fov: 45
                        }}
                        gl={{
                            antialias: true,
                            alpha: true,
                            powerPreference: "high-performance"
                        }}
                        dpr={[1, 2]}
                    >
                        <Experience
                            scrollContainer={containerRef}
                        />

                    </Canvas>
                </div>
                {/* UI Overlay removed as per request */}
            </div>
        </section>
    );
}
