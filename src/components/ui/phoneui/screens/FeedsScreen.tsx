"use client";

const FEED_SCROLL_RANGE = 180;

const items = [
  { user: "Visionary Studio", content: "Exploring the boundaries of digital reality.", likes: "1.2k" },
  { user: "Aesthetic Mind", content: "Minimalism is the perfect amount of something.", likes: "2.8k" },
  { user: "Neo Designer", content: "The future is glassmorphic. ✨", likes: "950" },
  { user: "Creative Dev", content: "Blending code and art to create experiences.", likes: "4.2k" },
  { user: "FormPilot", content: "Seamless integration with your favorite tools.", likes: "1.1k" },
];

interface FeedsScreenProps {
  feedScroll?: number;
}

export default function FeedsScreen({ feedScroll = 0 }: FeedsScreenProps) {
  const y = -feedScroll * FEED_SCROLL_RANGE;

  return (
    <div className="h-full w-full bg-[#0a0a0a] text-white flex flex-col overflow-hidden font-sans flex-shrink-0">
      <div className="flex-shrink-0 p-3 border-b border-white/5 flex items-center justify-between">
        <span className="text-sm font-bold">Discover</span>
        <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-orange-500 to-orange-600" />
      </div>
      <div className="flex-1 overflow-hidden min-h-0 relative">
        <div
          className="absolute inset-x-0 top-0 p-3 space-y-3 transition-none"
          style={{ transform: `translateY(${y}px)` }}
        >
          {items.map((item, i) => (
            <div key={i} className="bg-white/5 rounded-2xl p-3 border border-white/5">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-xl bg-white/10" />
                <div>
                  <p className="text-xs font-semibold">{item.user}</p>
                  <p className="text-[10px] text-white/40">2h ago</p>
                </div>
              </div>
              <p className="text-[11px] text-white/80 leading-snug">{item.content}</p>
              <p className="text-[10px] text-white/40 mt-2">❤️ {item.likes}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-shrink-0 h-12 border-t border-white/5 flex items-center justify-around text-lg opacity-60">
        <span>🏠</span><span>🔍</span><span>➕</span><span>👤</span>
      </div>
    </div>
  );
}
