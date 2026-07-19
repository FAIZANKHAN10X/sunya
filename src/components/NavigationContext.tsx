"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from "react";
import {
  setLenisScrollLocked,
  smoothScrollToId,
} from "@/components/lenisBridge";

type NavigationContextValue = {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
  /** Close the menu (if open), then smoothly scroll to a homepage section. */
  scrollToSection: (sectionId: string) => void;
  pageRef: RefObject<HTMLDivElement | null>;
  panelRef: RefObject<HTMLElement | null>;
  panelWidth: number;
};

const NavigationContext = createContext<NavigationContextValue | null>(null);

/** Delay before scroll so the page surface can start closing without jank. */
const SCROLL_AFTER_CLOSE_MS = 280;

type NavigationProviderProps = {
  children: ReactNode;
};

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function NavigationProvider({
  children,
}: NavigationProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [panelWidth, setPanelWidth] = useState(0);
  const isOpenRef = useRef(false);
  const scrollTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const pageRef = useRef<HTMLDivElement | null>(null);
  const panelRef = useRef<HTMLElement | null>(null);

  const lockScroll = useCallback((locked: boolean) => {
    document.documentElement.style.overflow = locked ? "hidden" : "";
    document.body.style.overflow = locked ? "hidden" : "";
    setLenisScrollLocked(locked);
  }, []);

  const open = useCallback(() => {
    if (isOpenRef.current) return;
    if (panelRef.current) {
      setPanelWidth(panelRef.current.offsetWidth);
    }
    isOpenRef.current = true;
    setIsOpen(true);
    lockScroll(true);
  }, [lockScroll]);

  const close = useCallback(() => {
    if (!isOpenRef.current) return;
    isOpenRef.current = false;
    setIsOpen(false);
    // Unlock immediately so in-page scroll and interaction feel instant.
    lockScroll(false);
  }, [lockScroll]);

  const toggle = useCallback(() => {
    if (isOpenRef.current) close();
    else open();
  }, [close, open]);

  const performScroll = useCallback((sectionId: string) => {
    smoothScrollToId(sectionId, prefersReducedMotion());
  }, []);

  const scrollToSection = useCallback(
    (sectionId: string) => {
      if (scrollTimerRef.current !== null) {
        clearTimeout(scrollTimerRef.current);
        scrollTimerRef.current = null;
      }

      const wasOpen = isOpenRef.current;
      if (wasOpen) close();

      // Wait a beat if the menu was open so the transform does not fight scroll.
      const delay =
        wasOpen && !prefersReducedMotion() ? SCROLL_AFTER_CLOSE_MS : 0;
      if (delay === 0) {
        performScroll(sectionId);
        return;
      }

      scrollTimerRef.current = setTimeout(() => {
        scrollTimerRef.current = null;
        performScroll(sectionId);
      }, delay);
    },
    [close, performScroll],
  );

  useEffect(() => {
    if (!isOpen) return;
    const panel = panelRef.current;
    if (!panel) return;

    let resizeTimer: ReturnType<typeof setTimeout>;

    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (isOpenRef.current && panelRef.current) {
          setPanelWidth(panelRef.current.offsetWidth);
        }
      }, 100);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, [isOpen]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && isOpenRef.current) close();
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [close]);

  useEffect(() => {
    return () => {
      if (scrollTimerRef.current !== null) clearTimeout(scrollTimerRef.current);
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      setLenisScrollLocked(false);
    };
  }, []);

  const value = useMemo(
    () => ({
      isOpen,
      toggle,
      close,
      scrollToSection,
      pageRef,
      panelRef,
      panelWidth,
    }),
    [isOpen, toggle, close, scrollToSection, panelWidth],
  );

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation(): NavigationContextValue {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within NavigationProvider");
  }
  return context;
}
