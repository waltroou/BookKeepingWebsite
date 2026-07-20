import Image from "next/image";

import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/60">
      <div className="container-page flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-14 items-center justify-center overflow-hidden rounded-md bg-white">
            <Image
              src="/JR_logo.png"
              alt=""
              width={56}
              height={38}
              unoptimized
              className="h-full w-full object-contain"
            />
          </span>
          <div>
          <p className="font-semibold text-foreground">{siteConfig.name}</p>
            <p className="text-sm text-muted-foreground">
              {siteConfig.locality}
            </p>
          </div>
        </div>
        <div className="text-sm text-muted-foreground">
          <p>{siteConfig.email}</p>
          <p className="mt-1">
            © {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
