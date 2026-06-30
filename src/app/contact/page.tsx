import type { Metadata } from "next";
import { Clock } from "lucide-react";
import { siteConfig, createPageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { ContactWhatsApp } from "@/components/contact/ContactWhatsApp";
import { ClinicLocationCards } from "@/components/shared/ClinicLocationCards";
import { GoogleMapEmbed } from "@/components/shared/GoogleMapEmbed";
import { ClickToCall } from "@/components/shared/ClickToCall";
import { PatientResources } from "@/components/shared/PatientResources";

export const metadata: Metadata = createPageMetadata(
  "Contact Us",
  "Contact MVN Smile Makers Dental Care via WhatsApp or phone. Find all three clinic locations in Patna and Hilsa with Google Maps directions."
);

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        description="Reach us on WhatsApp, call directly, or visit any of our three clinics in Patna and Hilsa."
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-5">
            <div className="space-y-6 lg:col-span-2">
              <div>
                <h3 className="mb-4 font-semibold">Our Clinic Locations</h3>
                <ClinicLocationCards />
              </div>

              <div className="rounded-xl border bg-white p-5">
                <h3 className="mb-2 font-semibold">Call Us</h3>
                <p className="mb-3 text-sm text-muted-foreground">
                  Tap to call directly from your phone
                </p>
                <div className="space-y-2">
                  {siteConfig.phones.map((phone) => (
                    <ClickToCall key={phone} phone={phone} variant="button" className="w-full justify-center" />
                  ))}
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
              <ContactWhatsApp />
            </div>
          </div>

          <div className="mt-16">
            <h3 className="mb-6 text-center text-2xl font-bold">
              Find Us on the Map
            </h3>
            <div className="grid gap-6 lg:grid-cols-3">
              {siteConfig.locations.map((location) => (
                <GoogleMapEmbed key={location.id} location={location} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <PatientResources />
    </>
  );
}
