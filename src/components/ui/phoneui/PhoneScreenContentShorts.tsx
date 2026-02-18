"use client";

import { memo } from "react";
import FeedsScreen from "./screens/FeedsScreen";
import AdsScreen from "./screens/AdsScreen";
import AgentsScreen from "./screens/AgentsScreen";

interface PhoneScreenContentShortsProps {
  sectionProgress: number;
}

function clamp(n: number, a: number, b: number) {
  return Math.max(a, Math.min(b, n));
}

function PhoneScreenContentShortsInner({ sectionProgress }: PhoneScreenContentShortsProps) {
  const within0 = clamp(sectionProgress, 0, 1);
  const within1 = clamp(sectionProgress - 1, 0, 1);
  const within2 = clamp(sectionProgress - 2, 0, 1);

  return (
    <div className="h-full w-full overflow-hidden bg-[#0a0a0a]">
      <div
        className="h-full flex flex-col"
        style={{ transform: `translate3d(0,-${sectionProgress * 100}%,0)` }}
      >
        <div className="h-full flex-shrink-0">
          <FeedsScreen feedScroll={within0} />
        </div>
        <div className="h-full flex-shrink-0">
          <AdsScreen graphProgress={within1} />
        </div>
        <div className="h-full flex-shrink-0">
          <AgentsScreen agentProgress={within2} />
        </div>
      </div>
    </div>
  );
}

export default memo(PhoneScreenContentShortsInner);
