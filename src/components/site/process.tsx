import { CalendarCheck, FileSearch, MessageSquareText } from "lucide-react";

import { SectionHeading } from "@/components/site/section-heading";

const steps = [
  {
    title: "Assess",
    description:
      "Review current books, reporting needs, deadlines, software, and pain points.",
    icon: FileSearch,
  },
  {
    title: "Organize",
    description:
      "Set a close calendar, clean workflows, and clarify who approves what.",
    icon: CalendarCheck,
  },
  {
    title: "Report",
    description:
      "Deliver monthly statements, commentary, and follow-up items leaders can act on.",
    icon: MessageSquareText,
  },
];

export function Process() {
  return (
    <section id="process" className="section-padding bg-primary text-primary-foreground">
      <div className="container-page">
        <SectionHeading
          eyebrow="Process"
          title="A steady monthly cadence replaces uncertainty with control."
          description="The work is structured, documented, and repeatable, so your team knows what is done, what is pending, and what needs attention."
          className="[&_h2]:text-primary-foreground [&_p]:text-primary-foreground/75"
        />

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="rounded-lg border border-white/15 bg-white/[0.06] p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-white text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-semibold text-white/55">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-primary-foreground/75">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
