import Link from "next/link";
import SectionShell from "@/components/SectionShell";

const primaryLinkClass =
  "inline-flex min-h-11 w-full items-center justify-center rounded-soft bg-foreground px-6 py-3 text-sm font-medium tracking-[0.04em] text-background transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] touch-manipulation hover:opacity-90 motion-reduce:transition-none active:scale-[0.98] sm:w-auto sm:px-7 sm:py-3.5";

const secondaryLinkClass =
  "inline-flex min-h-11 w-full items-center justify-center rounded-soft border border-border bg-transparent px-6 py-3 text-sm font-medium tracking-[0.04em] text-foreground transition-[transform,border-color,background-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] touch-manipulation hover:border-foreground/40 hover:bg-surface motion-reduce:transition-none active:scale-[0.98] sm:w-auto sm:px-7 sm:py-3.5";

/**
 * SECTION 10 — Begin
 * Final emotional call-to-action on the homepage journey.
 * Minimal invitation; contact lives on its own page.
 */
export default function BeginSection() {
  return (
    <SectionShell id="begin" labelledBy="begin-heading" density="compact">
      <div className="relative w-full overflow-hidden rounded-soft border border-border">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(245,245,245,0.05)_0%,transparent_55%)]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
          aria-hidden="true"
        />

        <div className="relative mx-auto flex max-w-2xl flex-col items-center px-5 py-14 text-center sm:px-10 sm:py-20 lg:py-24">
          <div className="flex items-center gap-4">
            <span className="h-px w-6 bg-border" aria-hidden="true" />
            <p className="text-xs font-medium tracking-[0.22em] text-muted uppercase">
              Begin
            </p>
            <span className="h-px w-6 bg-border" aria-hidden="true" />
          </div>

          <h2
            id="begin-heading"
            className="mt-6 text-3xl font-medium tracking-tight text-foreground sm:mt-8 sm:text-4xl lg:text-5xl lg:leading-[1.1]"
          >
            The path opens here.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted sm:mt-6 sm:text-lg">
            No rush. No performance. When you are ready, take the next quiet
            step—join the list or write a note.
          </p>
          <div className="mt-10 flex w-full flex-col items-stretch gap-3 sm:mt-12 sm:w-auto sm:flex-row sm:items-center">
            <Link href="#newsletter" className={primaryLinkClass}>
              Join the list
            </Link>
            <Link href="/contact" className={secondaryLinkClass}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
