import { ArrowRight, CheckCircle2, FileCheck2 } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const assurances = [
  "Monthly close discipline",
  "Board-ready reporting",
  "Grant and restricted fund clarity",
];

export function Hero() {
  return (
    <section className="overflow-hidden bg-background">
      <div className="container-page grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
        <div className="subtle-fade max-w-3xl">
          <p className="mb-5 inline-flex rounded-lg border border-border bg-secondary px-3 py-1 text-sm font-medium text-primary">
            Independent bookkeeping for mission-led teams
          </p>
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Clean books, useful reports, and fewer finance surprises.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            JohnnyRoou Bookkeeping helps nonprofit leaders, finance committees,
            and small business owners keep accounting organized, current, and
            ready for decisions.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#consultation"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-11 rounded-lg px-5 shadow-sm",
              )}
            >
              Request a consultation
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href="#services"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-11 rounded-lg px-5",
              )}
            >
              View services
            </a>
          </div>
          <ul className="mt-8 grid gap-3 text-sm text-muted-foreground sm:grid-cols-3">
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
        </div>

        <div
          className="subtle-fade relative mx-auto w-full max-w-xl lg:ml-auto"
          style={{ animationDelay: "120ms" }}
          aria-label="Example financial reporting workspace"
        >
          <div className="rounded-lg border border-border bg-white p-4 shadow-[0_18px_50px_rgba(15,23,42,0.10)]">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <div>
                <p className="text-sm font-semibold text-foreground">
                  June close packet
                </p>
                <p className="text-xs text-muted-foreground">
                  Prepared for executive review
                </p>
              </div>
              <div className="flex items-center gap-2 rounded-md bg-accent px-3 py-2 text-xs font-semibold text-primary">
                <FileCheck2 className="size-4" aria-hidden="true" />
                Reconciled
              </div>
            </div>

            <div className="grid gap-4 py-5 sm:grid-cols-3">
              {[
                ["Cash runway", "8.4 mo"],
                ["Restricted funds", "$218k"],
                ["Open items", "3"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-lg bg-secondary p-4">
                  <p className="text-xs font-medium text-muted-foreground">
                    {label}
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-foreground">
                    {value}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              {[
                ["Program services", "72%", "w-[72%]"],
                ["Admin operations", "18%", "w-[18%]"],
                ["Fundraising", "10%", "w-[10%]"],
              ].map(([label, value, width]) => (
                <div key={label}>
                  <div className="mb-1 flex items-center justify-between text-xs">
                    <span className="font-medium text-foreground">{label}</span>
                    <span className="text-muted-foreground">{value}</span>
                  </div>
                  <div className="h-2 rounded-full bg-secondary">
                    <div
                      className={cn("h-2 rounded-full bg-primary", width)}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-lg border border-border p-4">
              <p className="text-sm font-semibold text-foreground">
                Finance committee notes
              </p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Payroll accrual posted, grant revenue tied to award schedule,
                and prior-month variance explanations included.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
