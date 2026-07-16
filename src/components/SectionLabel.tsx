type SectionLabelProps = {
  children: string;
  className?: string;
};

export default function SectionLabel({
  children,
  className = "",
}: SectionLabelProps) {
  return (
    <p
      className={`text-xs font-medium uppercase tracking-[0.22em] text-muted ${className}`}
    >
      {children}
    </p>
  );
}
