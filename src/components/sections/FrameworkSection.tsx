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
 * The Framework — five pillars as a full-width instrument panel.
 */
export default function FrameworkSection() {
  return (
    <SectionShell
      id="framework"
      labelledBy="framework-heading"
      density="scene"
      tone="surface"
    >
      <div className="w-full">
        <div className="max-w-2xl">
          <h2
            id="framework-heading"
            className="max-w-[12ch] text-[2rem] font-medium leading-[1.08] tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            The framework
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted sm:text-base">
            Five pillars of a lived system. Practice moves through each—never as
            a checklist, always as a whole.
          </p>
        </div>

        <ul className="mt-10 grid gap-px overflow-hidden rounded-soft border border-border bg-border sm:mt-14 sm:grid-cols-2 lg:mt-16 lg:grid-cols-5">
          {pillars.map((item, index) => (
            <li key={item.title} className="bg-background">
              <article className="group flex h-full min-h-0 flex-col bg-background p-5 transition-colors duration-300 hover:bg-surface sm:min-h-[18rem] sm:p-7 motion-reduce:transition-none lg:min-h-[22rem]">
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
