import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  narrow?: boolean;
  className?: string;
};

export default function Container({
  children,
  narrow = false,
  className = "",
}: ContainerProps) {
  const widthClass = narrow ? "max-w-4xl" : "max-w-[90rem]";

  return (
    <div
      className={`mx-auto w-full px-5 sm:px-10 lg:px-14 ${widthClass} ${className}`}
    >
      {children}
    </div>
  );
}
