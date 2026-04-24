import Link from "next/link";
import { ArrowRight, Play, PlayCircle } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { videos } from "@/lib/site-data";

export default function VideosPage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 pb-16 sm:px-8 lg:px-12">
      <PageIntro
        eyebrow="Videos"
        title="Curated lectures on Athari creed and Hanafi jurisprudence."
        description="This route offers video lessons on foundational Islamic knowledge, including Usul al-Thalatha, Divine attributes, and Hanafi legal methodology. Each lecture is linked to relevant texts and scholars for deeper study."
        actions={
          <Link href="/admin" className="button-secondary">
            Manage from admin
          </Link>
        }
      />

      <div className="grid gap-5 lg:grid-cols-2">
        {videos.map((video, index) => (
          <Reveal key={video.slug} delay={0.06 * index}>
            <article className="route-card h-full rounded-[2rem] p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                  <span className="eyebrow-chip">{video.category}</span>
                  <span className="eyebrow-chip">{video.level}</span>
                </div>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--primary-soft)] text-[var(--primary-strong)]">
                  <PlayCircle className="h-5 w-5" />
                </span>
              </div>

              <h2 className="mt-8 font-display text-4xl text-foreground">
                {video.title}
              </h2>
              <p className="mt-4 text-sm text-[var(--muted)]">
                {video.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {video.keyThemes.map((theme) => (
                  <span
                    key={theme}
                    className="rounded-full bg-[var(--primary-soft)] px-3 py-1 text-xs font-semibold text-[var(--primary-strong)]"
                  >
                    {theme}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-sm text-[var(--muted)]">
                  <Play className="h-4 w-4 text-[var(--primary-strong)]" />
                  {video.duration}
                </div>
                <a
                  href={video.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary-strong)] hover:underline"
                >
                  Watch video
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
