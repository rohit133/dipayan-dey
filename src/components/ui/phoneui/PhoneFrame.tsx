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
        className="absolute inset-0 w-[280px] h-[560px] md:w-[320px] md:h-[640px] rounded-[3rem] bg-orange-500/20 blur-3xl scale-110 pointer-events-none"
        aria-hidden
      />
      <div className="relative w-[280px] md:w-[320px] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border-[3px] border-foreground/20 bg-foreground/5 shadow-2xl">
        <div className="pt-8 pb-4 px-2 bg-foreground/5">
          <div className="h-6 w-24 rounded-full bg-foreground/20 mx-auto" />
        </div>
        <div className="aspect-[9/19] max-h-[60vh] bg-[#0a0a0a] overflow-hidden rounded-b-[1.5rem]">
          {children}
        </div>
      </div>
    </motion.div>
  );
}
