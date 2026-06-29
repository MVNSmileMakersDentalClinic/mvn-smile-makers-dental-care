import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Shield, Heart, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/metadata";

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
                Same-day emergencies
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                3 clinic locations
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Family-friendly care
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-blue-700 shadow-2xl shadow-primary/25">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-primary-foreground">
                  <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-white/20 backdrop-blur">
                    <Heart className="h-12 w-12" />
                  </div>
                  <p className="text-2xl font-bold">15+ Years</p>
                  <p className="text-primary-foreground/80">
                    of Trusted Dental Care
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 rounded-xl bg-white p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">4.9/5 Rating</p>
                    <p className="text-xs text-muted-foreground">
                      500+ Happy Patients
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -right-4 -top-4 rounded-xl bg-white p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Certified</p>
                    <p className="text-xs text-muted-foreground">
                      Expert Dental Team
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
