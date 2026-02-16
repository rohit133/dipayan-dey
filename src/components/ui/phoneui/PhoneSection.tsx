"use client";

import { useRef, useState, useMemo, useCallback } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import CaptionReveal from "./CaptionReveal";
import PhoneScreenContentShorts from "./PhoneScreenContentShorts";
import { phoneUICaptions } from "@/lib/data/phoneui";
import { scrollToSectionProgress, FEEDS_BAND, ADS_BAND, AGENTS_BAND, SCROLL } from "./scrollRanges";

const THROTTLE_MS = 48;
const THROTTLE_DELTA = 0.012;
const SECTION_HEIGHT_VH = 400;

export default function PhoneSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const lastRef = useRef(0);
  const lastTimeRef = useRef(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const throttledSet = useCallback((v: number) => {
    const now = Date.now();
    const prev = lastRef.current;
    if (
      Math.abs(v - prev) >= THROTTLE_DELTA ||
      now - lastTimeRef.current >= THROTTLE_MS
    ) {
      lastRef.current = v;
      lastTimeRef.current = now;
      setScrollProgress(v);
    }
  }, []);

  useMotionValueEvent(scrollYProgress, "change", throttledSet);

  const sectionProgress = useMemo(
    () => scrollToSectionProgress(scrollProgress),
    [scrollProgress]
  );

  const [f0, f1] = FEEDS_BAND;
  const [a0, a1] = ADS_BAND;
  const [g0, g1] = AGENTS_BAND;

  const captionProgress0 = useTransform(scrollYProgress, [f0, f1], [0, 1]);
  const captionProgress1 = useTransform(scrollYProgress, [a0, a1], [0, 1]);
  const captionProgress2 = useTransform(scrollYProgress, [g0, g1], [0, 1]);

  const activeSection = sectionProgress < 1 ? 0 : sectionProgress < 2 ? 1 : 2;

  const screenContentOpacity = useTransform(
    scrollYProgress,
    [SCROLL.REVEAL_START, SCROLL.REVEAL_END],
    [0, 1]
  );

  return (
    <section
      ref={containerRef}
      className="relative bg-background text-foreground py-14 md:py-20 isolate"
      style={{ height: `${SECTION_HEIGHT_VH}vh`, contain: "layout" }}
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center py-12 md:py-16">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center gap-6 flex-1 min-h-0 min-w-0">
          {/* CSS-only phone frame – no WebGL for performance */}
          <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[10/18] flex-shrink-0 rounded-[2rem] border border-white/10 bg-neutral-900/95 shadow-2xl overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 sm:w-24 sm:h-6 rounded-b-full bg-black z-10" aria-hidden />
            <motion.div
              style={{ opacity: screenContentOpacity }}
              className="absolute inset-x-2 top-6 bottom-2 sm:inset-x-2.5 sm:top-7 sm:bottom-2.5 rounded-[1.25rem] overflow-hidden bg-[#0a0a0a]"
            >
              <PhoneScreenContentShorts sectionProgress={sectionProgress} />
            </motion.div>
          </div>

          <div className="relative min-h-[3.5rem] w-full max-w-xl flex items-center justify-center flex-shrink-0 text-center">
            {activeSection === 0 && (
              <div className="absolute inset-0 flex items-center justify-center px-2">
                <CaptionReveal text={phoneUICaptions[0]} progress={captionProgress0} />
              </div>
            )}
            {activeSection === 1 && (
              <div className="absolute inset-0 flex items-center justify-center px-2">
                <CaptionReveal text={phoneUICaptions[1]} progress={captionProgress1} />
              </div>
            )}
            {activeSection === 2 && (
              <div className="absolute inset-0 flex items-center justify-center px-2">
                <CaptionReveal text={phoneUICaptions[2]} progress={captionProgress2} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
