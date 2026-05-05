import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { LectureWatchWorkspace } from "@/components/lecture-watch-workspace";
import { Reveal } from "@/components/reveal";
import { getVideoBySlug, videos } from "@/lib/site-data";

const topicSlugs = ["aqidah", "fiqh"] as const;

export function generateStaticParams() {
  return videos.map((lecture) => ({
    topic: lecture.category.toLowerCase(),
    slug: lecture.slug,
  }));
}

export default async function LectureWatchPage({
  params,
}: {
  params: Promise<{ topic: string; slug: string }>;
}) {
  const { topic, slug } = await params;
  const lecture = getVideoBySlug(slug);

  if (
    !lecture ||
    !topicSlugs.includes(topic as (typeof topicSlugs)[number]) ||
    lecture.category.toLowerCase() !== topic
  ) {
    notFound();
  }

  return (
    <div className="lectures-shell">
      <section className="lecture-watch-hero">
        <Link href={`/lectures/${topic}`} className="back-link">
          <ArrowLeft className="h-4 w-4" />
          Back to {lecture.category}
        </Link>

        <Reveal>
          <span className="section-kicker">{lecture.category}</span>
          <h1>{lecture.title}</h1>
          <p>{lecture.summary}</p>
        </Reveal>
      </section>

      <Reveal>
        <LectureWatchWorkspace
          category={lecture.category}
          description={lecture.description}
          duration={lecture.duration}
          keyThemes={lecture.keyThemes}
          lessons={lecture.lessons}
          playlists={lecture.playlists}
          title={lecture.title}
        />
      </Reveal>
    </div>
  );
}
