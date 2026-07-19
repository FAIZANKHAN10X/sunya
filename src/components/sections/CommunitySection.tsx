import SectionIntro from "@/components/sections/SectionIntro";
import SectionShell from "@/components/SectionShell";

const items = [
  {
    title: "Email list",
    description:
      "Quiet notes and invitations—never noise. Reflections, openings, and the occasional gathering.",
  },
  {
    title: "Private community",
    description:
      "A held circle for shared practice and sincere conversation. No performance, no hierarchy of cool.",
  },
  {
    title: "Events",
    description:
      "Dialogues, live practice, and seasonal gatherings—spaces to meet the work in real time.",
  },
] as const;

/**
 * SECTION 07 — Community
 * Future community touchpoints: list, private circle, and events.
 * Horizontal rows keep a calm, non-sales rhythm.
 */
export default function CommunitySection() {
  return (
    <SectionShell id="community" labelledBy="community-heading">
      <div className="grid w-full gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-20">
        <SectionIntro
          id="community-heading"
          label="Belonging"
          heading="Community"
          description="Practice deepens in company—when the room is sincere. These are the doors into that field."
          className="lg:col-span-4"
          descriptionClassName="max-w-lg"
        />

        <ul className="divide-y divide-border border-y border-border lg:col-span-8">
          {items.map((item, index) => (
            <li key={item.title}>
              <article className="group grid gap-3 py-7 transition-colors duration-300 sm:grid-cols-[auto_1fr_auto] sm:items-baseline sm:gap-8 sm:py-10 motion-reduce:transition-none">
                <span
                  className="text-xs font-medium tracking-[0.18em] text-muted tabular-nums"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 sm:max-w-lg">
                  <h3 className="text-xl font-medium tracking-tight text-foreground transition-colors duration-300 group-hover:text-foreground sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                    {item.description}
                  </p>
                </div>
                <span
                  className="hidden text-muted transition-[transform,color] duration-300 group-hover:translate-x-1 group-hover:text-foreground sm:inline motion-reduce:transition-none"
                  aria-hidden="true"
                >
                  →
                </span>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </SectionShell>
  );
}
