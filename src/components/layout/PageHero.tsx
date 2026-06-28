import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  description: string;
  className?: string;
}

export function PageHero({ title, description, className }: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-gradient-to-br from-primary to-blue-700 py-16 text-primary-foreground md:py-20",
        className
      )}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white" />
        <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-white" />
      </div>
      <div className="container relative mx-auto px-4">
        <h1 className="text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-primary-foreground/90">
          {description}
        </p>
      </div>
    </section>
  );
}
