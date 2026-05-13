import { Skeleton } from "@/components/shared/Skeleton";

/* -------------------------------------------------------------------------- */
/*  HERO                                                                       */
/* -------------------------------------------------------------------------- */
export function ProjectHeroSkeleton() {
  return (
    <section className="max-w-[1240px] mx-auto px-6 md:px-10 lg:px-20">
      {/* Breadcrumb */}
      <div className="pt-6 md:pt-10 flex items-center gap-2">
        <Skeleton className="h-3 w-12" />
        <Skeleton className="h-3 w-3" rounded="full" delay={0.05} />
        <Skeleton className="h-3 w-16" delay={0.1} />
        <Skeleton className="h-3 w-3" rounded="full" delay={0.15} />
        <Skeleton className="h-3 w-40" delay={0.2} />
      </div>

      <div className="pt-10 md:pt-16 pb-10 md:pb-12">
        {/* Eyebrow */}
        <Skeleton className="h-3 w-72 max-w-full mb-7" delay={0.05} />

        {/* Title — two lines */}
        <div className="space-y-3 mb-7">
          <Skeleton className="h-12 md:h-16 w-[85%]" delay={0.1} />
          <Skeleton className="h-12 md:h-16 w-[65%]" delay={0.15} />
        </div>

        {/* Subtitle */}
        <div className="space-y-2.5 max-w-[54ch]">
          <Skeleton className="h-5 w-full" delay={0.2} />
          <Skeleton className="h-5 w-[80%]" delay={0.25} />
        </div>
      </div>

      {/* Hero image */}
      <Skeleton
        className="w-full aspect-[16/10] md:aspect-[21/9]"
        rounded="2xl"
        delay={0.3}
      />
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Shared bits                                                                */
/* -------------------------------------------------------------------------- */
function SectionHeaderSkeleton({ delay = 0 }: { delay?: number }) {
  return (
    <div className="mb-8">
      <Skeleton className="h-3 w-40 mb-5" delay={delay} />
      <Skeleton className="h-9 md:h-11 w-[60%] mb-2" delay={delay + 0.05} />
      <Skeleton className="h-9 md:h-11 w-[35%]" delay={delay + 0.1} />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  WHY                                                                        */
/* -------------------------------------------------------------------------- */
export function WhySectionSkeleton() {
  return (
    <section className="pb-15">
      <Skeleton className="h-3 w-24 mb-5" />
      {/* Lede */}
      <div className="space-y-3 mb-8 max-w-[48ch]">
        <Skeleton className="h-7 md:h-8 w-full" delay={0.05} />
        <Skeleton className="h-7 md:h-8 w-[85%]" delay={0.1} />
      </div>
      {/* Paragraphs */}
      <div className="space-y-3 mb-6 max-w-[62ch]">
        <Skeleton className="h-4 w-full" delay={0.15} />
        <Skeleton className="h-4 w-full" delay={0.2} />
        <Skeleton className="h-4 w-[78%]" delay={0.25} />
      </div>
      <div className="space-y-3 max-w-[62ch]">
        <Skeleton className="h-4 w-full" delay={0.3} />
        <Skeleton className="h-4 w-[65%]" delay={0.35} />
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  BUDGET                                                                     */
/* -------------------------------------------------------------------------- */
export function BudgetSectionSkeleton() {
  return (
    <section className="border-t border-border pt-15 pb-15">
      <SectionHeaderSkeleton />
      <div className="space-y-2 max-w-[62ch] mb-8">
        <Skeleton className="h-4 w-full" delay={0.15} />
        <Skeleton className="h-4 w-[70%]" delay={0.2} />
      </div>

      {/* Budget lines */}
      <ul className="mt-2">
        {Array.from({ length: 7 }).map((_, i) => (
          <li
            key={i}
            className="grid grid-cols-[1fr_auto] gap-4 items-baseline py-4 border-b border-border/60"
          >
            <div>
              <Skeleton className="h-5 w-[60%] mb-2" delay={0.05 * i} />
              <Skeleton className="h-3.5 w-[40%]" delay={0.05 * i + 0.03} />
            </div>
            <Skeleton className="h-5 w-20" delay={0.05 * i + 0.05} />
          </li>
        ))}
        {/* Total */}
        <li className="grid grid-cols-[1fr_auto] gap-4 items-baseline pt-6 mt-2 border-t-2 border-foreground/30">
          <Skeleton className="h-6 w-16" delay={0.4} />
          <Skeleton className="h-7 w-28" delay={0.45} />
        </li>
      </ul>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  MILESTONES                                                                 */
/* -------------------------------------------------------------------------- */
export function MilestonesSectionSkeleton() {
  return (
    <section className="border-t border-border pt-15 pb-15">
      <SectionHeaderSkeleton />
      <Skeleton className="h-4 w-[55%] max-w-[62ch] mb-10" delay={0.15} />

      <ol className="relative">
        <div
          aria-hidden
          className="absolute left-[11px] top-2 bottom-2 w-px bg-border"
        />
        {Array.from({ length: 6 }).map((_, i) => (
          <li key={i} className="relative pl-12 pb-8 last:pb-0">
            <Skeleton
              className="absolute left-0 top-1.5 w-[22px] h-[22px]"
              rounded="full"
              delay={0.05 * i}
            />
            <Skeleton className="h-3 w-32 mb-2" delay={0.05 * i + 0.02} />
            <Skeleton className="h-5 w-[50%] mb-2" delay={0.05 * i + 0.04} />
            <div className="space-y-2 max-w-[50ch]">
              <Skeleton className="h-3.5 w-full" delay={0.05 * i + 0.06} />
              <Skeleton className="h-3.5 w-[70%]" delay={0.05 * i + 0.08} />
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  UPDATES                                                                    */
/* -------------------------------------------------------------------------- */
export function UpdatesSectionSkeleton() {
  return (
    <section className="border-t border-border pt-15 pb-15">
      <SectionHeaderSkeleton />

      <div className="divide-y divide-border">
        {Array.from({ length: 2 }).map((_, i) => (
          <article key={i} className="py-8 first:pt-0 last:pb-0">
            <Skeleton className="h-3 w-24 mb-3" delay={0.05 * i} />
            <Skeleton className="h-7 w-[70%] mb-4" delay={0.05 * i + 0.05} />
            <div className="space-y-2.5 max-w-[60ch] mb-2">
              <Skeleton className="h-4 w-full" delay={0.05 * i + 0.1} />
              <Skeleton className="h-4 w-full" delay={0.05 * i + 0.12} />
              <Skeleton className="h-4 w-[75%]" delay={0.05 * i + 0.14} />
            </div>
            {/* Photo only on second update (mirrors real layout) */}
            {i === 1 && (
              <Skeleton
                className="w-full aspect-[16/9] mt-5 mb-2"
                rounded="xl"
                delay={0.2}
              />
            )}
            <Skeleton className="h-3.5 w-48 mt-5" delay={0.05 * i + 0.16} />
          </article>
        ))}
      </div>
      <Skeleton className="h-3 w-28 mt-8" delay={0.3} />
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  HOSPITAL                                                                   */
/* -------------------------------------------------------------------------- */
export function HospitalSectionSkeleton() {
  return (
    <section className="border-t border-border pt-15 pb-15">
      <SectionHeaderSkeleton />
      <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-5 sm:gap-6 p-5 sm:p-6 rounded-2xl border border-border bg-card">
        <Skeleton className="w-full aspect-square" rounded="xl" delay={0.1} />
        <div className="flex flex-col justify-center">
          <Skeleton className="h-7 w-[50%] mb-2" delay={0.15} />
          <Skeleton className="h-3 w-[70%] mb-3" delay={0.2} />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" delay={0.25} />
            <Skeleton className="h-4 w-full" delay={0.3} />
            <Skeleton className="h-4 w-[60%]" delay={0.35} />
          </div>
          <Skeleton className="h-3 w-36 mt-4" delay={0.4} />
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  FAQ                                                                        */
/* -------------------------------------------------------------------------- */
export function FaqSectionSkeleton() {
  return (
    <section className="border-t border-border pt-15 pb-15">
      <SectionHeaderSkeleton />

      <div className="border-t border-border">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="border-b border-border py-6">
            <div className="flex justify-between items-center gap-6">
              <Skeleton className="h-6 w-[60%]" delay={0.05 * i} />
              <Skeleton className="h-5 w-5" rounded="sm" delay={0.05 * i + 0.02} />
            </div>
            {/* First one "open" to mirror real default state */}
            {i === 0 && (
              <div className="space-y-2.5 mt-5 max-w-[60ch]">
                <Skeleton className="h-4 w-full" delay={0.1} />
                <Skeleton className="h-4 w-full" delay={0.12} />
                <Skeleton className="h-4 w-[80%]" delay={0.14} />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  DONATE CARD (sticky aside)                                                 */
/* -------------------------------------------------------------------------- */
export function DonateCardSkeleton() {
  return (
    <aside className="hidden lg:block sticky top-24 self-start">
      <div className="bg-card border border-border rounded-2xl p-6 md:p-7">
        {/* Amount */}
        <Skeleton className="h-12 w-48 mb-2" />
        <Skeleton className="h-4 w-36 mb-5" delay={0.05} />

        {/* Progress bar */}
        <Skeleton className="h-2 w-full mb-4" rounded="full" delay={0.1} />

        {/* Stats grid */}
        <div className="grid grid-cols-3 gap-2 pb-5 mb-5 border-b border-border">
          {[0, 1, 2].map((i) => (
            <div key={i}>
              <Skeleton className="h-5 w-12 mb-1.5" delay={0.15 + i * 0.04} />
              <Skeleton className="h-3 w-16" delay={0.17 + i * 0.04} />
            </div>
          ))}
        </div>

        {/* "Choose an amount" label */}
        <Skeleton className="h-4 w-32 mb-2.5" delay={0.3} />

        {/* Preset buttons */}
        <div className="grid grid-cols-3 gap-1.5 mb-2">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <Skeleton
              key={i}
              className="h-11 w-full"
              rounded="xl"
              delay={0.35 + i * 0.03}
            />
          ))}
        </div>

        {/* Custom amount input */}
        <Skeleton className="h-11 w-full mb-3.5" rounded="xl" delay={0.55} />

        {/* Give button */}
        <Skeleton className="h-12 w-full" rounded="xl" delay={0.6} />

        {/* Promises */}
        <div className="mt-5 pt-5 border-t border-border space-y-3">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="flex gap-2.5">
              <Skeleton
                className="h-3.5 w-3.5 mt-0.5 shrink-0"
                rounded="full"
                delay={0.65 + i * 0.04}
              />
              <Skeleton
                className="h-3.5 flex-1"
                delay={0.67 + i * 0.04}
              />
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

/* -------------------------------------------------------------------------- */
/*  MOBILE BAR                                                                 */
/* -------------------------------------------------------------------------- */
export function MobileDonateBarSkeleton() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 px-3 pb-3 pt-2">
      <div className="bg-card/95 backdrop-blur-md border border-border rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-1.5 mb-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-3 w-16" delay={0.05} />
          </div>
          <Skeleton className="h-1 w-full" rounded="full" delay={0.1} />
        </div>
        <Skeleton className="h-10 w-24" rounded="xl" delay={0.15} />
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  FULL PAGE                                                                  */
/* -------------------------------------------------------------------------- */

/**
 * Complete project page skeleton. Mirrors `<ProjectPageContent>` layout
 * so swapping to real data causes zero layout shift.
 */
export function ProjectPageSkeleton() {
  return (
    <>
      <ProjectHeroSkeleton />

      <div className="max-w-[1240px] mx-auto px-6 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-18 pt-16 lg:pt-20 pb-20">
          <div className="min-w-0">
            <WhySectionSkeleton />
            <BudgetSectionSkeleton />
            <MilestonesSectionSkeleton />
            <UpdatesSectionSkeleton />
            <HospitalSectionSkeleton />
            <FaqSectionSkeleton />
          </div>
          <DonateCardSkeleton />
        </div>
      </div>

      <MobileDonateBarSkeleton />
    </>
  );
}
