import type { ReactNode } from "react";
import Container from "@/components/Container";

type SectionShellProps = {
  id: string;
  labelledBy: string;
  children: ReactNode;
  className?: string;
  /** Tighter vertical rhythm (e.g. newsletter). Default is a full panel on md+. */
  density?: "default" | "compact" | "scene";
  /** Visual field — breaks monochrome stack without rebranding. */
  tone?: "default" | "surface" | "bleed";
  /** Skip outer container (full-bleed scenes manage their own gutters). */
  fullBleed?: boolean;
};

/**
 * Shared section frame used by homepage content chapters.
 * Mobile: content-led height. md+: scene-scale panels.
 */
export default function SectionShell({
  id,
  labelledBy,
  children,
  className = "",
  density = "default",
  tone = "default",
  fullBleed = false,
}: SectionShellProps) {
  const spacing =
    density === "compact"
      ? "py-16 sm:py-20 md:py-24"
      : density === "scene"
        ? "py-20 sm:py-24 md:min-h-svh md:py-28 lg:py-32"
        : "py-16 sm:py-20 md:min-h-svh md:py-24 lg:py-28 xl:py-32";

  const toneClass =
    tone === "surface"
      ? "bg-surface"
      : tone === "bleed"
        ? "bg-background"
        : "";

  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`relative flex items-center scroll-mt-20 sm:scroll-mt-24 ${spacing} ${toneClass} ${className}`}
    >
      {fullBleed ? (
        children
      ) : (
        <Container className="w-full">{children}</Container>
      )}
    </section>
  );
}
