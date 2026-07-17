"use client";

import { useNavigation } from "@/components/NavigationContext";
import { menuItems, quickLinks, socialLinks } from "@/data/menu";

const NAV_DURATION = 1000;
const NAV_EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

/**
 * Right navigation surface.
 * No Close control here; that lives only in the global header.
 */
export default function NavigationPanel() {
  const { isOpen, panelRef } = useNavigation();

  const panelStyle: React.CSSProperties = {
    transform: isOpen ? "translateX(0px)" : "translateX(100%)",
    transition: `transform ${NAV_DURATION}ms ${NAV_EASE}`,
  };

  return (
    <aside
      ref={panelRef}
      id="navigation-panel"
      className="fixed top-0 right-0 z-30 flex h-svh w-[min(88vw,28rem)] flex-col bg-background md:w-[min(38vw,28rem)]"
      style={panelStyle}
      aria-hidden={!isOpen}
      aria-label="Site navigation"
    >
      {/* Top spacer matches header height so links clear the fixed control */}
      <div className="h-16 shrink-0 sm:h-20" aria-hidden="true" />

      <div className="flex flex-1 flex-col justify-between px-6 pb-8 sm:px-10 sm:pb-10 lg:px-12">
        <nav aria-label="Primary" className="pt-6 sm:pt-10">
          <ul className="flex flex-col gap-1 sm:gap-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  disabled
                  tabIndex={isOpen ? 0 : -1}
                  className="w-full cursor-default py-2 text-left text-3xl font-medium tracking-tight text-foreground disabled:opacity-100 sm:text-4xl lg:text-[2.75rem]"
                >
                  {item.label}
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
              Quick Links
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              {quickLinks.map((item) => (
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
        </div>
      </div>
    </aside>
  );
}
