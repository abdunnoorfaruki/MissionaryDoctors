"use client";

import { motion } from "motion/react";
import type { Project } from "../../types";
import { formatCurrency } from "@/lib/utils";
import { AccentTitle } from "./accent-title";
import { Eyebrow, RevealSection } from "./section-primitives";

interface BudgetSectionProps {
  data: Project["budget"];
}

export function BudgetSection({ data }: BudgetSectionProps) {
  const total = data.lines.reduce((sum, line) => sum + line.amount, 0);

  return (
    <RevealSection bordered>
      <Eyebrow>{data.eyebrow}</Eyebrow>
      <AccentTitle parts={data.title} className="mb-5" />
      <p className="text-base md:text-lg text-muted-foreground max-w-[62ch] mb-8">
        {data.intro}
      </p>

      <ul className="mt-2">
        {data.lines.map((line, i) => (
          <motion.li
            key={line.id}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: i * 0.05, ease: "easeOut" }}
            className="grid grid-cols-[1fr_auto] gap-4 items-baseline py-4 border-b border-border/60"
          >
            <div>
              <div className="text-lg text-foreground font-medium">{line.name}</div>
              <div className="text-sm text-muted-foreground mt-1">
                {line.description}
              </div>
            </div>
            <div className="text-lg text-foreground font-medium tabular-nums">
              {formatCurrency(line.amount)}
            </div>
          </motion.li>
        ))}

        {/* Total */}
        <motion.li
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-[1fr_auto] gap-4 items-baseline pt-6 mt-2 border-t-2 border-foreground"
        >
          <div className="text-xl italic text-foreground font-light">Total</div>
          <div className="text-2xl italic text-destructive font-light tabular-nums">
            {formatCurrency(total)}
          </div>
        </motion.li>
      </ul>
    </RevealSection>
  );
}
