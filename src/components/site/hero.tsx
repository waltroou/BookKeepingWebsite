import { Calendar, CheckCircle2, Mail } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const assurances = [
  "QuickBooks Online support",
  "Nonprofit fund accounting",
  "Clear monthly reporting",
];

export function Hero() {
  return (
    <section className="bg-background">
      <div className="container-page grid gap-7 py-6 lg:grid-cols-[200px_1fr] lg:gap-10 lg:py-7">
        <aside className="subtle-fade lg:sticky lg:top-28 lg:self-start">
          <div className="max-w-56">
            <div className="aspect-[4/4.6] w-full overflow-hidden rounded-sm bg-secondary">
              <div className="flex h-full items-center justify-center bg-[linear-gradient(135deg,var(--accent),var(--secondary))] text-center">
                <div>
                  <p className="text-4xl font-semibold text-primary">JR</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    Photo placeholder
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 text-center lg:text-left">
              <p className="text-xl font-semibold tracking-tight text-foreground">
                John Roou
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Independent Bookkeeper
              </p>
              <div className="mt-3 flex justify-center lg:justify-start">
                <a
                  href={`mailto:${siteConfig.email}`}
                  aria-label="Email John Roou"
                  className="inline-flex size-10 items-center justify-center rounded-md bg-muted text-foreground transition-colors hover:bg-accent hover:text-primary"
                >
                  <Mail className="size-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </aside>

        <div className="subtle-fade max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            {siteConfig.name}
          </p>
          <h1 className="mt-3 text-balance text-4xl font-semibold leading-tight tracking-tight text-foreground">
            Bookkeeping and nonprofit accounting support you can rely on.
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground">
            I help nonprofit leaders and small business owners keep clean books,
            understand their numbers, and stay prepared for reporting, grants,
            audits, and board conversations.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-11 rounded-md px-5 shadow-sm",
              )}
            >
              <Calendar className="size-4" aria-hidden="true" />
              Schedule a Call
            </a>
          </div>

          <ul className="mt-7 grid max-w-3xl gap-3 border-y border-border py-3 text-sm text-muted-foreground sm:grid-cols-3">
            {assurances.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CheckCircle2
                  className="mt-0.5 size-4 text-primary"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 border-b border-border pb-4">
            <p className="max-w-4xl text-base leading-7 text-muted-foreground">
              JohnnyRoou Bookkeeping is an independent bookkeeping and nonprofit
              accounting practice focused on accurate records, useful reporting,
              and steady communication for organizations that need practical
              help keeping accounting organized.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
