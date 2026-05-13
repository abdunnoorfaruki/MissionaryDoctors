import { Project } from "./types";

export const solarMaternityProject: Project = {
  slug: "solar-power-maternity-ward",
  breadcrumb: {
    label: "Solar power for the maternity ward",
    parentLabel: "Projects",
    parentHref: "/projects",
  },
  eyebrow: "A missionary need · Construction · Loma de Luz · Honduras",
  title: {
    leading: "Solar power for the",
    emphasis: "maternity ward",
    trailing: ".",
  },
  subtitle:
    "A battery bank that holds the surgical and maternity wards through monthly grid outages.",
  heroImage: {
    src: "/assets/hero-image.png",
    alt: "Hospital Loma de Luz exterior in Honduras",
  },
  why: {
    eyebrow: "Why this",
    lede: "In April 2025, a fourteen-minute outage during a complicated delivery led to a near-miss.",
    paragraphs: [
      "Hospital Loma de Luz sits on the north coast of Honduras, where the grid loses power three or four times a month. The diesel generator takes ninety seconds to come online, and the maternity ward — neonatal warmers, fetal monitors, the OR next door — can't tolerate a ninety-second gap.",
      "The fix is a 96 kWh battery bank with smart inverters, sized for eighteen hours of uninterrupted draw across maternity, an adjacent OR, and pediatric ICU. **Switchover is sub-second.** Equipment doesn't reset.",
    ],
  },
  budget: {
    eyebrow: "Where the money goes",
    title: { leading: "Every", emphasis: "line", trailing: "." },
    intro:
      "Quotes attached for each. Any contingency left over rolls into the hospital's general fund with donor consent.",
    lines: [
      {
        id: "battery",
        name: "Battery bank, 96 kWh",
        description: "Four LFP modules with management system",
        amount: 48000,
      },
      {
        id: "inverters",
        name: "Smart inverters & switchover",
        description: "Two hybrid inverters with auto-transfer",
        amount: 12800,
      },
      {
        id: "install",
        name: "Installation & commissioning",
        description: "Three weeks · Soluciones Solares HN",
        amount: 11200,
      },
      {
        id: "freight",
        name: "Freight & customs",
        description: "Door-to-door from US distributor",
        amount: 5800,
      },
      {
        id: "panels",
        name: "Electrical panel upgrades",
        description: "Two sub-panels for ward circuits",
        amount: 2400,
      },
      {
        id: "training",
        name: "Training & service",
        description: "One year remote monitoring",
        amount: 1600,
      },
      {
        id: "contingency",
        name: "Contingency",
        description: "Three percent reserve",
        amount: 2200,
      },
    ],
  },
  milestones: {
    eyebrow: "How it ships",
    title: { leading: "Funds release on", emphasis: "milestones", trailing: "." },
    intro: "Each milestone has a deliverable that triggers the next disbursement.",
    entries: [
      {
        id: "m1",
        date: "Jan 28, 2026 · Done",
        title: "Submitted, vetted, listed",
        description:
          "Hospital proposal received with quotes. Network team reviewed scope, pricing, partner credentials.",
        status: "done",
      },
      {
        id: "m2",
        date: "Now · 85% funded",
        title: "Funding",
        description:
          "$71,400 of $84,000 raised across 312 donors. Fully funded within five days at current pace.",
        status: "current",
      },
      {
        id: "m3",
        date: "Est. May 25",
        title: "Equipment ordered · 40% releases",
        description:
          "First disbursement on full funding. Quote locked, equipment ordered.",
        status: "upcoming",
      },
      {
        id: "m4",
        date: "Est. July 28",
        title: "Equipment on site · 40% releases",
        description:
          "Second disbursement on customs clearance and on-site delivery. Photos posted.",
        status: "upcoming",
      },
      {
        id: "m5",
        date: "Est. Aug 22",
        title: "Commissioned · final 20% releases",
        description:
          "Third disbursement on commissioning and first successful grid-outage test.",
        status: "upcoming",
      },
      {
        id: "m6",
        date: "Aug 22, 2027",
        title: "One-year report",
        description:
          "Outcomes — uptime data, diesel savings, lessons. Posted publicly.",
        status: "upcoming",
      },
    ],
  },
  updates: {
    eyebrow: "Updates from the field",
    title: { leading: "What the", emphasis: "hospital", trailing: " is telling us." },
    entries: [
      {
        id: "u1",
        date: "May 2, 2026",
        title: "85% funded — equipment quote re-confirmed",
        paragraphs: [
          "Reconfirmed pricing with our vendor in Tegucigalpa given recent currency movement. Quote held. Install partner confirmed availability for August.",
          "Yesterday we lost grid power for two hours during an OB triage. Generator handled it, but a cesarean had to wait until power was stabilized — exactly the situation this need addresses.",
        ],
        author: { name: "Dr. Andrés Velasquez", role: "Medical Director" },
      },
      {
        id: "u2",
        date: "Apr 14, 2026",
        title: "Site preparation underway",
        paragraphs: [
          "While funding continues, we've started prep that doesn't require equipment. Cleared the room next to the existing solar inverter house. Electrical engineer mapped the ward circuits this week.",
        ],
        photo: {
          src: "/assets/hospital-image.png",
          alt: "Cleared site for solar installation",
        },
        author: { name: "Mateo Ortiz", role: "Hospital Engineer" },
      },
    ],
    moreHref: "#all-updates",
  },
  hospital: {
    eyebrow: "The hospital",
    title: { leading: "Hospital", emphasis: "Loma de Luz", trailing: "." },
    details: {
      name: "Hospital Loma de Luz",
      location: "Balfate, Honduras",
      meta: "Balfate, Honduras · Founded 1999 · 60 beds",
      description:
        "A mission hospital on the north coast of Honduras serving a region with limited rural healthcare. Operated by Cornerstone Foundation.",
      image: {
        src: "/assets/operation-theator.png",
        alt: "Hospital Loma de Luz",
      },
      href: "/hospitals/loma-de-luz",
    },
  },
  faq: {
    eyebrow: "Common questions",
    title: { leading: "Things", emphasis: "worth asking", trailing: "." },
    items: [
      {
        id: "f1",
        question: "What if it doesn't reach goal?",
        answer:
          "If a need times out without funding (we cap at 120 days unless the hospital extends), donors are given three options: redirect to the hospital's general fund, redirect to another need, or refund. Most needs fund within 60 days.",
      },
      {
        id: "f2",
        question: "What if it overshoots?",
        answer:
          "Anything raised beyond goal goes into the hospital's general fund with donor consent given at the time of giving. You can opt to have any overage refunded or directed elsewhere.",
      },
      {
        id: "f3",
        question: "When is my gift tax-deductible?",
        answer:
          "At the moment you give. You receive a receipt from Giving Tree Projects (501(c)(3)) for the full amount, dated when your gift was made. The receipt does not depend on the need fully funding.",
      },
      {
        id: "f4",
        question: "How do I know it actually got there?",
        answer:
          "Every disbursement triggers a public update on this page — photos, narrative, financial reconciliation. At project close, a full reconciliation is published comparing planned versus actual spend, line by line.",
      },
    ],
  },
  stats: {
    raised: 71400,
    goal: 84000,
    donors: 312,
    estimatedCloseDays: 5,
  },
  donation: {
    presets: [
      { amount: 25 },
      { amount: 50 },
      { amount: 100 },
      { amount: 250 },
      { amount: 500 },
      { amount: 1000 },
    ],
    defaultAmount: 100,
    promises: [
      "**100% to the project.** No fees skimmed.",
      "**Tax-deductible** through Giving Tree Projects, 501(c)(3).",
      "**Funds release on milestones,** not in one block.",
      "**You'll see it through.** Reports at every stage.",
    ],
  },
};
