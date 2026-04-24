"use client";

import { MoonStar, SunMedium } from "lucide-react";

type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  window.localStorage.setItem("theme", theme);
}

export function ThemeToggle() {
  const toggleTheme = () => {
    const theme: Theme =
      document.documentElement.dataset.theme === "dark" ? "dark" : "light";
    const nextTheme = theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-switch"
      aria-label="Toggle theme"
    >
      <span className="theme-switch-thumb" />
      <span className="theme-switch-icon">
        <SunMedium className="h-4 w-4" />
      </span>
      <span className="theme-switch-icon">
        <MoonStar className="h-4 w-4" />
      </span>
    </button>
  );
}
