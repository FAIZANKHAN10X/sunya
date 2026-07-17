import Container from "@/components/Container";
import HeroScrollHint from "@/components/sections/HeroScrollHint";
import VideoBackground from "@/components/VideoBackground";

export default function HeroSection() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative flex min-h-svh flex-col justify-center overflow-hidden"
    >
      <VideoBackground
        src="https://res.cloudinary.com/dmilaim58/video/upload/v1769761123/samples/cld-sample-video.mp4"
        poster="https://res.cloudinary.com/dmilaim58/video/upload/so_0/v1769761123/samples/cld-sample-video.jpg"
      />

      {/* Quiet depth — restrained, not decorative noise */}
      <div className="pointer-events-none absolute inset-0 z-[1]" aria-hidden="true">
        <div className="absolute inset-x-0 top-0 h-px bg-border/60" />
        <div className="absolute top-1/2 left-1/2 h-[min(70vw,36rem)] w-[min(70vw,36rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground/[0.03]" />
      </div>

      <Container className="relative z-10 w-full py-28 sm:py-32">
        <h1
          id="hero-heading"
          className="mx-auto max-w-4xl text-center text-4xl font-medium tracking-[-0.03em] text-foreground sm:text-5xl md:text-6xl lg:text-[4.75rem] lg:leading-[1.1]"
        >
          Reclaim the space
          <br className="hidden sm:block" />
          between your thoughts and your body.
        </h1>
      </Container>

      <div className="absolute inset-x-0 bottom-8 z-10 flex justify-center sm:bottom-10">
        <HeroScrollHint />
      </div>
    </section>
  );
}
