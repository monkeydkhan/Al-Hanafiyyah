"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  BookOpen,
  ChevronDown,
  FileText,
  GraduationCap,
  LibraryBig,
  Menu,
  Play,
  Search,
  ShieldAlert,
  X,
} from "lucide-react";
import { LogoMark } from "@/components/logo-mark";
import { ThemeToggle } from "@/components/theme-toggle";

const navGroups = [
  {
    label: "Read",
    links: [
      { label: "Books", href: "/books", match: "/books", icon: LibraryBig },
      { label: "Articles", href: "/articles", match: "/articles", icon: FileText },
      { label: "Refutations", href: "/refutations", match: "/refutations", icon: ShieldAlert },
    ],
  },
  {
    label: "Watch",
    links: [{ label: "Lectures", href: "/videos", match: "/videos", icon: Play }],
  },
  {
    label: "Curriculum",
    links: [
      { label: "Study Path", href: "/videos", match: "/videos", icon: BookOpen },
      { label: "Hanafi Madhhab", href: "/articles/hanafi-madhhab-overview", match: "/articles/hanafi-madhhab-overview", icon: GraduationCap },
    ],
  },
  {
    label: "Explore",
    links: [{ label: "Scholars", href: "/scholars", match: "/scholars", icon: GraduationCap }],
  },
];

const flatLinks = navGroups.flatMap((group) => group.links);

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string, match: string) =>
    pathname === href || pathname.startsWith(`${match}/`);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--line)] bg-[var(--background)] px-2 pr-4 sm:pl-4 sm:pr-8 lg:pl-6 lg:pr-12">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-5">
        <nav className="hidden items-center gap-7 lg:flex">
          <Link
            href="/"
            className="nav-home-link"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          {navGroups.map((group) => (
            <div key={group.label} className="group relative">
              <button
                type="button"
                className="inline-flex items-center gap-1.5 text-[0.98rem] font-extrabold text-[var(--muted)] transition hover:text-[var(--primary-strong)]"
              >
                {group.label}
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="invisible absolute left-0 top-full z-50 w-64 pt-4 opacity-0 transition group-hover:visible group-hover:opacity-100">
                <div className="rounded-2xl border border-[var(--line)] bg-[var(--panel-strong)] p-2 shadow-xl shadow-slate-200/30">
                  {group.links.map((link) => {
                    const Icon = link.icon;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-extrabold text-[var(--muted)] transition hover:bg-[var(--panel-soft)] hover:text-[var(--primary-strong)]"
                      >
                        <Icon className="h-4 w-4 text-[var(--primary-strong)]" />
                        {link.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </nav>

        <div className="ml-auto flex items-center justify-end gap-3">
          <Link
            href="/articles"
            className="hidden h-12 w-64 items-center gap-3 rounded-md border border-[var(--line)] bg-[var(--panel-strong)] px-4 text-sm font-extrabold text-[var(--muted)] shadow-sm transition hover:border-[var(--primary)] md:flex"
          >
            <Search className="h-5 w-5 text-foreground" />
            Search...
          </Link>
          <Link
            href="/books"
            className="donate-button hidden md:inline-flex"
          >
            Donate
          </Link>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="nav-icon-button lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <>
            <motion.button
              type="button"
              aria-label="Close navigation overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/35"
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="fixed inset-y-0 left-0 z-50 flex w-[min(92vw,25rem)] flex-col border-r border-[var(--line)] bg-[var(--background)] shadow-2xl shadow-black/25"
            >
              <div className="flex items-center justify-between border-b border-[var(--line)] px-5 py-5">
                <LogoMark compact />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full text-[var(--muted)] transition hover:bg-[var(--panel-soft)] hover:text-foreground"
                  aria-label="Close navigation menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto px-4 py-6">
                <div className="flex flex-col gap-2">
                  {flatLinks.map((item) => {
                    const Icon = item.icon;
                    const active = isActive(item.href, item.match);

                    return (
                      <Link
                        key={`${item.href}-${item.label}`}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={`flex min-h-14 items-center gap-4 rounded-2xl border px-4 py-3 text-base font-black transition ${
                          active
                            ? "border-[color:var(--primary)] bg-[var(--primary-soft)] text-[var(--primary-strong)]"
                            : "border-transparent text-[var(--muted)] hover:border-[var(--line)] hover:bg-[var(--panel-soft)] hover:text-foreground"
                        }`}
                      >
                        <Icon className="h-5 w-5 shrink-0" />
                        <span className="min-w-0 flex-1 truncate">{item.label}</span>
                      </Link>
                    );
                  })}
                </div>
              </nav>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>

      <div className="beta-marquee" aria-label="Beta notice">
        <div className="beta-marquee-track">
          <span>
            Beta mode: Al Hanafiyyah is currently designed for desktop web platforms.
            Mobile optimisation will come soon.
          </span>
          <span aria-hidden="true">
            Beta mode: Al Hanafiyyah is currently designed for desktop web platforms.
            Mobile optimisation will come soon.
          </span>
        </div>
      </div>
    </header>
  );
}
