import Link from "next/link";
import { ArrowRight, Play, PlayCircle, BookOpen, Zap, Globe } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { videos } from "@/lib/site-data";

export default function VideosPage() {
  const stats = [
    {
      number: "4+",
      label: "VIDEOS",
      description: "Structured creed & fiqh lectures",
    },
    {
      number: "2",
      label: "PLAYLISTS",
      description: "Aqidah • Fiqh",
    },
    {
      number: "2",
      label: "LANGUAGES",
      description: "Arabic • English",
    },
    {
      number: "∞",
      label: "STUDY MODES",
      description: "Video • Notes • Transcript",
    },
  ];

  const features = [
    {
      icon: BookOpen,
      title: "Classical Texts",
      description: "Usul al-Thalatha & Athari foundations with guided study.",
    },
    {
      icon: Zap,
      title: "Deep Learning Tools",
      description:
        "Structured notes, discussion points, and connected scholarship.",
    },
    {
      icon: Globe,
      title: "Multi-Lingual Support",
      description: "Access content in Arabic and English instantly.",
    },
  ];

  const topics = [
    "Aqidah Foundations",
    "Fiqh Fundamentals",
    "Creed & Polemics",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0d2d] via-[#1a1847] to-[#1f1b4d]">
      {/* Header */}
      <div className="border-b border-white/10 bg-[#0f0d2d]/50 backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-8 lg:px-12">
          <div className="flex items-center gap-4">
            <button className="rounded-lg p-2 hover:bg-white/10">
              <svg
                className="h-5 w-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <Link
              href="/videos"
              className="flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back
            </Link>
            <div className="ml-4 text-xs font-semibold uppercase tracking-widest text-white/50">
              Video Hub
            </div>
          </div>
          <Link
            href="/"
            className="rounded-lg border border-white/20 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
          >
            Return Home
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-8 lg:px-12">
        <Reveal>
          <div className="space-y-6">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#9d84f7]">
              Curated video lectures
            </div>
            <h1 className="font-display text-5xl font-bold leading-tight text-white sm:text-6xl">
              A luminous library for{" "}
              <span className="bg-gradient-to-r from-[#9d84f7] to-[#7c6fdd] bg-clip-text text-transparent">
                creed, fiqh & theology
              </span>
              .
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-white/70">
              Watch full lectures, review key points, and study Islamic
              knowledge with Athari scholarship. Access structured content on
              Usul al-Thalatha, Divine attributes, and Hanafi jurisprudence.
            </p>
          </div>
        </Reveal>

        {/* Action Buttons */}
        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-wrap gap-3">
            <button className="rounded-full bg-gradient-to-r from-[#9d84f7] to-[#7c6fdd] px-6 py-3 font-semibold text-white shadow-lg shadow-[#9d84f7]/30 hover:shadow-[#9d84f7]/50 transition-all">
              Start with Aqidah
            </button>
            <button className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors">
              Study Fiqh Lectures
            </button>
          </div>
        </Reveal>

        {/* Feature Tags */}
        <Reveal delay={0.15}>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-sm text-white/70">
              <Play className="h-4 w-4" />
              Video lectures
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-sm text-white/70">
              <BookOpen className="h-4 w-4" />
              Study notes
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-sm text-white/70">
              <Globe className="h-4 w-4" />
              Multi-lingual
            </span>
          </div>
        </Reveal>

        {/* Stats Grid */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {stats.map((stat, index) => (
            <Reveal key={index} delay={0.08 * index}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="text-4xl font-bold text-white">{stat.number}</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-widest text-white/50">
                  {stat.label}
                </div>
                <div className="mt-3 text-sm text-white/60">{stat.description}</div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid gap-5 sm:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Reveal key={index} delay={0.08 * index}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#9d84f7]/20 text-[#9d84f7]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/60">
                    {feature.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Videos Grid */}
        <div className="mt-20">
          <Reveal>
            <h2 className="text-3xl font-bold text-white">All Lectures</h2>
          </Reveal>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {videos.map((video, index) => (
              <Reveal key={video.slug} delay={0.06 * index}>
                <a
                  href={video.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex flex-wrap gap-2">
                        <span className="rounded-full bg-[#9d84f7]/20 px-2 py-1 text-xs font-semibold text-[#9d84f7]">
                          {video.category}
                        </span>
                        <span className="rounded-full bg-white/10 px-2 py-1 text-xs font-semibold text-white/70">
                          {video.level}
                        </span>
                      </div>
                      <h3 className="mt-4 text-lg font-semibold text-white group-hover:text-[#9d84f7] transition-colors">
                        {video.title}
                      </h3>
                    </div>
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#9d84f7]/20 text-[#9d84f7] group-hover:bg-[#9d84f7] group-hover:text-white transition-colors">
                      <Play className="h-5 w-5" />
                    </div>
                  </div>

                  <p className="mt-4 text-sm text-white/60">{video.description}</p>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-xs text-white/50">{video.duration}</div>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#9d84f7] group-hover:gap-2 transition-all">
                      Watch
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Topic Tags */}
        <div className="mt-20 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
          <Reveal>
            <h3 className="text-lg font-semibold text-white">
              Explore by Topic
            </h3>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="mt-6 flex flex-wrap gap-3">
              {topics.map((topic) => (
                <button
                  key={topic}
                  className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors"
                >
                  {topic}
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

