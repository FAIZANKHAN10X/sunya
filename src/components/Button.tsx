type ButtonProps = {
  children: string;
  variant?: "primary" | "secondary";
  type?: "button" | "submit";
};

export default function Button({
  children,
  variant = "primary",
  type = "button",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-soft px-6 py-3 text-sm font-medium tracking-wide";

  const styles =
    variant === "primary"
      ? "bg-foreground text-background"
      : "border border-border bg-transparent text-foreground";

  return (
    <button type={type} className={`${base} ${styles}`}>
      {children}
    </button>
  );
}
