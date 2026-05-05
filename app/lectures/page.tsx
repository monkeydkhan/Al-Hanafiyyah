import Link from "next/link";
import { GraduationCap, LibraryBig, Play } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { videos } from "@/lib/site-data";

const topicCards = [
  {
    title: "Aqidah",
    count: "1 playlist",
    description:
      "The Usul al-Thalatha playlist for foundational creed and the three principles.",
    icon: GraduationCap,
    href: "/lectures/aqidah",
  },
  {
    title: "Fiqh",
    count: "Coming soon",
    description:
      "Hanafi legal method, worship foundations, and structured study through core texts.",
    icon: LibraryBig,
    href: "/lectures/fiqh",
  },
];

const seriesCards = [
  {
    id: "aqidah",
    label: "Aqidah",
    title: "Athari Creed Foundations",
    description:
      "A clear sequence for tawheed, divine attributes, qadr, and the language of creed.",
    lectures: videos.filter((video) => video.category === "Aqidah"),
  },
  {
    id: "fiqh",
    label: "Fiqh",
    title: "Hanafi Fiqh Foundations",
    description:
      "Introductory lessons on the Hanafi school, legal method, and the study of rulings.",
    lectures: videos.filter((video) => video.category === "Fiqh"),
  },
];

function LecturesSectionTitle({ title }: { title: string }) {
  return (
    <div className="lectures-section-title">
      <span />
      <h2>{title}</h2>
      <span />
    </div>
  );
}

export default function LecturesPage() {
  return (
    <div className="lectures-shell">
      <section className="lectures-hero">
        <Reveal>
          <div className="lectures-hero-copy">
            <span className="section-kicker">Lecture Library</span>
            <h1>Lectures</h1>
            <p>
              Browse structured lessons by subject, then connect each series to
              books, notes, transcripts, and future playlist embeds.
            </p>
          </div>
        </Reveal>

      </section>

      <section className="lectures-topic-grid is-compact" aria-label="Lecture topics">
        {topicCards.map((topic, index) => {
          const Icon = topic.icon;

          return (
            <Reveal key={topic.title} delay={0.05 * index}>
              <Link href={topic.href} className="lectures-topic-card">
                <div className="lectures-topic-icon">
                  <Icon className="h-5 w-5" />
                </div>
                <span>{topic.count}</span>
                <h2>{topic.title}</h2>
                <p>{topic.description}</p>
                <strong>Browse</strong>
              </Link>
            </Reveal>
          );
        })}
      </section>

      <section className="lectures-series-section">
        <LecturesSectionTitle title="Browse By Topic" />
        <div className="lectures-series-list">
          {seriesCards.map((series, index) => (
            <Reveal key={series.id} delay={0.05 * index}>
              <article className="lectures-series-card">
                <div className="lectures-player-card">
                  <div className="lectures-player-art">
                    <span>{series.label}</span>
                    <Play className="h-10 w-10 fill-white text-white" />
                  </div>
                  <div className="lectures-player-meta">
                    <span className="section-kicker">Topic</span>
                    <h3>{series.title}</h3>
                    <p>{series.description}</p>
                    <Link href={`/lectures/${series.id}`} className="lectures-inline-link">
                      Browse {series.label}
                    </Link>
                  </div>
                </div>

                <div className="lectures-lesson-list">
                  {series.lectures.length ? (
                    series.lectures.map((lecture) => (
                      <Link
                        key={lecture.slug}
                        href={`/lectures/${series.id}/${lecture.slug}`}
                        className="lectures-lesson-row"
                      >
                        <div>
                          <span>{lecture.category}</span>
                          <h3>{lecture.title}</h3>
                          <p>{lecture.summary}</p>
                        </div>
                        <strong>{lecture.duration}</strong>
                      </Link>
                    ))
                  ) : (
                    <article className="lectures-lesson-row">
                      <div>
                        <span>Coming soon</span>
                        <h3>Lessons are being prepared</h3>
                        <p>
                          This series is ready for future playlist embeds,
                          teacher notes, and transcripts.
                        </p>
                      </div>
                    </article>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="lectures-all-section">
        <LecturesSectionTitle title="Recent Lectures" />
        <div className="lectures-shelf">
          {videos.map((lecture) => {
            const topic = lecture.category.toLowerCase();

            return (
              <Link
                key={lecture.slug}
                href={`/lectures/${topic}/${lecture.slug}`}
                className="lectures-shelf-card"
              >
                <div className="lectures-thumb">
                  <span>{lecture.category}</span>
                  <Play className="h-7 w-7 fill-white text-white" />
                </div>
                <h3>{lecture.title}</h3>
                <p>{lecture.summary}</p>
                <div>
                  <span>{lecture.duration}</span>
                  <span>{lecture.category}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
