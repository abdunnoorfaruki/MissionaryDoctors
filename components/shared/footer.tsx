import Link from "next/link";

const FOOTER_COLUMNS: Array<{ title: string; links: { label: string; href: string }[] }> = [
  {
    title: "Discover",
    links: [
      { label: "Hospital tours", href: "/hospitals" },
      { label: "Missionary needs", href: "/projects" },
      { label: "News & field reports", href: "/news" },
      { label: "About", href: "/about" },
    ],
  },
  {
    title: "Take part",
    links: [
      { label: "Apply to serve", href: "/apply" },
      { label: "Give monthly", href: "/give/monthly" },
      { label: "For hospitals", href: "/for-hospitals" },
      { label: "Newsletter", href: "/newsletter" },
    ],
  },
  {
    title: "Trust",
    links: [
      { label: "Financials", href: "/financials" },
      { label: "501(c)(3) status", href: "/501c3" },
      { label: "Privacy", href: "/privacy" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border mt-20">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 lg:px-20 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 lg:gap-12 pb-14">
          <div>
            <div className="text-2xl font-semibold tracking-tight mb-4 text-foreground">
              MissionaryDoctors
            </div>
            <p className="text-xl md:text-2xl text-foreground/90 leading-snug max-w-[24ch] font-light">
              A catalog of medical mission hospitals worldwide.
            </p>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h5 className="text-xs uppercase tracking-[0.16em] text-muted-foreground font-medium mb-5">
                {col.title}
              </h5>
              <div className="flex flex-col">
                {col.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="py-1.5 text-[0.95rem] text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="pt-7 border-t border-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs text-muted-foreground">
          <div>© 2026 Giving Tree Projects · Shreveport, Louisiana</div>
          <div>Powered by Giving Tree Projects</div>
        </div>
      </div>
    </footer>
  );
}
