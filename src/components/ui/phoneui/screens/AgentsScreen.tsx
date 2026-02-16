"use client";

interface AgentsScreenProps {
  agentProgress?: number;
}

export default function AgentsScreen({ agentProgress = 0 }: AgentsScreenProps) {
  const line1 = Math.min(1, agentProgress * 2);
  const line2 = Math.max(0, Math.min(1, (agentProgress - 0.5) * 2));
  const nodeOpacity = (n: number) => (agentProgress >= n * 0.25 ? 1 : 0.3);

  return (
    <div className="h-full w-full bg-[#0a0a0a] text-white flex flex-col overflow-hidden font-sans flex-shrink-0">
      <div className="flex-shrink-0 pt-[44px] px-3 pb-3 border-b border-white/5 flex items-center gap-2">
        <div className="w-6 h-6 rounded bg-orange-500/80" />
        <span className="text-sm font-semibold">n8n · Workflow</span>
      </div>
      <div className="flex-1 overflow-hidden p-2 flex items-center justify-center min-h-0">
        <div className="relative w-full max-w-[200px] aspect-square border border-white/10 rounded-xl bg-white/[0.02]">
          <div
            className="absolute top-1/4 left-1/4 w-10 h-10 rounded-lg bg-orange-500/30 border border-orange-500/50 flex items-center justify-center text-[8px] font-mono transition-opacity duration-200"
            style={{ opacity: nodeOpacity(0) }}
          >
            Trigger
          </div>
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-[8px] font-mono transition-opacity duration-200"
            style={{ opacity: nodeOpacity(1) }}
          >
            AI
          </div>
          <div
            className="absolute bottom-1/4 right-1/4 w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-[8px] font-mono transition-opacity duration-200"
            style={{ opacity: nodeOpacity(2) }}
          >
            Output
          </div>
          <svg className="absolute inset-0 w-full h-full text-white/20" aria-hidden>
            <line
              x1="25%"
              y1="25%"
              x2="50%"
              y2="50%"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="1"
              strokeDashoffset={1 - line1}
              pathLength={1}
              style={{ transition: "none" }}
            />
            <line
              x1="50%"
              y1="50%"
              x2="75%"
              y2="75%"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="1"
              strokeDashoffset={1 - line2}
              pathLength={1}
              style={{ transition: "none" }}
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
