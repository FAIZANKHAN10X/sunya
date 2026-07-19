import SectionIntro from "@/components/sections/SectionIntro";
import SectionShell from "@/components/SectionShell";

const milestones = [
  {
    title: "Early struggle",
    description:
      "Outward motion without inner ground. Success and speed that never quite settled the body.",
  },
  {
    title: "Discovery",
    description:
      "A first true pause—breath, silence, and the sense that something essential had been ignored.",
  },
  {
    title: "Practice",
    description:
      "Years of returning: movement, stillness, study. Not mastery as display—mastery as honesty.",
  },
  {
    title: "Transformation",
    description:
      "The inner life reorganized. Less reaction, more listening. Healing as a way of being, not a fix.",
  },
  {
    title: "Mission",
    description:
      "To share a path that is simple, deep, and free of spectacle—for anyone ready to begin again.",
  },
] as const;

/**
 * SECTION 03 — The Turning Point
 * Origin story and transformation timeline.
 * Vertical milestone layout; refine with personal details when ready.
 */
export default function TurningPointSection() {
  return (
    <SectionShell id="turning-point" labelledBy="turning-point-heading">
      <div className="grid w-full gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
          <SectionIntro
            id="turning-point-heading"
            label="The path"
            heading="The turning point"
            description="Every philosophy has a before. This is the arc from friction to a life of practice—and the decision to share it."
            descriptionClassName="max-w-md"
          />
        </div>

        <ol className="relative lg:col-span-8">
          <div
            className="absolute top-3 bottom-3 left-[0.6875rem] w-px bg-gradient-to-b from-border via-border to-transparent sm:left-[0.8125rem]"
            aria-hidden="true"
          />

          {milestones.map((item, index) => (
            <li
              key={item.title}
              className="relative grid grid-cols-[1.75rem_1fr] gap-x-6 pb-12 last:pb-0 sm:grid-cols-[2rem_1fr] sm:gap-x-10 sm:pb-16"
            >
              <span className="relative z-[1] flex justify-center pt-1.5" aria-hidden="true">
                <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full border border-border bg-background sm:h-4 sm:w-4">
                  <span className="h-1.5 w-1.5 rounded-full bg-foreground/70" />
                </span>
              </span>
              <div className="min-w-0 rounded-soft border border-transparent px-0 py-0 transition-[border-color,background-color,padding] duration-300 sm:hover:border-border sm:hover:bg-surface/60 sm:hover:px-6 sm:hover:py-5 motion-reduce:transition-none">
                <p className="text-[0.65rem] font-medium tracking-[0.22em] text-muted tabular-nums uppercase sm:text-xs">
                  Chapter {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-xl font-medium tracking-tight text-foreground sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted sm:mt-4 sm:text-base">
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
