import Link from "next/link";
import { BookOpen, FileText, GraduationCap, Play, ShieldAlert } from "lucide-react";
import { HeroSection } from "@/components/hero-section";
import { books, scholars, videos } from "@/lib/site-data";

const videoShowcase = [
  {
    title: "Was Dajjal Alive During The Prophet's Time?",
    href: "/lectures",
    label: "Signs of the Hour",
    style: "thumb-dajjal",
  },
  {
    title: "Why Nothing Ever Feels Like Enough",
    href: "/lectures",
    label: "The Name I Need",
    style: "thumb-empty",
  },
  {
    title: "Imam Abu Hanifa: The Possessor of Legal Insight",
    href: "/scholars",
    label: "The Firsts",
    style: "thumb-firsts",
  },
  {
    title: "Qur'an Reflections for the Student of Fiqh",
    href: "/articles",
    label: "Qur'an 30 for 30",
    style: "thumb-quran",
  },
  {
    title: "Your Beautiful Veil: Adab Before Debate",
    href: "/refutations",
    label: "Prayers of the Pious",
    style: "thumb-veil",
  },
];

const curriculum = [
  {
    title: "Hanafi Fiqh Foundations",
    copy: "A guided path through worship, legal method, and the first texts a student should know.",
    href: "/books",
    icon: BookOpen,
  },
  {
    title: "Athari Creed Primer",
    copy: "A clear track for belief, divine attributes, qadar, and transmitted Sunni creed.",
    href: "/lectures",
    icon: GraduationCap,
  },
  {
    title: "Refutations With Adab",
    copy: "Calm responses that separate claim, evidence, method, and conclusion.",
    href: "/refutations",
    icon: ShieldAlert,
  },
];

function SectionTitle({ title, href }: { title: string; href: string }) {
  return (
    <div className="yaqeen-section-title">
      <span />
      <Link href={href} className="inline-flex items-center gap-3">
        {title}
      </Link>
      <span />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />

      <div className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-8 lg:px-12">
        <section className="home-row">
          <SectionTitle title="Lectures" href="/lectures" />
          <div className="media-strip">
            {videoShowcase.map((item) => (
              <Link key={item.title} href={item.href} className="media-card">
                <div className={`video-thumb ${item.style}`}>
                  <span className="video-label">{item.label}</span>
                  <span className="play-badge">
                    <Play className="h-7 w-7 fill-white text-white" />
                  </span>
                </div>
                <h3>{item.title}</h3>
              </Link>
            ))}
          </div>
        </section>

        <section className="home-row">
          <SectionTitle title="Books" href="/books" />
          <div className="book-strip">
            {books.map((book, index) => (
              <Link key={book.slug} href={`/books/${book.slug}`} className="book-card">
                <div className={`book-cover cover-${index + 1}`}>
                  {index === 0 ? <span className="new-dot">New!</span> : null}
                  <p>{book.arabicTitle}</p>
                  <h3>{book.title}</h3>
                  <small>{book.category}</small>
                </div>
                <h4>{book.title}</h4>
              </Link>
            ))}
          </div>
        </section>

        <section className="home-row">
          <SectionTitle title="Curriculum" href="/lectures" />
          <div className="curriculum-strip">
            {curriculum.map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.title} href={item.href} className="curriculum-card">
                  <span>
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="home-row">
          <SectionTitle title="Articles" href="/articles" />
          <div className="paper-grid">
            <Link href="/articles/hanafi-madhhab-overview" className="paper-card">
              <span>Madhhab</span>
              <h3>An Overview of the Hanafi Madhhab</h3>
              <p>
                A clean introduction to what a madhhab is, how the Hanafi school formed,
                and how students should approach its books.
              </p>
            </Link>
            <Link href="/scholars" className="paper-card">
              <span>Scholars</span>
              <h3>{scholars[0].name}: A Foundational Imam</h3>
              <p>{scholars[0].summary}</p>
            </Link>
            <Link href="/lectures" className="paper-card">
              <span>Lecture</span>
              <h3>{videos[0].title}</h3>
              <p>{videos[0].summary}</p>
            </Link>
            <Link href="/refutations" className="paper-card">
              <span>Method</span>
              <h3>Answering Doubts Without Losing Adab</h3>
              <p>
                A section prepared for source-based responses, careful claims, and clean conclusions.
              </p>
            </Link>
          </div>
        </section>

        <section className="home-row">
          <SectionTitle title="Explore Al Hanafiyyah" href="/articles" />
          <div className="explore-strip">
            {[
              { label: "Books", href: "/books", icon: BookOpen },
              { label: "Articles", href: "/articles", icon: FileText },
              { label: "Lectures", href: "/lectures", icon: Play },
              { label: "Scholars", href: "/scholars", icon: GraduationCap },
              { label: "Refutations", href: "/refutations", icon: ShieldAlert },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.label} href={item.href} className="explore-pill">
                  <Icon className="h-5 w-5" />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}
