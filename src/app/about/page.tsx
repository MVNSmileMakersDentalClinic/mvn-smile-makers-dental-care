import type { Metadata } from "next";
import Link from "next/link";
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  Building2,
} from "lucide-react";
import { createPageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { CTASection } from "@/components/layout/CTASection";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = createPageMetadata(
  "About Us",
  "Learn about MVN Smile Makers Dental Care's mission, values, and commitment to providing exceptional dental care since 2010."
);

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description:
      "We treat every patient with kindness, respect, and genuine care for their wellbeing.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We pursue the highest standards in clinical care, continuing education, and patient outcomes.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "Clear communication about treatment options, costs, and what to expect at every visit.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "We're proud to serve our local community and build lasting relationships with our patients.",
  },
];

const stats = [
  { value: "15+", label: "Years of Service" },
  { value: "5,000+", label: "Patients Served" },
  { value: "4.9", label: "Average Rating" },
  { value: "3", label: "Clinic Locations" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About MVN Smile Makers Dental Care"
        description="Dedicated to creating healthy, beautiful smiles through compassionate care and clinical excellence across Patna and Hilsa, Bihar."
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Our Story"
                title="A Legacy of Healthy Smiles"
                centered={false}
              />
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded by Dr. Navin Kumar, MVN Smile Makers Dental Care began
                  with a simple mission: to provide exceptional dental care in a
                  warm, welcoming environment where patients feel like family —
                  starting in Patna and expanding to serve communities across Bihar.
                </p>
                <p>
                  Today we operate three clinics — two in Patna and one in Hilsa,
                  Nalanda — offering implants, endodontics, aesthetic dentistry,
                  and comprehensive family dental care.
                </p>
                <p>
                  Led by Dr. Navin Kumar and Dr. Veena, our team continues to
                  invest in advanced training and modern technology while never
                  losing sight of what matters most — the comfort and trust of
                  our patients.
                </p>
              </div>
              <Button asChild className="mt-6">
                <Link href="/doctors">Meet Our Team</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5">
                <div className="flex h-full items-center justify-center">
                  <Building2 className="h-24 w-24 text-primary/30" />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-xl bg-primary p-6 text-primary-foreground shadow-lg">
                <Target className="mb-2 h-8 w-8" />
                <p className="font-semibold">Our Mission</p>
                <p className="mt-1 text-sm text-primary-foreground/90">
                  To deliver personalized, high-quality dental care that
                  improves lives one smile at a time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-12 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold md:text-4xl">{stat.value}</p>
                <p className="mt-1 text-sm text-primary-foreground/80">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Our Values"
            title="What We Stand For"
            description="These core values guide everything we do — from how we greet you at the door to how we plan your treatment."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-xl border bg-white p-6 text-center"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">{value.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
