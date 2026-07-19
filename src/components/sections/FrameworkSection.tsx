import SectionIntro from "@/components/sections/SectionIntro";
import SectionShell from "@/components/SectionShell";

const pillars = [
  {
    title: "Body",
    description:
      "Movement, ease, and embodied honesty. The body is not a project—it is the first place truth appears.",
  },
  {
    title: "Breath",
    description:
      "Rhythm that softens and steadies. When breath leads, effort finds its right size.",
  },
  {
    title: "Mind",
    description:
      "Clarity without hardness. Thought is observed, not obeyed; quiet becomes available again.",
  },
  {
    title: "Spirit",
    description:
      "Depth that needs no performance. The part of you that does not bargain for worth.",
  },
  {
    title: "Purpose",
    description:
      "Living from what is true. Action that grows out of presence, not pressure.",
  },
] as const;

/**
 * SECTION 05 — The Framework
 * Signature methodology as five premium pillars.
 * Editorial numbered list—signature system, not a product feature grid.
 */
export default function FrameworkSection() {
  return (
    <SectionShell id="framework" labelledBy="framework-heading">
      <div className="grid w-full gap-14 lg:grid-cols-12 lg:items-start lg:gap-20 xl:gap-24">
        <SectionIntro
          id="framework-heading"
          label="Methodology"
          heading="The framework"
          description="Five pillars of a lived system. Practice moves through each—never as a checklist, always as a whole."
          className="lg:col-span-5"
          descriptionClassName="max-w-md"
        />

        <ul className="flex flex-col lg:col-span-7 lg:pt-1">
          {pillars.map((item, index) => (
            <li
              key={item.title}
              className="border-t border-border py-8 first:border-t-0 first:pt-0 sm:py-9"
            >
              <article className="grid grid-cols-[auto_1fr] gap-x-5 gap-y-2 sm:gap-x-8">
                <span
                  className="pt-1 text-xs font-medium tracking-[0.18em] text-muted tabular-nums"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h3 className="text-lg font-medium tracking-tight text-foreground sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-muted sm:mt-3 sm:text-base">
                    {item.description}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </SectionShell>
  );
}
