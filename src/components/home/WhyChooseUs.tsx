import {
  Shield,
  Cpu,
  Users,
  Clock,
  CreditCard,
  HeartHandshake,
} from "lucide-react";
import { SectionHeading } from "@/components/layout/SectionHeading";

const reasons = [
  {
    icon: Shield,
    title: "Experienced Team",
    description:
      "Board-certified dentists with 15+ years of combined experience delivering exceptional care.",
  },
  {
    icon: Cpu,
    title: "Modern Technology",
    description:
      "Digital X-rays, 3D imaging, and laser dentistry for precise, comfortable treatments.",
  },
  {
    icon: Users,
    title: "Family Friendly",
    description:
      "Welcoming environment for patients of all ages, from toddlers to seniors.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description:
      "Evening and Saturday appointments available to fit your busy lifestyle.",
  },
  {
    icon: CreditCard,
    title: "Insurance & Financing",
    description:
      "We accept most major insurance plans and offer flexible payment options.",
  },
  {
    icon: HeartHandshake,
    title: "Gentle Care",
    description:
      "Anxiety-free dentistry with sedation options and a compassionate approach.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-slate-50 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="The MVN Smile Makers Difference"
          description="We combine clinical excellence with a warm, patient-centered approach to deliver the best dental experience."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-xl border bg-white p-6 transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <reason.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-semibold text-foreground">
                {reason.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
