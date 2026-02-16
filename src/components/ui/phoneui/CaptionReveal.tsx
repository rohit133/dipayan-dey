"use client";

import { motion, useTransform, MotionValue } from "framer-motion";

interface CaptionRevealProps {
  text: string;
  progress: MotionValue<number>;
  className?: string;
}

function Word({
  children,
  progress,
  start,
  end,
}: {
  children: string;
  progress: MotionValue<number>;
  start: number;
  end: number;
}) {
  const opacity = useTransform(progress, [start, end], [0.25, 1]);
  const y = useTransform(progress, [start, end], [8, 0]);
  return (
    <motion.span style={{ opacity, y }} className="mr-[0.3em] inline-block">
      {children}
    </motion.span>
  );
}

export default function CaptionReveal({ text, progress, className = "" }: CaptionRevealProps) {
  const words = text.split(" ");
  const step = 1 / Math.max(words.length, 1);

  return (
    <p
      className={`text-center text-base md:text-lg lg:text-xl text-foreground/90 font-semibold max-w-xl mx-auto ${className}`}
    >
      {words.map((word, i) => (
        <Word key={i} progress={progress} start={i * step} end={(i + 1) * step}>
          {word}
        </Word>
      ))}
    </p>
  );
}
