"use client";

import { useEffect, useState } from "react";
import { setLenisScrollLocked } from "@/components/lenisBridge";

const MIN_LOAD_MS = 900;
const EXIT_DURATION_MS = 700;
const SAFETY_TIMEOUT_MS = 4000;

type LoadState = "loading" | "exiting" | "done";

/**
 * Fullscreen load gate. Sits above header (z-[100]), waits for fonts + min time,
 * then fades out and unmounts. Always exits within SAFETY_TIMEOUT_MS.
 * Stops Lenis while visible so the page cannot be scrolled under the overlay.
 */
export default function LoadingScreen() {
  const [state, setState] = useState<LoadState>("loading");

  useEffect(() => {
    let cancelled = false;
    let finished = false;

    const finish = () => {
      if (cancelled || finished) return;
      finished = true;
      setState("exiting");
    };

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    setLenisScrollLocked(true);

    // Lenis may mount after this effect — re-assert lock briefly.
    const relock = window.setInterval(() => {
      if (!cancelled && !finished) setLenisScrollLocked(true);
    }, 100);

    const minElapsed = new Promise<void>((resolve) => {
      window.setTimeout(resolve, MIN_LOAD_MS);
    });

    const fontsReady = document.fonts?.ready ?? Promise.resolve();

    const pageReady =
      document.readyState === "complete"
        ? Promise.resolve()
        : new Promise<void>((resolve) => {
            window.addEventListener("load", () => resolve(), { once: true });
          });

    Promise.all([minElapsed, fontsReady, pageReady]).then(finish);

    const safetyTimer = window.setTimeout(finish, SAFETY_TIMEOUT_MS);

    return () => {
      cancelled = true;
      clearTimeout(safetyTimer);
      clearInterval(relock);
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      setLenisScrollLocked(false);
    };
  }, []);

  useEffect(() => {
    if (state !== "exiting") return;

    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
    setLenisScrollLocked(false);

    const doneTimer = window.setTimeout(() => setState("done"), EXIT_DURATION_MS);
    return () => clearTimeout(doneTimer);
  }, [state]);

  if (state === "done") return null;

  return (
    <div
      className="loading-screen fixed inset-0 z-[100] flex items-center justify-center bg-background"
      data-state={state}
      role="status"
      aria-live="polite"
      aria-label="Loading"
      aria-hidden={state === "exiting"}
    >
      <div className="flex flex-col items-center px-6">
        <p className="loading-screen__mark text-sm font-medium tracking-[0.38em] text-foreground uppercase">
          Sunya
        </p>
        <div className="loading-screen__track mt-10 h-px w-16 bg-border sm:w-20">
          <div className="loading-screen__line h-px w-full bg-foreground" />
        </div>
        <p className="loading-screen__caption mt-6 text-xs tracking-[0.28em] text-muted uppercase">
          Loading
        </p>
      </div>
    </div>
  );
}
