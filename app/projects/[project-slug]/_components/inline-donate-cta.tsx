"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useDonation } from "./donation-context";
import { cn } from "@/lib/utils";

interface InlineDonateCtaProps {
  headline: string;
  subline: string;
  buttonLabel?: string;
  className?: string;
}

export function InlineDonateCta({
  headline,
  subline,
  buttonLabel = "Give now",
  className,
}: InlineDonateCtaProps) {
  const { openModal } = useDonation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "my-20 md:my-24 max-w-[42rem]",
        className
      )}
    >
      <div className="w-12 h-px bg-destructive mb-6" aria-hidden />
      <h4
        className="text-2xl md:text-[1.75rem] leading-[1.2] text-foreground mb-4 max-w-[24ch] italic font-light"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        {headline}
      </h4>
      <p className="prose-reading max-w-[44ch] mb-7">
        {subline}
      </p>
      <button
        onClick={openModal}
        className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-foreground text-background text-sm tracking-wide hover:bg-destructive transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
      >
        {buttonLabel}
        <ArrowRight
          size={15}
          className="transition-transform group-hover:translate-x-1"
        />
      </button>
    </motion.div>
  );
}