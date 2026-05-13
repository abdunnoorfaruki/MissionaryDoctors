"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/hospitals", label: "Hospital Tours" },
  { href: "/projects", label: "Missionary Needs", matchPrefix: "/projects" },
  { href: "/news", label: "News" },
];

interface NavbarProps {
  /** Current pathname for highlighting active link. */
  currentPath?: string;
}

export function Navbar({ currentPath = "" }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="max-w-310 mx-auto px-6 md:px-10 lg:px-20 flex items-center justify-between h-16 md:h-20">
        <Link
          href="/"
          className="text-xl md:text-2xl font-semibold tracking-tight text-foreground"
        >
          MissionaryDoctors
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((link) => {
            const isActive =
              currentPath === link.href ||
              (link.matchPrefix && currentPath.startsWith(link.matchPrefix));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-[0.95rem] transition-colors",
                  isActive
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/projects"
            className="px-5 py-2.5 rounded-full bg-primary text-background text-sm font-medium hover:bg-destructive transition-colors"
          >
            Give
          </Link>
        </nav>

        <button
          className="md:hidden p-2 -mr-2 text-foreground"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-border bg-background"
          >
            <nav className="px-6 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 text-base text-foreground border-b border-border last:border-0"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/projects"
                onClick={() => setMobileOpen(false)}
                className="mt-3 px-5 py-3 rounded-full bg-primary text-background text-sm font-medium text-center"
              >
                Give
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
