import { ArrowRight, Mail, Phone } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Consultation() {
  return (
    <section id="consultation" className="bg-background pb-16 sm:pb-20 lg:pb-24">
      <div className="container-page">
        <div className="rounded-lg bg-primary px-6 py-10 text-primary-foreground shadow-lg sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary-foreground/70">
              Start with a focused review
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Bring order to the books before the next deadline.
            </h2>
            <p className="mt-4 text-base leading-7 text-primary-foreground/75">
              Share what is working, what is messy, and what leadership needs to
              see each month. You will leave with a clear next step.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 lg:mt-0 lg:min-w-72">
            <a
              href={`mailto:${siteConfig.email}`}
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-11 rounded-lg bg-white px-5 text-primary hover:bg-white/90",
              )}
            >
              <Mail className="size-4" aria-hidden="true" />
              Email {siteConfig.shortName}
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-white/20 px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            >
              <Phone className="size-4" aria-hidden="true" />
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
