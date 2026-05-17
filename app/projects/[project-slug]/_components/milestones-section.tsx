"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";
import type { Project, TimelineStatus } from "../../types";
import { cn } from "@/lib/utils";

interface MilestonesSectionProps {
  data: Project["milestones"];
  chapter?: string;
}

const dotByStatus: Record<TimelineStatus, string> = {
  done: "bg-primary border-primary text-primary-foreground",
  current:
    "bg-destructive border-destructive text-destructive-foreground ring-4 ring-destructive/15",
  upcoming: "bg-background border-border",
};

export function MilestonesSection({
  data,
  chapter = "Chapter Three",
}: MilestonesSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="py-20 md:py-28 border-t border-border"
    >
      <div className="flex items-baseline gap-4 mb-10 md:mb-14">
        <span className="text-[0.7rem] uppercase tracking-[0.22em] text-destructive font-medium">
          {chapter}
        </span>
        <span className="flex-1 h-px bg-border" aria-hidden />
      </div>

      <h2 className="text-[clamp(2rem,4.2vw,3.25rem)] leading-[1.05] tracking-[-0.02em] font-medium text-foreground mb-7 max-w-[18ch]">
        Funds release on{" "}
        <span
          className="italic font-light text-destructive"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          milestones
        </span>
        .
      </h2>
      <p className="prose-reading max-w-[44ch] mb-14 md:mb-16">{data.intro}</p>

      <ol className="relative">
        <div
          aria-hidden
          className="absolute left-[13px] top-3 bottom-3 w-px bg-border"
        />
        {data.entries.map((entry, i) => (
          <motion.li
            key={entry.id}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.07, ease: "easeOut" }}
            className="relative pl-14 pb-10 md:pb-12 last:pb-0"
          >
            <div
              className={cn(
                "absolute left-0 top-2 w-[26px] h-[26px] rounded-full border-2 flex items-center justify-center",
                dotByStatus[entry.status]
              )}
            >
              {entry.status === "done" && <Check size={12} strokeWidth={3} />}
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

            <div className="text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground mb-2">
              {entry.date}
            </div>
            <div className="text-xl md:text-2xl text-foreground font-normal mb-2 leading-snug">
              {entry.title}
            </div>
            <div className="prose-reading max-w-[44ch] !text-[1.0625rem] !leading-[1.7]">
              {entry.description}
            </div>
          </motion.li>
        ))}
      </ol>
    </motion.section>
  );
}