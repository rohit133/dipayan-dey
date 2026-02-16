"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxTransitionProps {
    label?: string;
}

/**
 * Parallax transition divider placed between two full sections.
 *
 * As the user scrolls through this region:
 *  - The top section (About) slides up and fades/scales down
 *  - The bottom section (PhoneUI) rises from below with a slight zoom
 *  - A subtle gradient bridge connects the two backgrounds
 */
export default function ParallaxTransition({ label = "What We Build" }: ParallaxTransitionProps) {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    /* ── Top layer: About's "shadow" receding ───────────── */
    const topY = useTransform(scrollYProgress, [0, 0.5], ["0%", "-30%"]);
    const topScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.92]);
    const topOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);

    /* ── Bottom layer: PhoneUI's "preview" approaching ──── */
    const bottomY = useTransform(scrollYProgress, [0.4, 1], ["60%", "0%"]);
    const bottomScale = useTransform(scrollYProgress, [0.4, 1], [0.9, 1]);
    const bottomOpacity = useTransform(scrollYProgress, [0.45, 0.85], [0, 1]);

    /* ── Center text reveal ─────────────────────────────── */
    const textOpacity = useTransform(scrollYProgress, [0.25, 0.5, 0.7], [0, 1, 0]);
    const textY = useTransform(scrollYProgress, [0.25, 0.5, 0.7], [30, 0, -30]);
    const textScale = useTransform(scrollYProgress, [0.25, 0.5, 0.7], [0.9, 1, 0.95]);

    return (
        <div ref={ref} className="relative h-[60vh] md:h-[80vh] overflow-hidden">
            {/* Top receding gradient — blends from section above */}
            <motion.div
                className="absolute inset-x-0 top-0 h-1/2 pointer-events-none"
                style={{ y: topY, scale: topScale, opacity: topOpacity }}
            >
                <div className="h-full w-full bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a] to-transparent" />
            </motion.div>

            {/* Center: transitional text element */}
            <motion.div
                className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
                style={{ opacity: textOpacity, y: textY, scale: textScale }}
            >
                <div className="text-center px-4">
                    <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-orange-600/80">
                        {label}
                    </p>
                    <div className="mt-3 w-8 h-[2px] bg-orange-600/40 mx-auto rounded-full" />
                </div>
            </motion.div>

            {/* Bottom approaching gradient — blends into section below */}
            <motion.div
                className="absolute inset-x-0 bottom-0 h-1/2 pointer-events-none"
                style={{ y: bottomY, scale: bottomScale, opacity: bottomOpacity }}
            >
                <div className="h-full w-full bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a] to-transparent" />
            </motion.div>

            {/* Ambient decorative elements */}
            <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full pointer-events-none"
                style={{
                    opacity: textOpacity,
                    background:
                        "radial-gradient(circle, rgba(234,88,12,0.04) 0%, transparent 70%)",
                }}
            />
        </div>
    );
}
