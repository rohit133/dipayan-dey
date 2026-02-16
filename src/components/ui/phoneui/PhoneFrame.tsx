"use client";

import { motion, useTransform, MotionValue } from "framer-motion";

interface PhoneFrameProps {
  entranceProgress: MotionValue<number>;
  glowProgress: MotionValue<number>;
  children: React.ReactNode;
}

export default function PhoneFrame({
  entranceProgress,
  glowProgress,
  children,
}: PhoneFrameProps) {
  const y = useTransform(entranceProgress, [0, 1], ["70%", "0%"]);
  const x = useTransform(entranceProgress, [0, 0.5, 1], ["8%", "-2%", "0%"]);
  const scale = useTransform(entranceProgress, [0, 0.5, 1], [0.35, 0.9, 1]);
  const opacity = useTransform(entranceProgress, [0, 0.35], [0, 1]);
  const rotateX = useTransform(entranceProgress, [0, 1], [18, 0]);
  const glowOpacity = useTransform(glowProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      style={{ x, y, scale, opacity, rotateX }}
      className="relative flex flex-col items-center justify-center origin-center"
    >
      <motion.div
        style={{ opacity: glowOpacity }}
        className="absolute inset-0 w-[284px] h-[576px] md:w-[320px] md:h-[648px] rounded-[3.25rem] bg-orange-500/20 blur-3xl scale-110 pointer-events-none"
        aria-hidden
      />
      {/* iPhone-style frame: Dynamic Island, symmetric bezels, subtle depth */}
      <div className="relative w-[284px] h-[576px] md:w-[320px] md:h-[648px] overflow-hidden rounded-[3.25rem] md:rounded-[3.5rem] border-[10px] md:border-[12px] border-neutral-800 bg-neutral-800 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_25px_50px_-12px_rgba(0,0,0,0.5),0_12px_24px_-8px_rgba(0,0,0,0.4)]">
        {/* Dynamic Island: pill cutout */}
        <div className="absolute inset-x-0 top-0 z-10 flex justify-center pt-3 md:pt-4">
          <div className="h-6 w-[88px] md:h-7 md:w-[100px] rounded-full bg-black shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]" aria-hidden />
        </div>
        {/* Screen: recessed with a hairline inner edge */}
        <div className="absolute left-2.5 right-2.5 bottom-2.5 top-10 md:left-3 md:right-3 md:bottom-3 md:top-11 rounded-[2.15rem] md:rounded-[2.4rem] overflow-hidden bg-[#0a0a0a] ring-1 ring-black/50">
          <div className="w-full h-full overflow-hidden">
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
