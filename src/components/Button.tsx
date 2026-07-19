type ButtonProps = {
  children: string;
  variant?: "primary" | "secondary";
  type?: "button" | "submit";
  className?: string;
  disabled?: boolean;
};

export default function Button({
  children,
  variant = "primary",
  type = "button",
  className = "",
  disabled = false,
}: ButtonProps) {
  const base =
    "inline-flex min-h-11 items-center justify-center rounded-soft px-6 py-3 text-sm font-medium tracking-[0.04em] transition-[transform,opacity,background-color,border-color,color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] touch-manipulation motion-reduce:transition-none active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 sm:px-7 sm:py-3.5";

  const styles =
    variant === "primary"
      ? "bg-foreground text-background hover:opacity-90"
      : "border border-border bg-transparent text-foreground hover:border-foreground/40 hover:bg-surface";

  return (
    <button
      type={type}
      disabled={disabled}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </button>
  );
}
