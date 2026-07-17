import SectionIntro from "@/components/sections/SectionIntro";
import SectionShell from "@/components/SectionShell";

const items = [
  {
    title: "Stillness first",
    description:
      "Arrive before you perform. Soften the breath, settle the body, and notice what is already here.",
  },
  {
    title: "Movement as invitation",
    description:
      "Shapes are not goals. Alignment serves comfort and longevity—never display.",
  },
  {
    title: "Breath as guide",
    description:
      "Unforced rhythm keeps the practice honest. When the breath leads, effort finds its right size.",
  },
] as const;

export default function PhilosophySection() {
  return (
    <SectionShell id="philosophy" labelledBy="philosophy-heading">
      <div className="grid w-full gap-14 lg:grid-cols-12 lg:items-start lg:gap-20 xl:gap-24">
        <SectionIntro
          id="philosophy-heading"
          label="Philosophy"
          heading="Less noise. More presence."
          description="We design for calm attention—not performance. Enough stillness for awareness to surface; enough structure to return when the mind wanders."
          className="lg:col-span-5"
          descriptionClassName="max-w-md"
        />

        <ul className="flex flex-col lg:col-span-7 lg:pt-1">
          {items.map((item, index) => (
            <li
              key={item.title}
              className="border-t border-border py-8 first:border-t-0 first:pt-0 sm:py-9"
            >
              <article className="grid grid-cols-[auto_1fr] gap-x-5 gap-y-2 sm:gap-x-8">
                <span
                  className="pt-1 text-xs font-medium tracking-[0.18em] text-muted tabular-nums"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h3 className="text-lg font-medium tracking-tight text-foreground sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-muted sm:mt-3 sm:text-base">
                    {item.description}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </SectionShell>
  );
}
