import { BadgeCheck, Clock3, Files, TrendingUp } from "lucide-react";

import { SectionHeading } from "@/components/site/section-heading";

const outcomes = [
  {
    value: "10th",
    label: "Business day target for monthly close packages",
  },
  {
    value: "4",
    label: "Core views: cash, income, balance sheet, and variance notes",
  },
  {
    value: "1",
    label: "Organized source of truth for accounting documentation",
  },
];

const fit = [
  {
    title: "Executive directors",
    description:
      "Know cash position, grant restrictions, and budget movement before board meetings.",
    icon: TrendingUp,
  },
  {
    title: "Finance committees",
    description:
      "Receive consistent packets with context, not disconnected exports.",
    icon: Files,
  },
  {
    title: "Business owners",
    description:
      "Keep books current while gaining clearer visibility into margins and obligations.",
    icon: Clock3,
  },
  {
    title: "Audit preparers",
    description:
      "Maintain reconciliations and support throughout the year instead of rebuilding later.",
    icon: BadgeCheck,
  },
];

export function Outcomes() {
  return (
    <section className="section-padding bg-secondary/70">
      <div className="container-page">
        <SectionHeading
          eyebrow="What changes"
          title="The books become a management tool, not a recurring emergency."
          description="The goal is not more reports. It is clearer operating judgment, cleaner oversight, and financial information your team can trust."
          align="center"
        />

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {outcomes.map((item) => (
            <div
              key={item.value}
              className="rounded-lg border border-border bg-white p-6 text-center shadow-sm"
            >
              <p className="text-4xl font-semibold tracking-tight text-primary">
                {item.value}
              </p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {fit.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="rounded-lg bg-white p-5 shadow-sm">
                <Icon className="size-5 text-primary" aria-hidden="true" />
                <h3 className="mt-4 font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
