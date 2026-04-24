"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { LogoMark } from "@/components/logo-mark";
import { ThemeToggle } from "@/components/theme-toggle";
import { mainNavigation } from "@/lib/site-data";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string, match: string) => {
    return pathname === href || pathname.startsWith(`${match}/`);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="surface-panel flex items-center justify-between rounded-[1.75rem] px-4 py-3 sm:px-5">
          <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
            <LogoMark compact />
          </Link>

          <nav className="hidden items-center gap-2 md:flex">
            <Link
              href="/"
              className={`rounded-full px-4 py-2 text-sm transition ${
                pathname === "/"
                  ? "bg-[var(--primary-soft)] text-[var(--primary-strong)]"
                  : "text-[var(--muted)] hover:text-foreground"
              }`}
            >
              Home
            </Link>
            {mainNavigation.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  isActive(link.href, link.match)
                    ? "bg-[var(--primary-soft)] text-[var(--primary-strong)]"
                    : "text-[var(--muted)] hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--panel-soft)] text-foreground md:hidden"
              aria-expanded={open}
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
              className="surface-panel mt-3 rounded-[1.7rem] p-4 md:hidden"
            >
              <nav className="flex flex-col gap-2">
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-sm transition ${
                    pathname === "/"
                      ? "bg-[var(--primary-soft)] text-[var(--primary-strong)]"
                      : "text-[var(--muted)] hover:bg-[var(--panel-soft)] hover:text-foreground"
                  }`}
                >
                  Home
                </Link>
                {mainNavigation.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-2xl px-4 py-3 text-sm transition ${
                      isActive(link.href, link.match)
                        ? "bg-[var(--primary-soft)] text-[var(--primary-strong)]"
                        : "text-[var(--muted)] hover:bg-[var(--panel-soft)] hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}
