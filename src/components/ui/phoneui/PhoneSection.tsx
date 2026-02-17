"use client";

import { useRef, useState, useMemo, useCallback, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import CaptionReveal from "./CaptionReveal";
import PhoneScreenContentShorts from "./PhoneScreenContentShorts";
import RealisticPhoneFrame from "./RealisticPhoneFrame";
import { phoneUICaptions } from "@/lib/data/phoneui";
import { scrollToSectionProgress, FEEDS_BAND, ADS_BAND, AGENTS_BAND, SCROLL } from "./scrollRanges";

const THROTTLE_MS = 48;
const THROTTLE_DELTA = 0.012;
const SECTION_HEIGHT_VH = 280;

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

  // Hide navbar while phone frame is on-screen
  const navHiddenRef = useRef(false);
  useEffect(() => {
    const shouldHide = scrollProgress >= SCROLL.REVEAL_START && scrollProgress <= SCROLL.END;
    if (shouldHide && !navHiddenRef.current) {
      navHiddenRef.current = true;
      window.dispatchEvent(new Event("hide-nav"));
    } else if (!shouldHide && navHiddenRef.current) {
      navHiddenRef.current = false;
      window.dispatchEvent(new Event("show-nav"));
    }
  }, [scrollProgress]);

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

  const phoneY = useTransform(scrollYProgress, [0, 1], ["2%", "-2%"]);
  const captionsY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);

  return (
    <section
      ref={containerRef}
      className="relative bg-background text-foreground pt-0 pb-0 md:py-20 isolate"
      style={{ height: `${SECTION_HEIGHT_VH}vh`, contain: "layout" }}
    >
      <div className="sticky top-0 h-dvh flex flex-col items-center justify-center py-0 md:py-16">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center gap-6 flex-1 min-h-0 min-w-0">
          <RealisticPhoneFrame
            style={{ y: phoneY }}
            className="w-full max-w-[280px] sm:max-w-[320px] flex-shrink-0"
          >
            <motion.div
              style={{ opacity: screenContentOpacity }}
              className="absolute inset-0"
            >
              <PhoneScreenContentShorts sectionProgress={sectionProgress} />
            </motion.div>
          </RealisticPhoneFrame>

          <motion.div
            style={{ y: captionsY }}
            className="relative min-h-[3.5rem] w-full max-w-xl flex items-center justify-center flex-shrink-0 text-center"
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
