"use client";

import { motion } from "motion/react";
import { formatCurrency } from "@/lib/utils";
import { Project } from "../../types";

interface BudgetSectionProps {
  data: Project["budget"];
}

export function BudgetSection({ data }: BudgetSectionProps) {
  const total = data.lines.reduce((sum, line) => sum + line.amount, 0);

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="py-20 md:py-28 border-t border-border"
    >
      {/* Chapter mark */}
      <div className="flex items-baseline gap-4 mb-10 md:mb-14">
        <span className="text-[0.7rem] uppercase tracking-[0.22em] text-destructive font-medium">
          Chapter Two
        </span>
        <span className="flex-1 h-px bg-border" aria-hidden />
      </div>

      <h2 className="text-[clamp(2rem,4.2vw,3.25rem)] leading-[1.05] tracking-[-0.02em] font-medium text-foreground mb-7 max-w-[18ch]">
        Every dollar has a{" "}
        <span
          className="italic font-light text-destructive"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          name
        </span>
        .
      </h2>

      <p className="prose-reading max-w-[44ch] mb-14 md:mb-16">
        {data.intro}
      </p>

      {/* Budget lines — more breathing room, bigger type */}
      <ul>
        {data.lines.map((line, i) => (
          <motion.li
            key={line.id}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
            className="grid grid-cols-[1fr_auto] gap-6 items-baseline py-5 md:py-6 border-b border-border/50"
          >
            <div>
              <div className="text-xl md:text-2xl text-foreground font-normal leading-tight">
                {line.name}
              </div>
              <div className="text-[0.95rem] text-muted-foreground mt-1.5 leading-relaxed">
                {line.description}
              </div>
            </div>
            <div className="text-xl md:text-2xl text-foreground font-light tabular-nums">
              {formatCurrency(line.amount)}
            </div>
          </motion.li>
        ))}

        {/* Total — feels like a closing chord */}
        <motion.li
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-[1fr_auto] gap-6 items-baseline pt-8 mt-4 border-t-2 border-foreground"
        >
          <div
            className="text-2xl md:text-3xl italic text-foreground font-light"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Total
          </div>
          <div
            className="text-3xl md:text-4xl italic text-destructive font-light tabular-nums"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {formatCurrency(total)}
          </div>
        </motion.li>
      </ul>
    </motion.section>
  );
}