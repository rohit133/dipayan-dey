"use client";

import { motion, useTransform, MotionValue } from "framer-motion";
import FeedsScreen from "./screens/FeedsScreen";
import AdsScreen from "./screens/AdsScreen";
import AgentsScreen from "./screens/AgentsScreen";

const SCREENS = [FeedsScreen, AdsScreen, AgentsScreen] as const;

interface PhoneScreenContentProps {
  sectionProgress: MotionValue<number>;
}

function ScreenSlot({ index, progress }: { index: number; progress: MotionValue<number> }) {
  const inStart = index - 0.2;
  const inEnd = index + 0.15;
  const outStart = index + 0.65;
  const outEnd = index + 0.95;
  const opacity = useTransform(progress, [inStart, inEnd, outStart, outEnd], [0, 1, 1, 0]);
  const scale = useTransform(progress, [inStart, inEnd], [0.97, 1]);
  const Component = SCREENS[index];

  return (
    <motion.div style={{ opacity, scale }} className="absolute inset-0">
      <Component />
    </motion.div>
  );
}

export default function PhoneScreenContent({ sectionProgress }: PhoneScreenContentProps) {
  return (
    <div className="relative w-full h-full">
      {SCREENS.map((_, i) => (
        <ScreenSlot key={i} index={i} progress={sectionProgress} />
      ))}
    </div>
  );
}
