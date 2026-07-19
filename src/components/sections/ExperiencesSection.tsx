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
 * List layout preserves the editorial tone of the original practice section.
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

        <ul className="mt-14 border-t border-border sm:mt-16">
          {experiences.map((item) => (
            <li
              key={item.title}
              className="border-b border-border py-9 sm:py-10"
            >
              <article className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-10">
                <h3 className="text-lg font-medium tracking-tight text-foreground sm:text-xl">
                  {item.title}
                </h3>
                <p className="shrink-0 text-xs font-medium tracking-[0.18em] text-muted uppercase">
                  {item.meta}
                </p>
              </article>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted sm:mt-4 sm:text-base">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </SectionShell>
  );
}
