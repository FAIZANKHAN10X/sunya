import type { ReactNode } from "react";
import Container from "@/components/Container";

type SectionShellProps = {
  id: string;
  labelledBy: string;
  children: ReactNode;
  className?: string;
};

/**
 * Shared full-viewport panel shell used by every homepage section.
 * Separation comes from spacing and composition—not borders.
 */
export default function SectionShell({
  id,
  labelledBy,
  children,
  className = "",
}: SectionShellProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`flex min-h-svh items-center py-24 sm:py-28 ${className}`}
    >
      <Container className="w-full">{children}</Container>
    </section>
  );
}
