"use client";

import type { Project } from "../../types";
import { DonateCard } from "./donate-card";

interface StickyDonateAsideProps {
  project: Project;
}

/**
 * Desktop-only sticky aside. Hidden on mobile (<lg) where the bottom bar
 * + modal take over.
 */
export function StickyDonateAside({ project }: StickyDonateAsideProps) {
  return (
    <aside className="hidden lg:block sticky top-24 self-start">
      <DonateCard project={project} />
    </aside>
  );
}
