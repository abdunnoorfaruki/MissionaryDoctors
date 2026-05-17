"use client";

import { motion, useInView, AnimatePresence } from "motion/react";
import { useRef, useEffect } from "react";
import { Check, Loader2, Shield, Sparkles, TrendingUp, FileCheck } from "lucide-react";
import type { Project } from "../../types";
import { cn, formatCurrency } from "@/lib/utils";
import { useDonation } from "./donation-context";
import { AnimatedNumber } from "./animated-number";

interface DonateCardProps {
  project: Project;
  /** If true, renders without the outer card chrome (used inside modal). */
  embedded?: boolean;
  className?: string;
}

const PROMISE_ICONS = [Sparkles, FileCheck, TrendingUp, Shield];

/**
 * Renders **bold** markers in promise lines.
 */
function renderBold(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="text-foreground font-medium">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export function DonateCard({ project, embedded = false, className }: DonateCardProps) {
  const {
    amount,
    customAmount,
    isCustom,
    paymentStatus,
    raisedDelta,
    donorDelta,
    selectAmount,
    setCustomAmount,
    submitDonation,
    resetPayment,
  } = useDonation();

  const cardRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(cardRef, { once: true, margin: "-10% 0px" });

  const liveRaised = project.stats.raised + raisedDelta;
  const liveDonors = project.stats.donors + donorDelta;
  const percent = Math.min(100, (liveRaised / project.stats.goal) * 100);

  // Reset success state after a short delay so user can give again.
  useEffect(() => {
    if (paymentStatus !== "success") return;
    const t = setTimeout(() => resetPayment(), 2400);
    return () => clearTimeout(t);
  }, [paymentStatus, resetPayment]);

  const giveLabel =
    paymentStatus === "loading"
      ? "Processing…"
      : paymentStatus === "success"
        ? "Thank you!"
        : amount
          ? `Give ${formatCurrency(amount)}`
          : "Enter an amount";

  const giveDisabled =
    !amount || amount <= 0 || paymentStatus === "loading" || paymentStatus === "success";

  return (
    <div
      ref={cardRef}
      className={cn(
        !embedded && [
          "bg-card border border-border rounded-2xl p-6 md:p-7",
          "shadow-sm hover:shadow-md transition-shadow duration-500",
        ],
        embedded && "p-1",
        className
      )}
    >
      {/* Top stats — raised / of goal */}
      <div className="flex items-baseline gap-2 mb-1.5">
        <span className="text-4xl md:text-5xl font-light tracking-tight text-foreground tabular-nums">
          $
          <AnimatedNumber
            value={liveRaised}
            animateOnChange
            className="text-destructive font-light"
          />
        </span>
      </div>
      <div className="text-sm text-muted-foreground mb-5">
        raised of{" "}
        <span className="text-foreground font-medium">
          {formatCurrency(project.stats.goal)}
        </span>
      </div>

      {/* Progress bar — animates from 0 to percent when in view */}
      <div className="relative h-2 bg-muted rounded-full overflow-hidden mb-4">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: inView ? percent / 100 : 0 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          style={{ transformOrigin: "left center" }}
          className="absolute inset-0 bg-destructive rounded-full"
        />
        {/* Subtle shimmer on the bar */}
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: inView ? "200%" : "-100%" }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.6 }}
          className="absolute inset-y-0 w-1/3 bg-linear-to-r from-transparent via-white/40 to-transparent"
        />
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-3 gap-2 pb-5 mb-5 border-b border-border">
        <div>
          <div className="text-lg font-medium text-foreground tabular-nums">
            <AnimatedNumber
              value={percent}
              format={(n) => `${Math.round(n)}%`}
              animateOnChange
            />
          </div>
          <div className="text-xs text-muted-foreground">funded</div>
        </div>
        <div>
          <div className="text-lg font-medium text-foreground tabular-nums">
            <AnimatedNumber value={liveDonors} animateOnChange />
          </div>
          <div className="text-xs text-muted-foreground">donors</div>
        </div>
        <div>
          <div className="text-lg font-medium text-foreground tabular-nums">
            ~{project.stats.estimatedCloseDays}d
          </div>
          <div className="text-xs text-muted-foreground">est. close</div>
        </div>
      </div>

      {/* Amount selection */}
      <div className="text-sm text-foreground font-medium mb-2.5">
        Choose an amount
      </div>
      <div className="grid grid-cols-3 gap-1.5 mb-2">
        {project.donation.presets.map((preset) => {
          const active = !isCustom && amount === preset.amount;
          return (
            <motion.button
              key={preset.amount}
              onClick={() => selectAmount(preset.amount)}
              whileTap={{ scale: 0.96 }}
              className={cn(
                "py-3 px-1 text-base rounded-xl border transition-all",
                "tabular-nums font-medium",
                active
                  ? "bg-foreground text-background border-foreground shadow-sm"
                  : "bg-background text-foreground border-border hover:border-foreground/40"
              )}
            >
              ${preset.amount.toLocaleString()}
            </motion.button>
          );
        })}
      </div>

      {/* Custom amount */}
      <div
        className={cn(
          "flex items-center rounded-xl border bg-background overflow-hidden mb-3.5 transition-colors",
          isCustom ? "border-foreground/60" : "border-border"
        )}
      >
        <span className="pl-3.5 pr-2 text-muted-foreground font-light text-lg">$</span>
        <input
          type="text"
          inputMode="decimal"
          placeholder="Other amount"
          value={customAmount}
          onChange={(e) => setCustomAmount(e.target.value)}
          className="flex-1 py-3 pr-3 bg-transparent text-base text-foreground placeholder:text-muted-foreground/70 focus:outline-none tabular-nums"
        />
      </div>

      {/* Give button */}
      <button
        onClick={submitDonation}
        disabled={giveDisabled}
        className={cn(
          "relative w-full py-4 rounded-xl font-medium text-[0.95rem] transition-all overflow-hidden",
          "disabled:cursor-not-allowed",
          paymentStatus === "success"
            ? "bg-primary text-primary-foreground"
            : "bg-destructive text-destructive-foreground hover:bg-destructive/90",
          paymentStatus === "idle" &&
            "hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0",
          giveDisabled && paymentStatus === "idle" && "opacity-60"
        )}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={paymentStatus + giveLabel}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="inline-flex items-center justify-center gap-2"
          >
            {paymentStatus === "loading" && (
              <Loader2 size={16} className="animate-spin" />
            )}
            {paymentStatus === "success" && <Check size={16} strokeWidth={3} />}
            {giveLabel}
          </motion.span>
        </AnimatePresence>
      </button>

      {/* Promises */}
      <ul className="mt-5 pt-5 border-t border-border space-y-2">
        {project.donation.promises.map((promise, i) => {
          const Icon = PROMISE_ICONS[i % PROMISE_ICONS.length];
          return (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -6 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
              className="flex gap-2.5 items-start text-sm text-muted-foreground leading-snug"
            >
              <Icon size={14} className="mt-0.5 shrink-0 text-destructive" />
              <span>{renderBold(promise)}</span>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
