import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { StarRating } from "@/components/shared/StarRating";
import { Button } from "@/components/ui/button";

export function TestimonialsPreview() {
  const preview = testimonials.slice(0, 3);

  return (
    <section className="bg-slate-50 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Patients Say"
          description="Don't just take our word for it — hear from the families who trust us with their smiles."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {preview.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative rounded-xl border bg-white p-6 shadow-sm"
            >
              <Quote className="absolute right-4 top-4 h-8 w-8 text-primary/10" />
              <StarRating rating={testimonial.rating} className="mb-4" />
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div>
                <p className="font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/testimonials">
              Read More Reviews
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
