"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import PhoneFrame from "./PhoneFrame";
import PhoneScreenContent from "./PhoneScreenContent";
import CaptionReveal from "./CaptionReveal";
import { phoneUICaptions } from "@/lib/data/phoneui";

const ENTRANCE_END = 0.2;
const GLOW_AT = 0.18;
const SECTION_START = 0.2;
const SECTION_END = 0.78;

export default function PhoneSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const entranceProgress = useTransform(scrollYProgress, [0, ENTRANCE_END], [0, 1]);
  const glowProgress = useTransform(scrollYProgress, [GLOW_AT, GLOW_AT + 0.02], [0, 1]);
  const sectionProgress = useTransform(
    scrollYProgress,
    [SECTION_START, SECTION_END],
    [0, 3]
  );

  const captionProgress0 = useTransform(scrollYProgress, [0.22, 0.38], [0, 1]);
  const captionProgress1 = useTransform(scrollYProgress, [0.42, 0.58], [0, 1]);
  const captionProgress2 = useTransform(scrollYProgress, [0.62, 0.76], [0, 1]);

  const captionOpacity0 = useTransform(scrollYProgress, [0.2, 0.25, 0.35, 0.4], [0, 1, 1, 0]);
  const captionOpacity1 = useTransform(scrollYProgress, [0.38, 0.42, 0.55, 0.6], [0, 1, 1, 0]);
  const captionOpacity2 = useTransform(scrollYProgress, [0.55, 0.62, 0.75, 0.8], [0, 1, 1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative bg-background text-foreground"
      style={{ height: "400vh" }}
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center gap-8 py-20 px-4 perspective-1000">
        <PhoneFrame
          entranceProgress={entranceProgress}
          glowProgress={glowProgress}
        >
          <PhoneScreenContent sectionProgress={sectionProgress} />
        </PhoneFrame>

        <div className="relative h-14 w-full max-w-xl mx-auto flex items-center justify-center">
          <motion.div style={{ opacity: captionOpacity0 }} className="absolute inset-0 flex items-center justify-center">
            <CaptionReveal text={phoneUICaptions[0]} progress={captionProgress0} />
          </motion.div>
          <motion.div style={{ opacity: captionOpacity1 }} className="absolute inset-0 flex items-center justify-center">
            <CaptionReveal text={phoneUICaptions[1]} progress={captionProgress1} />
          </motion.div>
          <motion.div style={{ opacity: captionOpacity2 }} className="absolute inset-0 flex items-center justify-center">
            <CaptionReveal text={phoneUICaptions[2]} progress={captionProgress2} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
