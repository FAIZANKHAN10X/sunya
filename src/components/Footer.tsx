import Container from "@/components/Container";

/** Minimal footer — brand line only. */
export default function Footer() {
  return (
    <footer className="border-t border-border py-10 sm:py-12">
      <Container>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted sm:text-sm">© 2026 Sunya</p>
          <p className="text-[0.65rem] font-medium tracking-[0.18em] text-muted uppercase">
            Presence · Discipline · Return
          </p>
        </div>
      </Container>
    </footer>
  );
}
