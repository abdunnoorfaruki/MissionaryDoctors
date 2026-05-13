"use client";

import { motion } from "motion/react";
import { ArrowRight, HeartHandshake } from "lucide-react";
import { useDonation } from "./donation-context";
import { cn } from "@/lib/utils";

interface InlineDonateCtaProps {
  /** Short context-specific copy. */
  headline: string;
  subline: string;
  /** Optional override for the button label. */
  buttonLabel?: string;
  className?: string;
}

export function InlineDonateCta({
  headline,
  subline,
  buttonLabel = "Donate now",
  className,
}: InlineDonateCtaProps) {
  const { openModal } = useDonation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "relative my-10 rounded-2xl border border-border bg-card p-6 md:p-8",
        "shadow-sm hover:shadow-md transition-shadow",
        "flex flex-col md:flex-row md:items-center gap-5 md:gap-8",
        "overflow-hidden",
        className
      )}
    >
      {/* Soft accent gradient corner */}
      <div
        aria-hidden
        className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-primary/8 blur-3xl pointer-events-none"
      />

      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary shrink-0">
        <HeartHandshake size={22} />
      </div>

      <div className="flex-1">
        <h4 className="text-lg md:text-xl font-medium text-foreground mb-1">
          {headline}
        </h4>
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-[52ch]">
          {subline}
        </p>
      </div>

      <button
        onClick={openModal}
        className={cn(
          "group inline-flex items-center justify-center gap-2 px-6 py-3.5",
          "rounded-xl bg-primary text-primary-foreground font-medium text-sm md:text-[0.95rem]",
          "hover:bg-primary/90 transition-all hover:shadow-lg hover:-translate-y-0.5",
          "active:translate-y-0 active:shadow-md",
          "whitespace-nowrap"
        )}
      >
        {buttonLabel}
        <ArrowRight
          size={16}
          className="transition-transform group-hover:translate-x-0.5"
        />
      </button>
    </motion.div>
  );
}
