import Link from "next/link";
import { Landmark, Phone } from "lucide-react";

import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-3 font-semibold text-foreground"
          aria-label={`${siteConfig.name} home`}
        >
          <span className="flex size-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Landmark className="size-5" aria-hidden="true" />
            </span>
            <span className="leading-tight">
              <span className="block text-base tracking-tight">
                {siteConfig.shortName}
              </span>
              <span className="hidden text-xs font-medium text-muted-foreground sm:block">
                Accounting & advisory for nonprofits
              </span>
            </span>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-8 md:flex"
        >
          {siteConfig.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
          className={cn(
            buttonVariants({ size: "sm" }),
            "h-10 rounded-md px-4 text-sm font-semibold shadow-sm",
          )}
        >
          <Phone className="size-4" aria-hidden="true" />
          <span>{siteConfig.phone}</span>
        </a>
      </div>
    </header>
  );
}
