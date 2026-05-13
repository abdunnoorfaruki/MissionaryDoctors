export type TimelineStatus = "done" | "current" | "upcoming";

export interface BudgetLine {
  id: string;
  name: string;
  description: string;
  amount: number;
}

export interface TimelineEntry {
  id: string;
  date: string;
  title: string;
  description: string;
  status: TimelineStatus;
}

export interface FieldUpdate {
  id: string;
  date: string;
  title: string;
  paragraphs: string[];
  photo?: {
    src: string;
    alt: string;
  };
  author: {
    name: string;
    role: string;
  };
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface Hospital {
  name: string;
  location: string;
  meta: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  href: string;
}

export interface ProjectStats {
  raised: number;
  goal: number;
  donors: number;
  estimatedCloseDays: number;
}

export interface DonationPreset {
  amount: number;
}

export interface Project {
  slug: string;
  breadcrumb: {
    label: string;
    parentLabel: string;
    parentHref: string;
  };
  eyebrow: string;
  title: {
    leading: string;
    emphasis: string;
    trailing?: string;
  };
  subtitle: string;
  heroImage: {
    src: string;
    alt: string;
  };
  why: {
    eyebrow: string;
    lede: string;
    paragraphs: string[];
  };
  budget: {
    eyebrow: string;
    title: { leading: string; emphasis: string; trailing?: string };
    intro: string;
    lines: BudgetLine[];
  };
  milestones: {
    eyebrow: string;
    title: { leading: string; emphasis: string; trailing?: string };
    intro: string;
    entries: TimelineEntry[];
  };
  updates: {
    eyebrow: string;
    title: { leading: string; emphasis: string; trailing?: string };
    entries: FieldUpdate[];
    moreHref: string;
  };
  hospital: {
    eyebrow: string;
    title: { leading: string; emphasis: string; trailing?: string };
    details: Hospital;
  };
  faq: {
    eyebrow: string;
    title: { leading: string; emphasis: string; trailing?: string };
    items: FaqItem[];
  };
  stats: ProjectStats;
  donation: {
    presets: DonationPreset[];
    defaultAmount: number;
    promises: string[]; // markdown-lite: text wrapped in **bold** will be bolded
  };
}
