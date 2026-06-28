import type { Metadata } from "next";
import Link from "next/link";
import { GraduationCap } from "lucide-react";
import { doctors } from "@/lib/data";
import { createPageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { CTASection } from "@/components/layout/CTASection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = createPageMetadata(
  "Our Doctors",
  "Meet Dr. Navin Kumar and Dr. Veena at MVN Smile Makers Dental Care — certified specialists in implantology, endodontics, and aesthetic dentistry in Patna and Hilsa."
);

export default function DoctorsPage() {
  return (
    <>
      <PageHero
        title="Meet Our Doctors"
        description="Our experienced dental professionals bring specialized training in implants, endodontics, and aesthetic dentistry to serve patients across Bihar."
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            {doctors.map((doctor) => (
              <article
                key={doctor.id}
                className="flex flex-col overflow-hidden rounded-xl border bg-white sm:flex-row"
              >
                <div className="flex w-full shrink-0 items-center justify-center bg-gradient-to-br from-primary/15 to-primary/5 p-8 sm:w-48">
                  <div className="flex h-28 w-28 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground">
                    {doctor.name
                      .split(" ")
                      .slice(1)
                      .map((n) => n[0])
                      .join("")}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <Badge variant="secondary" className="mb-2 w-fit">
                    {doctor.specialty}
                  </Badge>
                  <h2 className="text-xl font-semibold">{doctor.name}</h2>
                  <p className="text-sm font-medium text-primary">
                    {doctor.title}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {doctor.bio}
                  </p>
                  <div className="mt-4 space-y-1">
                    {doctor.credentials.map((cred) => (
                      <div
                        key={cred}
                        className="flex items-center gap-2 text-xs text-muted-foreground"
                      >
                        <GraduationCap className="h-3.5 w-3.5 shrink-0 text-primary" />
                        {cred}
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Ready to schedule with one of our doctors?
            </p>
            <Button asChild className="mt-4" size="lg">
              <Link href="/appointment">Book an Appointment</Link>
            </Button>
          </div>
        </div>
      </section>

      <CTASection
        title="Expert Care You Can Trust"
        description="Our doctors are committed to providing personalized treatment plans tailored to your unique needs and goals."
      />
    </>
  );
}
