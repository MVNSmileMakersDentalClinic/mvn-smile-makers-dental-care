import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/data";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { ServiceIcon } from "@/components/shared/ServiceIcon";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ServicesPreview() {
  const preview = services.slice(0, 3);

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Our Services"
          title="Comprehensive Dental Care"
          description="From preventive care to advanced treatments, we offer a full range of services to meet every dental need."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {preview.map((service) => (
            <Card
              key={service.id}
              className="group transition-shadow hover:shadow-md"
            >
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <ServiceIcon name={service.icon} className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="link" className="h-auto p-0 text-primary">
                  <Link href="/services">
                    Learn more
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/services">
              View All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
