import { Check, ShieldCheck } from "lucide-react";

import { SectionHeading } from "@/components/site/section-heading";

const bullets = [
  "Board packets that connect financial statements to actual decisions",
  "Restricted funds tracked clearly from award to release",
  "Functional expense categories reviewed before audit season",
  "Documentation habits that reduce last-minute scrambling",
];

export function NonprofitFocus() {
  return (
    <section id="nonprofits" className="section-padding bg-background">
      <div className="container-page grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Nonprofit focus"
            title="Finance support that respects both mission and stewardship."
            description="Nonprofits carry different obligations than ordinary businesses. Reports must serve executive directors, finance committees, grantors, auditors, and the communities behind the work."
          />
          <ul className="mt-8 space-y-4">
            {bullets.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-6">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <Check className="size-4" aria-hidden="true" />
                </span>
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-lg border border-border bg-white p-6 shadow-sm">
          <div className="flex items-start gap-4 border-b border-border pb-6">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <ShieldCheck className="size-6" aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-xl font-semibold tracking-tight text-foreground">
                Built for oversight
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Monthly workpapers, reconciliations, and reporting notes are
                maintained with the next review in mind.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              ["Revenue", "Contributions, grants, program income"],
              ["Expenses", "Program, management, fundraising"],
              ["Controls", "Approvals, support, reconciliations"],
              ["Reporting", "Board, funder, and management views"],
            ].map(([title, detail]) => (
              <div key={title} className="rounded-lg bg-secondary p-4">
                <p className="font-semibold text-foreground">{title}</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
