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

interface ProjectPageContentProps {
  project: Project;
}

export function ProjectPageContent({ project }: ProjectPageContentProps) {
  return (
    <DonationProvider defaultAmount={project.donation.defaultAmount}>
      <ProjectHero project={project} />

      <div className="max-w-310 mx-auto px-6 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-18 pt-16 lg:pt-20 pb-20">
          {/* MAIN COLUMN */}
          <div className="min-w-0">
            <WhySection data={project.why} />

            <BudgetSection data={project.budget} />

            <InlineDonateCta
              headline={`${Math.round((project.stats.raised / project.stats.goal) * 100)}% funded — help us close the gap`}
              subline={`${Intl.NumberFormat("en-US").format(
                project.stats.donors
              )} donors have brought this project within reach. Join them.`}
            />

            <MilestonesSection data={project.milestones} />

            <UpdatesSection data={project.updates} />

            <InlineDonateCta
              headline="Move the next milestone forward"
              subline="Funds release on milestones — your gift pushes the equipment order, the install, the first successful outage test."
              buttonLabel="Give to this project"
            />

            <HospitalSection data={project.hospital} />

            <FaqSection data={project.faq} />
          </div>

          {/* DESKTOP STICKY ASIDE */}
          <StickyDonateAside project={project} />
        </div>
      </div>

      {/* MOBILE / TABLET DONATE SURFACES */}
      <MobileDonateBar project={project} />
      <DonateModal project={project} />
    </DonationProvider>
  );
}
