import SectionIntro from "@/components/sections/SectionIntro";
import SectionShell from "@/components/SectionShell";

const items = [
  {
    title: "Clarity of mind",
    description:
      "Short, consistent sessions help quiet mental clutter and improve everyday focus.",
  },
  {
    title: "Ease in the body",
    description:
      "Thoughtful mobility work supports joints, posture, and a more comfortable range of motion.",
  },
  {
    title: "Emotional steadiness",
    description:
      "Breath-led practice creates room between stimulus and response—on and off the mat.",
  },
  {
    title: "Sustainable ritual",
    description:
      "Simple frameworks make it easier to return, even on busy or difficult days.",
  },
] as const;

export default function BenefitsSection() {
  return (
    <SectionShell id="benefits" labelledBy="benefits-heading">
      <div className="grid w-full gap-14 lg:grid-cols-12 lg:gap-16">
        <SectionIntro
          id="benefits-heading"
          label="Benefits"
          heading="What a steady practice can offer"
          description="Yoga at Sunya is not about perfection. It is about building capacity—for focus, resilience, and a kinder relationship with your body."
          className="lg:col-span-4"
          descriptionClassName="max-w-md"
        />
        <ul className="grid gap-5 sm:grid-cols-2 lg:col-span-8">
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
