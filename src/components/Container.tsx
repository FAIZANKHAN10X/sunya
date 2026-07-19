import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  narrow?: boolean;
  className?: string;
};

/**
 * Full-bleed friendly container: near-full desktop width, mobile gutters.
 */
export default function Container({
  children,
  narrow = false,
  className = "",
}: ContainerProps) {
  const widthClass = narrow ? "max-w-4xl" : "max-w-[100rem]";

  return (
    <div
      className={`mx-auto w-full px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16 ${widthClass} ${className}`}
    >
      {children}
    </div>
  );
}
