"use client";

import { useEffect, useState, type ReactNode } from "react";

const LOAD_DURATION_MS = 1600;
const EXIT_DURATION_MS = 700;

type LoadingScreenProps = {
  children: ReactNode;
};

type LoadState = "loading" | "exiting" | "done";

export default function LoadingScreen({ children }: LoadingScreenProps) {
  const [state, setState] = useState<LoadState>("loading");

  useEffect(() => {
    const exitTimer = window.setTimeout(() => {
      setState("exiting");
    }, LOAD_DURATION_MS);

    return () => {
      window.clearTimeout(exitTimer);
    };
  }, []);

  useEffect(() => {
    if (state !== "exiting") {
      return;
    }

    const doneTimer = window.setTimeout(() => {
      setState("done");
    }, EXIT_DURATION_MS);

    return () => {
      window.clearTimeout(doneTimer);
    };
  }, [state]);

  return (
    <>
      {state !== "done" ? (
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
      ) : null}
      {children}
    </>
  );
}
