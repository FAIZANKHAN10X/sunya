import SectionIntro from "@/components/sections/SectionIntro";
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
 * SECTION 09 — Stories of Change
 * Testimonials and transformation stories.
 * Quiet quote cards—witness, not marketing claims. Swap for real voices later.
 */
export default function StoriesSection() {
  return (
    <SectionShell id="stories" labelledBy="stories-heading">
      <div className="w-full">
        <SectionIntro
          id="stories-heading"
          label="Witness"
          heading="Stories of change"
          description="Voices from people who walked the path—shared with care, not as proof."
          className="max-w-2xl"
          descriptionClassName="max-w-xl"
        />

        <ul className="mt-14 grid gap-4 sm:mt-16 lg:grid-cols-3">
          {stories.map((item, index) => (
            <li
              key={item.quote}
              className={index === 0 ? "lg:col-span-1" : undefined}
            >
              <figure
                className={`relative flex h-full flex-col rounded-soft border border-border p-7 sm:p-8 ${
                  index === 1
                    ? "bg-surface lg:mt-10"
                    : index === 2
                      ? "lg:mt-5"
                      : "bg-transparent"
                }`}
              >
                <span
                  className="font-serif text-5xl leading-none text-foreground/15 select-none"
                  aria-hidden="true"
                >
                  “
                </span>
                <blockquote className="mt-4 flex-1 text-base leading-relaxed text-foreground sm:text-lg">
                  {item.quote}
                </blockquote>
                <figcaption className="mt-10 flex items-end justify-between gap-4 border-t border-border pt-6">
                  <div>
                    <p className="text-sm font-medium tracking-tight text-foreground">
                      {item.name}
                    </p>
                    <p className="mt-1 text-xs font-medium tracking-[0.14em] text-muted uppercase">
                      {item.detail}
                    </p>
                  </div>
                  <span
                    className="text-xs font-medium tracking-[0.14em] text-muted/50 tabular-nums"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </SectionShell>
  );
}
