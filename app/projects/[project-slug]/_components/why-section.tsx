"use client";

import type { Project } from "../../types";
import { Eyebrow, RevealSection } from "./section-primitives";

interface WhySectionProps {
  data: Project["why"];
}

/**
 * Renders text with **bold** markers as <strong>.
 */
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
  return (
    <RevealSection>
      <Eyebrow>{data.eyebrow}</Eyebrow>
      <p className="text-2xl md:text-[1.6rem] leading-snug text-foreground font-light italic max-w-[48ch] mb-8">
        {data.lede}
      </p>
      <div className="space-y-5">
        {data.paragraphs.map((p, i) => (
          <p
            key={i}
            className="text-base md:text-lg leading-relaxed text-muted-foreground max-w-[62ch]"
          >
            {renderInlineBold(p)}
          </p>
        ))}
      </div>
    </RevealSection>
  );
}

export { renderInlineBold };
