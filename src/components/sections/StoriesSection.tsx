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

        <ul className="mt-14 grid gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {stories.map((item) => (
            <li key={item.quote}>
              <figure className="flex h-full flex-col rounded-soft border border-border p-7 sm:p-8">
                <blockquote className="flex-1 text-base leading-relaxed text-foreground sm:text-lg">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-10 border-t border-border pt-6">
                  <p className="text-sm font-medium tracking-tight text-foreground">
                    {item.name}
                  </p>
                  <p className="mt-1 text-xs font-medium tracking-[0.14em] text-muted uppercase">
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
