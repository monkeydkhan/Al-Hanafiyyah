import Link from "next/link";
import { LogoMark } from "@/components/logo-mark";
import { mainNavigation } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-[var(--line)] bg-[var(--panel-soft)] px-4 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto grid w-full max-w-7xl gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <LogoMark compact={false} />
          <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--muted)]">
            A growing study library for Hanafi fiqh, Athari creed, articles, lectures, and scholar biographies.
          </p>
        </div>

        <nav className="flex flex-col gap-3 text-sm font-bold text-[var(--muted)]">
          <p className="section-kicker">Explore</p>
          {mainNavigation.slice(0, 3).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <nav className="flex flex-col gap-3 text-sm font-bold text-[var(--muted)]">
          <p className="section-kicker">Learn</p>
          {mainNavigation.slice(3).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/articles/hanafi-madhhab-overview" className="transition-colors hover:text-foreground">
            Hanafi Madhhab
          </Link>
          <Link href="/about" className="transition-colors hover:text-foreground">
            About
          </Link>
        </nav>
      </div>
    </footer>
  );
}
