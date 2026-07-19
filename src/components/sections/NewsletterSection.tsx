"use client";

import { useState, type FormEvent } from "react";
import Button from "@/components/Button";
import SectionShell from "@/components/SectionShell";

/**
 * Newsletter — above the footer.
 * Clean signup designed for conversion without a sales funnel feel.
 * Presentational only until a real list provider is wired.
 */
export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) return;
    setStatus("success");
    setEmail("");
  };

  return (
    <SectionShell
      id="newsletter"
      labelledBy="newsletter-heading"
      density="compact"
    >
      <div className="relative w-full overflow-hidden rounded-soft border border-border bg-surface/50">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(245,245,245,0.05)_0%,transparent_50%),radial-gradient(ellipse_at_80%_100%,rgba(245,245,245,0.03)_0%,transparent_45%)]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
          aria-hidden="true"
        />

        <div className="relative grid gap-10 px-6 py-12 sm:gap-12 sm:px-10 sm:py-14 lg:grid-cols-12 lg:items-center lg:gap-16 lg:px-14 lg:py-16">
          <div className="lg:col-span-5">
            <p className="text-xs font-medium tracking-[0.22em] text-muted uppercase">
              Stay close
            </p>
            <h2
              id="newsletter-heading"
              className="mt-4 text-2xl font-medium tracking-tight text-foreground sm:text-3xl lg:text-4xl lg:leading-[1.15]"
            >
              Quiet notes, when they matter.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted sm:text-base">
              Reflections, openings, and invitations—never noise. One list, sent
              with care.
            </p>
          </div>

          <div className="lg:col-span-7">
            {status === "success" ? (
              <div
                className="rounded-soft border border-border bg-background/60 px-6 py-8 text-center sm:text-left"
                role="status"
              >
                <p className="text-base font-medium tracking-tight text-foreground sm:text-lg">
                  You’re on the list.
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Thank you—expect only what is worth your attention.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-xs font-medium tracking-[0.16em] text-muted uppercase transition-opacity duration-300 hover:opacity-70 motion-reduce:transition-none"
                >
                  Add another email
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-3 sm:flex-row sm:items-stretch sm:gap-3"
                noValidate
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  inputMode="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="min-h-12 w-full flex-1 rounded-soft border border-border bg-background px-4 text-base text-foreground placeholder:text-muted/70 transition-[border-color,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus:border-foreground/30 focus:outline-none focus:ring-0 motion-reduce:transition-none sm:min-h-11 sm:text-sm"
                />
                <Button type="submit" className="w-full shrink-0 sm:w-auto">
                  Subscribe
                </Button>
              </form>
            )}
            <p className="mt-4 text-xs leading-relaxed text-muted">
              No spam. Unsubscribe anytime. Privacy respected.
            </p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
