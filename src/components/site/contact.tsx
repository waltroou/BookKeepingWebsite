import { Mail, Phone } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Contact() {
  return (
    <section id="contact" className="bg-background py-6">
      <div className="container-page grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            Contact
          </p>
          <h2 className="mt-2 text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Let&apos;s talk about your books.
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
            Share what you need help with and I&apos;ll follow up about fit,
            timing, and next steps.
          </p>

          <div className="mt-5 space-y-2.5 text-sm">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-3 text-foreground hover:text-primary"
            >
              <Mail className="size-4" aria-hidden="true" />
              {siteConfig.email}
            </a>
            <a
              href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
              className="flex items-center gap-3 text-foreground hover:text-primary"
            >
              <Phone className="size-4" aria-hidden="true" />
              {siteConfig.phone}
            </a>
          </div>
        </div>

        <form className="rounded-lg border border-border bg-white p-4 shadow-sm">
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="space-y-2 text-sm font-medium text-foreground">
              Name
              <input
                className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/20"
                name="name"
                autoComplete="name"
              />
            </label>
            <label className="space-y-2 text-sm font-medium text-foreground">
              Email
              <input
                className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/20"
                name="email"
                type="email"
                autoComplete="email"
              />
            </label>
          </div>

          <label className="mt-3 block space-y-2 text-sm font-medium text-foreground">
            Organization
            <input
              className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/20"
              name="organization"
              autoComplete="organization"
            />
          </label>

          <label className="mt-3 block space-y-2 text-sm font-medium text-foreground">
            What do you need help with?
            <textarea
              className="min-h-16 w-full rounded-md border border-input bg-background px-3 py-3 text-sm outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/20"
              name="message"
            />
          </label>

          <a
            href={`mailto:${siteConfig.email}?subject=Bookkeeping consultation request`}
            className={cn(buttonVariants({ size: "lg" }), "mt-4 h-10 rounded-lg")}
          >
            Let&apos;s Talk
          </a>
        </form>
      </div>
    </section>
  );
}
