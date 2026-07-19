"use client";

import { useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useNavigation } from "@/components/NavigationContext";
import { menuItems, quickLinks, socialLinks } from "@/data/menu";
import type { MenuItem } from "@/types";

const NAV_DURATION = 1000;
const NAV_EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

/**
 * Right navigation surface — brand theater, not a utility drawer.
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
      className="fixed top-0 right-0 z-30 flex h-svh w-[min(92vw,24rem)] flex-col border-l border-border/80 bg-background sm:w-[min(88vw,30rem)] md:w-[min(42vw,32rem)]"
      style={panelStyle}
      aria-hidden={!isOpen}
      aria-label="Site navigation"
    >
      <div className="h-16 shrink-0 sm:h-20" aria-hidden="true" />

      <div className="flex min-h-0 flex-1 flex-col justify-between overflow-y-auto overscroll-contain px-6 pb-8 sm:px-10 sm:pb-10 lg:px-12">
        <div>
          <p
            className={`text-[0.65rem] font-medium tracking-[0.22em] text-muted uppercase transition-opacity duration-500 ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            Index
          </p>

          <nav aria-label="Primary" className="mt-6 sm:mt-8">
            <ul className="flex flex-col">
              {menuItems.map((item, index) => (
                <li
                  key={item.id}
                  className="nav-panel-item border-t border-border/80 last:border-b"
                  style={
                    isOpen
                      ? {
                          transitionDelay: `${80 + index * 45}ms`,
                        }
                      : undefined
                  }
                  data-open={isOpen ? "true" : "false"}
                >
                  <button
                    type="button"
                    tabIndex={isOpen ? 0 : -1}
                    onClick={() => handleItem(item)}
                    className="group flex w-full cursor-pointer items-baseline justify-between gap-4 py-4 text-left sm:py-5"
                  >
                    <span className="text-2xl font-medium tracking-tight text-foreground transition-opacity duration-300 group-hover:opacity-60 motion-reduce:transition-none sm:text-3xl lg:text-[2.35rem]">
                      {item.label}
                    </span>
                    <span
                      className="text-[0.65rem] font-medium tracking-[0.16em] text-muted tabular-nums"
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="grid grid-cols-2 gap-8 border-t border-border/80 pt-8">
          <div>
            <p className="text-[0.65rem] font-medium tracking-[0.22em] text-muted uppercase">
              Socials
            </p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {socialLinks.map((item) => (
                <li key={item.id}>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      tabIndex={isOpen ? 0 : -1}
                      className="text-sm text-foreground/90 transition-opacity duration-300 hover:opacity-60 motion-reduce:transition-none"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <button
                      type="button"
                      disabled
                      tabIndex={isOpen ? 0 : -1}
                      className="cursor-default text-sm text-foreground/90 disabled:opacity-100"
                    >
                      {item.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[0.65rem] font-medium tracking-[0.22em] text-muted uppercase">
              More
            </p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {quickLinks.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    tabIndex={isOpen ? 0 : -1}
                    onClick={() => handleItem(item)}
                    className="cursor-pointer text-sm text-foreground/90 transition-opacity duration-300 hover:opacity-60 motion-reduce:transition-none"
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
