"use client";

import { useNavigation } from "@/components/NavigationContext";

/**
 * Single global navigation control.
 * Closed: Menu + hamburger  |  Open: Close + morph to ×
 * Same position always — icon lines morph; labels swap with a short rise.
 */
export default function MenuButton() {
  const { isOpen, toggle } = useNavigation();

  return (
    <button
      type="button"
      onClick={toggle}
      data-open={isOpen ? "true" : "false"}
      className="menu-toggle inline-flex min-h-11 cursor-pointer items-center gap-3 bg-transparent p-0 text-sm font-medium tracking-wide text-foreground"
      aria-expanded={isOpen}
      aria-controls="navigation-panel"
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      {/* Labels — fixed width, right-aligned so the control edge never shifts */}
      <span className="menu-toggle__labels relative inline-block h-[1.25em] w-[3.5rem] overflow-hidden">
        <span className="menu-toggle__label menu-toggle__label--menu absolute inset-0 flex items-center justify-end">
          Menu
        </span>
        <span
          className="menu-toggle__label menu-toggle__label--close absolute inset-0 flex items-center justify-end"
          aria-hidden="true"
        >
          Close
        </span>
      </span>

      {/* Three lines → × */}
      <span className="menu-toggle__icon relative inline-block h-3.5 w-4 shrink-0" aria-hidden="true">
        <span className="menu-toggle__line menu-toggle__line--top" />
        <span className="menu-toggle__line menu-toggle__line--mid" />
        <span className="menu-toggle__line menu-toggle__line--bot" />
      </span>
    </button>
  );
}
