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
 * What I Believe — editorial list, no section kicker labels.
 */
export default function BeliefsSection() {
  return (
    <SectionShell id="beliefs" labelledBy="beliefs-heading" density="scene">
      <div className="grid w-full gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
          <h2
            id="beliefs-heading"
            className="max-w-[10ch] text-[2rem] font-medium leading-[1.08] tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] xl:text-5xl"
          >
            What I believe
          </h2>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted sm:text-base">
            A few ideas hold the whole of this work. Simple enough to
            remember—deep enough to live.
          </p>
        </div>

        <ul className="lg:col-span-8">
          {beliefs.map((item, index) => (
            <li
              key={item.title}
              className="group border-t border-border py-8 last:border-b last:pb-8 sm:py-10"
            >
              <article className="grid gap-4 sm:grid-cols-[5.5rem_1fr] sm:gap-8 lg:grid-cols-[6.5rem_1fr] lg:items-baseline lg:gap-10">
                <span
                  className="text-3xl font-medium tracking-tight text-foreground/20 tabular-nums transition-colors duration-300 group-hover:text-foreground/45 motion-reduce:transition-none sm:text-4xl lg:text-5xl"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h3 className="text-xl font-medium tracking-tight text-foreground sm:text-2xl lg:text-[1.75rem]">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-muted sm:mt-4 sm:text-base">
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
