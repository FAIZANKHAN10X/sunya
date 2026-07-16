"use client";

import type { ReactNode } from "react";
import Header from "@/components/Header";
import NavigationPanel from "@/components/NavigationPanel";
import NavigationProvider, {
  useNavigation,
} from "@/components/NavigationContext";

type SiteShellProps = {
  children: ReactNode;
};

function SiteShellInner({ children }: SiteShellProps) {
  const { isOpen, close, pageRef } = useNavigation();

  return (
    <div className="relative min-h-svh overflow-hidden bg-background">
      {/* Global header — fixed coordinates, never slides with the page */}
      <Header />

      {/* Homepage surface — slides left on the master timeline */}
      <div
        ref={pageRef}
        className="relative z-10 min-h-svh overflow-hidden bg-background will-change-transform"
      >
        {/* Top padding so content clears the fixed header */}
        <div className="h-16 sm:h-20" aria-hidden="true" />

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
