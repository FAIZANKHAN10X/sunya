import SectionShell from "@/components/SectionShell";

const items = [
  {
    title: "Email list",
    description:
      "Quiet notes and invitations—never noise. Reflections, openings, and the occasional gathering.",
    visual: "Notes",
  },
  {
    title: "Private community",
    description:
      "A held circle for shared practice and sincere conversation. No performance, no hierarchy of cool.",
    visual: "Circle",
  },
  {
    title: "Events",
    description:
      "Dialogues, live practice, and seasonal gatherings—spaces to meet the work in real time.",
    visual: "Gather",
  },
] as const;

/**
 * Community — doors into belonging with media tiles.
 */
export default function CommunitySection() {
  return (
    <SectionShell
      id="community"
      labelledBy="community-heading"
      density="scene"
      tone="surface"
    >
      <div className="w-full">
        <div className="flex flex-col gap-6 border-b border-border pb-10 sm:flex-row sm:items-end sm:justify-between sm:pb-12">
          <h2
            id="community-heading"
            className="text-[2rem] font-medium leading-[1.08] tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            Community
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-muted sm:text-base sm:text-right">
            Practice deepens in company—when the room is sincere. These are the
            doors into that field.
          </p>
        </div>

        <ul className="mt-0">
          {items.map((item, index) => (
            <li
              key={item.title}
              className="border-b border-border last:border-b-0"
            >
              <article className="group grid gap-6 py-8 sm:py-10 lg:grid-cols-12 lg:items-center lg:gap-10 lg:py-12">
                <div className="relative aspect-[16/10] overflow-hidden border border-border bg-background lg:col-span-4 lg:aspect-[5/4]">
                  <div
                    className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,rgba(245,245,245,0.05)_0%,transparent_60%)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 flex items-end justify-between p-4 sm:p-5">
                    <span className="text-[0.65rem] font-medium tracking-[0.18em] text-muted uppercase">
                      {item.visual}
                    </span>
                    <span className="text-[0.65rem] font-medium tracking-[0.14em] text-muted tabular-nums">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <h3 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl lg:text-[2rem]">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-muted sm:mt-4 sm:text-base">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center lg:col-span-2 lg:justify-end">
                  <span className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-border text-sm text-muted transition-[border-color,color,transform] duration-300 group-hover:border-foreground/40 group-hover:text-foreground group-active:scale-95 motion-reduce:transition-none">
                    →
                  </span>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </SectionShell>
  );
}
