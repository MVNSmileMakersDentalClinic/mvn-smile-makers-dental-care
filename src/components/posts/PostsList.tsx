import Image from "next/image";
import Link from "next/link";
import { Calendar, Megaphone } from "lucide-react";
import { posts } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function PostsList() {
  const featured = posts.find((post) => post.featured) ?? posts[0];
  const rest = posts.filter((post) => post.id !== featured.id);

  return (
    <div className="space-y-10">
      <article className="overflow-hidden rounded-2xl border bg-white shadow-sm">
        <div className="relative aspect-[21/9] min-h-[200px] overflow-hidden bg-gradient-to-r from-primary to-blue-700">
          {featured.image && (
            <>
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            </>
          )}
          <div
            className={
              featured.image
                ? "absolute bottom-0 left-0 right-0 p-6 text-white md:p-8"
                : "flex h-full flex-col items-center justify-center p-8 text-center text-primary-foreground"
            }
          >
            <Badge
              className={
                featured.image
                  ? "mb-3 bg-white/20 text-white hover:bg-white/20"
                  : "mb-3 bg-white/20 text-white hover:bg-white/20"
              }
            >
              {featured.badge}
            </Badge>
            {!featured.image && (
              <Megaphone className="mb-3 h-10 w-10 opacity-80" />
            )}
            <h2 className="text-2xl font-bold md:text-3xl">{featured.title}</h2>
            <p
              className={
                featured.image
                  ? "mt-2 flex items-center gap-2 text-sm text-white/90"
                  : "mt-2 flex items-center justify-center gap-2 text-sm text-white/90"
              }
            >
              <Calendar className="h-4 w-4" />
              {formatDate(featured.date)}
            </p>
          </div>
        </div>
        <CardContent className="p-6 md:p-8">
          <p className="text-lg text-muted-foreground">{featured.excerpt}</p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            {featured.content}
          </p>
          <Button asChild className="mt-6">
            <Link href="/appointment">Book Appointment</Link>
          </Button>
        </CardContent>
      </article>

      <div className="grid gap-6 md:grid-cols-2">
        {rest.map((post) => (
          <Card key={post.id} className="overflow-hidden">
            <div className="relative aspect-[16/9] bg-gradient-to-br from-primary/15 to-primary/5">
              {post.image ? (
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              ) : (
                <div className="flex h-full items-center justify-center">
                  <Megaphone className="h-8 w-8 text-primary/40" />
                </div>
              )}
            </div>
            <CardContent className="p-5">
              <div className="mb-3 flex items-center justify-between gap-2">
                <Badge variant="secondary">{post.badge}</Badge>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                  {formatDate(post.date)}
                </span>
              </div>
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {post.content}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
