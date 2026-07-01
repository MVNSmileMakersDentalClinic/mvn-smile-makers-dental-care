import type { Metadata } from "next";
import { createPageMetadata, siteConfig } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = createPageMetadata(
  "Terms of Service",
  "Terms of service for using the MVN Smile Makers Dental Care website and services."
);

export default function TermsOfServicePage() {
  return (
    <>
      <PageHero
        title="Terms of Service"
        description="Terms and conditions for using our website and dental services."
      />
      <section className="py-16">
        <div className="container mx-auto max-w-3xl px-4 prose prose-slate">
          <p className="text-muted-foreground">Last updated: June 2026</p>

          <h2 className="mt-8 text-xl font-semibold">Use of Website</h2>
          <p className="mt-2 text-muted-foreground">
            This website is provided by {siteConfig.name} for informational
            purposes and appointment booking via WhatsApp. By using this site, you
            agree to these terms.
          </p>

          <h2 className="mt-8 text-xl font-semibold">Appointments</h2>
          <p className="mt-2 text-muted-foreground">
            Submitting an appointment request via WhatsApp does not guarantee a
            confirmed slot. Our team will confirm availability based on clinic
            schedule — especially for the Hilsa branch, which operates on limited
            days. Please arrive on time for confirmed appointments.
          </p>

          <h2 className="mt-8 text-xl font-semibold">Medical Disclaimer</h2>
          <p className="mt-2 text-muted-foreground">
            Information on this website is for general purposes only and does not
            replace professional dental advice. Always consult our dentists for
            diagnosis and treatment recommendations.
          </p>

          <h2 className="mt-8 text-xl font-semibold">Contact</h2>
          <p className="mt-2 text-muted-foreground">
            Questions about these terms? Reach us at {siteConfig.email} or call{" "}
            {siteConfig.phones[0]}.
          </p>
        </div>
      </section>
    </>
  );
}
