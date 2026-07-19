import Link from "next/link";
import Container from "@/components/Container";

export default function Footer() {
  return (
    <footer className="border-t border-border/60 py-12 sm:py-16">
      <Container>
        <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-lg">
            <p className="text-sm font-medium tracking-[0.28em] text-foreground uppercase">
              Sunya
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              A personal philosophy of healing, presence, and quiet practice.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:items-end">
            <nav aria-label="Footer">
              <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
                <li>
                  <Link
                    href="/#newsletter"
                    className="transition-opacity duration-300 hover:text-foreground hover:opacity-100 motion-reduce:transition-none"
                  >
                    Newsletter
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="transition-opacity duration-300 hover:text-foreground hover:opacity-100 motion-reduce:transition-none"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
            <p className="text-sm text-muted">© 2026 Sunya</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
