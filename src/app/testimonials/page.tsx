import type { Metadata } from "next";
import { Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import { createPageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { CTASection } from "@/components/layout/CTASection";
import { StarRating } from "@/components/shared/StarRating";

export const metadata: Metadata = createPageMetadata(
  "Patient Testimonials",
  "Read reviews from our satisfied patients. See why families trust MVN Smile Makers Dental Care for their dental care needs."
);

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        title="Patient Testimonials"
        description="Real stories from real patients who've experienced the MVN Smile Makers difference."
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex flex-col items-center justify-center gap-2 text-center">
            <StarRating rating={5} className="scale-125" />
            <p className="text-2xl font-bold">4.9 out of 5</p>
            <p className="text-muted-foreground">
              Based on 500+ patient reviews
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <blockquote
                key={testimonial.id}
                className="relative rounded-xl border bg-white p-6 shadow-sm"
              >
                <Quote className="absolute right-4 top-4 h-8 w-8 text-primary/10" />
                <StarRating rating={testimonial.rating} className="mb-4" />
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <footer>
                  <cite className="not-italic">
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </cite>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Join Our Happy Patients"
        description="Experience the care that earns us 5-star reviews. Book your appointment today."
      />
    </>
  );
}
