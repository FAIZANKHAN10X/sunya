import SectionLabel from "@/components/SectionLabel";
import SectionShell from "@/components/SectionShell";

/**
 * SECTION 02 — Introduction
 * Personal introduction and credibility.
 * Media frame is a production slot; copy stays short and grounded.
 */
export default function IntroductionSection() {
  return (
    <SectionShell id="introduction" labelledBy="introduction-heading">
      <div className="grid w-full gap-14 lg:grid-cols-12 lg:items-center lg:gap-16 xl:gap-24">
        {/* Media slot — replace with portrait or short film */}
        <div className="relative lg:col-span-5">
          <div
            className="pointer-events-none absolute -inset-3 rounded-[calc(var(--radius-soft)+0.5rem)] border border-border/60 sm:-inset-4"
            aria-hidden="true"
          />
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-soft border border-border bg-surface">
            <div
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(245,245,245,0.06)_0%,transparent_55%),radial-gradient(ellipse_at_70%_80%,rgba(245,245,245,0.03)_0%,transparent_50%)]"
              aria-hidden="true"
            />
            {/* Corner marks — editorial frame */}
            <div className="pointer-events-none absolute inset-5 sm:inset-6" aria-hidden="true">
              <span className="absolute top-0 left-0 h-4 w-4 border-t border-l border-foreground/25" />
              <span className="absolute top-0 right-0 h-4 w-4 border-t border-r border-foreground/25" />
              <span className="absolute bottom-0 left-0 h-4 w-4 border-b border-l border-foreground/25" />
              <span className="absolute right-0 bottom-0 h-4 w-4 border-r border-b border-foreground/25" />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
              <p className="text-xs font-medium tracking-[0.22em] text-muted uppercase">
                Portrait
              </p>
              <p className="max-w-[12rem] text-sm leading-relaxed text-muted/80">
                Still or short film of the founder in practice
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 lg:pl-2">
          <div className="flex items-center gap-4">
            <SectionLabel>Introduction</SectionLabel>
            <span className="h-px w-8 bg-border sm:w-10" aria-hidden="true" />
          </div>
          <h2
            id="introduction-heading"
            className="mt-5 text-3xl font-medium tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12] xl:text-5xl"
          >
            A life built around practice
          </h2>
          <div className="mt-8 space-y-5 border-l border-border pl-6 sm:mt-10 sm:pl-8">
            <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Sunya is the work of someone who learned that healing is not a
              performance—it is a return. After years of noise, achievement, and
              restlessness, the path bent toward stillness, breath, and honest
              embodiment.
            </p>
            <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              What lives here is not a brand of wellness. It is a philosophy for
              people who want to live with more presence, discipline without
              hardness, and a quieter relationship with their own mind.
            </p>
          </div>
          <p className="mt-10 text-xs font-medium tracking-[0.18em] text-muted uppercase sm:mt-12">
            Founder · Guide · Student of the path
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
