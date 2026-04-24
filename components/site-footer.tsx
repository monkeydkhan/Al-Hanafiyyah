import Link from "next/link";
import { LogoMark } from "@/components/logo-mark";
import { mainNavigation } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-[var(--line)] px-4 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <LogoMark compact={false} />
          <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--muted)]">
            Books, scholars, and study notes.
          </p>
        </div>

        <nav className="flex flex-wrap gap-4 text-sm text-[var(--muted)]">
          <Link href="/" className="transition-colors hover:text-foreground">
            Home
          </Link>
          {mainNavigation.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
