import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/config/site";

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
          <span className="flex h-10 w-14 items-center justify-center overflow-hidden rounded-md bg-white">
            <Image
              src="/JR_logo.png"
              alt=""
              width={56}
              height={38}
              priority
              unoptimized
              className="h-full w-full object-contain"
            />
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

        <a
          href={`mailto:${siteConfig.email}`}
          className="hidden text-sm font-semibold text-primary transition-colors hover:text-foreground sm:inline-flex"
        >
          {siteConfig.email}
        </a>
      </div>
    </header>
  );
}
