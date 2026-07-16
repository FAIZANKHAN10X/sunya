import SectionIntro from "@/components/sections/SectionIntro";
import SectionShell from "@/components/SectionShell";

const items = [
  {
    title: "Stillness first",
    description:
      "We begin by arriving—softening the breath, settling the body, and noticing what is already here.",
  },
  {
    title: "Movement with meaning",
    description:
      "Shapes are invitations, not achievements. Alignment serves comfort, clarity, and longevity.",
  },
  {
    title: "Breath as guide",
    description:
      "Pranayama and unforced rhythm keep the practice grounded, steady, and deeply restorative.",
  },
] as const;

export default function PhilosophySection() {
  return (
    <SectionShell id="philosophy" labelledBy="philosophy-heading">
      <div className="w-full">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
          <SectionIntro
            id="philosophy-heading"
            label="Philosophy"
            heading="Less noise. More presence."
            description="Our approach is simple: create enough stillness for awareness to surface. Every class, cue, and pause is designed to support calm attention rather than performance."
            className="lg:col-span-7"
            descriptionClassName="max-w-2xl"
          />
        </div>
        <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-8">
          {items.map((item) => (
            <li key={item.title}>
              <article className="h-full rounded-soft border border-border p-7 sm:p-8">
                <h3 className="text-lg font-medium tracking-tight text-foreground sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                  {item.description}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </SectionShell>
  );
}
