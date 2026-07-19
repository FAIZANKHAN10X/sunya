"use client";

import { useState, type FormEvent } from "react";
import Button from "@/components/Button";
import SectionShell from "@/components/SectionShell";

/**
 * Newsletter — simple capture above the footer.
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
      <div className="w-full border-t border-border pt-12 sm:pt-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-5">
            <h2
              id="newsletter-heading"
              className="text-[1.75rem] font-medium leading-[1.1] tracking-tight text-foreground sm:text-3xl lg:text-[2.15rem]"
            >
              Quiet notes, when they matter.
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              Reflections, openings, and invitations—never noise.
            </p>
          </div>

          <div className="lg:col-span-7">
            {status === "success" ? (
              <div role="status" className="border-l border-border pl-6">
                <p className="text-base font-medium tracking-tight text-foreground sm:text-lg">
                  You’re on the list.
                </p>
                <p className="mt-2 text-sm text-muted">
                  Expect only what is worth your attention.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-5 min-h-11 text-xs font-medium tracking-[0.16em] text-muted uppercase transition-opacity duration-300 hover:opacity-70 motion-reduce:transition-none"
                >
                  Add another email
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-3 border-b border-border pb-1 sm:flex-row sm:items-end sm:gap-4"
                noValidate
              >
                <div className="min-w-0 flex-1">
                  <label
                    htmlFor="newsletter-email"
                    className="text-[0.65rem] font-medium tracking-[0.16em] text-muted uppercase"
                  >
                    Email
                  </label>
                  <input
                    id="newsletter-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    inputMode="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="mt-2 min-h-12 w-full border-0 border-b border-transparent bg-transparent px-0 text-base text-foreground placeholder:text-muted/50 focus:border-foreground/30 focus:outline-none sm:min-h-11 sm:text-sm"
                  />
                </div>
                <Button type="submit" className="w-full shrink-0 sm:w-auto">
                  Subscribe
                </Button>
              </form>
            )}
            <p className="mt-4 text-xs text-muted">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
