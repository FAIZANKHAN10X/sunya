import Button from "@/components/Button";
import SectionShell from "@/components/SectionShell";

/**
 * SECTION 10 — Begin
 * Final emotional call-to-action.
 * Minimal, refined, memorable—invitation, not a sales close.
 */
export default function BeginSection() {
  return (
    <SectionShell id="begin" labelledBy="begin-heading">
      <div className="relative w-full overflow-hidden rounded-soft border border-border">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(245,245,245,0.05)_0%,transparent_55%)]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
          aria-hidden="true"
        />

        <div className="relative mx-auto flex max-w-2xl flex-col items-center px-6 py-20 text-center sm:px-10 sm:py-24 lg:py-28">
          <div className="flex items-center gap-4">
            <span className="h-px w-6 bg-border" aria-hidden="true" />
            <p className="text-xs font-medium tracking-[0.22em] text-muted uppercase">
              Begin
            </p>
            <span className="h-px w-6 bg-border" aria-hidden="true" />
          </div>

          <h2
            id="begin-heading"
            className="mt-8 text-3xl font-medium tracking-tight text-foreground sm:text-4xl lg:text-5xl lg:leading-[1.1]"
          >
            The path opens here.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted sm:text-lg">
            No rush. No performance. When you are ready, stay close—and take the
            next quiet step.
          </p>
          <div className="mt-12">
            <Button variant="primary">Stay close</Button>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
