"use client";

import { motion } from "motion/react";
import type { Project } from "../../types";

interface WhySectionProps {
  data: Project["why"];
}

function renderInlineBold(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-medium text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export function WhySection({ data }: WhySectionProps) {
  // Treat the first paragraph as the "opening" (drop cap), the rest as body.
  const [opening, ...rest] = data.paragraphs;

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="pt-4 pb-20 md:pb-28"
    >
      {/* Lede — the hook. No eyebrow above it — the lede IS the opening. */}
      <p className="editorial-lede max-w-[28ch] mb-12 md:mb-16 pr-4">
        {data.lede}
      </p>

      {/* Opening paragraph — drop cap, slightly larger */}
      {opening && (
        <p className="prose-reading editorial-dropcap max-w-[44ch] mb-7">
          {renderInlineBold(opening)}
        </p>
      )}

      {/* Rest of the paragraphs */}
      {rest.map((p, i) => (
        <p key={i} className="prose-reading max-w-[44ch] mb-7">
          {renderInlineBold(p)}
        </p>
      ))}
    </motion.section>
  );
}

export { renderInlineBold };