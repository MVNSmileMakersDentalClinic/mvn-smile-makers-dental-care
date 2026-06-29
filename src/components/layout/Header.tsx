"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/layout/Logo";
import { navLinks } from "@/lib/data";
import { siteConfig, formatPhoneDisplay, getTelLink } from "@/lib/metadata";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="hidden border-b bg-primary py-1.5 text-primary-foreground md:block">
        <div className="container mx-auto flex items-center justify-between px-4 text-sm">
          <div className="flex items-center gap-4">
            {siteConfig.phones.map((phone) => (
              <a
                key={phone}
                href={getTelLink(phone)}
                className="flex items-center gap-2 hover:opacity-90"
              >
                <Phone className="h-3.5 w-3.5" />
                {formatPhoneDisplay(phone)}
              </a>
            ))}
          </div>
          <span className="text-primary-foreground/90">
            Mon–Fri 8AM–6PM · Sat 9AM–2PM
          </span>
        </div>
      </div>

      <div className="container mx-auto flex h-16 items-center justify-between gap-3 px-4">
        <Logo size="md" imageClassName="h-10 w-10 md:h-12 md:w-12" />

        <nav
          className="hidden max-w-3xl flex-1 items-center justify-center gap-0.5 xl:flex"
          aria-label="Main"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-md px-2.5 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                pathname === link.href
                  ? "bg-accent text-primary"
                  : "text-foreground/80"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link href="/appointment">Book Appointment</Link>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="xl:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          className="border-t bg-white px-4 py-4 xl:hidden"
          aria-label="Mobile"
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "bg-accent text-primary"
                    : "text-foreground/80 hover:bg-accent"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="mt-2 w-full">
              <Link href="/appointment" onClick={() => setMobileOpen(false)}>
                Book Appointment
              </Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
