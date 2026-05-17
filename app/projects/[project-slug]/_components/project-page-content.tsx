"use client";

import type { Project } from "../../types";
import { DonationProvider } from "./donation-context";
import { ProjectHero } from "./project-hero";
import { WhySection } from "./why-section";
import { BudgetSection } from "./budget-section";
import { MilestonesSection } from "./milestones-section";
import { UpdatesSection } from "./updates-section";
import { HospitalSection } from "./hospital-section";
import { FaqSection } from "./faq-section";
import { StickyDonateAside } from "./sticky-donate-aside";
import { MobileDonateBar } from "./mobile-donate-bar";
import { DonateModal } from "./donate-modal";
import { InlineDonateCta } from "./inline-donate-cta";
import { PullQuote } from "@/src/app/projects/[project-slug]/_components/pull-quote";

interface ProjectPageContentProps {
  project: Project;
}

export function ProjectPageContent({ project }: ProjectPageContentProps) {
  return (
    <DonationProvider defaultAmount={project.donation.defaultAmount}>
      <ProjectHero project={project} />

      <div className="max-w-310 mx-auto px-6 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 lg:gap-24 pt-20 lg:pt-28 pb-20">
          <div className="min-w-0">
            {/* Chapter 1: Why (no chapter label — it's the opening) */}
            <WhySection data={project.why} />

            {/* Editorial breathing moment — pull quote from the lede */}
            <PullQuote attribution="From the field, April 2025">
              {project.why.lede}
            </PullQuote>

            {/* Chapter 2: Budget */}
            <BudgetSection data={project.budget} />

            {/* Inline donate moment */}
            <InlineDonateCta
              headline={`${Math.round((project.stats.raised / project.stats.goal) * 100)}% funded — help us close the gap.`}
              subline={`${Intl.NumberFormat("en-US").format(
                project.stats.donors
              )} donors have brought this within reach. Join them.`}
            />

            {/* Chapter 3: Milestones */}
            <MilestonesSection data={project.milestones} chapter="Chapter Three" />

            {/* Chapter 4: Updates */}
            <UpdatesSection data={project.updates} chapter="Chapter Four" />

            {/* Second inline moment, different tone */}
            <InlineDonateCta
              headline="Move the next milestone forward."
              subline="Funds release on milestones — your gift pushes the equipment order, the install, the first successful outage test."
              buttonLabel="Give to this project"
            />

            {/* Chapter 5: Hospital */}
            <HospitalSection data={project.hospital} chapter="Chapter Five" />

            {/* Chapter 6: FAQ */}
            <FaqSection data={project.faq} chapter="Chapter Six" />
          </div>

          <StickyDonateAside project={project} />
        </div>
      </div>

      <MobileDonateBar project={project} />
      <DonateModal project={project} />
    </DonationProvider>
  );
}