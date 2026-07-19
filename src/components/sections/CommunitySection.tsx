import Card from "@/components/Card";
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
 * Stacked cards keep a calm, non-sales rhythm.
 */
export default function CommunitySection() {
  return (
    <SectionShell id="community" labelledBy="community-heading">
      <div className="grid w-full gap-14 lg:grid-cols-12 lg:items-center lg:gap-16">
        <SectionIntro
          id="community-heading"
          label="Belonging"
          heading="Community"
          description="Practice deepens in company—when the room is sincere. These are the doors into that field."
          className="lg:col-span-5"
          descriptionClassName="max-w-lg"
        />
        <ul className="grid gap-5 lg:col-span-7">
          {items.map((item) => (
            <li key={item.title}>
              <Card className="p-7 sm:flex sm:items-start sm:justify-between sm:gap-10 sm:p-8">
                <h3 className="shrink-0 text-lg font-medium tracking-tight text-foreground sm:w-44 sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:mt-0 sm:max-w-md sm:text-base">
                  {item.description}
                </p>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </SectionShell>
  );
}
