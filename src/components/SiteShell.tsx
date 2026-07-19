"use client";

import type { ReactNode } from "react";
import HashScroll from "@/components/HashScroll";
import Header from "@/components/Header";
import NavigationPanel from "@/components/NavigationPanel";
import NavigationProvider, {
  useNavigation,
} from "@/components/NavigationContext";

const NAV_DURATION = 1000;
const NAV_EASE = "cubic-bezier(0.22, 1, 0.36, 1)";
const NAV_BORDER_RADIUS = 24;

type SiteShellProps = {
  children: ReactNode;
};

function SiteShellInner({ children }: SiteShellProps) {
  const { isOpen, close, pageRef, panelWidth } = useNavigation();

  // transform/will-change only while open — otherwise they create a containing
  // block that traps position:fixed descendants (e.g. Hero video background).
  const pageStyle: React.CSSProperties = {
    transform: isOpen ? `translateX(-${panelWidth}px)` : "none",
    borderRadius: isOpen ? `${NAV_BORDER_RADIUS}px` : "0px",
    transition: `transform ${NAV_DURATION}ms ${NAV_EASE}, border-radius ${NAV_DURATION}ms ${NAV_EASE}`,
    willChange: isOpen ? "transform" : "auto",
  };

  return (
    <div className="relative min-h-svh overflow-x-hidden bg-background">
      <HashScroll />
      <Header />

      <div
        ref={pageRef}
        className="relative z-10 min-h-svh overflow-x-hidden bg-background"
        style={pageStyle}
      >
        {isOpen ? (
          <button
            type="button"
            className="absolute inset-0 z-20 cursor-pointer bg-transparent"
            aria-label="Close menu"
            onClick={close}
          />
        ) : null}

        {children}
      </div>

      <NavigationPanel />
    </div>
  );
}

export default function SiteShell({ children }: SiteShellProps) {
  return (
    <NavigationProvider>
      <SiteShellInner>{children}</SiteShellInner>
    </NavigationProvider>
  );
}
