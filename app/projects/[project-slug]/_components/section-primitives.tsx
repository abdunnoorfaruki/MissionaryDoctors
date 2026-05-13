"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "text-xs uppercase tracking-[0.18em] text-muted-foreground font-medium mb-5",
        className
      )}
    >
      {children}
    </div>
  );
}

interface RevealSectionProps {
  children: ReactNode;
  className?: string;
  /** Add the top border + padding used between stacked sections. */
  bordered?: boolean;
  id?: string;
}

export function RevealSection({
  children,
  className,
  bordered = false,
  id,
}: RevealSectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        bordered && "border-t border-border pt-15",
        "pb-15",
        className
      )}
    >
      {children}
    </motion.section>
  );
}
