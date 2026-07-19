"use client";

import { useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useNavigation } from "@/components/NavigationContext";
import { menuItems, quickLinks, socialLinks } from "@/data/menu";
import type { MenuItem } from "@/types";

const NAV_DURATION = 1000;
const NAV_EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

/**
 * Right navigation surface.
 * Primary links scroll to homepage sections; quick links may route off-page.
 */
export default function NavigationPanel() {
  const { isOpen, close, panelRef, scrollToSection } = useNavigation();
  const pathname = usePathname();
  const router = useRouter();

  const panelStyle: React.CSSProperties = {
    transform: isOpen ? "translateX(0px)" : "translateX(100%)",
    transition: `transform ${NAV_DURATION}ms ${NAV_EASE}`,
  };

  const handleSectionNav = useCallback(
    (sectionId: string) => {
      if (pathname === "/") {
        scrollToSection(sectionId);
        return;
      }
      close();
      router.push(`/#${sectionId}`);
    },
    [pathname, scrollToSection, close, router],
  );

  const handleItem = useCallback(
    (item: MenuItem) => {
      if (item.href) {
        close();
        router.push(item.href);
        return;
      }
      if (item.sectionId) {
        handleSectionNav(item.sectionId);
      }
    },
    [close, router, handleSectionNav],
  );

  return (
    <aside
      ref={panelRef}
      id="navigation-panel"
      className="fixed top-0 right-0 z-30 flex h-svh w-[min(88vw,22rem)] flex-col bg-background sm:w-[min(88vw,28rem)] md:w-[min(38vw,28rem)]"
      style={panelStyle}
      aria-hidden={!isOpen}
      aria-label="Site navigation"
    >
      <div className="h-16 shrink-0 sm:h-20" aria-hidden="true" />

      <div className="flex min-h-0 flex-1 flex-col justify-between overflow-y-auto overscroll-contain px-6 pb-8 sm:px-10 sm:pb-10 lg:px-12">
        <nav aria-label="Primary" className="pt-4 sm:pt-8">
          <ul className="flex flex-col gap-0.5 sm:gap-1">
            {menuItems.map((item, index) => (
              <li key={item.id}>
                <button
                  type="button"
                  tabIndex={isOpen ? 0 : -1}
                  onClick={() => handleItem(item)}
                  className="group flex w-full cursor-pointer items-baseline gap-4 py-2.5 text-left transition-opacity duration-300 hover:opacity-70 motion-reduce:transition-none sm:py-3"
                >
                  <span
                    className="w-6 shrink-0 text-[0.65rem] font-medium tracking-[0.16em] text-muted tabular-nums"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl lg:text-[2.5rem]">
                    {item.label}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="grid grid-cols-2 gap-8 pt-10">
          <div>
            <p className="text-[0.65rem] font-medium tracking-[0.22em] text-muted uppercase">
              Socials
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              {socialLinks.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    disabled
                    tabIndex={isOpen ? 0 : -1}
                    className="cursor-default text-sm text-foreground disabled:opacity-100"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[0.65rem] font-medium tracking-[0.22em] text-muted uppercase">
              More
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              {quickLinks.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    tabIndex={isOpen ? 0 : -1}
                    onClick={() => handleItem(item)}
                    className="cursor-pointer text-sm text-foreground transition-opacity duration-300 hover:opacity-70 motion-reduce:transition-none"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
}
