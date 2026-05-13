"use client";

import { cn } from "@/lib/utils";
import type { CSSProperties, HTMLAttributes } from "react";

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  /** Override the default rounded-md */
  rounded?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  /** Animation delay offset in seconds — staggers when multiple skeletons share a row. */
  delay?: number;
}

const roundedMap: Record<NonNullable<SkeletonProps["rounded"]>, string> = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  full: "rounded-full",
};

/**
 * Skeleton primitive with a continuous left-to-right wave shimmer.
 * The shimmer animation lives in globals.css as `@keyframes skeleton-wave`.
 */
export function Skeleton({
  className,
  rounded = "md",
  delay = 0,
  style,
  ...props
}: SkeletonProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "relative overflow-hidden bg-muted",
        roundedMap[rounded],
        className
      )}
      style={
        {
          "--skeleton-delay": `${delay}s`,
          ...style,
        } as CSSProperties
      }
      {...props}
    >
      <div className="absolute inset-0 skeleton-wave" />
    </div>
  );
}
