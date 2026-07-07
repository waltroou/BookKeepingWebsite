import { Landmark } from "lucide-react";

import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/60">
      <div className="container-page flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Landmark className="size-5" aria-hidden="true" />
          </span>
          <div>
          <p className="font-semibold text-foreground">{siteConfig.name}</p>
            <p className="text-sm text-muted-foreground">
              {siteConfig.locality}
            </p>
          </div>
        </div>
        <div className="text-sm text-muted-foreground">
          <p>
            {siteConfig.email} · {siteConfig.phone}
          </p>
          <p className="mt-1">
            © {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
