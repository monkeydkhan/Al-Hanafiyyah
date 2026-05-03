import Link from "next/link";

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
      <div className="mx-auto max-w-7xl">
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
    </section>
  );
}
