import type { Metadata } from "next";
import { Phone, Mail, Clock } from "lucide-react";
import { siteConfig, createPageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { ContactForm } from "@/components/forms/ContactForm";
import { ClinicLocationCards } from "@/components/shared/ClinicLocationCards";
import { PhoneList } from "@/components/shared/PhoneList";

export const metadata: Metadata = createPageMetadata(
  "Contact Us",
  "Contact MVN Smile Makers Dental Care at our Patna and Hilsa clinics. Call 9835938221 or 7004417755, or send us a message to book your visit."
);

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        description="Visit us at any of our three clinics in Patna and Hilsa, or reach out by phone — we're here to help."
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-5">
            <div className="space-y-6 lg:col-span-2">
              <div>
                <h3 className="mb-4 font-semibold">Our Clinic Locations</h3>
                <ClinicLocationCards />
              </div>

              <div className="flex gap-4 rounded-xl border bg-white p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Call Us</h3>
                  <PhoneList className="mt-2 text-muted-foreground" stacked />
                </div>
              </div>

              <div className="flex gap-4 rounded-xl border bg-white p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Email Us</h3>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="mt-1 text-sm text-muted-foreground hover:text-primary"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="rounded-xl border bg-white p-5">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">Office Hours</h3>
                </div>
                <ul className="space-y-2">
                  {siteConfig.hours.map((h) => (
                    <li
                      key={h.day}
                      className="flex justify-between text-sm text-muted-foreground"
                    >
                      <span className="font-medium text-foreground">
                        {h.day}
                      </span>
                      <span>{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
