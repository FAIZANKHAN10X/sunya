import Container from "@/components/Container";

const frames = [
  { label: "Practice", ratio: "aspect-[4/5]", span: "md:col-span-5" },
  { label: "Stillness", ratio: "aspect-[16/10]", span: "md:col-span-7" },
  { label: "Place", ratio: "aspect-[16/11]", span: "md:col-span-7" },
  { label: "Detail", ratio: "aspect-[4/5]", span: "md:col-span-5" },
] as const;

/**
 * Visual chapter — gallery placeholders. Full-width container.
 */
export default function MediaChapterSection() {
  return (
    <section
      id="presence"
      aria-labelledby="presence-heading"
      className="relative scroll-mt-20 border-y border-border/60 bg-background py-16 sm:scroll-mt-24 sm:py-20 md:py-28"
    >
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <h2
            id="presence-heading"
            className="text-[1.75rem] font-medium leading-[1.1] tracking-tight text-foreground sm:text-3xl lg:text-4xl"
          >
            The practice, seen.
          </h2>
          <p className="max-w-xs text-sm leading-relaxed text-muted sm:text-right">
            Bodies, rooms, breath, place. Replace with graded stills when ready.
          </p>
        </div>
      </Container>

      <div className="mt-10 sm:mt-14 md:hidden">
        <ul className="flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain px-5 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {frames.map((frame, index) => (
            <li key={frame.label} className="w-[78vw] shrink-0 snap-center">
              <div
                className={`relative w-full overflow-hidden border border-border bg-surface ${frame.ratio}`}
              >
                <MediaPlaceholder label={frame.label} index={index} />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <Container className="mt-14 hidden md:block">
        <ul className="grid grid-cols-12 gap-4 lg:gap-5">
          {frames.map((frame, index) => (
            <li key={frame.label} className={frame.span}>
              <div
                className={`relative w-full overflow-hidden border border-border bg-surface ${frame.ratio}`}
              >
                <MediaPlaceholder label={frame.label} index={index} />
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function MediaPlaceholder({
  label,
  index,
}: {
  label: string;
  index: number;
}) {
  return (
    <>
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,245,245,0.04)_0%,transparent_65%)]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-6">
        <span className="text-[0.65rem] font-medium tracking-[0.18em] text-muted tabular-nums">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div>
          <p className="text-sm font-medium tracking-tight text-foreground">
            {label}
          </p>
          <p className="mt-1 text-xs text-muted">Image placeholder</p>
        </div>
      </div>
    </>
  );
}
