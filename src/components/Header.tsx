"use client";

import MenuButton from "@/components/MenuButton";

/**
 * Global header — fixed to the viewport.
 * Navigation control stays in the same top-right coordinates at all times.
 */
export default function Header() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div className="flex items-center justify-between px-6 pt-5 sm:px-10 sm:pt-7 lg:px-14">
        <p className="pointer-events-auto text-sm font-medium uppercase tracking-[0.28em] text-foreground sm:text-base sm:tracking-[0.32em]">
          Sunya
        </p>
        <div className="pointer-events-auto">
          <MenuButton />
        </div>
      </div>
    </header>
  );
}
