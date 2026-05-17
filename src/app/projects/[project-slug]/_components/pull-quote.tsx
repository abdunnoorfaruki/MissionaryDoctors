"use client";

import { motion } from "motion/react";

interface PullQuoteProps {
  children: React.ReactNode;
  attribution?: string;
}

export function PullQuote({ children, attribution }: PullQuoteProps) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="my-16 md:my-24 max-w-[38rem] relative"
    >
      {/* Decorative terra-cotta rule */}
      <div
        aria-hidden
        className="w-12 h-px bg-destructive mb-6"
      />
      <blockquote className="editorial-pullquote max-w-[24ch]">
        <span className="text-destructive mr-0.5" aria-hidden>
          “
        </span>
        {children}
        <span className="text-destructive ml-0.5" aria-hidden>
          ”
        </span>
      </blockquote>
      {attribution && (
        <figcaption className="mt-5 text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
          — {attribution}
        </figcaption>
      )}
    </motion.figure>
  );
}