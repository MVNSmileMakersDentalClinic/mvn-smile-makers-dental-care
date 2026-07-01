import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Award, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/metadata";

const highlights = [
  { icon: Award, value: "15+", label: "Years of Care" },
  { icon: MapPin, value: "3", label: "Clinic Locations" },
  { icon: Users, value: "5000+", label: "Happy Patients" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      <div className="absolute -left-32 top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />

      <div className="container relative mx-auto px-4 py-14 md:py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Image
                src="/images/mvn_logo.png"
                alt={siteConfig.name}
                width={88}
                height={88}
                priority
                className="h-16 w-16 shrink-0 md:h-20 md:w-20 lg:h-24 lg:w-24"
              />
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary md:text-base">
                Welcome to
              </p>
            </div>

            <h1 className="text-balance text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
              <span className="bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent">
                MVN Smile Makers
              </span>
              <br />
              <span className="text-foreground">Dental Care</span>
            </h1>

            <p className="max-w-xl border-l-4 border-primary pl-4 text-xl font-bold text-primary md:text-2xl">
              Your Trusted Partner in Dental Health
            </p>

            <p className="max-w-lg text-base text-muted-foreground md:text-lg">
              Experience compassionate, state-of-the-art dental care for the
              whole family across Patna and Hilsa. From routine cleanings to
              implants and smile makeovers — we&apos;re here for you.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="text-base shadow-lg shadow-primary/20">
                <Link href="/appointment">
                  Book Appointment
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base">
                <Link href="/services">Our Services</Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-sm font-medium text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                3 clinic locations
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Expert dental team
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Family-friendly care
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="rounded-3xl border bg-white p-8 shadow-xl shadow-primary/10 md:p-10">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 scale-110 rounded-full bg-primary/10 blur-xl" />
                  <Image
                    src="/images/mvn_logo.png"
                    alt={siteConfig.name}
                    width={160}
                    height={160}
                    className="relative h-32 w-32 md:h-40 md:w-40"
                  />
                </div>
                <p className="text-lg font-bold text-primary">{siteConfig.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Patna & Hilsa, Bihar
                </p>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3">
                {highlights.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl bg-slate-50 px-2 py-4 text-center"
                  >
                    <item.icon className="mx-auto mb-2 h-5 w-5 text-primary" />
                    <p className="text-lg font-bold text-foreground">{item.value}</p>
                    <p className="mt-0.5 text-[11px] leading-tight text-muted-foreground">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
