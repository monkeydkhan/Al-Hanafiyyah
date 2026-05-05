import Link from "next/link";
import { BookOpen, GraduationCap, Layers3, LibraryBig, Play } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { videos } from "@/lib/site-data";

const topicCards = [
  {
    title: "Aqidah",
    count: "3 lectures",
    description:
      "Foundational creed lessons, divine attributes, qadr, and transmitted Sunni belief.",
    icon: GraduationCap,
    href: "#aqidah",
  },
  {
    title: "Fiqh",
    count: "1 lecture",
    description:
      "Hanafi legal method, worship foundations, and structured study through core texts.",
    icon: LibraryBig,
    href: "#fiqh",
  },
  {
    title: "Study Path",
    count: "Coming soon",
    description:
      "Future guided sequences that connect lectures with books, notes, and revision.",
    icon: BookOpen,
    href: "#series",
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

        <Reveal delay={0.05}>
          <div className="lectures-hero-panel">
            <span>Current focus</span>
            <h2>Creed and Hanafi fiqh foundations</h2>
            <p>
              The lecture section is prepared as a study workspace, not a loose
              video archive.
            </p>
            <div>
              {["Arabic", "Urdu", "English"].map((language) => (
                <span key={language}>{language}</span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="lectures-topic-grid" aria-label="Lecture topics">
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

      <section id="series" className="lectures-series-section">
        <LecturesSectionTitle title="Featured Series" />
        <div className="lectures-series-list">
          {seriesCards.map((series, index) => (
            <Reveal key={series.id} delay={0.05 * index}>
              <article id={series.id} className="lectures-series-card">
                <div className="lectures-player-card">
                  <div className="lectures-player-art">
                    <span>{series.label}</span>
                    <Play className="h-10 w-10 fill-white text-white" />
                  </div>
                  <div className="lectures-player-meta">
                    <span className="section-kicker">Series</span>
                    <h3>{series.title}</h3>
                    <p>{series.description}</p>
                  </div>
                </div>

                <div className="lectures-lesson-list">
                  {series.lectures.length ? (
                    series.lectures.map((lecture) => (
                      <article key={lecture.slug} className="lectures-lesson-row">
                        <div>
                          <span>{lecture.level}</span>
                          <h3>{lecture.title}</h3>
                          <p>{lecture.summary}</p>
                        </div>
                        <strong>{lecture.duration}</strong>
                      </article>
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
        <LecturesSectionTitle title="All Lectures" />
        <div className="lectures-shelf">
          {videos.map((lecture) => (
            <article key={lecture.slug} className="lectures-shelf-card">
              <div className="lectures-thumb">
                <span>{lecture.category}</span>
                <Play className="h-7 w-7 fill-white text-white" />
              </div>
              <span className="section-kicker">{lecture.level}</span>
              <h3>{lecture.title}</h3>
              <p>{lecture.summary}</p>
              <div>
                <span>{lecture.duration}</span>
                <Layers3 className="h-4 w-4" />
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
