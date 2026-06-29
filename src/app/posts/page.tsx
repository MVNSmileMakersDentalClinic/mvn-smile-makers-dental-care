import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { CTASection } from "@/components/layout/CTASection";
import { PostsList } from "@/components/posts/PostsList";

export const metadata: Metadata = createPageMetadata(
  "Posts & Announcements",
  "Latest news, offers, and announcements from MVN Smile Makers Dental Care — camps, clinic updates, and special offers."
);

export default function PostsPage() {
  return (
    <>
      <PageHero
        title="Posts & Announcements"
        description="Stay updated with clinic news, special offers, dental camps, and important announcements."
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <PostsList />
        </div>
      </section>

      <CTASection
        title="Have Questions About an Offer?"
        description="Reach out on WhatsApp or book an appointment — we're happy to help with any announcement or offer."
      />
    </>
  );
}
