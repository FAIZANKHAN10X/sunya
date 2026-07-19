import type { ReactNode } from "react";
import Container from "@/components/Container";

type SectionShellProps = {
  id: string;
  labelledBy: string;
  children: ReactNode;
  className?: string;
  /** Tighter vertical rhythm (e.g. newsletter). Default is a full panel on md+. */
  density?: "default" | "compact";
};

/**
 * Shared section frame used by homepage content chapters.
 * Mobile: content-led height. md+: comfortable full-viewport panels.
 */
export default function SectionShell({
  id,
  labelledBy,
  children,
  className = "",
  density = "default",
}: SectionShellProps) {
  const spacing =
    density === "compact"
      ? "py-16 sm:py-20 md:py-24"
      : "py-16 sm:py-20 md:min-h-svh md:py-24 lg:py-28 xl:py-32";

  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`relative flex items-center scroll-mt-20 sm:scroll-mt-24 ${spacing} ${className}`}
    >
      <Container className="w-full">{children}</Container>
    </section>
  );
}
