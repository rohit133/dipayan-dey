"use client";

const BAR_VALUES = [72, 88, 65, 95, 78, 82];
const CAMPAIGNS = [
  { name: "Brand Awareness Q1", impr: "124k", ctr: "2.4%", conv: "340" },
  { name: "Performance Max", impr: "89k", roas: "3.2x" },
  { name: "Search - Core", impr: "56k", ctr: "4.1%", conv: "189" },
];

export default function AdsScreen() {
  return (
    <div className="h-full bg-[#0a0a0a] text-white flex flex-col overflow-hidden font-sans">
      <div className="flex-shrink-0 py-2.5 px-3 border-b border-white/5 flex items-center gap-2">
        <div className="w-7 h-7 rounded-lg bg-blue-600/80 flex items-center justify-center text-[10px] font-bold">G</div>
        <span className="text-sm font-semibold">Campaigns</span>
      </div>
      <div className="flex-1 overflow-y-auto p-3 space-y-3 min-h-0 scrollbar-hide">
        <div className="bg-white/5 rounded-xl p-3 border border-white/5">
          <p className="text-[10px] text-white/50 uppercase tracking-wide mb-2">Overview</p>
          <div className="flex gap-1 justify-between items-end h-10 mb-2">
            {BAR_VALUES.map((v, i) => (
              <div
                key={i}
                className="flex-1 rounded-t bg-blue-500/50 min-h-[4px] self-end"
                style={{ height: `${(v / 100) * 40}px` }}
              />
            ))}
          </div>
          <p className="text-[10px] text-white/40">Last 7 days</p>
        </div>
        {CAMPAIGNS.map((c, i) => (
          <div key={i} className="bg-white/5 rounded-xl p-3 border border-white/5">
            <p className="text-[10px] text-white/50 uppercase tracking-wide mb-1">Campaign</p>
            <p className="text-xs font-semibold">{c.name}</p>
            <div className="flex gap-3 mt-2 text-[10px] text-white/60 flex-wrap">
              <span>Impr. {c.impr}</span>
              {c.ctr && <span>CTR {c.ctr}</span>}
              {c.conv && <span>Conv. {c.conv}</span>}
              {c.roas && <span>ROAS {c.roas}</span>}
            </div>
          </div>
        ))}
        <div className="bg-orange-600/10 border border-orange-500/30 rounded-xl p-3">
          <p className="text-[10px] text-orange-400 uppercase tracking-wide mb-1">Growth</p>
          <p className="text-xs font-semibold">+24% vs last week</p>
        </div>
      </div>
    </div>
  );
}
