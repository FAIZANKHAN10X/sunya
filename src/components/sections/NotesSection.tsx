import SectionIntro from "@/components/sections/SectionIntro";
import SectionShell from "@/components/SectionShell";

const notes = [
  {
    title: "On stillness",
    meta: "Essay",
    description:
      "Why silence is not empty—and how a few minutes of quiet can reorganize a whole day.",
  },
  {
    title: "On discipline",
    meta: "Note",
    description:
      "Returning without drama. A small practice kept is worth more than a perfect one abandoned.",
  },
  {
    title: "On healing",
    meta: "Reflection",
    description:
      "Healing as relationship, not repair. What softens when we stop forcing the outcome.",
  },
] as const;

/**
 * SECTION 06 — Notes From The Path
 * Future essays, reflections, articles, and insights.
 * Content grid ready for real editorial links later.
 */
export default function NotesSection() {
  return (
    <SectionShell id="notes" labelledBy="notes-heading">
      <div className="w-full">
        <SectionIntro
          id="notes-heading"
          label="Writing"
          heading="Notes from the path"
          description="Essays and field notes from practice—written for clarity, not performance."
          className="max-w-2xl"
          descriptionClassName="max-w-xl"
        />

        <ul className="mt-14 grid gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {notes.map((item) => (
            <li key={item.title}>
              <article className="flex h-full flex-col rounded-soft border border-border bg-surface p-7 sm:p-8">
                <p className="text-xs font-medium tracking-[0.18em] text-muted uppercase">
                  {item.meta}
                </p>
                <h3 className="mt-8 text-lg font-medium tracking-tight text-foreground sm:mt-10 sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted sm:text-base">
                  {item.description}
                </p>
                <p className="mt-8 text-xs font-medium tracking-[0.18em] text-muted uppercase">
                  Coming soon
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </SectionShell>
  );
}
