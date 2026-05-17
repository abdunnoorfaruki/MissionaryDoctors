/**
 * Shared easing curves for motion/react.
 * The `as const` is required so TypeScript treats these as fixed-length
 * tuples (which motion's `ease` type expects) rather than `number[]`.
 */
export const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;
export const EASE_OUT_QUART = [0.25, 1, 0.5, 1] as const;
export const EASE_IN_OUT = [0.42, 0, 0.58, 1] as const;