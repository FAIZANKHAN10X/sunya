import SectionShell from "@/components/SectionShell";

const stories = [
  {
    quote:
      "I stopped trying to fix myself and started listening. The rest followed more gently than I expected.",
    name: "A.M.",
    detail: "Program",
  },
  {
    quote:
      "Presence returned in ordinary life—not only on the mat. Work, rest, and relationships feel less rushed.",
    name: "J.K.",
    detail: "Retreat",
  },
  {
    quote:
      "Discipline without hardness. For the first time, practice feels like a home, not a demand.",
    name: "R.S.",
    detail: "Practice",
  },
] as const;

/**
 * Stories of Change — featured witness + supporting voices.
 */
export default function StoriesSection() {
  const [featured, ...rest] = stories;

  return (
    <SectionShell id="stories" labelledBy="stories-heading" density="scene">
      <div className="w-full">
        <div className="max-w-2xl">
          <h2
            id="stories-heading"
            className="text-[2rem] font-medium leading-[1.08] tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            Stories of change
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted sm:text-base">
            Voices from people who walked the path—shared with care, not as
            proof.
          </p>
        </div>

        <figure className="mt-12 border-t border-border pt-10 sm:mt-16 sm:pt-14 lg:grid lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-2">
            <span
              className="font-serif text-6xl leading-none text-foreground/20 select-none sm:text-7xl"
              aria-hidden="true"
            >
              “
            </span>
          </div>
          <div className="lg:col-span-9">
            <blockquote className="text-xl font-medium leading-[1.35] tracking-tight text-foreground sm:text-2xl lg:text-[1.85rem] lg:leading-[1.35]">
              {featured.quote}
            </blockquote>
            <figcaption className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-border pt-6 sm:mt-10">
              <p className="text-sm font-medium tracking-tight text-foreground">
                {featured.name}
              </p>
              <p className="text-xs font-medium tracking-[0.14em] text-muted uppercase">
                {featured.detail}
              </p>
            </figcaption>
          </div>
        </figure>

        <ul className="mt-10 grid gap-0 border-t border-border sm:mt-14 md:grid-cols-2">
          {rest.map((item, index) => (
            <li
              key={item.quote}
              className={`border-border py-8 sm:py-10 ${
                index === 0 ? "md:border-r md:pr-10" : "md:pl-10"
              } border-b md:border-b-0`}
            >
              <figure>
                <blockquote className="text-base leading-relaxed text-foreground sm:text-lg">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-4">
                  <p className="text-sm font-medium text-foreground">
                    {item.name}
                  </p>
                  <p className="text-xs font-medium tracking-[0.12em] text-muted uppercase">
                    {item.detail}
                  </p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </SectionShell>
  );
}
