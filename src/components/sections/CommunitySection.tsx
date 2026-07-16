import Card from "@/components/Card";
import SectionIntro from "@/components/sections/SectionIntro";
import SectionShell from "@/components/SectionShell";

const items = [
  {
    title: "Shared rooms",
    description:
      "In-person and virtual spaces held with the same calm tone, clear cues, and unhurried pacing.",
  },
  {
    title: "Guided series",
    description:
      "Multi-week pathways that help you build confidence without racing toward outcomes.",
  },
  {
    title: "Quiet mentorship",
    description:
      "Thoughtful feedback and optional check-ins for students who want support along the way.",
  },
] as const;

export default function CommunitySection() {
  return (
    <SectionShell id="community" labelledBy="community-heading">
      <div className="grid w-full gap-14 lg:grid-cols-12 lg:items-center lg:gap-16">
        <SectionIntro
          id="community-heading"
          label="Community"
          heading="Practice together, without performance"
          description="Sunya is built for people who value sincerity over spectacle. Come as you are—curious, tired, experienced, or entirely new."
          className="lg:col-span-5"
          descriptionClassName="max-w-lg"
        />
        <ul className="grid gap-5 lg:col-span-7">
          {items.map((item) => (
            <li key={item.title}>
              <Card className="p-7 sm:flex sm:items-start sm:justify-between sm:gap-10 sm:p-8">
                <h3 className="shrink-0 text-lg font-medium tracking-tight text-foreground sm:w-40 sm:text-xl">
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
