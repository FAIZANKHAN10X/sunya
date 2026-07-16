import Button from "@/components/Button";
import Card from "@/components/Card";
import SectionLabel from "@/components/SectionLabel";
import SectionShell from "@/components/SectionShell";
import type {
  CardsSectionData,
  ContactSectionData,
  FeaturesSectionData,
  HeroSectionData,
  Section as SectionType,
  SplitSectionData,
  StepsSectionData,
} from "@/types";

type SectionProps = {
  section: SectionType;
};

function SectionIntro({
  id,
  label,
  heading,
  description,
  className = "",
  headingClassName = "",
  descriptionClassName = "",
}: {
  id: string;
  label: string;
  heading: string;
  description: string;
  className?: string;
  headingClassName?: string;
  descriptionClassName?: string;
}) {
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

function HeroSection({ section }: { section: HeroSectionData }) {
  return (
    <SectionShell id={section.id} labelledBy={`${section.id}-heading`}>
      <div className="grid w-full gap-12 lg:grid-cols-12 lg:items-end lg:gap-16">
        <div className="lg:col-span-8">
          <SectionLabel>{section.label}</SectionLabel>
          <h1
            id={`${section.id}-heading`}
            className="mt-5 max-w-4xl text-4xl font-medium tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl lg:leading-[1.05]"
          >
            {section.heading}
          </h1>
        </div>
        <div className="flex flex-col gap-8 lg:col-span-4 lg:pb-2">
          <p className="max-w-md text-base leading-relaxed text-muted sm:text-lg">
            {section.description}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button variant="primary">{section.primaryCta}</Button>
            <Button variant="secondary">{section.secondaryCta}</Button>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

function FeaturesSection({ section }: { section: FeaturesSectionData }) {
  const isWideGrid = section.items.length > 3;

  if (isWideGrid) {
    return (
      <SectionShell id={section.id} labelledBy={`${section.id}-heading`}>
        <div className="grid w-full gap-14 lg:grid-cols-12 lg:gap-16">
          <SectionIntro
            id={`${section.id}-heading`}
            label={section.label}
            heading={section.heading}
            description={section.description}
            className="lg:col-span-4"
            descriptionClassName="max-w-md"
          />
          <ul className="grid gap-5 sm:grid-cols-2 lg:col-span-8">
            {section.items.map((item) => (
              <li key={item.title}>
                <article className="h-full rounded-soft border border-border p-7 sm:p-8">
                  <h3 className="text-lg font-medium tracking-tight text-foreground sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                    {item.description}
                  </p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </SectionShell>
    );
  }

  return (
    <SectionShell id={section.id} labelledBy={`${section.id}-heading`}>
      <div className="w-full">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
          <SectionIntro
            id={`${section.id}-heading`}
            label={section.label}
            heading={section.heading}
            description={section.description}
            className="lg:col-span-7"
            descriptionClassName="max-w-2xl"
          />
        </div>
        <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-8">
          {section.items.map((item) => (
            <li key={item.title}>
              <article className="h-full rounded-soft border border-border p-7 sm:p-8">
                <h3 className="text-lg font-medium tracking-tight text-foreground sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                  {item.description}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </SectionShell>
  );
}

function CardsSection({ section }: { section: CardsSectionData }) {
  return (
    <SectionShell id={section.id} labelledBy={`${section.id}-heading`}>
      <div className="grid w-full gap-14 lg:grid-cols-12 lg:gap-16 lg:items-start">
        <SectionIntro
          id={`${section.id}-heading`}
          label={section.label}
          heading={section.heading}
          description={section.description}
          className="lg:col-span-4"
          descriptionClassName="max-w-md"
        />
        <ul className="grid gap-5 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-1 xl:grid-cols-3">
          {section.items.map((item) => (
            <li key={item.title}>
              <Card className="h-full p-7 sm:p-8">
                <h3 className="text-lg font-medium tracking-tight text-foreground sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                  {item.description}
                </p>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </SectionShell>
  );
}

function StepsSection({ section }: { section: StepsSectionData }) {
  return (
    <SectionShell id={section.id} labelledBy={`${section.id}-heading`}>
      <div className="grid w-full gap-14 lg:grid-cols-12 lg:gap-20">
        <SectionIntro
          id={`${section.id}-heading`}
          label={section.label}
          heading={section.heading}
          description={section.description}
          className="lg:col-span-4"
          descriptionClassName="max-w-md"
        />
        <ol className="grid gap-8 sm:grid-cols-2 lg:col-span-8 lg:gap-10">
          {section.items.map((item, index) => (
            <li key={item.title} className="flex flex-col gap-4">
              <span className="text-sm font-medium tracking-[0.18em] text-muted">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-xl font-medium tracking-tight text-foreground sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </SectionShell>
  );
}

function SplitSection({ section }: { section: SplitSectionData }) {
  return (
    <SectionShell id={section.id} labelledBy={`${section.id}-heading`}>
      <div className="grid w-full gap-14 lg:grid-cols-12 lg:gap-16 lg:items-center">
        <SectionIntro
          id={`${section.id}-heading`}
          label={section.label}
          heading={section.heading}
          description={section.description}
          className="lg:col-span-5"
          descriptionClassName="max-w-lg"
        />
        <ul className="grid gap-5 lg:col-span-7">
          {section.items.map((item) => (
            <li key={item.title}>
              <Card className="p-7 sm:flex sm:items-start sm:justify-between sm:gap-10 sm:p-8">
                <h3 className="shrink-0 text-lg font-medium tracking-tight text-foreground sm:w-40 sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:mt-0 sm:max-w-md sm:text-base">
                  {item.description}
                </p>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </SectionShell>
  );
}

function ContactSection({ section }: { section: ContactSectionData }) {
  return (
    <SectionShell id={section.id} labelledBy={`${section.id}-heading`}>
      <div className="grid w-full gap-14 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="lg:col-span-6">
          <SectionIntro
            id={`${section.id}-heading`}
            label={section.label}
            heading={section.heading}
            description={section.description}
            descriptionClassName="max-w-xl"
          />
          <div className="mt-10">
            <Button variant="primary">{section.cta}</Button>
          </div>
        </div>
        <dl className="grid gap-8 rounded-soft border border-border bg-surface p-8 sm:grid-cols-3 sm:gap-6 sm:p-10 lg:col-span-6 lg:grid-cols-1 lg:gap-10 xl:p-12">
          {section.details.map((detail) => (
            <div key={detail.label}>
              <dt className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
                {detail.label}
              </dt>
              <dd className="mt-3 text-base text-foreground sm:text-lg">
                {detail.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </SectionShell>
  );
}

export default function Section({ section }: SectionProps) {
  switch (section.variant) {
    case "hero":
      return <HeroSection section={section} />;
    case "features":
      return <FeaturesSection section={section} />;
    case "cards":
      return <CardsSection section={section} />;
    case "steps":
      return <StepsSection section={section} />;
    case "split":
      return <SplitSection section={section} />;
    case "contact":
      return <ContactSection section={section} />;
  }
}
