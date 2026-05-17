"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import type { Project } from "../../types";

interface UpdatesSectionProps {
  data: Project["updates"];
  chapter?: string;
}

export function UpdatesSection({
  data,
  chapter = "Chapter Four",
}: UpdatesSectionProps) {
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

      <h2 className="text-[clamp(2rem,4.2vw,3.25rem)] leading-[1.05] tracking-[-0.02em] font-medium text-foreground mb-14 md:mb-20 max-w-[20ch]">
        Dispatches from the{" "}
        <span
          className="italic font-light text-destructive"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          field
        </span>
        .
      </h2>

      <div className="space-y-20 md:space-y-28">
        {data.entries.map((entry, i) => (
          <motion.article
            key={entry.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
          >
            {/* Byline-style header */}
            <div className="flex items-center gap-3 mb-5 text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
              <span className="text-destructive font-medium">{entry.date}</span>
              <span className="w-6 h-px bg-border" aria-hidden />
              <span>
                {entry.author.name}, {entry.author.role}
              </span>
            </div>

            <h3 className="text-2xl md:text-[1.875rem] text-foreground font-normal mb-7 leading-[1.2] max-w-[28ch] tracking-tight">
              {entry.title}
            </h3>

            {/* Photo — when present, treated as a featured image */}
            {entry.photo && (
              <figure className="relative w-full mb-8">
                <div className="relative aspect-16/10 md:aspect-video rounded-2xl overflow-hidden bg-muted shadow-md">
                  <Image
                    src={entry.photo.src}
                    alt={entry.photo.alt}
                    fill
                    sizes="(min-width: 768px) 800px, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 flex items-baseline gap-3 text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
                  <span className="w-6 h-px bg-border" aria-hidden />
                  <span>{entry.photo.alt}</span>
                </figcaption>
              </figure>
            )}

            <div className="space-y-6">
              {entry.paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  className={
                    idx === 0
                      ? "prose-reading editorial-dropcap max-w-[44ch]"
                      : "prose-reading max-w-[44ch]"
                  }
                >
                  {p}
                </p>
              ))}
            </div>
          </motion.article>
        ))}
      </div>

      <Link
        href={data.moreHref}
        className="mt-14 inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.2em] text-destructive hover:text-destructive/80 transition-colors group"
      >
        Read all dispatches
        <ArrowRight
          size={13}
          className="transition-transform group-hover:translate-x-1"
        />
      </Link>
    </motion.section>
  );
}