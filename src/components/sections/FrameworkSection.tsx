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
      <div className="w-full">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
          <SectionIntro
            id="framework-heading"
            label="Methodology"
            heading="The framework"
            description="Five pillars of a lived system. Practice moves through each—never as a checklist, always as a whole."
            className="lg:col-span-7"
            descriptionClassName="max-w-md"
          />
          <p className="text-xs font-medium tracking-[0.18em] text-muted uppercase lg:col-span-5 lg:text-right">
            05 pillars · one practice
          </p>
        </div>

        <ul className="mt-14 grid gap-px overflow-hidden rounded-soft border border-border bg-border sm:mt-16 sm:grid-cols-2 lg:grid-cols-5">
          {pillars.map((item, index) => (
            <li key={item.title} className="bg-background">
              <article className="group flex h-full min-h-[16rem] flex-col bg-background p-6 transition-colors duration-300 hover:bg-surface sm:min-h-[18rem] sm:p-7 motion-reduce:transition-none lg:min-h-[22rem]">
                <span
                  className="text-xs font-medium tracking-[0.18em] text-muted tabular-nums"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-8 text-xl font-medium tracking-tight text-foreground sm:mt-10 sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
                <span
                  className="mt-8 h-px w-6 bg-border transition-[width,background-color] duration-300 group-hover:w-10 group-hover:bg-foreground/40 motion-reduce:transition-none"
                  aria-hidden="true"
                />
              </article>
            </li>
          ))}
        </ul>
      </div>
    </SectionShell>
  );
}
