import {
  Banknote,
  ClipboardCheck,
  FileSpreadsheet,
  FolderKanban,
  LineChart,
  ReceiptText,
} from "lucide-react";

import { SectionHeading } from "@/components/site/section-heading";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const services = [
  {
    title: "Monthly bookkeeping",
    description:
      "Transaction coding, reconciliations, month-end close, and dependable financial statements.",
    icon: ReceiptText,
  },
  {
    title: "Nonprofit accounting",
    description:
      "Fund accounting, restricted revenue tracking, functional expenses, and board packet support.",
    icon: FolderKanban,
  },
  {
    title: "Grant reporting support",
    description:
      "Award schedules, expense documentation, budget-to-actual reporting, and clean audit trails.",
    icon: ClipboardCheck,
  },
  {
    title: "Payroll and vendor coordination",
    description:
      "Accounting workflows that align with payroll providers, bill pay, reimbursements, and approvals.",
    icon: Banknote,
  },
  {
    title: "Financial reporting",
    description:
      "Plain-English reporting packages that highlight cash, margins, variances, and action items.",
    icon: LineChart,
  },
  {
    title: "Cleanup and systems organization",
    description:
      "Chart of accounts cleanup, catch-up bookkeeping, process mapping, and accounting file hygiene.",
    icon: FileSpreadsheet,
  },
];

export function Services() {
  return (
    <section id="services" className="section-padding bg-secondary/70">
      <div className="container-page">
        <SectionHeading
          eyebrow="Services"
          title="Accounting operations built for leaders who need answers, not just entries."
          description="Every engagement is designed around a reliable monthly rhythm: close the books, surface the story, and keep documentation organized before anyone has to ask for it."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Card
                key={service.title}
                className="rounded-lg border-border bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <CardHeader className="gap-4">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-accent text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
