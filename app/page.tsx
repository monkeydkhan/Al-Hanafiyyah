import Link from "next/link";
import {
  ArrowRight,
  GraduationCap,
  LibraryBig,
} from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { HeroSection } from "@/components/hero-section";
import { books, routePanels, scholars } from "@/lib/site-data";

const featuredBook = books[0];
const featuredScholar = scholars[0];

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-14 px-4 pb-16 sm:px-8 lg:px-12">
      <section className="space-y-6">
        <Reveal>
          <div>
            <div className="eyebrow-chip">Routes</div>
            <h2 className="mt-5 font-display text-4xl text-foreground sm:text-5xl">
              Books and scholars.
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-2">
          {routePanels.map((panel, index) => {
            const Icon = panel.icon;
            return (
              <Reveal key={panel.href} delay={0.08 * index}>
                <Link href={panel.href} className="route-card block rounded-[1.9rem] p-6">
                  <div className="flex items-center justify-between gap-4">
                    <span className="eyebrow-chip">{panel.title}</span>
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary-soft)] text-[var(--primary-strong)]">
                      <Icon className="h-5 w-5" />
                    </span>
                  </div>
                  <h3 className="mt-8 font-display text-3xl text-foreground">
                    {panel.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
                    {panel.summary}
                  </p>
                  <div className="mt-6 space-y-3">
                    {panel.bullets.map((bullet) => (
                      <div
                        key={bullet}
                        className="surface-soft rounded-[1.2rem] px-4 py-3 text-sm text-[var(--muted)]"
                      >
                        {bullet}
                      </div>
                    ))}
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="grid gap-5 xl:grid-cols-2">
        <Reveal>
          <article className="surface-panel rounded-[2rem] p-6">
            <div className="flex items-center gap-3 text-[var(--primary-strong)]">
              <LibraryBig className="h-5 w-5" />
              <span className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
                Featured book
              </span>
            </div>
            <h3 className="mt-6 font-display text-4xl text-foreground">
              {featuredBook.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base">
              {featuredBook.summary}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {featuredBook.keyThemes.slice(0, 3).map((theme) => (
                <span
                  key={theme}
                  className="rounded-full bg-[var(--primary-soft)] px-3 py-1 text-xs font-semibold text-[var(--primary-strong)]"
                >
                  {theme}
                </span>
              ))}
            </div>
            <Link
              href={`/books/${featuredBook.slug}`}
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary-strong)] hover:underline"
            >
              Open book page
              <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
        </Reveal>

        <Reveal delay={0.08}>
          <article className="surface-panel rounded-[2rem] p-6">
            <div className="flex items-center gap-3 text-[var(--primary-strong)]">
              <GraduationCap className="h-5 w-5" />
              <span className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
                Scholar spotlight
              </span>
            </div>
            <h3 className="mt-6 font-display text-4xl text-foreground">
              {featuredScholar.name}
            </h3>
            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[var(--muted)]">
              {featuredScholar.honorific} • {featuredScholar.region}
            </p>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base">
              {featuredScholar.summary}
            </p>
            <div className="mt-6 space-y-3">
              {featuredScholar.traits.slice(0, 3).map((trait) => (
                <div
                  key={trait}
                  className="surface-soft rounded-[1.2rem] px-4 py-3 text-sm text-[var(--muted)]"
                >
                  {trait}
                </div>
              ))}
            </div>
            <Link
              href={`/scholars/${featuredScholar.slug}`}
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary-strong)] hover:underline"
            >
              Open biography
              <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
        </Reveal>
      </section>
    </div>
    </>
  );
}
