import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { services } from "@/lib/data";
import { createPageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { CTASection } from "@/components/layout/CTASection";
import { ServiceIcon } from "@/components/shared/ServiceIcon";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = createPageMetadata(
  "Dental Services",
  "Explore our comprehensive dental services including general dentistry, cosmetic treatments, orthodontics, implants, pediatric care, and emergency services."
);

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Dental Services"
        description="Comprehensive care for every smile — from routine check-ups to advanced restorative and cosmetic treatments."
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            {services.map((service) => (
              <Card key={service.id} className="overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <ServiceIcon name={service.icon} className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 rounded-xl border bg-accent/50 p-8 text-center">
            <h3 className="text-xl font-semibold">
              Not sure which service you need?
            </h3>
            <p className="mt-2 text-muted-foreground">
              Schedule a consultation and our team will help you find the right
              treatment plan.
            </p>
            <Button asChild className="mt-4" size="lg">
              <Link href="/appointment">Book a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
