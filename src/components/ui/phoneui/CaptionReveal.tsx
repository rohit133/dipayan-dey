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
  highlight,
}: {
  children: string;
  progress: MotionValue<number>;
  start: number;
  end: number;
  highlight?: boolean;
}) {
  const opacity = useTransform(progress, [start, end], [0.4, 1]);
  const y = useTransform(progress, [start, end], [6, 0]);
  return (
    <motion.span
      style={{ opacity, y }}
      className={`mr-[0.3em] inline-block ${highlight ? "text-orange-600 font-semibold" : ""}`}
    >
      {children}
    </motion.span>
  );
}

export default function CaptionReveal({ text, progress, className = "" }: CaptionRevealProps) {
  const words = text.split(" ");
  const step = 1 / Math.max(words.length, 1);
  const highlightWords = new Set([
    "apps", "scroll", "smoother", "feeds.", "campaigns", "growth.", "end-to-end", "agents.",
  ]);

  return (
    <p
      className={`text-center text-base md:text-lg text-foreground font-semibold max-w-xl mx-auto leading-snug ${className}`}
    >
      {words.map((word, i) => (
        <Word
          key={i}
          progress={progress}
          start={i * step}
          end={(i + 1) * step}
          highlight={highlightWords.has(word)}
        >
          {word}
        </Word>
      ))}
    </p>
  );
}
