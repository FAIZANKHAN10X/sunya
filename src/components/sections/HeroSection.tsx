import Button from "@/components/Button";
import Container from "@/components/Container";
import SectionLabel from "@/components/SectionLabel";
import HeroScrollHint from "@/components/sections/HeroScrollHint";

export default function HeroSection() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative flex min-h-svh flex-col justify-center overflow-hidden"
    >
      {/* Quiet depth — restrained, not decorative noise */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-x-0 top-0 h-px bg-border/60" />
        <div className="absolute top-1/2 left-1/2 h-[min(70vw,36rem)] w-[min(70vw,36rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground/[0.03]" />
      </div>

      <Container className="relative z-10 w-full py-28 sm:py-32">
        <div className="grid w-full gap-14 lg:grid-cols-12 lg:items-end lg:gap-20">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4">
              <span
                className="hidden h-px w-8 bg-muted/70 sm:block"
                aria-hidden="true"
              />
              <SectionLabel>Welcome</SectionLabel>
            </div>
            <h1
              id="hero-heading"
              className="mt-7 max-w-4xl text-4xl font-medium tracking-[-0.03em] text-foreground sm:text-5xl md:text-6xl lg:text-[4.75rem] lg:leading-[1.02]"
            >
              Space to return
              <br className="hidden sm:block" /> to yourself
            </h1>
          </div>

          <div className="flex flex-col gap-9 border-l border-border/80 pl-6 sm:pl-8 lg:col-span-4 lg:pb-1">
            <p className="max-w-md text-base leading-relaxed text-muted sm:text-lg">
              Sunya is a quiet home for mindful movement, breath, and presence.
              Practice without pressure—whether you are beginning or deepening a
              lifelong path.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button variant="primary">Begin practice</Button>
              <Button variant="secondary">Explore philosophy</Button>
            </div>
          </div>
        </div>
      </Container>

      <div className="absolute inset-x-0 bottom-8 z-10 flex justify-center sm:bottom-10">
        <HeroScrollHint />
      </div>
    </section>
  );
}
