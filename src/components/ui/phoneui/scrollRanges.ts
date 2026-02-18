/**
 * Feeds scroll for a long time (only feeds, no ads). Then quick auto-swipe to ads, then agents.
 * Strict: no overlapping scroll where feeds and ads both move.
 */
export const SCROLL = {
  REVEAL_START: 0,
  REVEAL_END: 0.12,
  START: 0.08,
  END: 0.85,
} as const;

const RANGE = SCROLL.END - SCROLL.START;
/** Feeds get most of the scroll so you feel the feed scroll; then auto-swipe to ads */
const FEEDS_PART = 0.60;
const ADS_PART = 0.24;
const AGENTS_PART = 0.16;

export const FEEDS_BAND: [number, number] = [
  SCROLL.START,
  SCROLL.START + RANGE * FEEDS_PART,
];
export const ADS_BAND: [number, number] = [
  SCROLL.START + RANGE * FEEDS_PART,
  SCROLL.START + RANGE * (FEEDS_PART + ADS_PART),
];
export const AGENTS_BAND: [number, number] = [
  SCROLL.START + RANGE * (FEEDS_PART + ADS_PART),
  SCROLL.END,
];

export function scrollToSectionProgress(scroll: number): number {
  if (scroll <= FEEDS_BAND[0]) return 0;
  if (scroll <= FEEDS_BAND[1])
    return (scroll - FEEDS_BAND[0]) / (FEEDS_BAND[1] - FEEDS_BAND[0]);
  if (scroll <= ADS_BAND[1])
    return 1 + (scroll - ADS_BAND[0]) / (ADS_BAND[1] - ADS_BAND[0]);
  if (scroll <= AGENTS_BAND[1])
    return 2 + (scroll - AGENTS_BAND[0]) / (AGENTS_BAND[1] - AGENTS_BAND[0]);
  return 3;
}
