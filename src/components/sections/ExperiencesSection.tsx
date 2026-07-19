import SectionIntro from "@/components/sections/SectionIntro";
import SectionShell from "@/components/SectionShell";

const experiences = [
  {
    title: "Programs",
    meta: "Guided · Multi-week",
    description:
      "Structured pathways for steady practice—rhythm you can keep, depth you can grow into.",
  },
  {
    title: "Workshops",
    meta: "Immersive · Day",
    description:
      "Focused sessions on a single theme: breath, stillness, embodiment, or the inner life.",
  },
  {
    title: "Retreats",
    meta: "Deep · Multi-day",
    description:
      "Extended space for presence and rest. Time away from noise so the path can speak clearly.",
  },
] as const;

/**
 * SECTION 08 — Practice & Experiences
 * Future programs, workshops, retreats, and offerings.
 * Tall panel cards with quiet meta labels.
 */
export default function ExperiencesSection() {
  return (
    <SectionShell id="experiences" labelledBy="experiences-heading">
      <div className="w-full">
        <SectionIntro
          id="experiences-heading"
          label="Practice"
          heading="Practice & experiences"
          description="Ways to meet the work when you are ready—alone is welcome; together is available."
          className="max-w-2xl"
          descriptionClassName="max-w-xl"
        />

        <ul className="mt-14 grid gap-4 sm:mt-16 lg:grid-cols-3">
          {experiences.map((item, index) => (
            <li key={item.title}>
              <article className="group relative flex h-full min-h-[18rem] flex-col overflow-hidden rounded-soft border border-border p-7 transition-[border-color,background-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-foreground/20 hover:bg-surface sm:min-h-[20rem] sm:p-8 motion-reduce:transition-none">
                <div className="flex items-start justify-between gap-4">
                  <span
                    className="text-xs font-medium tracking-[0.18em] text-muted tabular-nums"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="rounded-full border border-border px-3 py-1 text-[0.65rem] font-medium tracking-[0.14em] text-muted uppercase">
                    {item.meta}
                  </p>
                </div>

                <div className="mt-auto pt-14">
                  <h3 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted sm:text-base">
                    {item.description}
                  </p>
                </div>

                <span
                  className="pointer-events-none absolute -right-4 -bottom-6 text-[7rem] font-medium leading-none tracking-tighter text-foreground/[0.03] transition-colors duration-300 group-hover:text-foreground/[0.06] select-none sm:text-[8rem]"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </SectionShell>
  );
}
