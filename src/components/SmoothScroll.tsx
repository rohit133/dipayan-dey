"use client";

import { useEffect, ReactNode } from "react";
import Lenis from "lenis";

declare global {
    interface Window {
        lenis?: Lenis;
    }
}

interface SmoothScrollProps {
    children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
            infinite: false,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Expose the instance so overlays (modals) can pause smooth scrolling
        window.lenis = lenis;

        // Add CSS for Lenis
        document.documentElement.classList.add('lenis');

        // Add global styles for smooth scroll
        const style = document.createElement('style');
        style.innerHTML = `
      html.lenis, html.lenis body {
        height: auto;
      }
      .lenis-smooth {
        scroll-behavior: auto !important;
      }
      .lenis-smooth [data-lenis-prevent] {
        overscroll-behavior: contain;
      }
      .lenis-stopped {
        overflow: hidden;
      }
      .lenis-scrolling iframe {
        pointer-events: none;
      }
    `;
        document.head.appendChild(style);

        return () => {
            if (window.lenis === lenis) delete window.lenis;
            lenis.destroy();
            document.documentElement.classList.remove('lenis');
            document.head.removeChild(style);
        };
    }, []);

    return <>{children}</>;
}
