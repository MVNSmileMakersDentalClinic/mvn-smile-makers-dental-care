import Link from "next/link";
import { Download, FileText } from "lucide-react";
import { patientResources } from "@/lib/data";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Button } from "@/components/ui/button";

interface PatientResourcesProps {
  showHeading?: boolean;
}

export function PatientResources({ showHeading = true }: PatientResourcesProps) {
  return (
    <section className={showHeading ? "py-16 md:py-20" : ""}>
      <div className={showHeading ? "container mx-auto px-4" : ""}>
        {showHeading && (
          <SectionHeading
            eyebrow="Patient Resources"
            title="Downloadable Forms & Care Guides"
            description="Save time at the clinic — download and fill out forms at home, or read our post-treatment care guides."
          />
        )}
        <div className="grid gap-4 sm:grid-cols-2">
          {patientResources.map((resource) => (
            <div
              key={resource.id}
              className="flex items-start gap-4 rounded-xl border bg-white p-5"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium uppercase tracking-wide text-primary">
                  {resource.category}
                </p>
                <h3 className="mt-1 font-semibold">{resource.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {resource.description}
                </p>
                <Button asChild variant="outline" size="sm" className="mt-3">
                  <Link href={resource.file} target="_blank" download>
                    <Download className="h-4 w-4" />
                    Download
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
