"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import type { Project } from "../../types";
import { AccentTitle } from "./accent-title";
import { Eyebrow, RevealSection } from "./section-primitives";

interface UpdatesSectionProps {
  data: Project["updates"];
}

export function UpdatesSection({ data }: UpdatesSectionProps) {
  return (
    <RevealSection bordered>
      <Eyebrow>{data.eyebrow}</Eyebrow>
      <AccentTitle parts={data.title} className="mb-10" />

      <div className="divide-y divide-border">
        {data.entries.map((entry, i) => (
          <motion.article
            key={entry.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="py-8 first:pt-0 last:pb-0"
          >
            <div className="text-xs uppercase tracking-[0.12em] text-muted-foreground mb-3">
              {entry.date}
            </div>
            <h3 className="text-xl md:text-2xl text-foreground font-medium mb-4 leading-snug">
              {entry.title}
            </h3>
            <div className="space-y-3.5">
              {entry.paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  className="text-base text-muted-foreground leading-relaxed max-w-[60ch]"
                >
                  {p}
                </p>
              ))}
            </div>

            {entry.photo && (
              <div className="relative w-full aspect-[16/9] mt-5 mb-2 rounded-xl overflow-hidden bg-muted">
                <Image
                  src={entry.photo.src}
                  alt={entry.photo.alt}
                  fill
                  sizes="(min-width: 768px) 800px, 100vw"
                  className="object-cover"
                />
              </div>
            )}

            <div className="mt-5 text-sm text-muted-foreground">
              — <span className="text-foreground font-medium">{entry.author.name}</span>
              , {entry.author.role}
            </div>
          </motion.article>
        ))}
      </div>

      <Link
        href={data.moreHref}
        className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-destructive hover:text-destructive/80 transition-colors"
      >
        All updates
        <ArrowRight size={14} />
      </Link>
    </RevealSection>
  );
}
