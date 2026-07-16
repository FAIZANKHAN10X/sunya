import SectionIntro from "@/components/sections/SectionIntro";
import SectionShell from "@/components/SectionShell";

const items = [
  {
    title: "Arrive",
    description:
      "Learn foundational postures, breathing patterns, and how to listen without judgment.",
  },
  {
    title: "Establish",
    description:
      "Build a repeatable rhythm—short daily sessions that feel nourishing rather than demanding.",
  },
  {
    title: "Deepen",
    description:
      "Explore subtlety: alignment nuance, longer holds, and a quieter relationship with effort.",
  },
  {
    title: "Integrate",
    description:
      "Carry presence into ordinary life—work, rest, relationships, and transitions between them.",
  },
] as const;

export default function JourneySection() {
  return (
    <SectionShell id="journey" labelledBy="journey-heading">
      <div className="grid w-full gap-14 lg:grid-cols-12 lg:gap-20">
        <SectionIntro
          id="journey-heading"
          label="Journey"
          heading="How your path can unfold"
          description="There is no single correct pace. These stages describe a gentle arc many students recognize as they grow into the practice."
          className="lg:col-span-4"
          descriptionClassName="max-w-md"
        />
        <ol className="grid gap-8 sm:grid-cols-2 lg:col-span-8 lg:gap-10">
          {items.map((item, index) => (
            <li key={item.title} className="flex flex-col gap-4">
              <span className="text-sm font-medium tracking-[0.18em] text-muted">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-xl font-medium tracking-tight text-foreground sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </SectionShell>
  );
}
