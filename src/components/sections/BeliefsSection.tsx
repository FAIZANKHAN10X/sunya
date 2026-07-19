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

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {beliefs.map((item, index) => (
            <li
              key={item.title}
              className={
                index === beliefs.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""
              }
            >
              <article className="flex h-full flex-col rounded-soft border border-border p-7 sm:p-8">
                <span
                  className="text-xs font-medium tracking-[0.18em] text-muted tabular-nums"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-lg font-medium tracking-tight text-foreground sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                  {item.description}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </SectionShell>
  );
}
