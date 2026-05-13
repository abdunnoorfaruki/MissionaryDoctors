"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import type { Project } from "../../types";
import { formatCurrency } from "@/lib/utils";
import { useDonation } from "./donation-context";

interface MobileDonateBarProps {
  project: Project;
}

/**
 * Sticky bottom bar shown on mobile / tablet. Reveals after hero scrolls
 * out of view so it doesn't fight the first impression.
 */
export function MobileDonateBar({ project }: MobileDonateBarProps) {
  const { openModal, raisedDelta } = useDonation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Reveal after scrolling ~420px (past hero area on mobile)
      setVisible(window.scrollY > 420);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const liveRaised = project.stats.raised + raisedDelta;
  const percent = Math.min(100, (liveRaised / project.stats.goal) * 100);

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{
        y: visible ? 0 : 100,
        opacity: visible ? 1 : 0,
      }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="lg:hidden fixed bottom-0 left-0 right-0 z-30 px-3 pb-3 pt-2 pointer-events-none"
    >
      <div className="pointer-events-auto bg-card/95 backdrop-blur-md border border-border rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-1.5 mb-1">
            <span className="text-base font-medium text-foreground tabular-nums">
              {formatCurrency(liveRaised)}
            </span>
            <span className="text-xs text-muted-foreground">
              of {formatCurrency(project.stats.goal)}
            </span>
          </div>
          <div className="h-1 bg-muted rounded-full overflow-hidden">
            <motion.div
              animate={{ scaleX: percent / 100 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ transformOrigin: "left center" }}
              className="h-full bg-primary rounded-full"
            />
          </div>
        </div>

        <button
          onClick={openModal}
          className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-destructive text-destructive-foreground text-sm font-medium hover:bg-destructive/90 active:scale-95 transition-all"
        >
          Donate
          <ArrowUp size={14} className="rotate-45" />
        </button>
      </div>
    </motion.div>
  );
}
