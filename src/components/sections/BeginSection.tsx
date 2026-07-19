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
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center text-center">
        <p className="text-xs font-medium tracking-[0.22em] text-muted uppercase">
          Begin
        </p>
        <h2
          id="begin-heading"
          className="mt-6 text-3xl font-medium tracking-tight text-foreground sm:text-4xl lg:text-5xl lg:leading-[1.1]"
        >
          The path opens here.
        </h2>
        <p className="mt-6 max-w-md text-base leading-relaxed text-muted sm:text-lg">
          No rush. No performance. When you are ready, stay close—and take the
          next quiet step.
        </p>
        <div className="mt-10">
          <Button variant="primary">Stay close</Button>
        </div>
      </div>
    </SectionShell>
  );
}
