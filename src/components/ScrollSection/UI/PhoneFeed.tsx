import { useRef } from "react";
import { IPhoneFeedItem } from "../../../types/scroll-section/Layout";

const DUMMY_FEED: IPhoneFeedItem[] = [
    {
        id: "1",
        user: "Visionary Studio",
        avatar: "https://api.dicebear.com/7.x/shapes/svg?seed=visionary",
        content: "Exploring the boundaries of digital reality. #FutureTech #Design",
        likes: 1240,
        comments: 48,
    },
    {
        id: "2",
        user: "Aesthetic Mind",
        avatar: "https://api.dicebear.com/7.x/shapes/svg?seed=aesthetic",
        content: "Minimalism is not a lack of something. It's the perfect amount of something.",
        likes: 2850,
        comments: 92,
    },
    {
        id: "3",
        user: "Neo Designer",
        avatar: "https://api.dicebear.com/7.x/shapes/svg?seed=neo",
        content: "The future is glassmorphic. ✨ #UI #UX #ThreeJS",
        likes: 950,
        comments: 34,
    },
    {
        id: "4",
        user: "Creative Dev",
        avatar: "https://api.dicebear.com/7.x/shapes/svg?seed=creative",
        content: "Blending code and art to create experiences that feel alive.",
        likes: 4200,
        comments: 156,
    }
];

export default function PhoneFeed() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <div
            ref={containerRef}
            className="w-full h-full bg-[#0a0a0a] text-white flex flex-col font-sans overflow-y-auto scrollbar-hide"
        >
            {/* App Header */}
            <div className="sticky top-0 w-full p-6 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5 z-10 flex items-center justify-between">
                <h1 className="text-xl font-bold tracking-tight">Discover</h1>
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500" />
            </div>

            {/* Feed Content */}
            <div className="flex-1 p-4 space-y-6">
                {DUMMY_FEED.map((item) => (
                    <div
                        key={item.id}
                        className="group relative bg-white/5 rounded-3xl p-5 border border-white/5 hover:border-white/10 transition-all duration-300"
                    >
                        <div className="flex items-center space-x-3 mb-4">
                            <img src={item.avatar} alt={item.user} className="w-10 h-10 rounded-2xl bg-white/10" />
                            <div>
                                <p className="font-semibold text-sm">{item.user}</p>
                                <p className="text-xs text-white/40">2 hours ago</p>
                            </div>
                        </div>

                        <p className="text-sm leading-relaxed text-white/80 mb-4">
                            {item.content}
                        </p>

                        <div className="flex items-center space-x-6 text-xs text-white/40">
                            <span className="flex items-center space-x-1 hover:text-white transition-colors cursor-pointer">
                                <span>❤️</span> <span>{item.likes >= 1000 ? `${(item.likes / 1000).toFixed(1)}k` : item.likes}</span>
                            </span>
                            <span className="flex items-center space-x-1 hover:text-white transition-colors cursor-pointer">
                                <span>💬</span> <span>{item.comments}</span>
                            </span>
                            <span className="flex items-center space-x-1 hover:text-white transition-colors cursor-pointer">
                                <span>↗️</span>
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Bar */}
            <div className="sticky bottom-0 w-full h-20 bg-[#0a0a0a]/80 backdrop-blur-md border-t border-white/5 px-8 flex items-center justify-between">
                <div className="text-xl opacity-100 italic">🏠</div>
                <div className="text-xl opacity-40 italic">🔍</div>
                <div className="text-xl opacity-40 italic">➕</div>
                <div className="text-xl opacity-40 italic">🔔</div>
                <div className="text-xl opacity-40 italic">👤</div>
            </div>
        </div>
    );
}
