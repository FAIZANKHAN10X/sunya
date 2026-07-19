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

export default function ExperiencesSection() {
  return (
    <SectionShell id="experiences" labelledBy="experiences-heading">
      <div className="w-full">
        <SectionIntro
          id="experiences-heading"
          heading="Practice & experiences"
          description="Ways to meet the work when you are ready—alone is welcome; together is available."
          className="max-w-2xl"
          descriptionClassName="max-w-xl"
        />

        <ul className="mt-10 grid gap-3 sm:mt-14 sm:gap-4 lg:mt-16 lg:grid-cols-3">
          {experiences.map((item, index) => (
            <li key={item.title}>
              <article className="group relative flex h-full min-h-0 flex-col overflow-hidden rounded-soft border border-border p-6 transition-[border-color,background-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-foreground/20 hover:bg-surface sm:min-h-[20rem] sm:p-8 motion-reduce:transition-none">
                <div className="flex items-start justify-between gap-3 sm:gap-4">
                  <span
                    className="text-xs font-medium tracking-[0.18em] text-muted tabular-nums"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="max-w-[60%] rounded-full border border-border px-2.5 py-1 text-center text-[0.6rem] font-medium tracking-[0.12em] text-muted uppercase sm:max-w-none sm:px-3 sm:text-[0.65rem] sm:tracking-[0.14em]">
                    {item.meta}
                  </p>
                </div>

                <div className="mt-10 sm:mt-auto sm:pt-14">
                  <h3 className="text-xl font-medium tracking-tight text-foreground sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted sm:mt-4 sm:text-base">
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
