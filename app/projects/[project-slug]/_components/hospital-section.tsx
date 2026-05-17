"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import type { Project } from "../../types";

interface HospitalSectionProps {
  data: Project["hospital"];
  chapter?: string;
}

export function HospitalSection({
  data,
  chapter = "Chapter Five",
}: HospitalSectionProps) {
  const { details } = data;

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

      <h2 className="text-[clamp(2rem,4.2vw,3.25rem)] leading-[1.05] tracking-[-0.02em] font-medium text-foreground mb-12 max-w-[22ch]">
        About{" "}
        <span
          className="italic font-light text-destructive"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          {details.name.replace("Hospital ", "")}
        </span>
        .
      </h2>

      <Link
        href={details.href}
        className="block group"
      >
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6 md:gap-10 items-start">
          <div className="relative w-full aspect-[4/5] md:aspect-[4/5] rounded-2xl overflow-hidden bg-muted shadow-md group-hover:shadow-xl transition-shadow duration-500">
            <Image
              src={details.image.src}
              alt={details.image.alt}
              fill
              sizes="(min-width: 768px) 280px, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          <div className="pt-2">
            <div className="text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground mb-3">
              {details.meta}
            </div>
            <h3
              className="text-3xl md:text-4xl text-foreground font-light mb-5 leading-tight italic"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {details.name}
            </h3>
            <p className="prose-reading max-w-[42ch] mb-7">
              {details.description}
            </p>
            <span className="inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.2em] text-destructive">
              Tour the hospital
              <ArrowRight
                size={13}
                className="transition-transform group-hover:translate-x-1.5"
              />
            </span>
          </div>
        </div>
      </Link>
    </motion.section>
  );
}