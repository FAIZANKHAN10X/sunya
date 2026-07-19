import Container from "@/components/Container";

/** Minimal footer — copyright + credit. */
export default function Footer() {
  return (
    <footer className="border-t border-border py-10 sm:py-12">
      <Container>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted sm:text-sm">
            ©2026 SUNYA. All rights reserved.
          </p>
          <p className="text-xs text-muted sm:text-sm">
            A Website by{" "}
            <a
              href="https://www.instagram.com/fznmco/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors duration-300 hover:underline hover:underline-offset-4 motion-reduce:transition-none"
            >
              FZNMCO
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
