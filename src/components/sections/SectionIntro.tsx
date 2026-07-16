import SectionLabel from "@/components/SectionLabel";

type SectionIntroProps = {
  id: string;
  label: string;
  heading: string;
  description: string;
  className?: string;
  headingClassName?: string;
  descriptionClassName?: string;
};

export default function SectionIntro({
  id,
  label,
  heading,
  description,
  className = "",
  headingClassName = "",
  descriptionClassName = "",
}: SectionIntroProps) {
  return (
    <div className={className}>
      <SectionLabel>{label}</SectionLabel>
      <h2
        id={id}
        className={`mt-5 text-3xl font-medium tracking-tight text-foreground sm:text-4xl lg:text-5xl lg:leading-[1.1] ${headingClassName}`}
      >
        {heading}
      </h2>
      <p
        className={`mt-6 text-base leading-relaxed text-muted sm:text-lg ${descriptionClassName}`}
      >
        {description}
      </p>
    </div>
  );
}
