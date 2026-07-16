"use client";

import { useEffect, useId, useRef, useState } from "react";
import { menuItems } from "@/data/menu";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  function toggleMenu() {
    setIsOpen((open) => !open);
  }

  function closeMenu() {
    setIsOpen(false);
    toggleRef.current?.focus();
  }

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      {isOpen ? (
        <button
          type="button"
          className="morph-menu__backdrop"
          aria-label="Close menu"
          onClick={closeMenu}
        />
      ) : null}

      <div ref={rootRef} className="relative z-50 h-10 w-[5.25rem]">
        <div
          className="morph-menu"
          data-open={isOpen}
          id={menuId}
        >
          <div className="morph-menu__chrome">
            <button
              ref={toggleRef}
              type="button"
              className="morph-menu__toggle"
              onClick={toggleMenu}
              aria-expanded={isOpen}
              aria-controls={`${menuId}-panel`}
              aria-haspopup="true"
            >
              {isOpen ? "Close" : "Menu"}
            </button>
          </div>

          <nav
            id={`${menuId}-panel`}
            className="morph-menu__panel"
            aria-label="Main menu"
            aria-hidden={!isOpen}
          >
            <p className="mb-3 text-[0.65rem] font-medium tracking-[0.22em] text-muted uppercase">
              Navigate
            </p>
            <ul className="flex flex-col">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    disabled
                    tabIndex={isOpen ? 0 : -1}
                    className="morph-menu__item cursor-default disabled:opacity-100"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
