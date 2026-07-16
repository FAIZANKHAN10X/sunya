"use client";

import { useNavigation } from "@/components/NavigationContext";

/**
 * Single global navigation control.
 * Closed: Menu ≡  |  Open: Close ×
 * Same position always — GSAP crossfades label + icon on the master timeline.
 */
export default function MenuButton() {
  const {
    isOpen,
    toggle,
    menuLabelRef,
    closeLabelRef,
    hamburgerRef,
    closeIconRef,
  } = useNavigation();

  return (
    <button
      type="button"
      onClick={toggle}
      className="inline-flex min-h-11 cursor-pointer items-center gap-3 bg-transparent p-0 text-sm font-medium tracking-wide text-foreground"
      aria-expanded={isOpen}
      aria-controls="navigation-panel"
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      {/* Labels stacked & right-aligned so the control’s right edge never shifts */}
      <span className="relative inline-block h-[1.25em] w-[3.5rem]">
        <span
          ref={menuLabelRef}
          className="absolute inset-0 flex items-center justify-end"
        >
          Menu
        </span>
        <span
          ref={closeLabelRef}
          className="absolute inset-0 flex items-center justify-end"
          aria-hidden="true"
        >
          Close
        </span>
      </span>

      {/* Icons stacked in a fixed slot */}
      <span className="relative inline-block h-4 w-4 shrink-0" aria-hidden="true">
        <span
          ref={hamburgerRef}
          className="absolute inset-0 flex flex-col items-center justify-center gap-[5px]"
        >
          <span className="block h-px w-4 bg-current" />
          <span className="block h-px w-4 bg-current" />
          <span className="block h-px w-4 bg-current" />
        </span>
        <span
          ref={closeIconRef}
          className="absolute inset-0 flex items-center justify-center text-base leading-none"
        >
          ×
        </span>
      </span>
    </button>
  );
}
