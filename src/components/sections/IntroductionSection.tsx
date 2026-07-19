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
      <div className="grid w-full gap-12 lg:grid-cols-12 lg:items-center lg:gap-16 xl:gap-20">
        {/* Media slot — replace with portrait or short film */}
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-soft border border-border bg-surface">
            <div
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,245,245,0.05)_0%,transparent_68%)]"
              aria-hidden="true"
            />
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

        <div className="lg:col-span-7">
          <SectionLabel>Introduction</SectionLabel>
          <h2
            id="introduction-heading"
            className="mt-5 text-3xl font-medium tracking-tight text-foreground sm:text-4xl lg:text-5xl lg:leading-[1.1]"
          >
            A life built around practice
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Sunya is the work of someone who learned that healing is not a
            performance—it is a return. After years of noise, achievement, and
            restlessness, the path bent toward stillness, breath, and honest
            embodiment.
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            What lives here is not a brand of wellness. It is a philosophy for
            people who want to live with more presence, discipline without
            hardness, and a quieter relationship with their own mind.
          </p>
          <p className="mt-10 text-xs font-medium tracking-[0.18em] text-muted uppercase">
            Founder · Guide · Student of the path
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
