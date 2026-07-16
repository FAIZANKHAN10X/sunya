import Container from "@/components/Container";
import MobileMenu from "@/components/MobileMenu";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-background">
      <Container>
        <div className="flex h-16 items-center justify-between gap-6 sm:h-20">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-foreground sm:text-base sm:tracking-[0.32em]">
            Sunya
          </p>
          <div className="flex items-center gap-4 sm:gap-5">
            <ThemeToggle />
            <MobileMenu />
          </div>
        </div>
      </Container>
    </header>
  );
}
