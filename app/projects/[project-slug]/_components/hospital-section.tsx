"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "../../types";
import { AccentTitle } from "./accent-title";
import { Eyebrow, RevealSection } from "./section-primitives";

interface HospitalSectionProps {
  data: Project["hospital"];
}

export function HospitalSection({ data }: HospitalSectionProps) {
  const { details } = data;

  return (
    <RevealSection bordered>
      <Eyebrow>{data.eyebrow}</Eyebrow>
      <AccentTitle parts={data.title} className="mb-8" />

      <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-5 sm:gap-6 p-5 sm:p-6 rounded-2xl border border-border bg-card shadow-sm hover:shadow-md transition-shadow">
        <div className="relative w-full aspect-square sm:aspect-square rounded-xl overflow-hidden bg-muted">
          <Image
            src={details.image.src}
            alt={details.image.alt}
            fill
            sizes="(min-width: 640px) 160px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <h4 className="text-xl md:text-2xl text-foreground font-medium mb-1.5">
            {details.name}
          </h4>
          <div className="text-xs uppercase tracking-[0.12em] text-muted-foreground mb-3">
            {details.meta}
          </div>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            {details.description}
          </p>
          <Link
            href={details.href}
            className="mt-4 inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.15em] text-destructive hover:text-destructive/80 transition-colors w-fit"
          >
            Tour the hospital
            <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </RevealSection>
  );
}
