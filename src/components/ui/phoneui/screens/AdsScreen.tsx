"use client";

interface AdsScreenProps {
  graphProgress?: number;
}

const PATH = "M 0 80 Q 25 60 50 50 T 100 20";
const PATH_LENGTH = 140;

export default function AdsScreen({ graphProgress = 0 }: AdsScreenProps) {
  const pathProgress = Math.min(1, graphProgress);
  const dashOffset = PATH_LENGTH * (1 - pathProgress);

  return (
    <div className="h-full w-full bg-[#0a0a0a] text-white flex flex-col overflow-hidden font-sans flex-shrink-0">
      <div className="flex-shrink-0 pt-[44px] px-3 pb-3 border-b border-white/5 flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-blue-600/80 flex items-center justify-center text-xs font-bold">G</div>
        <span className="text-sm font-semibold">Google Ads</span>
      </div>
      <div className="flex-1 overflow-hidden p-3 space-y-3 min-h-0 flex flex-col">
        <div className="bg-white/5 rounded-xl p-3 border border-white/5 flex-shrink-0">
          <p className="text-[10px] text-white/50 uppercase tracking-wide mb-1">Campaign</p>
          <p className="text-xs font-semibold">Brand Awareness Q1</p>
          <div className="flex gap-4 mt-2 text-[10px] text-white/60">
            <span>Impr. 124k</span>
            <span>CTR 2.4%</span>
            <span>Conv. 340</span>
          </div>
        </div>
        <div className="flex-1 min-h-0 rounded-xl bg-white/[0.03] border border-white/5 p-3 flex flex-col">
          <p className="text-[10px] text-white/50 mb-2">Performance (scroll to animate)</p>
          <div className="flex-1 min-h-[80px] relative">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
              <path
                d={PATH}
                fill="none"
                stroke="rgba(249, 115, 22, 0.9)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray={PATH_LENGTH}
                strokeDashoffset={dashOffset}
                style={{ transition: "none" }}
              />
            </svg>
          </div>
        </div>
        <div className="bg-orange-600/10 border border-orange-500/30 rounded-xl p-3 flex-shrink-0">
          <p className="text-[10px] text-orange-400 uppercase tracking-wide mb-1">Growth</p>
          <p className="text-xs font-semibold">+24% vs last week</p>
        </div>
      </div>
    </div>
  );
}
