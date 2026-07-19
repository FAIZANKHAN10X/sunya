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
      <div className="grid w-full gap-14 lg:grid-cols-12 lg:gap-20">
        <SectionIntro
          id="turning-point-heading"
          label="The path"
          heading="The turning point"
          description="Every philosophy has a before. This is the arc from friction to a life of practice—and the decision to share it."
          className="lg:col-span-4"
          descriptionClassName="max-w-md"
        />

        <ol className="relative lg:col-span-8">
          {/* Vertical spine */}
          <div
            className="absolute top-2 bottom-2 left-[0.4rem] w-px bg-border sm:left-[0.45rem]"
            aria-hidden="true"
          />

          {milestones.map((item, index) => (
            <li
              key={item.title}
              className="relative grid grid-cols-[1.5rem_1fr] gap-x-6 pb-12 last:pb-0 sm:gap-x-8 sm:pb-14"
            >
              <span
                className="relative z-[1] mt-1.5 h-3.5 w-3.5 rounded-full border border-border bg-background"
                aria-hidden="true"
              />
              <div className="min-w-0">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <span className="text-xs font-medium tracking-[0.18em] text-muted tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-medium tracking-tight text-foreground sm:text-xl">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted sm:text-base">
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
