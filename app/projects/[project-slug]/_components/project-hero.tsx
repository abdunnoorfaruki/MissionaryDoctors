"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { ChevronRight, Home } from "lucide-react";
import type { Project } from "../../types";
import { AccentTitle } from "./accent-title";

interface ProjectHeroProps {
  project: Pick<Project, "breadcrumb" | "eyebrow" | "title" | "subtitle" | "heroImage">;
}

const ease = [0.22, 1, 0.36, 1] as const;

const fade: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease },
  }),
};

export function ProjectHero({ project }: ProjectHeroProps) {
  const { breadcrumb, eyebrow, title, subtitle, heroImage } = project;

  return (
    <section className="max-w-310 mx-auto px-6 md:px-10 lg:px-20">
      {/* Breadcrumb */}
      <motion.nav
        variants={fade}
        initial="hidden"
        animate="show"
        custom={0}
        aria-label="Breadcrumb"
        className="pt-6 md:pt-10 flex items-center gap-1.5 text-xs uppercase tracking-[0.14em] text-muted-foreground"
      >
        <Link
          href="/"
          className="flex items-center gap-1.5 text-destructive/50 hover:text-destructive transition-colors"
        >
          <Home size={12} />
          <span>Home</span>
        </Link>
        <ChevronRight size={12} className="opacity-50" />
        <Link
          href={breadcrumb.parentHref}
          className="text-destructive/50 hover:text-destructive transition-colors"
        >
          {breadcrumb.parentLabel}
        </Link>
        <ChevronRight size={12} className="opacity-50" />
        <span className="text-destructive/40 truncate max-w-[60vw]">
          {breadcrumb.label}
        </span>
      </motion.nav>

      {/* Hero content */}
      <div className="pt-10 md:pt-5 pb-10 md:pb-12">
        <motion.div
          variants={fade}
          initial="hidden"
          animate="show"
          custom={1}
          className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-5 md:mb-7"
        >
          {eyebrow}
        </motion.div>

        <motion.div variants={fade} initial="hidden" animate="show" custom={2}>
          <AccentTitle
            parts={title}
            as="h1"
            className="max-w-[18ch] mb-6 md:mb-8 font-semibold"
          />
        </motion.div>

        <motion.p
          variants={fade}
          initial="hidden"
          animate="show"
          custom={3}
          className="text-lg md:text-xl text-muted-foreground max-w-[54ch] leading-relaxed font-light"
        >
          {subtitle}
        </motion.p>
      </div>

      {/* Hero image — responsive, next/image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.35, ease }}
        className="relative w-full aspect-16/10  rounded-2xl md:rounded-3xl overflow-hidden bg-muted shadow-lg"
      >
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          priority
          sizes="(min-width: 1240px) 1200px, 100vw"
          className="object-cover"
        />
      </motion.div>
    </section>
  );
}
