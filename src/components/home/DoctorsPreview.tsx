import Link from "next/link";
import { ArrowRight, GraduationCap } from "lucide-react";
import { doctors } from "@/lib/data";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function DoctorsPreview() {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Our Team"
          title="Meet Our Expert Dentists"
          description="Our skilled team of dental professionals is dedicated to providing personalized, high-quality care."
        />
        <div className="grid gap-8 md:grid-cols-2">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="group overflow-hidden rounded-xl border bg-white transition-shadow hover:shadow-lg"
            >
              <div className="relative flex h-48 items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground">
                  {doctor.name
                    .split(" ")
                    .slice(1)
                    .map((n) => n[0])
                    .join("")}
                </div>
              </div>
              <div className="p-6">
                <Badge variant="secondary" className="mb-2">
                  {doctor.specialty}
                </Badge>
                <h3 className="text-lg font-semibold">{doctor.name}</h3>
                <p className="text-sm text-primary">{doctor.title}</p>
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                  {doctor.bio}
                </p>
                <div className="mt-3 flex items-center gap-1 text-xs text-muted-foreground">
                  <GraduationCap className="h-3.5 w-3.5" />
                  {doctor.credentials[0]}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/doctors">
              Meet the Full Team
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
