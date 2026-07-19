import Container from "@/components/Container";
import HeroScrollHint from "@/components/sections/HeroScrollHint";
import VideoBackground from "@/components/VideoBackground";

/**
 * SECTION 01 — Identity Declaration
 * Opening statement that immediately communicates the philosophy.
 * Full-viewport hero with video atmosphere; keep id="hero" for video/scroll observers.
 */
export default function HeroSection() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative flex min-h-svh flex-col justify-center overflow-hidden scroll-mt-0"
    >
      <VideoBackground
        src="https://res.cloudinary.com/dmilaim58/video/upload/v1784299756/WhatsApp_Video_2026-07-17_at_17.44.40_axryf5.mp4"
        poster="https://res.cloudinary.com/dmilaim58/video/upload/so_0/v1769761123/samples/cld-sample-video.jpg"
      />

      {/* Quiet depth — no full-frame darken over the video */}
      <div className="pointer-events-none absolute inset-0 z-[1]" aria-hidden="true">
        <div className="absolute inset-x-0 top-0 h-px bg-border/50" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-border/40" />
        <div className="absolute top-1/2 left-1/2 h-[min(78vw,40rem)] w-[min(78vw,40rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground/[0.025]" />
      </div>

      <Container className="relative z-10 w-full px-5 py-24 sm:py-32">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <div className="mb-6 flex max-w-[min(100%,22rem)] items-center gap-3 sm:mb-10 sm:max-w-none sm:gap-4">
            <span className="h-px w-5 shrink-0 bg-border sm:w-8" aria-hidden="true" />
            <p className="text-[0.65rem] font-medium tracking-[0.22em] text-muted uppercase sm:text-xs sm:tracking-[0.28em]">
              A philosophy of healing
            </p>
            <span className="h-px w-5 shrink-0 bg-border sm:w-8" aria-hidden="true" />
          </div>

          <h1
            id="hero-heading"
            className="text-[2rem] font-medium leading-[1.12] tracking-[-0.03em] text-foreground sm:text-5xl sm:leading-[1.1] md:text-6xl lg:text-[4.75rem] lg:leading-[1.08]"
          >
            Return to the quiet
            <br className="hidden sm:block" />
            {" "}
            that was always yours.
          </h1>

          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted sm:mt-10 sm:max-w-md sm:text-base">
            Presence. Discipline. A life practiced from the inside out.
          </p>
        </div>
      </Container>

      <div className="absolute inset-x-0 bottom-6 z-10 flex flex-col items-center gap-3 sm:bottom-10">
        <span
          className="h-8 w-px bg-gradient-to-b from-transparent via-border to-border/80 sm:h-10"
          aria-hidden="true"
        />
        <HeroScrollHint />
      </div>
    </section>
  );
}
