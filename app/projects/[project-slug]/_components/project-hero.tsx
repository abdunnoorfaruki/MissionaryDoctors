"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import type { Project } from "../../types";
import { EASE_OUT_EXPO } from "@/src/app/projects/[project-slug]/_lib/easings";

interface ProjectHeroProps {
  project: Pick<Project, "breadcrumb" | "eyebrow" | "title" | "subtitle" | "heroImage">;
}

const fade = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: EASE_OUT_EXPO },
  }),
};

export function ProjectHero({ project }: ProjectHeroProps) {
  const { breadcrumb, eyebrow, title, subtitle, heroImage } = project;

  return (
    <section className="max-w-[1240px] mx-auto px-6 md:px-10 lg:px-20">
      {/* Breadcrumb — subtle, elegant, no home icon */}
      <motion.nav
        variants={fade}
        initial="hidden"
        animate="show"
        custom={0}
        aria-label="Breadcrumb"
        className="pt-8 md:pt-12 flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground"
      >
        <Link href="/" className="hover:text-foreground transition-colors">
          Home
        </Link>
        <ChevronRight size={11} className="opacity-40" strokeWidth={2} />
        <Link
          href={breadcrumb.parentHref}
          className="hover:text-foreground transition-colors"
        >
          {breadcrumb.parentLabel}
        </Link>
        <ChevronRight size={11} className="opacity-40" strokeWidth={2} />
        <span className="text-foreground/70 truncate max-w-[55vw]">
          {breadcrumb.label}
        </span>
      </motion.nav>

      {/* Hero content — narrower column, more dramatic spacing */}
      <div className="pt-14 md:pt-24 pb-12 md:pb-16 max-w-4xl">
        <motion.div
          variants={fade}
          initial="hidden"
          animate="show"
          custom={1}
          className="text-[0.7rem] uppercase tracking-[0.22em] text-destructive font-medium mb-8 md:mb-10"
        >
          {eyebrow}
        </motion.div>

        {/* Title — bigger, more confident, with serif italic emphasis */}
        <motion.h1
          variants={fade}
          initial="hidden"
          animate="show"
          custom={2}
          className="text-[clamp(2.75rem,6.5vw,5.5rem)] leading-[0.95] tracking-[-0.025em] font-medium text-foreground mb-8 md:mb-10"
        >
          {title.leading}{" "}
          <span
            className="text-destructive italic font-light"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {title.emphasis}
          </span>
          {title.trailing ?? ""}
        </motion.h1>

        {/* Subtitle — now styled as the editorial lede */}
        <motion.p
          variants={fade}
          initial="hidden"
          animate="show"
          custom={3}
          className="editorial-lede max-w-[34ch]"
        >
          {subtitle}
        </motion.p>
      </div>

      {/* Hero image — taller, more cinematic, with a caption strip */}
      <motion.figure
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        <div className="relative w-full aspect-[4/5] sm:aspect-[16/10] md:aspect-[16/8] rounded-2xl md:rounded-3xl overflow-hidden bg-muted shadow-xl">
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            priority
            sizes="(min-width: 1240px) 1200px, 100vw"
            className="object-cover"
          />
          {/* Subtle gradient at bottom for caption legibility */}
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-foreground/40 to-transparent pointer-events-none"
          />
        </div>
        <figcaption className="mt-4 flex items-baseline gap-3 text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
          <span className="w-8 h-px bg-border" aria-hidden />
          <span>{heroImage.alt}</span>
        </figcaption>
      </motion.figure>
    </section>
  );
}