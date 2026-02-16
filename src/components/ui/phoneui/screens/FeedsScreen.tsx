"use client";

const FEED_ITEMS = [
  { handle: "visionary_studio", content: "Exploring the boundaries of digital reality.", time: "2h", likes: "1.2k", replies: "24" },
  { handle: "aesthetic_mind", content: "Minimalism is the perfect amount of something.", time: "3h", likes: "2.8k", replies: "41" },
  { handle: "neo_designer", content: "The future is glassmorphic. ✨", time: "5h", likes: "950", replies: "12" },
  { handle: "build_faster", content: "Ship fast, iterate in the open.", time: "6h", likes: "3.1k", replies: "89" },
  { handle: "ui_daily", content: "Small details make the product. Here's what we shipped today.", time: "8h", likes: "1.8k", replies: "33" },
  { handle: "dev_tips", content: "One line that saved our bundle size: dynamic import for routes.", time: "10h", likes: "4.2k", replies: "120" },
  { handle: "design_system", content: "Tokens → components → screens. Keep the chain simple.", time: "12h", likes: "2.1k", replies: "18" },
  { handle: "mobile_first", content: "If it doesn't feel good on a small screen, it's not done.", time: "14h", likes: "890", replies: "22" },
  { handle: "data_viz", content: "Charts that load in one frame. No heavy libs.", time: "16h", likes: "1.5k", replies: "31" },
  { handle: "ship_it", content: "Deployed the new feed. Scroll performance is buttery.", time: "18h", likes: "2.4k", replies: "56" },
  { handle: "api_first", content: "Design the contract first. Code second.", time: "20h", likes: "1.1k", replies: "44" },
  { handle: "dark_mode", content: "One theme to rule them all: system preference wins.", time: "22h", likes: "3.3k", replies: "67" },
  { handle: "perf_team", content: "LCP under 1.2s on 3G. Here's how we did it.", time: "1d", likes: "2.0k", replies: "91" },
  { handle: "a11y_weekly", content: "Focus ring is not optional. Style it, don't remove it.", time: "1d", likes: "1.6k", replies: "28" },
  { handle: "design_ops", content: "Figma variables → code. One source of truth.", time: "1d", likes: "890", replies: "15" },
];

export default function FeedsScreen() {
  return (
    <div className="h-full bg-[#0a0a0a] text-white flex flex-col overflow-hidden font-sans">
      <div className="flex-shrink-0 py-2.5 px-3 border-b border-white/5 flex items-center justify-between">
        <span className="text-sm font-bold">For You</span>
        <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-orange-500 to-orange-600" />
      </div>
      <div className="flex-1 overflow-y-auto min-h-0 overscroll-contain scrollbar-hide">
        {FEED_ITEMS.map((item, i) => (
          <div
            key={i}
            className="py-3 px-3 border-b border-white/5 hover:bg-white/[0.02] transition-colors"
          >
            <div className="flex gap-2.5">
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-white/10" />
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-xs font-semibold">{item.handle}</span>
                  <span className="text-[10px] text-white/40">· {item.time}</span>
                </div>
                <p className="text-[11px] text-white/90 leading-snug mt-0.5">{item.content}</p>
                <div className="flex items-center gap-4 mt-2 text-[10px] text-white/40">
                  <span>💬 {item.replies}</span>
                  <span>❤️ {item.likes}</span>
                  <span>↗️</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex-shrink-0 h-11 border-t border-white/5 flex items-center justify-around text-base opacity-60">
        <span>🏠</span><span>🔍</span><span>➕</span><span>👤</span>
      </div>
    </div>
  );
}
