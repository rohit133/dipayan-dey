"use client";

import { motion, HTMLMotionProps } from "framer-motion";

interface RealisticPhoneFrameProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    className?: string;
}

/**
 * iPhone 15 Pro-accurate phone frame.
 *
 * Key realism details:
 *  - Ultra-thin, uniform bezels (like real OLED edge-to-edge display)
 *  - Dynamic Island sits INSIDE the screen area, overlaying content
 *  - Camera lens with green-tinted glass & specular highlight
 *  - Side buttons with metallic finish
 *  - Home indicator inside the screen at the very bottom
 *  - Subtle titanium frame gradient
 */
export default function RealisticPhoneFrame({
    children,
    className = "",
    ...props
}: RealisticPhoneFrameProps) {
    return (
        <motion.div className={`relative ${className}`} {...props}>
            {/* ── Side buttons (left) ─────────────────────── */}
            {/* Mute switch */}
            <div
                className="absolute -left-[2.5px] top-[16%] w-[2.5px] h-[10px] rounded-l-[1px]"
                style={{
                    background: "linear-gradient(180deg, #4a4a4e, #2a2a2e, #4a4a4e)",
                    boxShadow: "inset 0 0.5px 0 rgba(255,255,255,0.1)",
                }}
                aria-hidden
            />
            {/* Volume Up */}
            <div
                className="absolute -left-[2.5px] top-[23%] w-[2.5px] h-[24px] rounded-l-[1px]"
                style={{
                    background: "linear-gradient(180deg, #4a4a4e, #2a2a2e, #4a4a4e)",
                    boxShadow: "inset 0 0.5px 0 rgba(255,255,255,0.1)",
                }}
                aria-hidden
            />
            {/* Volume Down */}
            <div
                className="absolute -left-[2.5px] top-[32%] w-[2.5px] h-[24px] rounded-l-[1px]"
                style={{
                    background: "linear-gradient(180deg, #4a4a4e, #2a2a2e, #4a4a4e)",
                    boxShadow: "inset 0 0.5px 0 rgba(255,255,255,0.1)",
                }}
                aria-hidden
            />

            {/* ── Side button (right) — Power ────────────── */}
            <div
                className="absolute -right-[2.5px] top-[27%] w-[2.5px] h-[32px] rounded-r-[1px]"
                style={{
                    background: "linear-gradient(180deg, #4a4a4e, #2a2a2e, #4a4a4e)",
                    boxShadow: "inset 0 0.5px 0 rgba(255,255,255,0.1)",
                }}
                aria-hidden
            />

            {/* ── Titanium outer shell ───────────────────── */}
            <div
                className="relative rounded-[44px] sm:rounded-[48px]"
                style={{
                    /* Titanium frame gradient */
                    background:
                        "linear-gradient(145deg, #3a3a3e 0%, #1c1c1e 30%, #2a2a2e 60%, #3a3a3e 100%)",
                    /* Layered shadows for depth */
                    boxShadow: [
                        "0 20px 50px rgba(0,0,0,0.55)",
                        "0 6px 20px rgba(0,0,0,0.4)",
                        /* Top edge catch-light */
                        "inset 0 1px 0 rgba(255,255,255,0.07)",
                        "inset 0 -1px 0 rgba(255,255,255,0.03)",
                        /* Left/right edge highlight */
                        "inset 1px 0 0 rgba(255,255,255,0.04)",
                        "inset -1px 0 0 rgba(255,255,255,0.04)",
                    ].join(", "),
                    /* Thin bezel all around — this IS the bezel width */
                    padding: "8px 5px",
                }}
            >
                {/* ── Display (the screen) ─────────────────── */}
                <div
                    className="relative rounded-[38px] sm:rounded-[42px] overflow-hidden bg-black"
                    style={{
                        /* iPhone 15 Pro aspect ratio: ~2556x1179 → roughly 19.5:9 → 9:19.5 portrait */
                        aspectRatio: "9 / 19.5",
                    }}
                >
                    {/* Screen content */}
                    <div className="absolute inset-0">{children}</div>

                    {/* ── Dynamic Island (inside the screen) ── */}
                    <div
                        className="absolute top-[10px] sm:top-[12px] left-1/2 -translate-x-1/2 z-30 flex items-center"
                        style={{ width: "84px", height: "24px" }}
                    >
                        {/* Pill */}
                        <div
                            className="absolute inset-0 rounded-full bg-black"
                            style={{
                                boxShadow:
                                    "0 0 0 0.5px rgba(255,255,255,0.06), 0 1px 3px rgba(0,0,0,0.6)",
                            }}
                        />
                        {/* Camera lens */}
                        <div className="relative z-10 ml-auto mr-[10px]" style={{ width: "9px", height: "9px" }}>
                            {/* Outer ring */}
                            <div
                                className="absolute inset-0 rounded-full"
                                style={{
                                    background:
                                        "radial-gradient(circle at 40% 35%, #1a1a2e, #0a0a14)",
                                    border: "0.5px solid rgba(255,255,255,0.1)",
                                }}
                            />
                            {/* Inner lens — dark green tint (IR camera look) */}
                            <div
                                className="absolute rounded-full"
                                style={{
                                    top: "1.5px",
                                    left: "1.5px",
                                    width: "6px",
                                    height: "6px",
                                    background:
                                        "radial-gradient(circle at 35% 30%, #1a3328 0%, #0d1f18 60%, #060e0a 100%)",
                                    boxShadow: "inset 0 0 1.5px rgba(0,0,0,0.6)",
                                }}
                            />
                            {/* Specular highlight */}
                            <div
                                className="absolute rounded-full"
                                style={{
                                    top: "2px",
                                    left: "2.5px",
                                    width: "2px",
                                    height: "1.5px",
                                    background: "rgba(255,255,255,0.4)",
                                    filter: "blur(0.3px)",
                                }}
                            />
                        </div>
                    </div>

                    {/* ── Status bar indicators (time, signal, battery) ── */}
                    <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 sm:px-7 pt-[13px] sm:pt-[15px] pointer-events-none">
                        {/* Time */}
                        <span className="text-[10px] sm:text-[11px] font-semibold text-white/90 tracking-tight"
                            style={{ fontFeatureSettings: "'tnum'" }}>
                            9:41
                        </span>
                        {/* Right indicators */}
                        <div className="flex items-center gap-[5px]">
                            {/* Signal bars */}
                            <svg width="14" height="10" viewBox="0 0 14 10" className="opacity-80">
                                <rect x="0" y="7" width="2.5" height="3" rx="0.5" fill="white" />
                                <rect x="3.5" y="5" width="2.5" height="5" rx="0.5" fill="white" />
                                <rect x="7" y="2.5" width="2.5" height="7.5" rx="0.5" fill="white" />
                                <rect x="10.5" y="0" width="2.5" height="10" rx="0.5" fill="white" />
                            </svg>
                            {/* WiFi */}
                            <svg width="12" height="10" viewBox="0 0 12 10" className="opacity-80">
                                <path d="M6 8.5a1 1 0 100 2 1 1 0 000-2z" fill="white" />
                                <path d="M3 7a4.2 4.2 0 016 0" stroke="white" strokeWidth="1.2" fill="none" strokeLinecap="round" />
                                <path d="M1 4.5a7.5 7.5 0 0110 0" stroke="white" strokeWidth="1.2" fill="none" strokeLinecap="round" />
                            </svg>
                            {/* Battery */}
                            <div className="flex items-center gap-[1px]">
                                <div
                                    className="relative rounded-[2px] border border-white/60"
                                    style={{ width: "18px", height: "9px", padding: "1px" }}
                                >
                                    <div className="h-full rounded-[1px] bg-white/80" style={{ width: "75%" }} />
                                </div>
                                <div className="w-[1px] h-[4px] bg-white/50 rounded-r-full" />
                            </div>
                        </div>
                    </div>

                    {/* ── Home indicator (inside screen, bottom) ── */}
                    <div className="absolute bottom-[6px] sm:bottom-[8px] left-1/2 -translate-x-1/2 z-20">
                        <div
                            className="h-[4px] sm:h-[5px] rounded-full bg-white/30"
                            style={{ width: "100px" }}
                        />
                    </div>

                    {/* ── Subtle glass reflection on screen ──── */}
                    <div
                        className="pointer-events-none absolute inset-0 z-10"
                        style={{
                            background:
                                "linear-gradient(125deg, rgba(255,255,255,0.025) 0%, transparent 35%, transparent 65%, rgba(255,255,255,0.01) 100%)",
                        }}
                        aria-hidden
                    />
                </div>
            </div>
        </motion.div>
    );
}
