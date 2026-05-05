import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Play } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { videos } from "@/lib/site-data";

const topics = {
  aqidah: {
    title: "Aqidah Lectures",
    label: "Aqidah",
    description:
      "Currently featuring the English Usul al-Thalatha playlist.",
  },
  fiqh: {
    title: "Fiqh Lectures",
    label: "Fiqh",
    description:
      "Lessons on Hanafi legal method, worship foundations, and structured study.",
  },
};

type TopicSlug = keyof typeof topics;

function isTopicSlug(value: string): value is TopicSlug {
  return value in topics;
}

export function generateStaticParams() {
  return Object.keys(topics).map((topic) => ({ topic }));
}

export default async function LectureTopicPage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic } = await params;

  if (!isTopicSlug(topic)) {
    notFound();
  }

  const topicMeta = topics[topic];
  const lectures = videos.filter(
    (lecture) => lecture.category.toLowerCase() === topicMeta.label.toLowerCase(),
  );

  return (
    <div className="lectures-shell">
      <section className="lecture-topic-hero">
        <Link href="/lectures" className="back-link">
          <ArrowLeft className="h-4 w-4" />
          Back to lectures
        </Link>
        <Reveal>
          <span className="section-kicker">Lecture Topic</span>
          <h1>{topicMeta.title}</h1>
          <p>{topicMeta.description}</p>
        </Reveal>
      </section>

      <section className="lecture-topic-grid">
        {lectures.length ? (
          lectures.map((lecture, index) => (
            <Reveal key={lecture.slug} delay={0.05 * index}>
              <Link
                href={`/lectures/${topic}/${lecture.slug}`}
                className="lecture-topic-card"
              >
                <div className="lectures-thumb">
                  <span>{lecture.category}</span>
                  <Play className="h-8 w-8 fill-white text-white" />
                </div>
                <h2>{lecture.title}</h2>
                <p>{lecture.summary}</p>
                <div>
                  <span>{lecture.duration}</span>
                  <strong>Watch</strong>
                </div>
              </Link>
            </Reveal>
          ))
        ) : (
          <Reveal>
            <article className="lecture-topic-card">
              <div className="lectures-thumb">
                <span>{topicMeta.label}</span>
                <Play className="h-8 w-8 fill-white text-white" />
              </div>
              <h2>Lectures coming soon</h2>
              <p>
                This topic is ready for future playlists and lesson pages once
                the recordings are added.
              </p>
              <div>
                <span>Prepared</span>
                <strong>Soon</strong>
              </div>
            </article>
          </Reveal>
        )}
      </section>
    </div>
  );
}
