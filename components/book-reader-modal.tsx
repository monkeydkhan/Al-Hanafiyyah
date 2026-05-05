"use client";

import { useEffect, useState } from "react";
import { BookOpenText, Download, Eye, Maximize2, X } from "lucide-react";

type BookReaderModalProps = {
  downloadUrl?: string;
  languages?: Array<{
    code: string;
    label: string;
    readerUrl?: string;
    downloadUrl?: string;
  }>;
  readerUrl: string;
  title: string;
};

export function BookReaderModal({
  downloadUrl,
  languages,
  readerUrl,
  title,
}: BookReaderModalProps) {
  const [open, setOpen] = useState(false);
  const [eyeComfort, setEyeComfort] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const availableLanguages = languages?.length
    ? languages
    : [{ code: "AR", label: "Arabic", readerUrl, downloadUrl }];
  const [activeLanguageCode, setActiveLanguageCode] = useState(
    availableLanguages[0]?.code ?? "AR",
  );
  const activeLanguage =
    availableLanguages.find((language) => language.code === activeLanguageCode) ??
    availableLanguages[0];
  const activeReaderUrl = activeLanguage?.readerUrl ?? readerUrl;
  const activeDownloadUrl = activeLanguage?.downloadUrl ?? downloadUrl;

  const closeReader = () => {
    setOpen(false);
    setLanguageMenuOpen(false);
  };

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
        closeReader();
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
        <div
          className="reader-modal-root"
          role="dialog"
          aria-modal="true"
          aria-label={title}
          data-eye-comfort={eyeComfort ? "on" : "off"}
        >
          <button
            type="button"
            className="reader-modal-backdrop"
            aria-label="Close reader"
            onClick={closeReader}
          />
          <div className="reader-modal-panel">
            <div className="reader-modal-frame">
              <iframe
                key={activeLanguageCode}
                src={activeReaderUrl}
                title={`${title} ebook reader`}
                loading="lazy"
                allowFullScreen
              />
            </div>
            <div className="reader-modal-floating-controls">
              <button
                type="button"
                aria-label="Close reader"
                onClick={closeReader}
              >
                <X className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label="Fullscreen reader"
                onClick={enterFullscreen}
              >
                <Maximize2 className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label={
                  eyeComfort
                    ? "Disable reader eye comfort"
                    : "Enable reader eye comfort"
                }
                aria-pressed={eyeComfort}
                className={eyeComfort ? "is-active" : ""}
                title={eyeComfort ? "Eye comfort on" : "Eye comfort off"}
                onClick={() => setEyeComfort((value) => !value)}
              >
                <Eye className="h-5 w-5" />
              </button>
              <div
                className={`reader-language-switcher ${
                  languageMenuOpen ? "is-open" : ""
                }`}
                aria-label="Reader language"
              >
                <button
                  type="button"
                  className="is-active"
                  aria-expanded={languageMenuOpen}
                  aria-label={`Current reader language: ${activeLanguage?.label ?? activeLanguageCode}`}
                  onClick={() => setLanguageMenuOpen((value) => !value)}
                >
                  {activeLanguageCode}
                </button>
                {languageMenuOpen
                  ? availableLanguages
                      .filter((language) => language.code !== activeLanguageCode)
                      .map((language) => {
                        const enabled = Boolean(language.readerUrl);

                        return (
                          <button
                            key={language.code}
                            type="button"
                            disabled={!enabled}
                            title={
                              enabled
                                ? language.label
                                : `${language.label} coming soon`
                            }
                            aria-label={
                              enabled
                                ? `Switch reader to ${language.label}`
                                : `${language.label} coming soon`
                            }
                            onClick={() => {
                              if (enabled) {
                                setActiveLanguageCode(language.code);
                                setLanguageMenuOpen(false);
                              }
                            }}
                          >
                            {language.code}
                          </button>
                        );
                      })
                  : null}
              </div>
              {activeDownloadUrl ? (
                <a href={activeDownloadUrl} aria-label="Download PDF">
                  <Download className="h-5 w-5" />
                </a>
              ) : null}
            </div>
            <div className="reader-modal-eye-comfort" aria-hidden="true" />
          </div>
        </div>
      ) : null}
    </>
  );
}
