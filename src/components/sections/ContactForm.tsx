"use client";

import { useState, type FormEvent } from "react";
import { trackGenerateLead } from "@/analytics/track";
import Button from "@/components/Button";

/**
 * Contact form for /contact — presentational until a backend is connected.
 */
export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("success");
    event.currentTarget.reset();
    trackGenerateLead({
      lead_type: "contact",
      form_id: "contact_page",
      form_name: "Contact",
    });
  };

  if (status === "success") {
    return (
      <div
        className="rounded-soft border border-border bg-surface px-6 py-10 sm:px-8"
        role="status"
      >
        <p className="text-lg font-medium tracking-tight text-foreground">
          Message received.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
          Thank you for writing. A reply will come with care and without rush.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 text-xs font-medium tracking-[0.16em] text-muted uppercase transition-opacity duration-300 hover:opacity-70 motion-reduce:transition-none"
        >
          Send another
        </button>
      </div>
    );
  }

  const fieldClass =
    "mt-2 w-full rounded-soft border border-border bg-background px-4 py-3 text-base text-foreground placeholder:text-muted/70 transition-[border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus:border-foreground/30 focus:outline-none motion-reduce:transition-none sm:text-sm";

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div>
        <label
          htmlFor="contact-name"
          className="text-xs font-medium tracking-[0.16em] text-muted uppercase"
        >
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          placeholder="Your name"
          className={fieldClass}
        />
      </div>
      <div>
        <label
          htmlFor="contact-email"
          className="text-xs font-medium tracking-[0.16em] text-muted uppercase"
        >
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          required
          placeholder="you@example.com"
          className={fieldClass}
        />
      </div>
      <div>
        <label
          htmlFor="contact-message"
          className="text-xs font-medium tracking-[0.16em] text-muted uppercase"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder="What would you like to share?"
          className={`${fieldClass} min-h-[8rem] resize-y`}
        />
      </div>
      <div className="pt-2">
        <Button type="submit">Send message</Button>
      </div>
    </form>
  );
}
