"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

interface ScrollRevealTextProps {
    text: string;
    className?: string;
    highlightPhrases?: string[];
}

const Word = ({ children, progress, range, highlight }: { children: string; progress: MotionValue<number>; range: [number, number], highlight?: boolean }) => {
    const opacity = useTransform(progress, range, [0.1, 1]);
    return (
        <span className="relative mr-[0.25em]">
            <span className={`absolute opacity-[0.1] ${highlight ? 'text-orange-600' : ''}`}>{children}</span>
            <motion.span style={{ opacity }} className={highlight ? 'text-orange-600' : ''}>{children}</motion.span>
        </span>
    );
};

export const ScrollRevealText = ({ text, className = "", highlightPhrases = [] }: ScrollRevealTextProps) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start 0.9", "start 0.25"],
    });

    const words = text.split(" ");

    // Create a set of indices for highlighted words
    const highlightedIndices = new Set<number>();

    if (highlightPhrases.length > 0) {
        const lowerText = text.toLowerCase();

        highlightPhrases.forEach(phrase => {
            const lowerPhrase = phrase.toLowerCase();
            let startIndex = 0;
            let index = lowerText.indexOf(lowerPhrase, startIndex);

            while (index !== -1) {
                // Find which words correspond to this character range
                let currentLength = 0;
                let wordStartIndex = 0;

                for (let i = 0; i < words.length; i++) {
                    const word = words[i];
                    // +1 for the space that was split
                    const wordLength = word.length + (i < words.length - 1 ? 1 : 0);

                    if (currentLength >= index && currentLength < index + lowerPhrase.length) {
                        highlightedIndices.add(i);
                    } else if (currentLength + wordLength > index && currentLength < index + lowerPhrase.length) {
                        highlightedIndices.add(i);
                    }

                    currentLength += wordLength;
                }

                startIndex = index + 1;
                index = lowerText.indexOf(lowerPhrase, startIndex);
            }
        });
    }

    return (
        <div ref={container} className={`flex flex-wrap ${className}`}>
            {words.map((word, i) => {
                const start = i / words.length;
                const end = start + 1 / words.length;
                return (
                    <Word key={i} progress={scrollYProgress} range={[start, end]} highlight={highlightedIndices.has(i)}>
                        {word}
                    </Word>
                );
            })}
        </div>
    );
};
