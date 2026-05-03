import Link from "next/link";
import Image from "next/image";

const topics = [
  { label: "Hanafi Fiqh", href: "/books" },
  { label: "Aqidah", href: "/videos" },
  { label: "Madhhab", href: "/articles/hanafi-madhhab-overview" },
  { label: "Scholars", href: "/scholars" },
  { label: "Refutations", href: "/refutations" },
];

export function HeroSection() {
  return (
    <section className="yaqeen-hero px-4 pb-4 pt-14 sm:px-8 lg:px-12">
      <div className="yaqeen-hero-inner mx-auto max-w-7xl">
        <div>
          <div className="max-w-4xl">
            <h1>
              Your source for Hanafi fiqh, Athari creed, and classical study.
            </h1>
            <p>
              Al Hanafiyyah organizes books, articles, scholars, lectures, and study paths
              into a clean library for serious students.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {topics.map((topic) => (
              <Link key={topic.label} href={topic.href} className="topic-chip">
                {topic.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="hero-logo-stage" aria-hidden="true">
          <div className="hero-logo-ring">
            <Image
              src="/hanafii.png"
              alt=""
              width={320}
              height={320}
              className="hero-logo-image"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
