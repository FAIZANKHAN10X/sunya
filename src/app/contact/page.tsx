import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import ContactForm from "@/components/sections/ContactForm";
import SiteShell from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Contact · Sunya",
  description: "Reach out to Sunya—questions, collaboration, or simply to begin.",
};

/**
 * Dedicated contact page — kept off the homepage journey.
 */
export default function ContactPage() {
  return (
    <SiteShell>
      <main>
        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="relative scroll-mt-20 pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24"
        >
          <Container>
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-20">
              <div className="lg:col-span-5">
                <p className="text-xs font-medium tracking-[0.22em] text-muted uppercase">
                  Contact
                </p>
                <h1
                  id="contact-heading"
                  className="mt-5 text-3xl font-medium tracking-tight text-foreground sm:text-4xl lg:text-5xl lg:leading-[1.1]"
                >
                  Write when you’re ready.
                </h1>
                <p className="mt-6 max-w-md text-base leading-relaxed text-muted sm:text-lg">
                  Questions about practice, collaboration, or simply where to
                  begin—send a note. Replies come with care and without rush.
                </p>

                <dl className="mt-10 space-y-6 border-t border-border pt-8">
                  <div>
                    <dt className="text-xs font-medium tracking-[0.16em] text-muted uppercase">
                      Email
                    </dt>
                    <dd className="mt-2 text-base text-foreground sm:text-lg">
                      hello@sunya.studio
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium tracking-[0.16em] text-muted uppercase">
                      Response
                    </dt>
                    <dd className="mt-2 text-base text-muted sm:text-lg">
                      Usually within a few days
                    </dd>
                  </div>
                </dl>

                <p className="mt-10">
                  <Link
                    href="/"
                    className="text-xs font-medium tracking-[0.16em] text-muted uppercase transition-opacity duration-300 hover:opacity-70 motion-reduce:transition-none"
                  >
                    ← Back home
                  </Link>
                </p>
              </div>

              <div className="lg:col-span-7">
                <div className="rounded-soft border border-border bg-surface/40 p-6 sm:p-8 lg:p-10">
                  <ContactForm />
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </SiteShell>
  );
}
