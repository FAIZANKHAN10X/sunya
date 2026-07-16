import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-soft border border-border bg-surface p-6 sm:p-8 ${className}`}
    >
      {children}
    </div>
  );
}
