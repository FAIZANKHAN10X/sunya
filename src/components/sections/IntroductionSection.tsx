import SectionShell from "@/components/SectionShell";

/**
 * Introduction — media + founder voice. No section name kicker.
 */
export default function IntroductionSection() {
  return (
    <SectionShell
      id="introduction"
      labelledBy="introduction-heading"
      density="scene"
      tone="surface"
    >
      <div className="grid w-full gap-12 lg:grid-cols-12 lg:gap-6 xl:gap-10">
        <div className="relative lg:col-span-5 lg:col-start-1 lg:row-span-2 lg:pr-4">
          <div className="relative">
            <div
              className="pointer-events-none absolute -right-3 -bottom-3 hidden h-full w-full border border-border/50 sm:block lg:-right-5 lg:-bottom-5"
              aria-hidden="true"
            />
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-background sm:aspect-[4/5]">
              <div
                className="absolute inset-0 bg-[radial-gradient(ellipse_at_35%_25%,rgba(245,245,245,0.07)_0%,transparent_55%),linear-gradient(to_top,rgba(0,0,0,0.35),transparent_45%)]"
                aria-hidden="true"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-6 text-center">
                <p className="max-w-[11rem] text-sm leading-relaxed text-muted/75">
                  Founder portrait or practice film
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center lg:col-span-6 lg:col-start-7 lg:pt-8 xl:col-span-6">
          <h2
            id="introduction-heading"
            className="max-w-[12ch] text-[2rem] font-medium leading-[1.08] tracking-tight text-foreground sm:text-4xl sm:leading-[1.08] lg:text-[2.85rem] xl:text-[3.25rem]"
          >
            A life built around practice
          </h2>
          <p className="mt-8 max-w-md text-base leading-relaxed text-muted sm:text-lg">
            Sunya is the work of someone who learned that healing is not a
            performance—it is a return. After years of noise, achievement, and
            restlessness, the path bent toward stillness, breath, and honest
            embodiment.
          </p>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted sm:text-lg">
            What lives here is not a brand of wellness. It is a philosophy for
            people who want more presence, discipline without hardness, and a
            quieter relationship with the mind.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-border pt-8">
            <p className="text-xs font-medium tracking-[0.16em] text-foreground uppercase">
              Founder
            </p>
            <p className="text-xs font-medium tracking-[0.16em] text-muted uppercase">
              Guide
            </p>
            <p className="text-xs font-medium tracking-[0.16em] text-muted uppercase">
              Student of the path
            </p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
