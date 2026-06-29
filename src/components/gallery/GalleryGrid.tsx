import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { galleryItems } from "@/lib/data";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Badge } from "@/components/ui/badge";

const categories = Array.from(
  new Set(galleryItems.map((item) => item.category))
);

export function GalleryGrid() {
  return (
    <div>
      {categories.map((category) => {
        const items = galleryItems.filter((item) => item.category === category);

        return (
          <div key={category} className="mb-14 last:mb-0">
            <SectionHeading
              eyebrow="Gallery"
              title={category}
              centered={false}
              className="mb-6"
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item) => (
                <article
                  key={item.id}
                  className="group overflow-hidden rounded-xl border bg-white shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="flex h-full flex-col items-center justify-center p-6 text-center">
                        <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                          <ImageIcon className="h-7 w-7 text-primary" />
                        </div>
                        <p className="text-sm font-medium text-muted-foreground">
                          Photo coming soon
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <Badge variant="secondary" className="mb-2">
                      {item.category}
                    </Badge>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
