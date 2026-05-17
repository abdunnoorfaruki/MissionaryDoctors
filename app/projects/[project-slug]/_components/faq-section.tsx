"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus } from "lucide-react";
import type { Project } from "../../types";

interface FaqSectionProps {
  data: Project["faq"];
  chapter?: string;
}

export function FaqSection({ data, chapter = "Chapter Six" }: FaqSectionProps) {
  const [openId, setOpenId] = useState<string | null>(data.items[0]?.id ?? null);

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

      <h2 className="text-[clamp(2rem,4.2vw,3.25rem)] leading-[1.05] tracking-[-0.02em] font-medium text-foreground mb-14 max-w-[22ch]">
        Things worth{" "}
        <span
          className="italic font-light text-destructive"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          asking
        </span>
        .
      </h2>

      <div className="border-t border-border max-w-[44rem]">
        {data.items.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div key={item.id} className="border-b border-border">
              <button
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="w-full text-left py-7 md:py-8 flex justify-between items-center gap-6 group"
                aria-expanded={isOpen}
              >
                <span className="text-xl md:text-2xl text-foreground font-normal pr-4 leading-snug">
                  {item.question}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="shrink-0 text-destructive"
                >
                  <Plus size={20} strokeWidth={1.5} />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="prose-reading pb-8 max-w-[44ch]">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}