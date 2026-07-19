import type Lenis from "lenis";

/**
 * Module bridge for the single root Lenis instance.
 * Avoids a second React context; Navigation / HashScroll / LoadingScreen share this.
 */

let lenis: Lenis | null = null;

export function setLenisInstance(instance: Lenis | null) {
  lenis = instance;
}

export function getLenisInstance() {
  return lenis;
}

export function getScrollHeaderOffset(): number {
  if (typeof window === "undefined") return 72;

  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue("--header-offset")
    .trim();

  if (raw.endsWith("rem")) {
    const rem = parseFloat(raw);
    const root = parseFloat(
      getComputedStyle(document.documentElement).fontSize || "16",
    );
    return rem * root;
  }

  if (raw.endsWith("px")) return parseFloat(raw);
  return 72;
}

/** Smooth-scroll to a section id via Lenis when available, else native. */
export function smoothScrollToId(sectionId: string, immediate = false) {
  const el = document.getElementById(sectionId);
  if (!el) return;

  const offset = -getScrollHeaderOffset();
  const instance = getLenisInstance();

  if (instance) {
    instance.scrollTo(el, {
      offset,
      immediate,
      duration: immediate ? 0 : 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
  } else {
    el.scrollIntoView({
      behavior: immediate ? "auto" : "smooth",
      block: "start",
    });
  }

  if (window.history.replaceState) {
    window.history.replaceState(null, "", `#${sectionId}`);
  }
}

/** Stop/start Lenis when the menu or loader locks the page. */
export function setLenisScrollLocked(locked: boolean) {
  const instance = getLenisInstance();
  if (!instance) return;
  if (locked) instance.stop();
  else instance.start();
}
