import Button from "@/components/Button";
import SectionIntro from "@/components/sections/SectionIntro";
import SectionShell from "@/components/SectionShell";

const details = [
  { label: "Email", value: "hello@sunya.studio" },
  { label: "Studio", value: "12 Quiet Lane, City Center" },
  { label: "Hours", value: "Mon–Sat, 7:00–20:00" },
] as const;

export default function ContactSection() {
  return (
    <SectionShell id="contact" labelledBy="contact-heading">
      <div className="grid w-full gap-14 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="lg:col-span-6">
          <SectionIntro
            id="contact-heading"
            label="Contact"
            heading="We would love to hear from you"
            description="Questions about classes, private sessions, or simply where to begin? Reach out—we respond with care and without rush."
            descriptionClassName="max-w-xl"
          />
          <div className="mt-10">
            <Button variant="primary">Send a message</Button>
          </div>
        </div>
        <dl className="grid gap-8 rounded-soft border border-border bg-surface p-8 sm:grid-cols-3 sm:gap-6 sm:p-10 lg:col-span-6 lg:grid-cols-1 lg:gap-10 xl:p-12">
          {details.map((detail) => (
            <div key={detail.label}>
              <dt className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
                {detail.label}
              </dt>
              <dd className="mt-3 text-base text-foreground sm:text-lg">
                {detail.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </SectionShell>
  );
}
