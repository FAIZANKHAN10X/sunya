import Container from "@/components/Container";

export default function Footer() {
  return (
    <footer className="py-16 sm:py-20">
      <Container>
        <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-lg">
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-foreground">
              Sunya
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              A personal philosophy of healing, presence, and quiet practice.
            </p>
          </div>
          <p className="text-sm text-muted">© 2026 Sunya</p>
        </div>
      </Container>
    </footer>
  );
}
