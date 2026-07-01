import type { Metadata } from "next";
import { createPageMetadata, siteConfig } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = createPageMetadata(
  "Privacy Policy",
  "Privacy policy for MVN Smile Makers Dental Care — how we handle your personal information."
);

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        description="How MVN Smile Makers Dental Care collects, uses, and protects your information."
      />
      <section className="py-16">
        <div className="container mx-auto max-w-3xl px-4 prose prose-slate">
          <p className="text-muted-foreground">Last updated: June 2026</p>

          <h2 className="mt-8 text-xl font-semibold">Information We Collect</h2>
          <p className="mt-2 text-muted-foreground">
            When you contact us via WhatsApp, phone, or visit our clinics, we may
            collect your name, phone number, email address, appointment details,
            and medical information relevant to your dental care.
          </p>

          <h2 className="mt-8 text-xl font-semibold">How We Use Your Information</h2>
          <p className="mt-2 text-muted-foreground">
            We use your information solely to schedule appointments, provide dental
            treatment, follow up on your care, and communicate clinic updates. We
            do not sell or share your personal data with third parties for
            marketing purposes.
          </p>

          <h2 className="mt-8 text-xl font-semibold">Data Storage</h2>
          <p className="mt-2 text-muted-foreground">
            Patient records are maintained securely at our clinic locations. Our
            website does not store form submissions — appointment requests are
            sent directly through WhatsApp.
          </p>

          <h2 className="mt-8 text-xl font-semibold">Contact</h2>
          <p className="mt-2 text-muted-foreground">
            For privacy-related questions, contact us at {siteConfig.email} or call{" "}
            {siteConfig.phones[0]}.
          </p>
        </div>
      </section>
    </>
  );
}
