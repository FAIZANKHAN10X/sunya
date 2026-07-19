type ButtonProps = {
  children: string;
  variant?: "primary" | "secondary";
  type?: "button" | "submit";
  className?: string;
};

export default function Button({
  children,
  variant = "primary",
  type = "button",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-soft px-7 py-3.5 text-sm font-medium tracking-[0.04em] transition-[transform,opacity,background-color,border-color,color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none active:scale-[0.98]";

  const styles =
    variant === "primary"
      ? "bg-foreground text-background hover:opacity-90"
      : "border border-border bg-transparent text-foreground hover:border-foreground/40 hover:bg-surface";

  return (
    <button type={type} className={`${base} ${styles} ${className}`}>
      {children}
    </button>
  );
}
