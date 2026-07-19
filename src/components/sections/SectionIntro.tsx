type SectionIntroProps = {
  id: string;
  heading: string;
  description: string;
  className?: string;
  headingClassName?: string;
  descriptionClassName?: string;
};

/** Section heading + description only — no kicker labels. */
export default function SectionIntro({
  id,
  heading,
  description,
  className = "",
  headingClassName = "",
  descriptionClassName = "",
}: SectionIntroProps) {
  return (
    <div className={className}>
      <h2
        id={id}
        className={`text-[1.75rem] font-medium leading-[1.15] tracking-tight text-foreground sm:text-4xl sm:leading-[1.12] lg:text-[2.75rem] xl:text-5xl ${headingClassName}`}
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
