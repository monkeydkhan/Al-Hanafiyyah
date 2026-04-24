import Link from "next/link";
import { BookOpen, Users, Play } from "lucide-react";
import { Reveal } from "./reveal";

export function HeroSection() {
  return (
    <section className="relative -mx-4 -mt-16 mb-12 overflow-hidden px-4 py-24 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12">
      {/* Subtle background orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 right-10 h-80 w-80 rounded-full bg-[var(--primary-soft)] blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-20 h-80 w-80 rounded-full bg-[var(--primary-soft)] blur-3xl opacity-20"></div>
      </div>

      <div className="mx-auto flex max-w-4xl flex-col items-center justify-center text-center">
        {/* Welcome heading */}
        <Reveal>
          <h1 className="font-display text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Welcome to
          </h1>
        </Reveal>

        {/* Main title */}
        <Reveal delay={0.1}>
          <h2 className="hero-accent mt-3 font-display text-5xl leading-tight sm:text-6xl lg:text-7xl">
            Al Hanafiyyah
          </h2>
        </Reveal>

        {/* Action buttons */}
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link href="/books" className="button-primary group">
              <BookOpen className="h-5 w-5 transition-transform group-hover:scale-110" />
              Books
            </Link>
            <Link href="/scholars" className="button-secondary group">
              <Users className="h-5 w-5 transition-transform group-hover:scale-110" />
              Scholars
            </Link>
            <Link href="/videos" className="button-secondary group">
              <Play className="h-5 w-5 transition-transform group-hover:scale-110" />
              Videos
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
