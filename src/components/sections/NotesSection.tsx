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

        <ul className="mt-14 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {notes.map((item, index) => (
            <li key={item.title} className={index === 0 ? "sm:col-span-2 lg:col-span-1" : ""}>
              <article className="group flex h-full flex-col rounded-soft border border-border bg-surface/30 p-7 transition-[border-color,background-color,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-foreground/20 hover:bg-surface hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs font-medium tracking-[0.18em] text-muted uppercase">
                    {item.meta}
                  </p>
                  <span
                    className="text-xs font-medium tracking-[0.14em] text-muted/60 tabular-nums"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="mt-10 flex flex-1 flex-col sm:mt-14">
                  <h3 className="text-xl font-medium tracking-tight text-foreground sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted sm:text-base">
                    {item.description}
                  </p>
                </div>

                <div className="mt-10 flex items-center justify-between border-t border-border pt-6">
                  <p className="text-xs font-medium tracking-[0.18em] text-muted uppercase">
                    Coming soon
                  </p>
                  <span
                    className="text-muted transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-foreground motion-reduce:transition-none"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </SectionShell>
  );
}
