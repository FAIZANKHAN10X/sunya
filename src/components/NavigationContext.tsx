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
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

type NavigationContextValue = {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
  pageRef: RefObject<HTMLDivElement | null>;
  panelRef: RefObject<HTMLElement | null>;
  menuLabelRef: RefObject<HTMLSpanElement | null>;
  closeLabelRef: RefObject<HTMLSpanElement | null>;
  hamburgerRef: RefObject<HTMLSpanElement | null>;
  closeIconRef: RefObject<HTMLSpanElement | null>;
};

const NavigationContext = createContext<NavigationContextValue | null>(null);

const BORDER_RADIUS = 24;
const DURATION = 1;
const EASE = "power3.inOut";

type NavigationProviderProps = {
  children: ReactNode;
};

export default function NavigationProvider({
  children,
}: NavigationProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isOpenRef = useRef(false);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  const pageRef = useRef<HTMLDivElement | null>(null);
  const panelRef = useRef<HTMLElement | null>(null);
  const menuLabelRef = useRef<HTMLSpanElement | null>(null);
  const closeLabelRef = useRef<HTMLSpanElement | null>(null);
  const hamburgerRef = useRef<HTMLSpanElement | null>(null);
  const closeIconRef = useRef<HTMLSpanElement | null>(null);

  useGSAP(() => {
    const page = pageRef.current;
    const panel = panelRef.current;
    const menuLabel = menuLabelRef.current;
    const closeLabel = closeLabelRef.current;
    const hamburger = hamburgerRef.current;
    const closeIcon = closeIconRef.current;

    if (
      !page ||
      !panel ||
      !menuLabel ||
      !closeLabel ||
      !hamburger ||
      !closeIcon
    ) {
      return;
    }

    gsap.set(page, {
      x: 0,
      borderRadius: 0,
      force3D: true,
    });

    gsap.set(panel, {
      xPercent: 100,
      opacity: 1,
      force3D: true,
    });

    gsap.set([menuLabel, hamburger], { opacity: 1 });
    gsap.set([closeLabel, closeIcon], { opacity: 0 });

    const timeline = gsap.timeline({
      paused: true,
      defaults: {
        duration: DURATION,
        ease: EASE,
      },
    });

    // Master timeline — all motions share the same clock
    timeline
      .to(
        page,
        {
          x: () => -panel.offsetWidth,
          borderRadius: BORDER_RADIUS,
        },
        0,
      )
      .to(
        panel,
        {
          xPercent: 0,
        },
        0,
      )
      .to(menuLabel, { opacity: 0 }, 0)
      .to(hamburger, { opacity: 0 }, 0)
      .to(closeLabel, { opacity: 1 }, 0)
      .to(closeIcon, { opacity: 1 }, 0);

    timelineRef.current = timeline;

    // Keep page/panel edge flush if the viewport resizes while open
    const handleResize = () => {
      if (!timelineRef.current || timelineRef.current.progress() === 0) {
        return;
      }

      const progress = timelineRef.current.progress();
      gsap.set(page, { x: -panel.offsetWidth * progress });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      timeline.kill();
      timelineRef.current = null;
    };
  }, []);

  const lockScroll = useCallback((locked: boolean) => {
    document.documentElement.style.overflow = locked ? "hidden" : "";
    document.body.style.overflow = locked ? "hidden" : "";
  }, []);

  const open = useCallback(() => {
    if (isOpenRef.current) {
      return;
    }

    isOpenRef.current = true;
    setIsOpen(true);
    lockScroll(true);
    timelineRef.current?.play();
  }, [lockScroll]);

  const close = useCallback(() => {
    if (!isOpenRef.current) {
      return;
    }

    isOpenRef.current = false;
    setIsOpen(false);
    timelineRef.current?.reverse();

    const ms = (timelineRef.current?.duration() ?? DURATION) * 1000;
    window.setTimeout(() => {
      if (!isOpenRef.current) {
        lockScroll(false);
      }
    }, ms);
  }, [lockScroll]);

  const toggle = useCallback(() => {
    if (isOpenRef.current) {
      close();
    } else {
      open();
    }
  }, [close, open]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && isOpenRef.current) {
        close();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [close]);

  const value = useMemo(
    () => ({
      isOpen,
      toggle,
      close,
      pageRef,
      panelRef,
      menuLabelRef,
      closeLabelRef,
      hamburgerRef,
      closeIconRef,
    }),
    [isOpen, toggle, close],
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
