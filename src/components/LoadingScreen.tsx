"use client";

import { useEffect, useState } from "react";

const MIN_LOAD_MS = 400;
const EXIT_DURATION_MS = 700;
const SAFETY_TIMEOUT_MS = 3000;

type LoadState = "loading" | "exiting" | "done";

export default function LoadingScreen() {
  const [state, setState] = useState<LoadState>("loading");

  useEffect(() => {
    let cancelled = false;

    const onReady = () => {
      if (!cancelled) setState("exiting");
    };

    const minTimer = setTimeout(() => {
      document.fonts.ready.then(onReady);
    }, MIN_LOAD_MS);

    const safetyTimer = setTimeout(() => {
      if (!cancelled) onReady();
    }, SAFETY_TIMEOUT_MS);

    return () => {
      cancelled = true;
      clearTimeout(minTimer);
      clearTimeout(safetyTimer);
    };
  }, []);

  useEffect(() => {
    if (state !== "exiting") return;
    const doneTimer = setTimeout(() => setState("done"), EXIT_DURATION_MS);
    return () => clearTimeout(doneTimer);
  }, [state]);

  if (state === "done") return null;

  return (
    <div
      className="loading-screen fixed inset-0 z-50 flex items-center justify-center bg-background"
      data-state={state}
      role="status"
      aria-live="polite"
      aria-label="Loading"
      aria-hidden={state === "exiting"}
    >
      <div className="flex flex-col items-center px-6">
        <p className="loading-screen__mark text-sm font-medium uppercase text-foreground">
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
