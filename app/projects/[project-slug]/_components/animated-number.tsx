"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef } from "react";

interface AnimatedNumberProps {
  value: number;
  /** Format the displayed number. */
  format?: (n: number) => string;
  duration?: number;
  /** If true, animates whenever value changes (used for optimistic updates). */
  animateOnChange?: boolean;
  className?: string;
}

export function AnimatedNumber({
  value,
  format = (n) => Math.round(n).toLocaleString("en-US"),
  duration = 1.4,
  animateOnChange = false,
  className,
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const mv = useMotionValue(0);
  const display = useTransform(mv, (latest) => format(latest));

  // Initial in-view animation.
  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, value, { duration, ease: [0.22, 1, 0.36, 1] });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  // Re-animate on value change (optimistic update after donation).
  useEffect(() => {
    if (!animateOnChange || !inView) return;
    const controls = animate(mv, value, {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, animateOnChange]);

  return (
    <motion.span ref={ref} className={className}>
      {display}
    </motion.span>
  );
}
