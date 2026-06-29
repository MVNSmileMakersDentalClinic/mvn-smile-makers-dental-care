import type { Metadata } from "next";
import { Phone, Clock, Shield } from "lucide-react";
import { siteConfig, createPageMetadata, formatPhoneDisplay, getTelLink } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { AppointmentForm } from "@/components/forms/AppointmentForm";

export const metadata: Metadata = createPageMetadata(
  "Book an Appointment",
  "Schedule your dental appointment at MVN Smile Makers Dental Care. Choose your preferred service, doctor, date, and time. Same-day emergency slots available."
);

export default function AppointmentPage() {
  return (
    <>
      <PageHero
        title="Book an Appointment"
        description="Fill in your details and send your booking request on WhatsApp. Our team will confirm your appointment shortly."
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-10 grid gap-4 sm:grid-cols-3">
            <div className="flex items-center gap-3 rounded-lg border bg-white p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium">Prefer to call?</p>
                <div className="mt-1 space-y-1">
                  {siteConfig.phones.map((phone) => (
                    <a
                      key={phone}
                      href={getTelLink(phone)}
                      className="block text-sm text-primary hover:underline"
                    >
                      {formatPhoneDisplay(phone)}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg border bg-white p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium">Quick confirmation</p>
                <p className="text-sm text-muted-foreground">
                  Within 24 hours
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg border bg-white p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium">Your info is secure</p>
                <p className="text-sm text-muted-foreground">
                  HIPAA compliant
                </p>
              </div>
            </div>
          </div>

          <AppointmentForm />
        </div>
      </section>
    </>
  );
}
