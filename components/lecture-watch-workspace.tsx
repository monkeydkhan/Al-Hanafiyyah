"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

type LecturePlaylist = {
  code: string;
  label: string;
  youtubeUrl?: string;
};

type LectureWatchWorkspaceProps = {
  category: string;
  description: string;
  duration: string;
  keyThemes: string[];
  lessons: Array<{
    title: string;
    youtubeUrl?: string;
  }>;
  playlists: LecturePlaylist[];
  title: string;
};

export function LectureWatchWorkspace({
  category,
  description,
  duration,
  keyThemes,
  lessons,
  playlists,
  title,
}: LectureWatchWorkspaceProps) {
  const firstAvailable = useMemo(
    () => playlists.find((playlist) => playlist.youtubeUrl) ?? playlists[0],
    [playlists],
  );
  const [activeCode, setActiveCode] = useState(firstAvailable?.code ?? "EN");
  const activePlaylist =
    playlists.find((playlist) => playlist.code === activeCode) ?? firstAvailable;
  const [activeLessonIndex, setActiveLessonIndex] = useState(0);
  const activeLesson = lessons[activeLessonIndex] ?? lessons[0];
  const activeUrl = activeLesson?.youtubeUrl ?? activePlaylist?.youtubeUrl;

  return (
    <section className="lecture-studio">
      <div className="lecture-studio-video-card">
        <div className="lecture-studio-player">
          {activeUrl ? (
            <iframe
              key={`${activeCode}-${activeLessonIndex}`}
              src={activeUrl}
              title={title}
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <div className="lecture-watch-placeholder">
              <Play className="h-12 w-12 fill-white text-white" />
              <span>{activePlaylist?.label ?? activeCode} playlist coming soon</span>
            </div>
          )}
        </div>

        <div className="lecture-studio-video-copy">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>

      <aside className="lecture-studio-side">
        <div className="lecture-language-tabs" aria-label="Playlist language">
          {playlists.map((playlist) => {
            const available = Boolean(playlist.youtubeUrl);

            return (
              <button
                key={playlist.code}
                type="button"
                className={playlist.code === activeCode ? "is-active" : ""}
                disabled={!available}
                title={available ? playlist.label : `${playlist.label} coming soon`}
                onClick={() => {
                  if (available) {
                    setActiveCode(playlist.code);
                  }
                }}
              >
                {playlist.code}
              </button>
            );
          })}
        </div>

        <label className="lecture-lesson-select">
          Choose lesson
          <select
            value={activeLessonIndex}
            onChange={(event) => setActiveLessonIndex(Number(event.target.value))}
          >
            {lessons.map((lesson, index) => (
              <option key={lesson.title} value={index}>
                {lesson.title}
              </option>
            ))}
          </select>
        </label>

        <div className="lecture-studio-about">
          <h2>About the book</h2>
          <p>
            Usul al-Thalatha is a concise primer covering the three principles:
            knowing Allah, knowing Islam, and knowing the Messenger of Allah.
          </p>
        </div>

        <div className="lecture-studio-about">
          <h2>About the playlist</h2>
          <p>{description}</p>
        </div>

        <div className="lecture-watch-meta">
          <div>
            <span>Duration</span>
            <strong>{duration}</strong>
          </div>
          <div>
            <span>Topic</span>
            <strong>{category}</strong>
          </div>
        </div>

        <div className="lecture-theme-list">
          {keyThemes.map((theme) => (
            <span key={theme}>{theme}</span>
          ))}
        </div>

        <div className="lecture-studio-actions">
          <button
            type="button"
            aria-label="Previous lesson"
            disabled={activeLessonIndex === 0}
            onClick={() => setActiveLessonIndex((index) => Math.max(0, index - 1))}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next lesson"
            disabled={activeLessonIndex >= lessons.length - 1}
            onClick={() =>
              setActiveLessonIndex((index) => Math.min(lessons.length - 1, index + 1))
            }
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </aside>
    </section>
  );
}
