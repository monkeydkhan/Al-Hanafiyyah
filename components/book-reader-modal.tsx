"use client";

import { useEffect, useState } from "react";
import { BookOpenText, Download, Maximize2, X } from "lucide-react";

type BookReaderModalProps = {
  downloadUrl?: string;
  readerUrl: string;
  title: string;
};

export function BookReaderModal({
  downloadUrl,
  readerUrl,
  title,
}: BookReaderModalProps) {
  const [open, setOpen] = useState(false);

  const enterFullscreen = async () => {
    const element = document.querySelector(".reader-modal-panel");

    if (element instanceof HTMLElement && element.requestFullscreen) {
      await element.requestFullscreen();
    }
  };

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="quduri-primary-action"
        onClick={() => setOpen(true)}
      >
        Read
        <BookOpenText className="h-4 w-4" />
      </button>

      {open ? (
        <div className="reader-modal-root" role="dialog" aria-modal="true" aria-label={title}>
          <button
            type="button"
            className="reader-modal-backdrop"
            aria-label="Close reader"
            onClick={() => setOpen(false)}
          />
          <div className="reader-modal-panel">
            <div className="reader-modal-frame">
              <iframe
                src={readerUrl}
                title={`${title} ebook reader`}
                loading="lazy"
                allowFullScreen
              />
            </div>
            <div className="reader-modal-floating-controls">
              <button
                type="button"
                aria-label="Close reader"
                onClick={() => setOpen(false)}
              >
                <X className="h-6 w-6" />
              </button>
              <button
                type="button"
                aria-label="Fullscreen reader"
                onClick={enterFullscreen}
              >
                <Maximize2 className="h-5 w-5" />
              </button>
              {downloadUrl ? (
                <a href={downloadUrl} aria-label="Download PDF">
                  <Download className="h-5 w-5" />
                </a>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
