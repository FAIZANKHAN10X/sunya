import SectionIntro from "@/components/sections/SectionIntro";
import SectionShell from "@/components/SectionShell";

const beliefs = [
  {
    title: "Healing",
    description:
      "Restoration without force. The body and mind already know how to mend when given honest conditions.",
  },
  {
    title: "Presence",
    description:
      "Attention is the ground of every practice. What you meet fully, you no longer need to escape.",
  },
  {
    title: "Discipline",
    description:
      "Steady return, not perfection. A quiet commitment that outlasts mood and motivation.",
  },
  {
    title: "Awareness",
    description:
      "See clearly before you act. Space between stimulus and response is where freedom lives.",
  },
  {
    title: "Growth",
    description:
      "Expansion that stays rooted. Becoming more yourself—not more of what the world rewards.",
  },
] as const;

/**
 * SECTION 04 — What I Believe
 * Core philosophy expressed as calm editorial cards.
 */
export default function BeliefsSection() {
  return (
    <SectionShell id="beliefs" labelledBy="beliefs-heading">
      <div className="w-full">
        <SectionIntro
          id="beliefs-heading"
          label="Philosophy"
          heading="What I believe"
          description="A few ideas hold the whole of this work. They are simple enough to remember—and deep enough to live."
          className="max-w-2xl"
          descriptionClassName="max-w-xl"
        />

        <ul className="mt-10 grid gap-3 sm:mt-14 sm:grid-cols-2 lg:mt-16 lg:grid-cols-6 lg:gap-4">
          {beliefs.map((item, index) => {
            const isFeatured = index === 0;
            return (
              <li
                key={item.title}
                className={
                  isFeatured
                    ? "sm:col-span-2 lg:col-span-3 lg:row-span-2"
                    : "lg:col-span-3"
                }
              >
                <article
                  className={`group relative flex h-full flex-col overflow-hidden rounded-soft border border-border bg-surface/40 p-6 transition-[border-color,background-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-foreground/20 hover:bg-surface motion-reduce:transition-none sm:p-8 ${
                    isFeatured ? "lg:min-h-[22rem] lg:justify-between lg:p-10" : ""
                  }`}
                >
                  <span
                    className={`font-medium tracking-[0.14em] text-muted/50 tabular-nums transition-colors duration-300 group-hover:text-muted ${
                      isFeatured
                        ? "text-3xl sm:text-5xl lg:text-6xl"
                        : "text-xs"
                    }`}
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className={isFeatured ? "mt-8 sm:mt-auto sm:pt-12 lg:pt-16" : "mt-6 sm:mt-8"}>
                    <h3
                      className={`font-medium tracking-tight text-foreground ${
                        isFeatured ? "text-xl sm:text-3xl" : "text-lg sm:text-xl"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`mt-3 leading-relaxed text-muted ${
                        isFeatured
                          ? "max-w-md text-sm sm:text-lg"
                          : "text-sm sm:text-base"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </SectionShell>
  );
}
