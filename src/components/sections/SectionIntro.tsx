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
      <div className="flex items-center gap-4">
        <SectionLabel>{label}</SectionLabel>
        <span
          className="h-px w-8 bg-border sm:w-10"
          aria-hidden="true"
        />
      </div>
      <h2
        id={id}
        className={`mt-4 text-[1.75rem] font-medium leading-[1.15] tracking-tight text-foreground sm:mt-5 sm:text-4xl sm:leading-[1.12] lg:text-[2.75rem] xl:text-5xl ${headingClassName}`}
      >
        {heading}
      </h2>
      <p
        className={`mt-4 text-sm leading-relaxed text-muted sm:mt-6 sm:text-lg ${descriptionClassName}`}
      >
        {description}
      </p>
    </div>
  );
}
