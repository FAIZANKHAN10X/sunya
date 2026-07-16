"use client";

import type { ChangeEvent } from "react";
import { useTheme } from "@/components/ThemeProvider";
import { THEME_LABELS, THEMES } from "@/lib/theme";
import type { Theme } from "@/types";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  function handleChange(event: ChangeEvent<HTMLSelectElement>) {
    setTheme(event.target.value as Theme);
  }

  return (
    <label className="flex items-center text-sm text-foreground">
      <span className="sr-only">Theme</span>
      <select
        value={theme}
        onChange={handleChange}
        className="cursor-pointer appearance-none rounded-soft border border-border bg-background px-3 py-1.5 text-xs tracking-wide text-foreground sm:text-sm"
        aria-label="Color theme"
      >
        {THEMES.map((value) => (
          <option key={value} value={value}>
            {THEME_LABELS[value]}
          </option>
        ))}
      </select>
    </label>
  );
}
