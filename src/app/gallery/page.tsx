import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { CTASection } from "@/components/layout/CTASection";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = createPageMetadata(
  "Gallery",
  "Browse photos of MVN Smile Makers Dental Care clinics, facilities, and patient smiles across Patna and Hilsa."
);

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Our Gallery"
        description="Take a look inside our clinics, modern facilities, and the smiles we help create every day."
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <GalleryGrid />
        </div>
      </section>

      <CTASection
        title="Visit Us in Person"
        description="Experience our clinics firsthand. Book your appointment at any of our three locations in Patna and Hilsa."
      />
    </>
  );
}
