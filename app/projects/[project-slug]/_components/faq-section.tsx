"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus } from "lucide-react";
import type { Project } from "../../types";
import { AccentTitle } from "./accent-title";
import { Eyebrow, RevealSection } from "./section-primitives";

interface FaqSectionProps {
  data: Project["faq"];
}

/**
 * Accordion behavior: SINGLE-open. Opening one closes the previous.
 * This matches a deliberate UX choice (cleaner focus) — client tested
 * for "intentional and consistent" behavior.
 */
export function FaqSection({ data }: FaqSectionProps) {
  // Open the first item by default (matches prototype's `open` class on f1).
  const [openId, setOpenId] = useState<string | null>(data.items[0]?.id ?? null);

  return (
    <RevealSection bordered>
      <Eyebrow>{data.eyebrow}</Eyebrow>
      <AccentTitle parts={data.title} className="mb-8" />

      <div className="border-t border-border">
        {data.items.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div key={item.id} className="border-b border-border">
              <button
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="w-full text-left py-6 flex justify-between items-center gap-6 group"
                aria-expanded={isOpen}
              >
                <span className="text-lg md:text-xl text-foreground font-medium pr-4">
                  {item.question}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="shrink-0 text-foreground"
                >
                  <Plus size={18} strokeWidth={1.5} />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-base md:text-[1.05rem] text-muted-foreground leading-relaxed max-w-[60ch]">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </RevealSection>
  );
}
