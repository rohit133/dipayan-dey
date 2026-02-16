"use client";

export default function AgentsScreen() {
  return (
    <div className="h-full bg-[#0a0a0a] text-white flex flex-col overflow-hidden font-sans">
      <div className="flex-shrink-0 py-2.5 px-3 border-b border-white/5 flex items-center gap-2">
        <div className="w-6 h-6 rounded bg-orange-500/80" />
        <span className="text-sm font-semibold">n8n · Workflow</span>
      </div>
      <div className="flex-1 overflow-hidden p-3 flex items-center justify-center min-h-0">
        <div className="relative w-full max-w-[220px] aspect-square border border-white/10 rounded-xl bg-white/[0.02]">
          <div className="absolute top-[18%] left-[22%] w-9 h-9 rounded-lg bg-orange-500/30 border border-orange-500/50 flex items-center justify-center text-[8px] font-mono">
            Trigger
          </div>
          <div className="absolute top-[42%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-[8px] font-mono">
            AI
          </div>
          <div className="absolute bottom-[18%] right-[22%] w-9 h-9 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-[8px] font-mono">
            Output
          </div>
          <svg className="absolute inset-0 w-full h-full text-white/20 pointer-events-none" aria-hidden>
            <path
              d="M 22% 27% L 50% 50% M 50% 50% L 78% 73%"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="8 6"
              strokeLinecap="round"
              className="workflow-flow"
              style={{ strokeDashoffset: 0 }}
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
