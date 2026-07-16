import Card from "@/components/Card";
import SectionIntro from "@/components/sections/SectionIntro";
import SectionShell from "@/components/SectionShell";

const items = [
  {
    title: "Morning flow",
    description:
      "Gentle sequencing to wake the body, clear the mind, and set a quiet tone for the hours ahead.",
  },
  {
    title: "Restorative stillness",
    description:
      "Supported postures, longer holds, and soft guidance for recovery and deep nervous-system ease.",
  },
  {
    title: "Breath & meditation",
    description:
      "Seated and reclined practices that refine attention through simple, sustainable techniques.",
  },
] as const;

export default function PracticeSection() {
  return (
    <SectionShell id="practice" labelledBy="practice-heading">
      <div className="grid w-full gap-14 lg:grid-cols-12 lg:items-start lg:gap-16">
        <SectionIntro
          id="practice-heading"
          label="Practice"
          heading="A practice that meets you where you are"
          description="Choose the rhythm that fits your day. Each offering balances structure with spaciousness so you can practice with intention—not obligation."
          className="lg:col-span-4"
          descriptionClassName="max-w-md"
        />
        <ul className="grid gap-5 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-1 xl:grid-cols-3">
          {items.map((item) => (
            <li key={item.title}>
              <Card className="h-full p-7 sm:p-8">
                <h3 className="text-lg font-medium tracking-tight text-foreground sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
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
