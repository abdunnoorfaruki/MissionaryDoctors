"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";
import type { Project, TimelineStatus } from "../../types";
import { cn } from "@/lib/utils";
import { AccentTitle } from "./accent-title";
import { Eyebrow, RevealSection } from "./section-primitives";

interface MilestonesSectionProps {
  data: Project["milestones"];
}

const dotByStatus: Record<TimelineStatus, string> = {
  done: "bg-primary border-primary text-primary-foreground",
  current:
    "bg-destructive border-destructive text-destructive-foreground ring-4 ring-destructive/20",
  upcoming: "bg-background border-border",
};

export function MilestonesSection({ data }: MilestonesSectionProps) {
  return (
    <RevealSection bordered>
      <Eyebrow>{data.eyebrow}</Eyebrow>
      <AccentTitle parts={data.title} className="mb-5" />
      <p className="text-base md:text-lg text-muted-foreground max-w-[62ch] mb-10">
        {data.intro}
      </p>

      <ol className="relative">
        {/* Vertical line */}
        <div
          aria-hidden
          className="absolute left-[11px] top-2 bottom-2 w-px bg-border"
        />

        {data.entries.map((entry, i) => (
          <motion.li
            key={entry.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.07, ease: "easeOut" }}
            className="relative pl-12 pb-8 last:pb-0"
          >
            <div
              className={cn(
                "absolute left-0 top-1.5 w-[22px] h-[22px] rounded-full border-2",
                "flex items-center justify-center",
                dotByStatus[entry.status]
              )}
            >
              {entry.status === "done" && <Check size={11} strokeWidth={3} />}
              {entry.status === "current" && (
                <motion.span
                  initial={{ scale: 0.6, opacity: 0.6 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 1.4,
                  }}
                  className="w-2 h-2 rounded-full bg-destructive-foreground"
                />
              )}
            </div>

            <div className="text-xs uppercase tracking-[0.12em] text-muted-foreground mb-1.5">
              {entry.date}
            </div>
            <div className="text-lg md:text-xl text-foreground font-medium mb-1.5 leading-snug">
              {entry.title}
            </div>
            <div className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-[50ch]">
              {entry.description}
            </div>
          </motion.li>
        ))}
      </ol>
    </RevealSection>
  );
}
