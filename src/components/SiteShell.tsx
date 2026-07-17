"use client";

import type { ReactNode } from "react";
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
    <div className="relative min-h-svh overflow-hidden bg-background">
      {/* Global header — fixed coordinates, never slides with the page */}
      <Header />

      {/* Homepage surface — slides left on the master timeline */}
      <div
        ref={pageRef}
        className="relative z-10 min-h-svh overflow-hidden bg-background"
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

      {/* Menu surface — enters from the right, flush against the page */}
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
