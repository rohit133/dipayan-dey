"use client";

import React from "react";
import Link from "next/link";
import { MessageSquarePlus, Star } from "lucide-react";

import { adReviewsData } from "@/lib/data";

const ReviewCard: React.FC<{ review: (typeof adReviewsData.reviews)[0] }> = ({ review }) => (
    <figure className="flex w-[min(100%,22rem)] shrink-0 flex-col rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 sm:w-[24rem]">
        <div className="flex items-center gap-0.5" aria-label={`${review.rating} out of 5 stars`}>
            {Array.from({ length: review.rating }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-orange-400 text-orange-400" />
            ))}
        </div>
        <blockquote className="mt-2 text-sm leading-relaxed text-white/80">
            &ldquo;{review.quote}&rdquo;
        </blockquote>
        <figcaption className="mt-3 flex items-center justify-between gap-2 text-xs">
            <span className="text-white/55">
                {review.author} · {review.role}
            </span>
            <span className="rounded-full border border-orange-500/25 bg-orange-500/10 px-2 py-0.5 font-medium text-orange-200/90">
                {review.platform}
            </span>
        </figcaption>
    </figure>
);

const AdReviewsBar: React.FC = () => {
    const loop = [...adReviewsData.reviews, ...adReviewsData.reviews];

    return (
        <section id="reviews" className="section-shell overflow-hidden border-y border-white/[0.04] bg-white/[0.015] py-10 md:py-12">
            <div className="section-inner mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <p className="type-eyebrow inline-flex items-center gap-2">
                        <span className="h-px w-6 bg-orange-500/50" aria-hidden />
                        {adReviewsData.badge}
                    </p>
                    <h2 className="type-section-title mt-3 max-w-xl">{adReviewsData.title}</h2>
                </div>
                <Link
                    href={adReviewsData.submitReviewUrl}
                    className="btn-secondary inline-flex h-10 shrink-0 gap-2 px-4 text-sm"
                >
                    <MessageSquarePlus className="h-4 w-4" />
                    Share your experience
                </Link>
            </div>

            <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#080808] to-transparent sm:w-24" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#080808] to-transparent sm:w-24" />

                <div className="reviews-marquee flex w-max gap-4 px-4 hover:[animation-play-state:paused]">
                    {loop.map((review, index) => (
                        <ReviewCard key={`${review.id}-${index}`} review={review} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AdReviewsBar;
