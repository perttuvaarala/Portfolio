"use client";

import { useEffect, useLayoutEffect } from "react";

const STORAGE_KEY = "theme";
const DARK_QUERY = "(prefers-color-scheme: dark)";

type Theme = "light" | "dark";

// localStorage throws in some private browsing and locked-down setups. The
// toggle should still work there, the choice just won't be remembered.
function getSavedTheme(): Theme | null {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === "light" || saved === "dark" ? saved : null;
  } catch {
    return null;
  }
}

function saveTheme(theme: Theme) {
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {}
}

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
}

function getOsTheme(): Theme {
  return window.matchMedia(DARK_QUERY).matches ? "dark" : "light";
}

export default function ThemeToggle() {
  // The script in layout.tsx sets the theme on page load. In development, React
  // Strict Mode clears that attribute when it remounts, so set it again here.
  useLayoutEffect(() => {
    applyTheme(getSavedTheme() ?? getOsTheme());
  }, []);

  // Keep following the OS setting until the visitor makes their own choice.
  useEffect(() => {
    const media = window.matchMedia(DARK_QUERY);
    const handleChange = () => {
      if (!getSavedTheme()) applyTheme(getOsTheme());
    };
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme");
    const next: Theme = current === "dark" ? "light" : "dark";
    applyTheme(next);
    saveTheme(next);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Switch between dark and light mode"
      className="inline-flex cursor-pointer rounded-md p-2 text-foreground/70 transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
    >
      {/* Both icons are rendered and CSS shows the right one. The server doesn't
          know the theme, so choosing in React would cause a hydration mismatch. */}
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-6 w-6 dark:hidden"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
      </svg>
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="hidden h-6 w-6 dark:block"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
    </button>
  );
}
