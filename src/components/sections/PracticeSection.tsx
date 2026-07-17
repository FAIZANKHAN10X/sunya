import SectionIntro from "@/components/sections/SectionIntro";
import SectionShell from "@/components/SectionShell";

const items = [
  {
    title: "Morning flow",
    meta: "Soft · 45 min",
    description:
      "Easy sequencing to wake the body and set a quieter tone for the day—nothing to achieve before breakfast.",
  },
  {
    title: "Restorative stillness",
    meta: "Supported · 60 min",
    description:
      "Longer holds, props, and soft guidance. Built for recovery days when effort should be almost optional.",
  },
  {
    title: "Breath & meditation",
    meta: "Seated · 30 min",
    description:
      "Simple techniques, unhurried pacing. A short practice for when the mat feels like too much and sitting is enough.",
  },
] as const;

export default function PracticeSection() {
  return (
    <SectionShell id="practice" labelledBy="practice-heading">
      <div className="w-full">
        <SectionIntro
          id="practice-heading"
          label="Practice"
          heading="A practice that meets you where you are"
          description="Pick the rhythm that fits the day. Structure when you need it, space when you don’t—intention over obligation."
          className="max-w-2xl"
          descriptionClassName="max-w-xl"
        />

        <ul className="mt-14 border-t border-border sm:mt-16">
          {items.map((item) => (
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
