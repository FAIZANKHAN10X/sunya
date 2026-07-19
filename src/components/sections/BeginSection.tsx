import TrackedCtaLink from "@/analytics/TrackedCtaLink";
import Container from "@/components/Container";

/**
 * Begin — full-scene invitation without section name kickers.
 */
export default function BeginSection() {
  return (
    <section
      id="begin"
      aria-labelledby="begin-heading"
      className="relative flex min-h-[85svh] scroll-mt-20 items-center overflow-hidden border-t border-border/60 sm:scroll-mt-24 md:min-h-svh"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_120%,rgba(245,245,245,0.06)_0%,transparent_55%)]"
        aria-hidden="true"
      />

      <Container className="relative w-full py-20 sm:py-24 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-8">
          <div className="lg:col-span-8">
            <h2
              id="begin-heading"
              className="max-w-[12ch] text-[2.5rem] font-medium leading-[1.02] tracking-[-0.03em] text-foreground sm:text-5xl sm:leading-[1.02] lg:text-6xl xl:text-[4.5rem]"
            >
              The path opens here.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted sm:mt-8 sm:text-lg">
              No rush. No performance. When you are ready, take the next quiet
              step—join the list or write a note.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center lg:col-span-4 lg:flex-col lg:items-stretch xl:pl-8">
            <TrackedCtaLink
              href="#newsletter"
              ctaId="begin_join_list"
              ctaText="Join the list"
              ctaLocation="begin"
              className="inline-flex min-h-12 items-center justify-center rounded-soft bg-foreground px-7 text-sm font-medium tracking-[0.04em] text-background transition-opacity duration-300 hover:opacity-90 motion-reduce:transition-none active:scale-[0.98]"
            >
              Join the list
            </TrackedCtaLink>
            <TrackedCtaLink
              href="/contact"
              ctaId="begin_contact"
              ctaText="Contact"
              ctaLocation="begin"
              className="inline-flex min-h-12 items-center justify-center border border-border px-7 text-sm font-medium tracking-[0.04em] text-foreground transition-[border-color,background-color] duration-300 hover:border-foreground/35 hover:bg-surface motion-reduce:transition-none active:scale-[0.98]"
            >
              Contact
            </TrackedCtaLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
