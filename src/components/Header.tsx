"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import MenuButton from "@/components/MenuButton";
import { useNavigation } from "@/components/NavigationContext";

/**
 * Global header — fixed to the viewport.
 * Brand returns home; menu control stays in the same top-right coordinates.
 */
export default function Header() {
  const pathname = usePathname();
  const { scrollToSection, close, isOpen } = useNavigation();

  const handleBrandClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      event.preventDefault();
      if (isOpen) close();
      scrollToSection("hero");
    }
  };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div className="flex items-center justify-between px-5 pt-4 sm:px-10 sm:pt-7 lg:px-14">
        <Link
          href="/"
          onClick={handleBrandClick}
          className="pointer-events-auto text-sm font-medium tracking-[0.28em] text-foreground uppercase transition-opacity duration-300 hover:opacity-70 motion-reduce:transition-none sm:text-base sm:tracking-[0.32em]"
        >
          Sunya
        </Link>
        <div className="pointer-events-auto">
          <MenuButton />
        </div>
      </div>
    </header>
  );
}
