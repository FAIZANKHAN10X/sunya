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

type NavigationContextValue = {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
  pageRef: RefObject<HTMLDivElement | null>;
  panelRef: RefObject<HTMLElement | null>;
  panelWidth: number;
};

const NavigationContext = createContext<NavigationContextValue | null>(null);

const DURATION = 1;

type NavigationProviderProps = {
  children: ReactNode;
};

export default function NavigationProvider({
  children,
}: NavigationProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [panelWidth, setPanelWidth] = useState(0);
  const isOpenRef = useRef(false);

  const pageRef = useRef<HTMLDivElement | null>(null);
  const panelRef = useRef<HTMLElement | null>(null);

  const lockScroll = useCallback((locked: boolean) => {
    document.documentElement.style.overflow = locked ? "hidden" : "";
    document.body.style.overflow = locked ? "hidden" : "";
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
    const ms = DURATION * 1000;
    window.setTimeout(() => {
      if (!isOpenRef.current) lockScroll(false);
    }, ms);
  }, [lockScroll]);

  const toggle = useCallback(() => {
    if (isOpenRef.current) close();
    else open();
  }, [close, open]);

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

  const value = useMemo(
    () => ({ isOpen, toggle, close, pageRef, panelRef, panelWidth }),
    [isOpen, toggle, close, panelWidth],
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
