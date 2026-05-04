import Link from "next/link";
import {
  BookOpen,
  ChevronLeft,
  FileText,
  GraduationCap,
  Languages,
  Layers3,
  Library,
  Maximize2,
  Play,
  Sparkles,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { videos } from "@/lib/site-data";

const stats = [
  {
    value: "40+",
    label: "LESSONS",
    detail: "Structured creed, fiqh, and research sessions",
  },
  {
    value: "4",
    label: "PLAYLISTS",
    detail: "Aqeedah, fiqh, polemics, and study adab",
  },
  {
    value: "3",
    label: "LANGUAGES",
    detail: "Arabic, Urdu, and English ready",
  },
  {
    value: "3",
    label: "STUDY MODES",
    detail: "Video, text, and transcript layouts",
  },
];

const tracks = [
  {
    title: "Aqeedah Foundations",
    category: "Creed Curriculum",
    description:
      "Athari primers, core definitions, and guided lessons for belief, worship, and methodology.",
    lessons: "18 lessons",
    icon: GraduationCap,
  },
  {
    title: "Hanafi Fiqh Pathway",
    category: "Fiqh Curriculum",
    description:
      "Mukhtasar al-Quduri, worship chapters, and practical ruling sessions with notes beside the lecture.",
    lessons: "14 lessons",
    icon: Library,
  },
  {
    title: "Research Capsules",
    category: "Polemics & Method",
    description:
      "Shorter responses, reading maps, and focused briefings for recurring questions and debates.",
    lessons: "8 lessons",
    icon: FileText,
  },
];

const tools = [
  {
    title: "Classical Path",
    description:
      "Series organized around texts, chapters, and teachers instead of loose uploads.",
    icon: BookOpen,
  },
  {
    title: "Immersive Study Tools",
    description:
      "Playlist embed, transcript, lesson notes, and reading material can sit in one workspace.",
    icon: Maximize2,
  },
  {
    title: "Tri-Lingual Support",
    description:
      "Keep Arabic, Urdu, and English lesson summaries ready for future toggles.",
    icon: Languages,
  },
];

const curriculumPanels = [
  {
    eyebrow: "CREED CURRICULUM",
    title: "`Umdat al-Aqa'id & Athari creed primers",
    description:
      "A dedicated track for foundational aqeedah lessons, terms, and short study notes.",
    subject: "Aqeedah",
    lessonTitle: "`Umdat al-Aqa'id - Lesson 1",
    lessonCopy:
      "A future playlist embed can live here with synchronized notes, language toggles, and transcript support.",
    bookTitle: "حول الكتاب",
    bookCopy:
      "A concise creed text used to frame belief, methodology, and the language of Sunni creed.",
  },
  {
    eyebrow: "FIQH CURRICULUM",
    title: "Mukhtasar al-Quduri pathway",
    description:
      "A Hanafi fiqh track prepared for rulings, chapter maps, PDFs, and lecture playlists.",
    subject: "Fiqh",
    lessonTitle: "Mukhtasar al-Quduri - Lesson 1",
    lessonCopy:
      "Embed the fiqh playlist later and pair each class with chapter summaries, legal terms, and review prompts.",
    bookTitle: "مختصر القدوري",
    bookCopy:
      "A foundational Hanafi manual for worship, transactions, and the basic sequence of legal study.",
  },
];

export default function VideosPage() {
  return (
    <div className="lecture-shell -mt-28 overflow-hidden px-4 pb-20 pt-28 sm:px-8 lg:px-12">
      <div className="lecture-stars pointer-events-none fixed inset-0 -z-10" />

      <section className="mx-auto max-w-7xl pt-10">
        <Reveal>
          <div className="lecture-panel rounded-[2.4rem] p-6 sm:p-8 lg:p-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/"
                  className="lecture-chip px-4 py-2 text-sm font-bold transition hover:border-[color:var(--primary)] hover:text-foreground"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Back
                </Link>
                <span className="lecture-chip px-5 py-2 text-xs font-bold uppercase tracking-[0.35em]">
                  Lectures Hub
                </span>
              </div>
              <Link
                href="/"
                className="lecture-chip px-5 py-2 text-sm font-bold transition hover:border-[color:var(--primary)] hover:text-foreground"
              >
                Return Home
              </Link>
            </div>

            <div className="mt-14 max-w-5xl">
              <p className="lecture-muted text-xs font-bold uppercase tracking-[0.42em]">
                Daily Guided Study
              </p>
              <h1 className="mt-6 max-w-5xl text-4xl font-black leading-tight tracking-normal text-foreground sm:text-5xl lg:text-6xl">
                A luminous lectures library for creed, fiqh & polemics.
              </h1>
              <p className="lecture-muted mt-6 max-w-3xl text-lg leading-8">
                Organize full series by subject, keep notes beside each lesson,
                and prepare playlist embeds for a focused learning workspace.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#aqeedah" className="button-primary transition hover:-translate-y-0.5">
                Start with Aqeedah
              </a>
              <a href="#fiqh" className="button-secondary transition hover:-translate-y-0.5">
                Study Fiqh Lessons
              </a>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              {["Certified texts", "Playlist-ready", "Transcript layout"].map((tag) => (
                <span
                  key={tag}
                  className="lecture-chip px-4 py-2 text-sm font-semibold"
                >
                  <Sparkles className="lecture-blue h-4 w-4" />
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="lecture-card rounded-2xl p-5"
                >
                  <div className="text-4xl font-black">{stat.value}</div>
                  <div className="lecture-muted mt-1 text-sm font-bold uppercase tracking-[0.32em]">
                    {stat.label}
                  </div>
                  <p className="lecture-muted mt-3 text-sm">{stat.detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {tools.map((tool) => {
                const Icon = tool.icon;
                return (
                  <div
                    key={tool.title}
                    className="lecture-card flex gap-4 rounded-2xl p-5"
                  >
                    <span className="lecture-blue-bg flex h-11 w-11 shrink-0 items-center justify-center rounded-full">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h2 className="font-black text-foreground">{tool.title}</h2>
                      <p className="lecture-muted mt-2 text-sm leading-6">
                        {tool.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto mt-10 grid max-w-7xl gap-5 lg:grid-cols-3">
        {tracks.map((track, index) => {
          const Icon = track.icon;
          return (
            <Reveal key={track.title} delay={0.06 * index}>
              <article className="lecture-card group h-full rounded-[1.7rem] p-6 transition hover:-translate-y-1 hover:border-[color:var(--primary)]">
                <div className="flex items-start justify-between gap-4">
                  <span className="lecture-blue-bg flex h-12 w-12 items-center justify-center rounded-2xl">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="lecture-chip px-3 py-1 text-xs font-bold uppercase tracking-[0.18em]">
                    {track.category}
                  </span>
                </div>
                <h2 className="mt-7 text-2xl font-black text-foreground">
                  {track.title}
                </h2>
                <p className="lecture-muted mt-3 min-h-24 text-sm leading-7">
                  {track.description}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-[var(--line)] pt-5">
                  <span className="lecture-muted text-sm font-bold">
                    {track.lessons}
                  </span>
                  <span className="lecture-blue inline-flex items-center gap-2 text-sm font-black">
                    Prepare series
                  </span>
                </div>
              </article>
            </Reveal>
          );
        })}
      </section>

      <section className="mx-auto mt-10 max-w-7xl space-y-10">
        {curriculumPanels.map((panel, index) => (
          <Reveal key={panel.eyebrow} delay={0.05 * index}>
            <article
              id={panel.subject === "Aqeedah" ? "aqeedah" : "fiqh"}
              className="lecture-panel rounded-[2rem] p-6 sm:p-8"
            >
              <span className="lecture-chip px-5 py-2 text-xs font-black uppercase tracking-[0.34em]">
                {panel.eyebrow}
              </span>
              <h2 className="mt-6 text-3xl font-black text-foreground">
                {panel.title}
              </h2>
              <p className="lecture-muted mt-3 max-w-3xl text-base leading-7">
                {panel.description}
              </p>

              <div className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_1fr]">
                <div className="lecture-card-strong overflow-hidden rounded-3xl">
                  <div className="lecture-player relative aspect-video">
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,color-mix(in_oklab,var(--foreground)_8%,transparent),transparent_40%)]" />
                    <div className="lecture-chip absolute left-4 top-4 px-4 py-2 text-xs font-bold">
                      Playlist embed placeholder
                    </div>
                    <button
                      type="button"
                      className="lecture-chip absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-2xl"
                      aria-label="Open lecture player"
                    >
                      <Maximize2 className="h-5 w-5" />
                    </button>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="lecture-blue-bg flex h-20 w-20 items-center justify-center rounded-full border border-[var(--line)] shadow-2xl shadow-[var(--shadow)]">
                        <Play className="ml-1 h-9 w-9" />
                      </span>
                    </div>
                    <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-[var(--line)] bg-[var(--panel-strong)] p-4 backdrop-blur-md">
                      <p className="lecture-muted text-xs font-bold uppercase tracking-[0.28em]">
                        Guided Lesson
                      </p>
                      <h3 className="mt-1 text-lg font-black text-foreground">
                        {panel.lessonTitle}
                      </h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="lecture-muted text-sm leading-7">
                      {panel.lessonCopy}
                    </p>
                  </div>
                </div>

                <div className="lecture-card-strong rounded-3xl p-6">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <p className="lecture-muted text-xs font-bold">
                        {panel.subject}
                      </p>
                      <h3 className="mt-1 text-2xl font-black text-foreground">
                        {panel.bookTitle}
                      </h3>
                    </div>
                    <div className="lecture-chip grid grid-cols-3 rounded-2xl p-1 text-sm font-black">
                      <span className="rounded-xl bg-[var(--primary)] px-4 py-2 text-white">AR</span>
                      <span className="px-4 py-2">UR</span>
                      <span className="px-4 py-2">EN</span>
                    </div>
                  </div>

                  <label className="lecture-muted mt-7 block text-sm font-bold">
                    Select lesson
                    <select className="lecture-select mt-3 w-full rounded-2xl px-4 py-3 outline-none transition focus:border-[color:var(--primary)]">
                      <option>Lesson 1</option>
                      <option>Lesson 2</option>
                      <option>Lesson 3</option>
                    </select>
                  </label>

                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {["Book", "Book + Video", "Transcript"].map((mode) => (
                      <button
                        key={mode}
                        type="button"
                        className="lecture-chip justify-center rounded-2xl px-3 py-3 text-sm font-bold transition hover:border-[color:var(--primary)] hover:text-foreground"
                      >
                        {mode}
                      </button>
                    ))}
                  </div>

                  <div className="mt-6 flex gap-3">
                    <button
                      type="button"
                      className="lecture-chip flex h-12 w-12 items-center justify-center rounded-full"
                      aria-label="Previous lesson"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      type="button"
                      className="lecture-chip flex h-12 items-center justify-center rounded-full px-5"
                      aria-label="Next lesson"
                    >
                      Next
                    </button>
                  </div>

                  <div className="mt-7 space-y-4">
                    <div className="lecture-card rounded-2xl p-5">
                      <h4 className="font-black text-foreground">{panel.bookTitle}</h4>
                      <p className="lecture-muted mt-3 text-sm leading-7">
                        {panel.bookCopy}
                      </p>
                    </div>
                    <div className="lecture-card rounded-2xl p-5">
                      <h4 className="font-black text-foreground">Series notes</h4>
                      <p className="lecture-muted mt-3 text-sm leading-7">
                        Add teacher notes, PDF links, and short lesson outcomes
                        here when the playlist is embedded.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="mx-auto mt-10 max-w-7xl">
        <Reveal>
          <div className="lecture-panel rounded-[2rem] p-6 sm:p-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="lecture-chip inline-flex items-center gap-2 px-4 py-2 text-xs font-black uppercase tracking-[0.28em]">
                  <Layers3 className="h-4 w-4" />
                  Existing Seeds
                </span>
                <h2 className="mt-5 text-3xl font-black text-foreground">
                  Current lecture entries
                </h2>
              </div>
              <p className="lecture-muted max-w-xl text-sm leading-6">
                These can become the first playlist items once real embeds,
                PDFs, and transcripts are connected.
              </p>
            </div>

            <div className="mt-7 grid gap-4 lg:grid-cols-2">
              {videos.map((video) => (
                <article
                  key={video.slug}
                  className="lecture-card rounded-2xl p-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex flex-wrap gap-2">
                        <span className="lecture-blue-bg rounded-full px-3 py-1 text-xs font-bold">
                          {video.category}
                        </span>
                        <span className="lecture-chip rounded-full px-3 py-1 text-xs font-bold">
                          {video.level}
                        </span>
                      </div>
                      <h3 className="mt-4 text-lg font-black text-foreground">
                        {video.title}
                      </h3>
                    </div>
                    <span className="lecture-blue-bg flex h-11 w-11 shrink-0 items-center justify-center rounded-full">
                      <Play className="h-5 w-5" />
                    </span>
                  </div>
                  <p className="lecture-muted mt-4 text-sm leading-6">
                    {video.summary}
                  </p>
                  <div className="mt-5 flex items-center justify-between border-t border-[var(--line)] pt-4 text-sm">
                    <span className="lecture-muted font-bold">
                      {video.duration}
                    </span>
                    <span className="lecture-blue font-black">
                      Playlist slot
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
