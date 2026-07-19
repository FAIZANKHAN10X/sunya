import TrackedCtaLink from "@/analytics/TrackedCtaLink";
import Container from "@/components/Container";
import HeroScrollHint from "@/components/sections/HeroScrollHint";
import VideoBackground from "@/components/VideoBackground";

/**
 * Identity opening — full-bleed film, left-weighted type on desktop.
 * Keep id="hero" for video/scroll observers.
 */
export default function HeroSection() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative flex min-h-svh flex-col justify-end overflow-hidden scroll-mt-0 sm:justify-center"
    >
      <VideoBackground
        src="https://res.cloudinary.com/dmilaim58/video/upload/v1784299756/WhatsApp_Video_2026-07-17_at_17.44.40_axryf5.mp4"
        poster="https://res.cloudinary.com/dmilaim58/video/upload/so_0/v1769761123/samples/cld-sample-video.jpg"
      />

      <div className="pointer-events-none absolute inset-0 z-[1]" aria-hidden="true">
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-background via-background/40 to-transparent sm:h-1/3 sm:via-background/25" />
      </div>

      <Container className="relative z-10 w-full pb-28 pt-28 sm:pb-32 sm:pt-32 lg:pb-24">
        <div className="grid w-full gap-10 lg:grid-cols-12 lg:items-end lg:gap-8">
          <div className="lg:col-span-8 xl:col-span-7">
            <p className="text-[0.65rem] font-medium tracking-[0.26em] text-muted uppercase sm:text-xs sm:tracking-[0.28em]">
              For seekers of presence — not performance
            </p>

            <h1
              id="hero-heading"
              className="mt-5 max-w-[14ch] text-[2.35rem] font-medium leading-[1.05] tracking-[-0.035em] text-foreground sm:mt-7 sm:max-w-none sm:text-5xl sm:leading-[1.05] md:text-6xl lg:text-[4.5rem] xl:text-[5.25rem] xl:leading-[1.02]"
            >
              Return to the quiet
              <span className="mt-1 block sm:mt-0">that was always yours.</span>
            </h1>

            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted sm:mt-8 sm:max-w-lg sm:text-base lg:text-lg">
              Presence. Discipline. A lived philosophy of healing—practice that
              holds up in the body, the mind, and ordinary life.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:mt-11 sm:flex-row sm:items-center sm:gap-4">
              <TrackedCtaLink
                href="#introduction"
                ctaId="hero_enter_path"
                ctaText="Enter the path"
                ctaLocation="hero"
                className="inline-flex min-h-12 items-center justify-center rounded-soft bg-foreground px-7 text-sm font-medium tracking-[0.04em] text-background transition-opacity duration-300 hover:opacity-90 motion-reduce:transition-none active:scale-[0.98] sm:min-h-11"
              >
                Enter the path
              </TrackedCtaLink>
              <TrackedCtaLink
                href="#framework"
                ctaId="hero_framework"
                ctaText="The framework"
                ctaLocation="hero"
                className="inline-flex min-h-12 items-center justify-center px-2 text-sm font-medium tracking-[0.06em] text-foreground underline-offset-4 transition-opacity duration-300 hover:opacity-70 motion-reduce:transition-none sm:min-h-11"
              >
                The framework →
              </TrackedCtaLink>
            </div>
          </div>

          <div className="hidden lg:col-span-4 lg:flex lg:flex-col lg:items-end lg:justify-end xl:col-span-5">
            <button
              type="button"
              disabled
              className="group flex max-w-[14rem] flex-col items-end gap-3 text-right"
              aria-label="Showreel coming soon"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-border transition-colors duration-300 group-hover:border-foreground/40 motion-reduce:transition-none">
                <span className="ml-0.5 border-y-[6px] border-l-[10px] border-y-transparent border-l-foreground/80" />
              </span>
              <span className="text-xs font-medium tracking-[0.2em] text-muted uppercase">
                Play showreel
              </span>
            </button>
          </div>
        </div>
      </Container>

      <div className="absolute inset-x-0 bottom-6 z-10 flex justify-center sm:bottom-8">
        <HeroScrollHint />
      </div>
    </section>
  );
}
